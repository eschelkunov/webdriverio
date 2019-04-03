# webdriverio
Before you start running tests please make sure you have node.js and Java as installed in your environment 
Start test preparation by calling 'npm run setup-test' (it installs selenium standalone server if it's missing and start it)
Run 'npm test' to run your tests ( e.o. loginForm tests are keeping there --> ./test/specs/loginFormTest.js)
You can use your own credentials for success login to LMS (loginPage.doLogin('<username>', '<password>', browser);)
