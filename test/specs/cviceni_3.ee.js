import { username, password, userFullName } from './fixtures.js'

describe('Login Page - excercise 3', () => {

  beforeEach(() => {
    browser.reloadSession();
    browser.url('/prihlaseni');
  });


  it('should verify if elements for email and password are enabled and displayed, check the button text', () => {
    const emailField = $("#email");
    const passwordField = $("#password");

    expect(emailField).toExist();
    expect(passwordField).toExist();

    expect(emailField).toBeDisplayed();
    // expect(emailField.isDisplayed()).toEqual(true)    to same
    expect(emailField).toBeEnabled();
    expect(passwordField).toBeDisplayed();
    expect(passwordField).toBeEnabled();

    const loginButton = $("button[type='submit']");
    expect(loginButton).toExist();
    expect(loginButton.getText()).toEqual("Přihlášit");

  });

  it('should verify if link for forgotten password redirects to right page ', () => {

    const linkForgottenPassword = $("form").$(".btn-link").getAttribute("href");
    expect(linkForgottenPassword).toExist();

    expect(linkForgottenPassword).toEqual(browser.options.baseUrl + 'zapomenute-heslo')
  });


  it('should check that the table contains a right number of applications', () => {
    const emailField = $("#email");
    const passwordField = $("#password");
    const loginButton = $("button[type='submit']");
    expect(emailField).toExist();
    expect(passwordField).toExist();
    expect(loginButton).toExist();
    expect(loginButton.getText()).toEqual("Přihlášit");

    emailField.setValue(username);
    passwordField.setValue(password);
    loginButton.click();

    const prihlaskySection = $(".fa-graduation-cap");
    expect(prihlaskySection).toExist();
    prihlaskySection.click()
    const rows = $("#DataTables_Table_0_wrapper").$("tbody").$$("tr");
    expect(rows).toExist();

    expect(rows.length).toEqual(30);


  });

  it('should check if the table contains valid data', () => {
    const emailField = $("#email");
    const passwordField = $("#password");
    const loginButton = $("button[type='submit']");
    expect(emailField).toExist();
    expect(passwordField).toExist();
    expect(loginButton).toExist();
    emailField.setValue(username);
    passwordField.setValue(password);
    loginButton.click();

    const prihlaskySection = $(".fa-graduation-cap");
    expect(prihlaskySection).toExist();
    prihlaskySection.click();

    const rows = $("#DataTables_Table_0_wrapper").$("tbody").$$("tr");
    expect(rows).toBeElementsArrayOfSize(30);

    rows.forEach(row => {
      let columns = row.$$("td")
      expect(columns[0].getText()).toMatch(/[a-zA-Z]{3,}/);
      expect(columns[1].getText()).toMatch(/([0-9][0-9]\.[0-9][0-9]\. - )?[0-9]{2}\.[0-9][0-9]\.[0-9]{4}/);
      expect(columns[2].getText()).toMatch(/(Hotově|Bankovní převod|Složenka|FKSP)/);
      expect(columns[3].getText()).toMatch(/\d{1,3}(| \d{0,3}) Kč/);
    });
  });

  it('should fill in the searchbox some value and check a valid searching', () => {
    const emailField = $("#email");
    const passwordField = $("#password");
    const loginButton = $("button[type='submit']");

    expect(emailField).toExist();
    expect(passwordField).toExist();
    expect(loginButton).toExist();

    emailField.setValue(username);
    passwordField.setValue(password);
    loginButton.click();

    const prihlaskySection = $(".fa-graduation-cap");
    expect(prihlaskySection).toExist();
    prihlaskySection.click();

    const rows = $("#DataTables_Table_0_wrapper").$("tbody").$$("tr");
    expect(rows).toBeElementsArrayOfSize(30);
    const onlyFilteredName = rows.filter(row => row.$$("td")[0].getText().match(/Honza/)) // na cele tabulce vyfiltruju jenom ty radky kde maji v prvnim sloupci Honza
    const onlyFilteredNameCount = onlyFilteredName.length; // zjistim pocet prvku noveho pole

    const searchBox = $("#DataTables_Table_0_filter").$("label").$("input[type='search']");
    expect(searchBox).toExist();

    searchBox.setValue("Honza")

    const filteredRows = $("#DataTables_Table_0_wrapper").$("tbody").$$("tr");
    expect(filteredRows).toBeElementsArrayOfSize(onlyFilteredNameCount); 

    filteredRows.forEach(row => {
      const columns = row.$$("td");
      expect(columns[0].getText()).toMatch(/Honza/);
    });

  });

});