require('polyfill-object.fromentries')
require('dotenv').config()
const path = require('path')
const { Telegraf, Scenes, session } = require('telegraf')
const TelegrafI18n = require('telegraf-i18n')
const SchedulesController = require('../controllers/schedules.controller')

// i18n options
const i18n = new TelegrafI18n({
  defaultLanguage: 'en',
  directory: path.resolve(__dirname, 'locales'),
  sessionName: 'session',
  useSession: true
})

const bot = new Telegraf(process.env.BOT_TOKEN)

bot.use(session())
bot.use(i18n.middleware())

const stage = new Scenes.Stage([
  require('../scenes/configuration.scene'),
  require('../scenes/menulang.scene'),
  require('../scenes/programlang.scene'),
  require('../scenes/contentlang.scene'),
  require('../scenes/contentadaptation.scene'),
  require('../scenes/schedule.scene')
])

bot.use(stage.middleware())

SchedulesController.createCronJobsDB(bot)

bot.use(require('../composers/menu.composer'))
bot.use(require('../composers/message.composer'))

bot.launch()

// Enable graceful stop 
process.once('SIGINT', () => bot.stop('SIGINT'))
process.once('SIGTERM', () => bot.stop('SIGTERM'))