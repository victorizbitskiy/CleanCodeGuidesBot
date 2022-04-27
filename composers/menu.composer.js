const { Composer, Markup } = require("telegraf")
const ChatUtils = require('../utils/chat.utils')
const Sections = require('../utils/sections.utils')
const ConfigurationsController = require('../controllers/configurations.controller')

const composer = new Composer()

composer.command('start', (ctx) => ctx.scene.enter('configuration'))
composer.command('config', (ctx) => ctx.scene.enter('configuration'))
composer.command('menulang', (ctx) => ctx.scene.enter('menulang'))
composer.command('programlang', (ctx) => ctx.scene.enter('programlang'))
composer.command('schedule', (ctx) => ctx.scene.enter('schedule'))

composer.command('keyboard', async (ctx) => {
  return await ctx.reply('keyboard', Markup
    .keyboard([
      '/random',
      '/menulang',
      '/programlang',
      '/schedule',
      '/config',
      '/help',
    ])
    .oneTime()
    .resize()
  )
})

composer.command('random', async (ctx) => {
  await ctx.replyWithChatAction('typing')
  try {
    const chatConfig = await ConfigurationsController.read((await ctx.getChat()).id)
    ctx.i18n.locale(chatConfig.menu_lang)
    const sectionsList = Sections.getTableOfContent(chatConfig).content
    const sections = Sections.getSectionsNames(sectionsList)
    const section = sections[Math.floor(Math.random() * sections.length)]
    const sectionContent = await Sections.getSectionContent((await ctx.getChat()).id, section)

    ctx.replyWithMarkdownV2(sectionContent, {
      disable_web_page_preview: true
    })

  } catch (e) {
    console.error(e)
  }
})

composer.command('help', async (ctx) => {
  await ctx.replyWithChatAction('typing')
  const menuLang = await ChatUtils.menuLang(ctx.update.message.chat.id, ctx)
  ctx.i18n.locale(menuLang)
  ctx.replyWithMarkdownV2(ctx.i18n.t('helptext'), {
    disable_web_page_preview: true
  })
})

composer.on('new_chat_members', (ctx) => {
  ctx.message.new_chat_members.forEach(e => {
    if (e.username === 'CleanCodeGuidesBot' || e.username === 'pyhhbot') {
     ctx.scene.enter('configuration')
    }
  })
})

module.exports = composer