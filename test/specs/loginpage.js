import { password, username } from "./fixtures";

class LoginPage {

  get emailField() { return $("#email") }
  get passwordField() { return $("#password") }
  get loginButton() { return $("button[type='submit']") }

  open() {
    return browser.url('/prihlaseni');
  }

  isEnabled() {
    return this.emailField.isEnabled() && this.passwordField.isEnabled();
  }

  loginToApp() {
    return this.emailField.setValue(username) && this.passwordField.setValue(password) && this.loginButton.click();
  }

}

module.exports = new LoginPage();