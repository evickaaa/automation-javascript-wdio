import LoginPage from './login.page';
import {username, password} from './fixtures.js'

describe('Login Page - excercise 5', () => {

    beforeEach(() => {
        browser.reloadSession();
        LoginPage.open();
    });

    it('should show login page', () => {
        expect(LoginPage.isEnabled()).toEqual(true);
        expect(LoginPage.loginButton.getText()).toEqual('Přihlásit');
    });

    it('should login with valid credentials', () => {
        LoginPage.login(username, password)
        expect(LoginPage.pageName).toEqual('Přihlášky');
    });

    it('should not login with invalid credentials', () => {
        LoginPage.login(username, 'spatneheslo')
        expect(LoginPage.pageName).toEqual('Přihlášení');
    });
    
});