const ConfigurationsController = require('../controllers/configurations.controller')

module.exports = class Chat {
  static async menuLang(chatId, ctx) {

    if (ctx && ctx.session && ctx.session.__language_code) {
      return ctx.session.__language_code
    }

    const chat = await ConfigurationsController.read(chatId)
    if (chat) {
      return chat.lang
    }

    if (ctx.i18n && ctx.i18n.languageCode) {
      return ctx.i18n.languageCode
    }

    if (ctx.config && ctx.config.defaultLanguage) {
      return ctx.config.defaultLanguage
    }
  }

  static async getChatConfig(ctx) {
    if (ctx.state.chatConfiguration) {
      return ctx.state.chatConfiguration
    } else {
      return await ConfigurationsController.read((await ctx.getChat()).id)
    }
  }
}