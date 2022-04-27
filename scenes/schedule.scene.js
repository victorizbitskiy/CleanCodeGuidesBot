const { Composer, Scenes, Markup } = require('telegraf')
const SchedulesController = require('../controllers/schedules.controller')
const nodeSchedule = require('node-schedule')
const cronParser = require('cron-parser')
const TelegramUtils = require('../utils/telegram.utils')
const UserUtils = require('../utils/user.utils')
const ChatUtils = require('../utils/chat.utils')
const ConfigurationsController = require('../controllers/configurations.controller')

const stepHandler = new Composer()

module.exports = new Scenes.WizardScene(
  'schedule',
  async (ctx) => {

    const chat = await ctx.getChat()
    const menuLang = await ChatUtils.menuLang(chat.id, ctx)
    ctx.i18n.locale(menuLang)

    const scheduleKeyboard = ctx.reply(ctx.i18n.t('select_an_option_from_the_schedule'), {
      caption: 'schedule',
      parse_mode: 'MarkdownV2',
      ...Markup.inlineKeyboard([
        Markup.button.callback(ctx.i18n.t('set'), '/set'),
        Markup.button.callback(ctx.i18n.t('del'), '/del'),
        Markup.button.callback(ctx.i18n.t('cancel'), '/cancel')
      ])
    })

    if (chat.type === 'private') {
      ctx.wizard.next()
      return scheduleKeyboard
    }

    ctx.getChatAdministrators(chat.id)
      .then(admins => {
        if (UserUtils.isAdmin(admins, ctx.from.id)) {
          ctx.wizard.next()
          return scheduleKeyboard
        } else {
          ctx.reply(ctx.i18n.t('admins_only'))
        }
      })
      .catch(e => console.log(e))
  },

  stepHandler,

  async (ctx) => {
    const chat = await ctx.getChat()
    const menuLang = await ChatUtils.menuLang(chat.id, ctx)
    ctx.i18n.locale(menuLang)

    try {
      if (ctx.message.text === '/cancel' || ctx.message.text === `/cancel@${ctx.botInfo.username}`) {
        await ctx.reply(ctx.i18n.t('exited_the_schedule_menu'))
        return ctx.scene.leave()
      }

      if (ctx.message.text.charAt(0) === '/') {
        rule = ctx.message.text.slice(1)
      } else {
        ctx.i18n.locale(menuLang)
        await ctx.replyWithMarkdownV2(
          ctx.i18n.t('invalid_start_to_set_cron_rule'), {
          disable_web_page_preview: true
        })
        // let's try again
        return ctx.wizard.selectStep(2)
      }

      // Is this a valid rule?
      cronParser.parseExpression(rule)

      // Yes, it is
      const chatConfig = await ConfigurationsController.read(chat.id)

      try {
        const schedule = await SchedulesController.createSchedule({
          chat_id: chat.id,
          menu_lang: menuLang,
          program_lang: chatConfig.program_lang,
          content_lang: chatConfig.content_lang,
          content_adaptation: chatConfig.content_adaptation,
          rule: rule,
          name: `job_${chat.id}_${chatConfig.program_lang}`,
          last_section_id: -1
        })

        if (schedule) {
          SchedulesController.createCronJob(schedule, ctx)
          const interval = cronParser.parseExpression(schedule.rule)
          let cronText = `${ctx.i18n.t('schedule_has_been_set')} \`${interval.next()}\``

          for (let i = 0; i < 4; i++) {
            cronText = `${cronText} \n ${ctx.i18n.t('then_at')} \`${interval.next()}\``
          }

          cronText = TelegramUtils.escapeInterval(cronText)

          await ctx.replyWithMarkdownV2(
            cronText, {
            disable_web_page_preview: true
          })

          ctx.scene.leave()
        }
      } catch (e) {
        console.log(e)
        ctx.i18n.locale(menuLang)
        ctx.reply('Ошибка!')
      }
    } catch (e) {
      ctx.i18n.locale(menuLang)
      await ctx.replyWithMarkdownV2(
        ctx.i18n.t('invalid_cron_rule'), {
        disable_web_page_preview: true
      })
      console.log(e)
      // let's try again
      return ctx.wizard.selectStep(2)
    }
  }
)

stepHandler.action('/set', async (ctx) => {
  await ctx.answerCbQuery()
  const chat = await ctx.getChat()
  const menuLang = await ChatUtils.menuLang(chat.id, ctx)
  ctx.i18n.locale(menuLang)

  ctx.replyWithMarkdownV2(ctx.i18n.t('set_the_cron_schedule'), {
    disable_web_page_preview: true
  })
  return ctx.wizard.next()
})

stepHandler.action('/del', async (ctx) => {
  await ctx.answerCbQuery()
  const chat = await ctx.getChat()
  const schedulesDB = await SchedulesController.readAllScheduleByChatID(chat.id)

  for (let i = 0; i < schedulesDB.length; i++) {
    let currentJob = nodeSchedule.scheduledJobs[schedulesDB[i].name]
    currentJob.cancel()
  }

  const menuLang = await ChatUtils.menuLang(chat.id, ctx)
  ctx.i18n.locale(menuLang)

  deletedScheduleDB = await SchedulesController.deleteAllScheduleByChatID(chat.id)
  if (deletedScheduleDB) {
    ctx.replyWithMarkdownV2(ctx.i18n.t('schedules_has_been_deleted'), {
      disable_web_page_preview: true
    })
    ctx.scene.leave()
  } else {
    ctx.replyWithMarkdownV2(ctx.i18n.t('there_is_no_schedule', {
      disable_web_page_preview: true
    }))
    ctx.scene.leave()
  }
})

stepHandler.action('/cancel', async (ctx) => {
  await ctx.answerCbQuery()

  const menuLang = await ChatUtils.menuLang(ctx.update.callback_query.message.chat.id, ctx)
  ctx.i18n.locale(menuLang)

  ctx.replyWithMarkdownV2(ctx.i18n.t('exited_the_schedule_menu'), {
    disable_web_page_preview: true
  })
  ctx.scene.leave()
})

stepHandler.command('cancel', (ctx) => {
  ctx.reply(ctx.i18n.t('scene_cancel', { ctx }))
  ctx.scene.leave()
})