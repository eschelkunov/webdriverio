'use strict';

class Page {

    constructor() {
        this.title = 'My Page';
    }

    open(path) {
        browser.url(path);
    }

    getTitle() {
        return browser.getTitle();
    }
}
module.exports = Page;