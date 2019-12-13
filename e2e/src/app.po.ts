import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get(browser.baseUrl) as Promise<any>;
  }

  getBrandText() {
    return element(by.css('app-root app-nav nav a')).getText() as Promise<string>;
  }
}
