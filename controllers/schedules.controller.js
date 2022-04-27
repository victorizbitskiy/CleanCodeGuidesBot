const db = require('../config/db')
const nodeSchedule = require('node-schedule')
const Sections = require('../utils/sections.utils')
const ConfigurationsController = require('../controllers/configurations.controller')

module.exports = class SchedulesController {
  static async createSchedule(schedule) {

    const query = `
    INSERT INTO schedules (chat_id, menu_lang, program_lang, content_lang, content_adaptation, name, rule, last_section_id) 
    VALUES ($1, $2, $3, $4, $5, $6, $7, $8) 
    ON CONFLICT (chat_id, menu_lang, program_lang, content_lang, content_adaptation) 
    DO 
    UPDATE SET name = $6, rule = $7, last_section_id = $8
    RETURNING *
    `

    try {
      const res = await db.query(query,
        [
          schedule.chat_id,
          schedule.menu_lang,
          schedule.program_lang,
          schedule.content_lang,
          schedule.content_adaptation,
          schedule.name,
          schedule.rule,
          schedule.last_section_id
        ]
      )
      return res.rows[0]
    } catch (e) {
      console.log(e.stack)
    }
  }

  static async readAllScheduleByChatID(chat_id) {
    const query = `SELECT * FROM schedules WHERE chat_id = $1`
    try {
      const res = await db.query(query, [chat_id])
      return res.rows
    } catch (e) {
      console.log(e.stack)
    }
  }

  static async readAllSchedules() {
    const query = `SELECT * FROM schedules`
    try {
      let schedule = await db.query(query, [])
      return schedule.rows
    } catch (e) {
      console.log(e.stack)
    }
  }

  static async deleteAllScheduleByChatID(chat_id) {
    const query = `DELETE FROM schedules WHERE chat_id = $1 RETURNING *`
    try {
      const res = await db.query(query, [chat_id])
      return res.rows
    } catch (e) {
      console.log(e.stack)
    }
  }

  static async createCronJobsDB(bot) {
    const schedulesDB = await this.readAllSchedules()

    schedulesDB.forEach(scheduleDB => {
      nodeSchedule.scheduleJob(scheduleDB.name, scheduleDB.rule, async function () {

        scheduleDB.last_section_id += 1
        const sectionContent = await Sections.getNextSectionContent(scheduleDB)
        scheduleDB.last_section_id = sectionContent.lastSectionId

        // increment lastSectionId in DB table
        await SchedulesController.createSchedule(scheduleDB)

        bot.telegram.sendMessage(scheduleDB.chat_id, sectionContent.content, {
          parse_mode: 'MarkdownV2',
          disable_web_page_preview: true
        })
      })
      console.log(`Schedule ${scheduleDB.name} with rule ${scheduleDB.rule} for chat ${scheduleDB.chat_id} has been startded`)
    })
  }

  static async createCronJob(schedule, ctx) {
    nodeSchedule.scheduleJob(schedule.name, schedule.rule, async () => {

      schedule.last_section_id += 1
      const sectionContent = await Sections.getNextSectionContent(schedule)
      schedule.last_section_id = sectionContent.lastSectionId

      // increment lastSectionId in DB table
      SchedulesController.createSchedule(schedule)

      ctx.telegram.sendMessage(schedule.chat_id, sectionContent.content, {
        parse_mode: 'MarkdownV2',
        disable_web_page_preview: true
      })
    })
    console.log(`Schedule ${schedule.name} with rule ${schedule.rule} for chat ${schedule.chat_id} has been startded`)
  }
}
