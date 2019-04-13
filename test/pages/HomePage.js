'use strict';

const Page = require('./Page');

class HomePage extends Page {

    get userMenu() { return $('button[name="userMenu"]'); }
    get accountName() { return $('//*[text()=" Yevhen Shchelkunov "]'); }
    get menu() { return $('//*[contains(@id,"menu_container")][@aria-hidden="false"]'); }
    get logoutBtn() { return $('button[name="logout"]'); }

    waitForSuccess() {
        browser.waitUntil(() => this.userMenu.isDisplayed());
        browser.waitUntil(() => this.accountName.isDisplayed());
    }

    openUserMenu() {
        this.userMenu.click();
        browser.waitUntil(() => this.menu.isDisplayed());
    }

    logout() {
        this.logoutBtn.click();
    }

}
module.exports = HomePage;
