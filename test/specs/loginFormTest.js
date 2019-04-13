'use strict';

const LoginPage = new (require('../pages/LoginPage'))();
const HomePage = new (require('../pages/HomePage'))();

describe('login form', () => {

    it('should deny access with empty creds', () => {
        LoginPage.open();
        LoginPage.username.setValue('');
        LoginPage.password.setValue('');
        LoginPage.submit();

        expect(LoginPage.errorMessage.getText()).toContain('You entered nothing');
    });

    it('should deny access with wrong creds', () => {
        LoginPage.open();
        LoginPage.username.setValue('test123');
        LoginPage.password.setValue('test123');
        LoginPage.submit();

        expect(LoginPage.errorIcon.getText()).toContain('Invalid credentials');
    });

    it('should allow access with correct creds', () => {
        LoginPage.open();
        LoginPage.username.setValue('yshchelkunov');
        LoginPage.password.setValue('3Barbapapa1@');
        LoginPage.submit();
        HomePage.waitForSuccess();

        expect(HomePage.getTitle()).toBe('Home - LMS');
    });

});
