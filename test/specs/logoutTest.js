'use strict';

const LoginPage = new (require('../pages/LoginPage'))();
const HomePage = new (require('../pages/HomePage'))();

describe('logout button', () => {

    it('should logout the user', () => {
        LoginPage.open();
        LoginPage.username.setValue('yshchelkunov');
        LoginPage.password.setValue('3Barbapapa1@');
        LoginPage.submit();
        HomePage.waitForSuccess();
        HomePage.openUserMenu();
        HomePage.logout();

        expect(LoginPage.getTitle()).toBe('Login - LMS');
    });

});