// var webdriverio = require('webdriverio');

// var options = {
//     desiredCapabilities: {
//         browserName: 'chrome'
//     }
// };

// webdriverio
//   .remote(options)
//   .init()
//   .url('https://lms.lohika.com')
//   .saveScreenshot('lms.png') 
//   .end();

// const { remote } = require('webdriverio');

// (async () => {
//     const browser = await remote({
//         logLevel: 'error',
//         path: '/',
//         capabilities: {
//             browserName: 'chrome'
//         }
//     });

//     await browser.url('https://webdriver.io');

//     const title = await browser.getTitle();
//     console.log('Title was: ' + title);

//     await browser.deleteSession();
// })().catch((e) => console.error(e));
