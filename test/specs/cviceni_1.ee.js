import { username, password, userFullName } from './fixtures.js'

describe('Login Page - excercise 1', () => {

  beforeEach(() => {
    browser.reloadSession();
    browser.url('/prihlaseni');
  });

  it('should show the size of a window browser and make a screenshot', () => {
      const windowSize = browser.getWindowSize();
      console.log(windowSize);

      const screenshot = browser.saveScreenshot('loginPage.png');

  });



});