'use strict';

const usernameField = 'input[name="username"]';
const passwordField = 'input[name="password"]';
const loginButton = 'button[name="login"]';

module.exports = {

    doLogin: (user, pass, world) => {
        $(usernameField).waitForDisplayed();
        $(usernameField).setValue(user);
        $(passwordField).waitForEnabled()
        $(passwordField).setValue(pass);
        world.waitUntil(() => $(loginButton).isEnabled());
        $(loginButton).click();
    }

};
