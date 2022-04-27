module.exports = class User {
  static isAdmin(arr, val) {
    return arr.some(arrVal => arrVal.user.id === val)
  }
}