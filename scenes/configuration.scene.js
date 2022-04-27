const { Composer, Scenes, Markup } = require('telegraf')
const UserUtils = require('../utils/user.utils')
const ChatUtils = require('../utils/chat.utils')

const stepHandler = new Composer()

module.exports = new Scenes.WizardScene(
  'configuration',
  async (ctx) => {

    await ctx.reply(`Hey!
    To get started you need make some settings.
    There are only four steps:
    1) Menu language
    2) Programming language
    3) Content language
    4) Clean code adaptation

    Don't worry, you can change it later.
    `)

    const startKeyboard = ctx.reply(ctx.i18n.t(`Let's get started?`), {
      caption: 'menulang',
      parse_mode: 'MarkdownV2',
      ...Markup.inlineKeyboard([
        Markup.button.callback('Yes', '/yes'),
        Markup.button.callback('No', '/no')
      ])
    })

    const chat = await ctx.getChat()

    if (chat.type === 'private') {
      ctx.wizard.next()
      return startKeyboard
    }

    ctx.getChatAdministrators(chat.id)
      .then(admins => {
        if (UserUtils.isAdmin(admins, ctx.from.id)) {
          ctx.wizard.next()
          return startKeyboard
        } else {
          ctx.reply(ctx.i18n.t('admins_only'))
        }
      })
      .catch(e => console.log(e))
  },

  stepHandler
)

stepHandler.action('/yes', async (ctx) => {
  await ctx.answerCbQuery()
  await ctx.reply(`Great! Let's do it!`)
  ctx.state.startScene = true
  ctx.scene.enter('menulang')
})

stepHandler.action('/no', async (ctx) => {
  await ctx.answerCbQuery()
  await ctx.reply(`Okay, come back if you change your mind`)
  await ctx.scene.leave()
})

stepHandler.command('cancel', (ctx) => {
  ctx.reply(ctx.i18n.t('scene_exit', { ctx }))
  ctx.scene.leave()
})

// stepHandler.on('message', async (ctx) => {
//   const menuLang = await ChatUtils.menuLang((await ctx.getChat()).id, ctx)
//   ctx.i18n.locale(menuLang)
//   ctx.reply(ctx.i18n.t('please_set_programlang'))
// })
