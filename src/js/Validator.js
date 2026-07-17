export default class Validator {
  validateUsername(username) {
    if (typeof username !== 'string') {
      return false;
    }
    const regex = /^(?!.*[0-9]{4})[a-zA-Z]([a-zA-Z0-9_-]*[a-zA-Z])?$/;
    return regex.test(username);
  }
}
