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

    // browser.url('/admin/prihlasky'); // toto neeeeeee, pres click, nesimuluje to uzivatele, ten klika, my to budeme hledat podle viditelneho textu $('=Prihlášky).click()

    // browser.url('/admin/prihlasky');
    $('=Přihlášky').click();

    browser.pause(5000);
    const rows = $(".dataTable").$("tbody").$$("tr");

    // expect($(".dataTable").$("tbody").$$("tr")).toExist();
    expect(rows).toBeElementsArrayOfSize(30);
    console.log(`Pocet radku tabulky: ${rows.length}`);

    rows.forEach(i => {

      console.log(`obsah radku: ` + i.getText())
  });

  });


  // cviceni 3 assertace
  // ukol 2.

  // it('should verify that login button contains a correct text', () => {


  //   const loginButton = $('.btn-primary');
  //   expect(loginButton.getText()).toEqual('Přihlášit');

  // });

});

// pokud zadam pred test it.only, vykona mi to jen ten jeden test


// describe('Sada 1', () => {

//   before(() => {
//       console.log('bezi pred vsemi testy v sade 1');
//   });

//   after(() => {
//       console.log('bezi po vsech testech v sade 1');
//   });

//   beforeEach(() => {
//       console.log('bezi pred kazdym testem v sade 1');
//   });

//   afterEach(() => {
//       console.log('bezi po kazdem testu v sade 1');
//   });

//   it('test 1', () => {
//       console.log('test 1');
//   });

//   it('test 2', () => {
//       console.log('test 2');
//   });

//   it('test 3', () => {
//       console.log('test 3');
//   });




