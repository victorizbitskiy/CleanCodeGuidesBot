require('dotenv').config()
const fs = require('fs')
const TelegramUtils = require('./telegram.utils')
const ConfigurationsController = require('../controllers/configurations.controller')

module.exports = class Sections {
  static async getSectionContent(chatId, section) {

    const chatConfig = await ConfigurationsController.read(chatId)
    const sectionRootPath = `modules/CleanCodeGuides/languages/${chatConfig.program_lang}/${chatConfig.content_lang}/${chatConfig.content_adaptation}/`
    const tableOfContent = Sections.getTableOfContent(chatConfig)

    try {
      let rawdata = fs.readFileSync(`${sectionRootPath}/markdown/${section.path}${section.name}.md`, 'utf8')
      const sectionContent = TelegramUtils.escapeMarkdown(rawdata) + `\n\n` + TelegramUtils.escapeMarkdown(`[Read on the GitHub](${tableOfContent.source}/#${section.name})`)
      return sectionContent
    } catch (e) {
      if (e.code === 'ENOENT') {
        console.log(`File ${sectionRootPath}/markdown/${section.path}#${section.name}.md not found!`)
      }
    }
  }

  static async getNextSectionContent(schedule) {

    const tableOfContent = Sections.getTableOfContent(schedule)
    const sectionsNames = Sections.getSectionsNames(tableOfContent.content)

    if (schedule.last_section_id >= sectionsNames.length) {
      schedule.last_section_id = 0
    }

    const section = sectionsNames[schedule.last_section_id]
    const sectionRootPath = `modules/CleanCodeGuides/languages/${schedule.program_lang}/${schedule.content_lang}/${schedule.content_adaptation}/`

    try {
      let fileData = fs.readFileSync(`${sectionRootPath}/markdown/${section.path}${section.name}.md`, 'utf8')
      const sectionContent = TelegramUtils.escapeMarkdown(fileData) + `\n\n` + TelegramUtils.escapeMarkdown(`[Read on the GitHub](${tableOfContent.source}/#${section.name})`)
      console.log(sectionContent)
      return {
        content: sectionContent,
        lastSectionId: schedule.last_section_id
      }
    } catch (e) {
      if (e.code === 'ENOENT') {
        console.log(`File ${sectionRootPath}/markdown/${section.path}${section.name}.md not found!`)
      }
    }
  }

  static getSectionsNames(list, rootPath = '/') {
    let items = []

    list.forEach(item => {
      if (typeof item.children === "undefined") {
        items.push({
          name: item.item,
          path: rootPath
        })
      } else {
        items = [...items, ...this.getSectionsNames(item.children, `${rootPath}${item.item}/`)]
      }
    })

    return items
  }

  static getTableOfContent(chatConfig) {
    const sectionRootPath = `modules/CleanCodeGuides/languages/${chatConfig.program_lang}/${chatConfig.content_lang}/${chatConfig.content_adaptation}`
    let rawdata = fs.readFileSync(`${sectionRootPath}/content.json`)
    return JSON.parse(rawdata)
  }
}
