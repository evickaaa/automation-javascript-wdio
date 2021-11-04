import {username, password} from './fixtures.js'

describe('Czechitas Login Page', () => {

    it('should open login page', () => {
        
        browser.reloadSession();
        
        browser.url('/prihlaseni')
        browser.pause(5000);
        

        // const emailField = $('#email');
        // const passwordField = $('#password');
        // console.log(emailField);
        // console.log(passwordField);

        // console.log(emailField.isDisplayed(),emailField.isEnabled(),passwordField.isDisplayed(), passwordField.isEnabled());
        


        // // najit tlacitko a vypsat jeho text
        // const findButtonInLoginForm =  $('.btn-primary');
        // console.log(findButtonInLoginForm.getText());


        // najdi odkaz o zapomenuti hesla a vypsat jeho href

        // const lostPassword = $('.btn-link');
        // console.log(lostPassword.getAttribute("href"))

        // prihlas se do aplikace, pouzit setValue a click

        const emailField = $('#email');
        const passwordField = $('#password');
        const loginButton = $('button[type="submit"]');

        emailField.setValue('Zadni_rada@gmail.com');
        passwordField.setValue('Czechitas1');
        loginButton.click();

        $(‘featuredItemsContainer’).$$(‘listing-product-name’))


      
       


    });
    
});