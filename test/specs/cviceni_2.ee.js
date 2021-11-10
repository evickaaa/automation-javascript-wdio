import { username, password, userFullName } from './fixtures.js'

describe('Login Page - excercise 1', () => {

  beforeEach(() => {
    browser.reloadSession();
    browser.url('/prihlaseni');
  });

  it('should find an element for email and password field and verify if they are enabled and displayed', () => {
    const emailField = $("#email");
    const passwordField = $("#password");

    expect(emailField).toExist();
    expect(passwordField).toExist();

    expect(emailField).toBeDisplayed();
    expect(emailField).toBeEnabled();
    expect(passwordField).toBeDisplayed();
    expect(passwordField).toBeEnabled();

  });

  it('should find a login button and return its text', () => {
    const emailField = $("#email");
    const passwordField = $("#password");
    const loginButton = $("button[type='submit']");

    expect(emailField).toExist();
    expect(passwordField).toExist();
    expect(loginButton).toExist();

    console.log(`The text on the login button is : ${loginButton.getText()}`);

  });

  it('should find a forgotten password link and get a value of its atribut href ', () => {
    const forgottenPasswordLink = $(".btn-link");
    expect(forgottenPasswordLink).toExist();
    const getHref = forgottenPasswordLink.getAttribute("href");
    console.log(`Hodnota atributu href je: ${getHref}`);

  });

  it('should log in to the Application by setValue and click', () => {

    const emailField = $("#email");
    const passwordField = $("#password");
    const loginButton = $("button[type='submit']");


    emailField.setValue(username);
    passwordField.setValue(password);
    loginButton.click();
    browser.pause(5000);


  });

  it('should find all rows of the table without header and footer', () => {

    const emailField = $("#email");
    const passwordField = $("#password");
    const loginButton = $("button[type='submit']");
    emailField.setValue(username);
    passwordField.setValue(password);
    loginButton.click();

    const prihlasky = $(".fa-graduation-cap");
    expect(prihlasky).toExist();
    prihlasky.click()

    const rows = $("#DataTables_Table_0_wrapper").$("tbody").$$("tr")
    expect(rows).toExist();
    expect(rows).toBeElementsArrayOfSize(30);
    console.log(`Pocet radku tabulky: ${rows.length}`);

    rows.forEach(i => {
      console.log(`obsah radku: ` + i.getText())
    });

  });

});