import { username, password } from './fixtures.js'

describe('Czechitas Login Page', () => {

  it('should open login page', () => {
    // 1 Jdete na stranku pro login
    browser.reloadSession();
    browser.url('/prihlaseni');
    browser.pause(1000);
  });

  it('should find these elements: email and password', () => {
    // 2 Najdete na strance element pro vyplneni emailu a hesla
    const emailField = $('#email');
    const passwordField = $('#password');
    expect(emailField).toExist();
    expect(passwordField).toExist();
  });

  it('should check  whether elements email and password are diplayed and enabled', () => {
    // 3. zjistete, ze jsou elementy email a heslo viditelne a editovatelne
    expect($('#email')).toBeDisplayed();
    expect($('#email')).toBeEnabled();
    expect($('#password')).toBeDisplayed();
    expect($('#password')).toBeEnabled();
  });

  it('should find login button and list its text', () => {
    // 4 najdete tlacitko pro prihlaseni a vypiste jeho text pomoci get text
    const loginButton = $('button[type="submit"]');
    expect(loginButton).toExist();
    const messageFromLoginButton = loginButton.getText();
    console.log(`text z tlacitko pro prihlaseni: ${messageFromLoginButton}`);
  });

  it('should find link to forgotten password and list its href value', () => {
    // 5.  najdi odkaz o zapomenuti hesla a vypsat jeho href
    const forgottenLink = $('.btn-link');
    expect(forgottenLink.getText()).toEqual('Zapomněli jste své heslo?');
    console.log(`forgottenLink href: ${forgottenLink.getAttribute("href")}`);
  });

  it('should log in to the application by using setValue and Click', () => {
    // 6. prihlas se do aplikace, pouzit setValue a click

    const emailField = $('#email');
    const passwordField = $('#password');
    const loginButton = $('button[type="submit"]');

    emailField.setValue(username);
    passwordField.setValue(password);
    loginButton.click();
  });

  it('Noveeej', () => {

    browser.url('/admin/prihlasky'); // dostal jsem se na stranku /admin/prihlasky
    browser.pause(5000); // await melo by se pockat az se stranky cele nactou i s daty v tabulce

    const someElement = $('#DataTables_Table_0_wrapper').$('tbody').$$('tr');
    console.log(`pocet radku tabulky: ${someElement.length}`)

    someElement.forEach(element => {
      console.log(`obsah radku: ${element.getText()}`);
    });
  });

  it('Noveeej', () => {

    browser.url('/admin/prihlasky'); // dostal jsem se na stranku /admin/prihlasky
    browser.pause(5000); // await melo by se pockat az se stranky cele nactou i s daty v tabulce


    // Feinler
    const someElement = $('#DataTables_Table_0_wrapper').$('tbody').$$('tr');
    console.log(`pocet radku tabulky: ${someElement.length}`)

    someElement.forEach(element => {
      console.log(`obsah radku: ${element.getText()}`);
    });
  });
});