<<<<<<< HEAD
import { browser, element, by } from 'protractor';

export class AzCliPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('app-root h1')).getText();
  }
}
=======
import { browser, element, by } from 'protractor';

export class AzCliPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('app-root h1')).getText();
  }
}
>>>>>>> 64d67aca73e9be188c2c2b31073cc8a07ac31205
