const webpackContext = require.context('./ru/');
const keys = webpackContext.keys();
const locale = {};

keys.forEach(key => Object.assign(locale, require(`./ru${key.substr(1)}`)));

export default locale;
