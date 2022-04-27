const { Composer, Scenes, Markup } = require('telegraf')
const programLangsList = require('../modules/CleanCodeGuides/languages/list.json')
const UserUtils = require('../utils/user.utils')
const ChatUtils = require('../utils/chat.utils')
const ConfigurationsController = require('../controllers/configurations.controller')

const stepHandler = new Composer()

module.exports = new Scenes.WizardScene(
  'programlang',
  async (ctx) => {

    const menuLang = await ChatUtils.menuLang((await ctx.getChat()).id, ctx)
    ctx.i18n.locale(menuLang)
    ctx.wizard.state.startScene = ctx.state.startScene
    ctx.wizard.state.chatConfiguration = ctx.state.chatConfiguration

    const options = programLangsList.map((text, i) => ([
      Markup.button.callback(text, String(i + 1)),
    ]))

    const scheduleKeyboard = ctx.reply(ctx.i18n.t('choose_program_language'), {
      caption: 'programlang',
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

  stepHandler,

  async (ctx) => {
    ctx.scene.leave()
  }
)

stepHandler.action(/(\d)/, async ctx => {
  await ctx.answerCbQuery()

  let chatCongig = {}

  if (ctx.wizard.state.startScene) {
    chatCongig = ctx.wizard.state.chatConfiguration
  }else{
    chatCongig = await ConfigurationsController.read((await ctx.getChat()).id)
  }

  // becouse indexing of buttons starts from one
  const idx = ctx.callbackQuery.data - 1
  const programLang = programLangsList[idx]
  ctx.reply(ctx.i18n.t('programlang_has_been_set', { programLang }))



  ctx.state.chatConfiguration = {
    chat_id: chatCongig.chat_id,
    menu_lang: chatCongig.menu_lang,
    program_lang: programLang,
    content_lang: 'en',
    content_adaptation: ''
  }
  ctx.state.startScene = true
  await ctx.scene.enter('contentlang')
  // } else {
  //   return ctx.scene.leave()
  // }
})

stepHandler.command('cancel', (ctx) => {
  ctx.reply(ctx.i18n.t('scene_exit', { ctx }))
  ctx.scene.leave()
})

stepHandler.on('message', async (ctx) => {
  const menuLang = await ChatUtils.menuLang((await ctx.getChat()).id, ctx)
  ctx.i18n.locale(menuLang)
  ctx.reply(ctx.i18n.t('please_set_programlang'))
})
