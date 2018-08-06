const webpackContext = require.context('./en/');
const keys = webpackContext.keys();
const locale = {};

keys.forEach(key => Object.assign(locale, require(`./en${key.substr(1)}`)));

export default locale;
