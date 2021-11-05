import { username, password } from './fixtures.js'

describe('Czechitas Login Page / my test', () => {

  it('should open login page', () => {

    browser.reloadSession();
    browser.url('/prihlaseni');
    browser.pause(5000);
  });

  it('should display window size and create a screenshot', () => {

    const windowSize = browser.getWindowSize();
    const screenshot = browser.saveScreenshot("loginPage.png");
    console.log(windowSize);
  });

  it('should find an element for email and password', () => {

    const fieldEmail = $("#email");
    const fieldPassword = $("#password");
    expect(fieldEmail).toExist();
    expect(fieldPassword).toExist();
  });

  it('should check if above elements are displayed and enabled', () => {

    expect($("#email")).toBeEnabled();
    expect($("#email")).toBeDisplayed();
    expect($("#password")).toExist();
    expect($("#password")).toExist();

  });

  it('should find a button for log in to the Application and show the text of this button', () => {

    const loginButton = $("button[type='submit']");
    expect(loginButton).toExist();
    const textOfLoginButton = loginButton.getText();
    console.log(`Text z tlacitka pro prihlaseni: ${textOfLoginButton}`);

  });

  it('should find link "Zapomneli jste sve heslo?" and list a value of its atribute href', () => {

    const linkLostPassword = $(".btn-link");
    expect(linkLostPassword.getText()).toEqual("Zapomněli jste své heslo?");
    console.log(`linkLostPassword href: ${linkLostPassword.getAttribute("href")}`);

  });

  it('should log in the Application using by setValue and Click', () => {

    const usernameField = $("#email");
    usernameField.setValue(username);
    const passwordField = $("#password");
    passwordField.setValue(password);
    const loginButton = $("button[type='submit']");
    loginButton.click()

  });

  it("should use chained selectors, $$, getText and list all rows of a table without header and footer", () => {

    browser.url('/admin/prihlasky');
    browser.pause(5000);
    const tableBody = $("#DataTables_Table_0_wrapper").$("tbody").$$("tr");

    expect(tableBody).toExist();
    console.log(`Pocet radku tabulky: ${tableBody.length}`);

    tableBody.forEach(i => { console.log(`obsah radku: ${i.getText()}`) });


  });

});