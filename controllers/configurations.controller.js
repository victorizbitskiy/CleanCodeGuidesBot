const db = require('../config/db')

module.exports = class ConfigurationsController {
  static async create(config) {
    const query = `
    INSERT INTO configurations (chat_id, menu_lang, program_lang, content_lang, content_adaptation) 
    VALUES ($1, $2, $3, $4, $5) 
    ON CONFLICT (chat_id) 
    DO 
    UPDATE SET menu_lang = $2, program_lang = $3, content_lang = $4, content_adaptation = $5 
    RETURNING *
    `
    try {
      const res = await db.query(query, [
        config.chat_id,
        config.menu_lang,
        config.program_lang,
        config.content_lang,
        config.content_adaptation])
      return res.rows[0]
    } catch (e) {
      console.log(e.stack)
    }
  }

  static async read(chat_id) {
    const query = `SELECT * FROM configurations WHERE chat_id = $1`
    try {
      let res = await db.query(query, [chat_id])
      return res.rows[0]
    } catch (e) {
      console.log(e.stack)
    }
  }

  static async delete(chat_id) {
    const query = `DELETE FROM configurations WHERE chat_id = $1 RETURNING *`
    try {
      let res = await db.query(query, [chat_id])
      return res.rows[0]
    } catch (e) {
      console.log(e.stack)
    }
  }
}
