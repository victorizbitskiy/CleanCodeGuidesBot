const { Composer, Scenes, Markup } = require('telegraf')
const fs = require('fs')
const UserUtils = require('../utils/user.utils')
const ChatUtils = require('../utils/chat.utils')

const stepHandler = new Composer()

module.exports = new Scenes.WizardScene(
  'menulang',
  async (ctx) => {

    ctx.wizard.state.startScene = ctx.state.startScene
    ctx.wizard.state.chatConfiguration = ctx.state.chatConfiguration

    if (ctx.wizard.state.startScene) {
      ctx.i18n.locale('en')
    } else {
      const menuLang = await ChatUtils.menuLang((await ctx.getChat()).id, ctx)
      ctx.i18n.locale(menuLang)
    }

    const rawdata = fs.readFileSync(`src/locales/list.json`, 'utf8')
    const menuLangsListValues = Object.values(JSON.parse(rawdata)[0])

    const options = menuLangsListValues.map((text, i) => ([
      Markup.button.callback(text, String(i + 1)),
    ]))

    const scheduleKeyboard = ctx.reply(ctx.i18n.t('choose_menu_language'), {
      caption: 'menulang',
      parse_mode: 'MarkdownV2',
      ...Markup.inlineKeyboard(options)
    })

    const chat = await ctx.getChat()

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

  stepHandler

)

stepHandler.action(/(\d)/, async ctx => {
  await ctx.answerCbQuery()
  const chatId = (await ctx.getChat()).id

  const rawdata = fs.readFileSync(`src/locales/list.json`, 'utf8')
  const menuLangsListKeys = Object.keys(JSON.parse(rawdata)[0])
  const menuLangsListValues = Object.values(JSON.parse(rawdata)[0])

  const idx = ctx.callbackQuery.data - 1
  const menuLang = menuLangsListKeys[idx]
  const menuLangText = menuLangsListValues[idx]

  if (ctx && ctx.session && ctx.session.__language_code) {
    ctx.session.__language_code = menuLang
  }

  ctx.i18n.locale(menuLang)
  ctx.reply(ctx.i18n.t('menulang_has_been_set', { menuLangText }))

  if (ctx.wizard.state.startScene) {
    ctx.state.chatConfiguration = {
      chat_id: chatId,
      menu_lang: menuLang,
      program_lang: 'en',
      content_lang: 'en',
      content_adaptation: ''
    }
    ctx.state.startScene = true
    ctx.scene.enter('programlang')
  } else {
    return ctx.scene.leave()
  }
})

stepHandler.command('cancel', (ctx) => {
  ctx.reply(ctx.i18n.t('scene_exit', { ctx }))
  ctx.scene.leave()
})

stepHandler.on('message', async (ctx) => {
  const menuLang = await ChatUtils.menuLang((await ctx.getChat()).id, ctx)
  ctx.i18n.locale(menuLang)
  ctx.reply(ctx.i18n.t('please_set_menulang'))
})