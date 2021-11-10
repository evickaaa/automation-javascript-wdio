import LoginPage, { emailField, login, loginButton, open, passwordField } from './loginpage';
import { username, password, userFullName } from './fixtures';


describe('Login Page - excercise 4', () => {

  beforeEach(() => {
    browser.reloadSession();
    LoginPage.open();

  });

  it.only('should verify a default state of the login page and the searchbox', () => {



    expect(LoginPage.isEnabled()).toEqual(true);

    expect(emailField).toHaveValue("");
    expect(passwordField).toHaveValue("");


    expect(LoginPage.loginButton.isEnabled(true));
    expect(LoginPage.loginButton.getText()).toEqual("Přihlásit");

  });

  it('should verify if the user is logged in', () => {

    LoginPage.loginToApp();

    const checkUserLoggedIn = $(".navbar-right").$("[data-toggle='dropdown']");
    expect(checkUserLoggedIn).toExist();

    const attributeTitle = checkUserLoggedIn.getAttribute("title");

    expect(attributeTitle).toEqual("Zadni_Rada");

  });

  it('should verify the user can log out', () => {

    LoginPage.loginToApp();

    const checkUserLoggedIn = $(".navbar-right").$("[data-toggle='dropdown']");
    expect(checkUserLoggedIn).toExist();
    const logOut = $(".navbar-right").$("#logout-link");
    expect(logOut).toExist();
    checkUserLoggedIn.click();
    logOut.click();


    const logInPage = $(".navbar-right").$("#login");
    expect(logInPage).toExist();
    logInPage.click();

    expect(emailField).toHaveValue("");

  });


});

describe('Application form - excercise 4', () => {

  beforeEach(() => {
    browser.reloadSession();
    browser.url('/prihlaseni');
  });

  it('should check that a user can see all Application forms', () => {

    const emailField = $("#email");
    const passwordField = $("#password");
    expect(emailField).toExist();
    expect(passwordField).toExist();

    const loginButton = $("button[type='submit']");
    expect(loginButton).toExist();

    emailField.setValue(username);
    passwordField.setValue(password);
    loginButton.click();

    const prihlaskySection = $(".nav_top_items").$(".fa-graduation-cap");
    expect(prihlaskySection).toExist();
    prihlaskySection.click();

    const headline = $(".header").$("h1");
    // console.log(headline.getText());   abych se podivala, jestli je opravdu ta porovnavana hodnota Prihlasky, jak potrebuji
    expect(headline).toExist();
    expect(headline.getText()).toEqual("Přihlášky");

    const rows = $("#DataTables_Table_0_wrapper").$("tbody").$$("tr");
    expect(rows).toBeElementsArrayOfSize(30);

    rows.forEach(row => {

      const columns = row.$$("td");
      // expect(columns[0].getText()).toMatch(/[a-zA-Z]{3,}/); // (columns.getText()) .....toto je spatne, na objektu nelze volat funkci get text (mysleno na vsech sloupcich, musim nejprve vybrat konkretni sloupecek a na nem metodu volat), console.log(columns[0].getText()) toto mi vypise cely sloupec pro vsechny radky, takze vsechny jmena na strance, pak si dam vypsat sloupec dalsi...
      expect(columns[1].getText()).toMatch(/([0-9][0-9]\.[0-9][0-9]\. - )?[0-9]{2}\.[0-9][0-9]\.[0-9]{4}/);
      expect(columns[2].getText()).toMatch(/(Hotově|Bankovní převod|Složenka|FKSP)/);
      expect(columns[3].getText()).toMatch(/\d{1,3}(| \d{0,3}) Kč/);
      expect(columns[3].getText()).toMatch(/\d{1,3}(| \d{0,3}) Kč/);
      //jak otestovat ve foreach policko zobrazit a upravit ve sloupci Akce
    });



    // expect(rows.length > 0).toBeTruthy  osklivejsi varianta
    expect(rows.length).toBeGreaterThan(0)

  });


  it.only('should verify a valid searching in the section Prihlasky', () => {

    const emailField = $("#email");
    expect(emailField).toExist();
    const passwordField = $("#password");
    expect(passwordField).toExist();
    const loginButton = $("button[type='submit']");
    expect(loginButton).toExist();

    emailField.setValue(username),
      passwordField.setValue(password);
    loginButton.click();

    const prihlaskySection = $(".fa-graduation-cap");
    expect(prihlaskySection).toExist();
    prihlaskySection.click();

    const searchBox = $("#DataTables_Table_0_filter").$("input[type='search']");
    expect(searchBox).toExist();
    searchBox.setValue("Pavel");

    const rows = $("#DataTables_Table_0").$("tbody").$$("tr");
    expect(rows).toBeElementsArrayOfSize(5);

    rows.forEach(i => {
      let columns = i.$$("td");
      expect(columns[0]).toHaveTextContaining("Pavel")
    })

  });


});