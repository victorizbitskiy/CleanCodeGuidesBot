const { Composer } = require("telegraf")
const Fuse = require('fuse.js')
const ConfigurationsController = require('../controllers/configurations.controller')
const SchedulesController = require('../controllers/schedules.controller')
const nodeSchedule = require('node-schedule')
const Sections = require('../utils/sections.utils')

const composer = new Composer()

composer.on('message', async ctx => {

  const chatId = (await ctx.getChat()).id
  const chatConfig = await ConfigurationsController.read(chatId)

  if (!chatConfig) {
    return ctx.replyWithMarkdownV2(ctx.i18n.t('no_config'))
  }

  // fuse engine has been triggered?
  if (ctx.message && ctx.message.text && ctx.message.text.includes(`/find `)) {

    await ctx.replyWithChatAction('typing')
    ctx.i18n.locale(chatConfig.menu_lang)

    const sectionsList = Sections.getTableOfContent(chatConfig).content
    const sectionsNames = Sections.getSectionsNames(sectionsList)

    const fuse = new Fuse(sectionsNames, {
      includeScore: true,
      keys: [
        'name'
      ]
    })

    const results = fuse.search(ctx.message.text)

    if (results.length != 0) {

      const section = results[0].item
      const sectionContent = await Sections.getSectionContent(chatId, section)

      ctx.telegram.sendMessage(chatId, sectionContent, {
        parse_mode: 'MarkdownV2',
        disable_web_page_preview: true
      })

    } else {
      ctx.reply(ctx.i18n.t('no_matches_found'))
      ctx.i18n.locale(chatConfig.menu_lang)
    }
  }

  // Process if the bot has been kicked
  if (ctx.update
    && ctx.update.message
    && ctx.update.message.left_chat_member
    && ctx.update.message.left_chat_member.username === ctx.botInfo.username) {

    // if the bot has been kicked from a group, we need to stop schedule and to delete the group id from DB
    const schedulesDB = await SchedulesController.readAllScheduleByChatID(chatId)

    for (let i = 0; i < schedulesDB.length; i++) {
      let currentJob = nodeSchedule.scheduledJobs[schedulesDB[i].name]
      currentJob.cancel()
    }

    await SchedulesController.deleteAllScheduleByChatID(chatId)
    await ConfigurationsController.delete(chatId)
  }
})

module.exports = composer