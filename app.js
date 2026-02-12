const utils = require('./utils');
console.log(utils.greetUser("Deepak"));
console.log(`Current theme is ${utils.config.settings.theme}`);
const message = utils.greetUser("Nakshatra");
console.log(message);