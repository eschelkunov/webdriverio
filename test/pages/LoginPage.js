'use strict';

const Page = require('./Page');

class LoginPage extends Page {

    get username() { return $('input[name="username'); }
    get password() { return $('input[name="password'); }
    get submitBtn() { return $('button[name="login"]'); }
    get errorMessage() { return $('//*[@role="alert"]/div[text()]'); }
    get errorIcon() { return $('//*[contains(text(),"Invalid credentials")]'); }

    open() {
        super.open('https://lms.lohika.com/');
    }

    submit() {
        this.submitBtn.click();
    }

}
module.exports = LoginPage;
