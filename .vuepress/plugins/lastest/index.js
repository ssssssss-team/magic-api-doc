const path = require("path");

module.exports = (options, context) => ({
    name: 'vuepress-plugin-lastest-version',
    define () {
        return {
            CONFIG: Object.assign({}, options)
        }
    },
    clientRootMixin: path.resolve(__dirname, "clientRootMixin.js"),
});
