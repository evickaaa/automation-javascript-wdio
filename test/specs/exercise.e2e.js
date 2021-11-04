import {username, password} from './fixtures.js'

describe('Czechitas Login Page', () => {

    it('should open login page', () => {
        
        // 1 Jdete na stranku pro login
        browser.reloadSession();
        browser.url('/prihlaseni')
        browser.pause(1000);
        
        // 2 Najdete na strance element pro vyplneni emailu a hesla
        const emailField = $('#email');
        const passwordField = $('#password');
        expect(emailField).toExist()
        expect(passwordField).toExist()

        // 3 zjistete, ze jsou elementy email a heslo viditelne a editovatelne
        expect(emailField).toBeDisplayed()
        expect(emailField).toBeEnabled()
        expect(passwordField).toBeDisplayed()
        expect(passwordField).toBeEnabled()
        
        // 4 najdete tlacitko pro prihlaseni a vypiste jeho text pomoci get text
        const loginButton =  $('button[type="submit"]');
        expect(loginButton).toExist()
        const messageFromLoginButton = loginButton.getText()
        console.log(`text z tlacitko pro prihlaseni: ${messageFromLoginButton}`);

        // 5.  najdi odkaz o zapomenuti hesla a vypsat jeho href
        const forgottenLink = $('.btn-link')
        expect(forgottenLink.getText()).toEqual('Zapomněli jste své heslo?')
        console.log(`forgottenLink href: ${forgottenLink.getAttribute("href")}`)

        // 6. prihlas se do aplikace, pouzit setValue a click
        // const emailField = $('#email');
        // const passwordField = $('#password');
        // const loginButton = $('button[type="submit"]');

        // emailField.setValue('Zadni_rada@gmail.com');
        // passwordField.setValue('Czechitas1');
        // loginButton.click();

        // $(‘featuredItemsContainer’).$$(‘listing-product-name’))


      
       


    });
    
});