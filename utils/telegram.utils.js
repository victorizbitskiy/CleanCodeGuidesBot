module.exports = class TelegramUtils {
  static escapeMarkdown(string) {
    return string
      .replace(/\_/g, '\\_')
      .replace(/\*/g, '\\*')
      .replace(/\[/g, '\[')
      .replace(/\]/g, '\]')
      // .replace(/\(/g, '\\(')
      // .replace(/\)/g, '\\)')
      .replace(/\~/g, '\\~')
      .replace(/`/g, '\`')
      .replace(/\>/g, '\\>')
      .replace(/\#/g, '\\#')
      .replace(/\+/g, '\\+')
      .replace(/\-/g, '\\-')
      .replace(/\=/g, '\\=')
      .replace(/\|/g, '\\|')
      .replace(/\{/g, '\\{')
      .replace(/\}/g, '\\}')
      .replace(/\./g, '\\.')
      .replace(/\!/g, '\\!')
      .replace(/\\/g, '\\')
  }

  static escapeInterval(text) {
    text = text.replace(/\\/g, '')
    text = text.replace(/\>/g, '\\>')
    text = text.replace(/\*{2}/g, '*')
    text = text.replace(/\./g, '\\.')
    text = text.replace(/\_/g, '\\_')
    text = text.replace(/\[/g, '\\[')
    text = text.replace(/\]/g, '\\]')
    text = text.replace(/\(/g, '\\(')
    text = text.replace(/\)/g, '\\)')
    text = text.replace(/\~/g, '\\~')
    // text = text.replace(/\`/g, '\\`')
    text = text.replace(/\#/g, '\\#')
    text = text.replace(/\+/g, '\\+')
    text = text.replace(/\-/g, '\\-')
    text = text.replace(/\=/g, '\\=')
    text = text.replace(/\|/g, '\\|')
    text = text.replace(/\{/g, '\\{')
    text = text.replace(/\}/g, '\\}')
    text = text.replace(/\!/g, '\\!')

    return text
  }
}