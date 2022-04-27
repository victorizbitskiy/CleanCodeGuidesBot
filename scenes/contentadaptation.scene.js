const { Composer, Scenes, Markup } = require('telegraf')
const fs = require('fs')
const UserUtils = require('../utils/user.utils')
const ChatUtils = require('../utils/chat.utils')
const ConfigurationsController = require('../controllers/configurations.controller')

const stepHandler = new Composer()

module.exports = new Scenes.WizardScene(
  'contentadaptation',
  async (ctx) => {

    const menuLang = await ChatUtils.menuLang((await ctx.getChat()).id, ctx)
    ctx.i18n.locale(menuLang)

    ctx.wizard.state.startScene = ctx.state.startScene
    ctx.wizard.state.chatConfiguration = await ChatUtils.getChatConfig(ctx)

    const rawdata = fs.readFileSync(`modules/CleanCodeGuides/languages/${ctx.wizard.state.chatConfiguration.program_lang}/${ctx.wizard.state.chatConfiguration.content_lang}/list.json`, 'utf8')
    const contentAdaptationLangsList = JSON.parse(rawdata)

    const options = contentAdaptationLangsList.map((text, i) => ([
      Markup.button.callback(text, String(i + 1)),
    ]))

    const scheduleKeyboard = ctx.reply(ctx.i18n.t('choose_content_adaptation'), {
      caption: 'contentadaptation',
      parse_mode: 'MarkdownV2',
      ...Markup.inlineKeyboard(options)
    })

    if ((await ctx.getChat()).type === 'private') {
      ctx.wizard.next()
      return scheduleKeyboard
    }

    const chat = await ctx.getChat()

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
    ctx.scene.leave()
  }
)

stepHandler.action(/(\d)/, async ctx => {
  await ctx.answerCbQuery()

  const rawdata = fs.readFileSync(`modules/CleanCodeGuides/languages/${ctx.wizard.state.chatConfiguration.program_lang}/${ctx.wizard.state.chatConfiguration.content_lang}/list.json`, 'utf8')
  const contentAdaptationLangsList = JSON.parse(rawdata)

  // becouse indexing of buttons starts from one
  const idx = ctx.callbackQuery.data - 1
  const contentAdaptation = contentAdaptationLangsList[idx]

  // if (ctx.wizard.state.startScene) {
  ctx.state.chatConfiguration = {
    chat_id: ctx.wizard.state.chatConfiguration.chat_id,
    menu_lang: ctx.wizard.state.chatConfiguration.menu_lang,
    program_lang: ctx.wizard.state.chatConfiguration.program_lang,
    content_lang: ctx.wizard.state.chatConfiguration.content_lang,
    content_adaptation: contentAdaptation
  }

  const res = await ConfigurationsController.create(ctx.state.chatConfiguration)

  if (res) {
    await ctx.reply(ctx.i18n.t(`content_adaptation_has_been_set`, { contentAdaptation }))
    await ctx.answerCbQuery()
    await ctx.reply(ctx.i18n.t(`setup_completed`))
  } else {
    await ctx.reply(ctx.i18n.t(`Unknown Error. Please retry `))
  }
  return ctx.scene.leave()
  // }
})

stepHandler.command('cancel', (ctx) => {
  ctx.reply(ctx.i18n.t('scene_exit', { ctx }))
  ctx.scene.leave()
})

stepHandler.on('message', async (ctx) => {
  const menuLang = await ChatUtils.menuLang((await ctx.getChat()).id, ctx)
  ctx.i18n.locale(menuLang)
  ctx.reply(ctx.i18n.t('please_set_content_adaptation'))
})