'use strict';

const loginPage = require('../pages/loginPage');
const myUrl = 'https://lms.lohika.com/';
const errorElement = '//*[@role="alert"]/div[contains(text(),"You entered nothing")]';
const invalidCredsIcon = '//*[contains(text(),"Invalid credentials")]';
const userMenu = 'button[name="userMenu"]';

describe('Testing Login Form...', function() {
    
    beforeAll(function(done) {
        browser.navigateTo(myUrl);
        browser.call(done);
    });

    afterAll(function(done) {
        browser.deleteCookies();
        browser.call(done);
    });

    describe('When there are no creds', function() {
        it('should display an error message', function(done) {
            loginPage.doLogin('','', browser);
            expect($(errorElement).getText()).toContain('You entered nothing');
            browser.call(done);
        });
     });

     describe('When there are wrong credentials', function() {
        it('should display an error message as well', function(done) {
            loginPage.doLogin('test123','test123', browser);
            expect($(invalidCredsIcon).getText()).toContain('Invalid credentials');
            browser.call(done);
        });
        
     });

     describe('When there are correct login and password', function() {
        it('should display an username', function(done) {
            loginPage.doLogin('yshchelkunov', 'asd123@', browser);
            $(userMenu).waitForDisplayed(3000);
            expect(browser.getTitle()).toBe('Home - LMS');
            browser.call(done);
        });
     });
 
      
 });
