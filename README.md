# webdriverio
1. Before you start running tests please make sure you have node.js and Java as installed in your environment 
2. Start test preparation by calling 'npm run setup-test' (it installs selenium standalone server if it's missing and start it)
3. Run 'npm test' to run your tests ( e.o. loginForm tests are keeping there --> ./test/specs/loginFormTest.js)
4. You can use your own credentials for success login to LMS (loginPage.doLogin('username', 'password', browser);)
5. Now, when you have access to this repo you should have an access as weel to build information on CircleCi (https://circleci.com/gh/eschelkunov/webdriverio)
