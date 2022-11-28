var path = require('path');
var fs = require('fs-extra');
var color = require('bash-color');
var userHome = require('user-home');

var CONFIG_ROOT = process.env.DIJETSPUB_DIR;
if (!CONFIG_ROOT) {
    if (!userHome) {
        console.log(color.red('HOME or DIJETSPUB_DIR needs to be defined'));
        process.exit(1);
    }

    CONFIG_ROOT = path.resolve(userHome, '.dijetspub');
}
var VERSIONS_ROOT = path.resolve(CONFIG_ROOT, 'versions');


// Init and prepare configuration for dijetspub-cli
// It creates the required folder
function init() {
    fs.mkdirsSync(CONFIG_ROOT);
    fs.mkdirsSync(VERSIONS_ROOT);
}

// Replace root folder to use
function setRoot(root) {
    CONFIG_ROOT = path.resolve(root);
    VERSIONS_ROOT = path.resolve(CONFIG_ROOT, 'versions');

    module.exports.ROOT = CONFIG_ROOT;
    module.exports.VERSIONS_ROOT = VERSIONS_ROOT;
}

module.exports = {
    init: init,
    setRoot: setRoot,

    DIJETSPUB_VERSION: '>1.x.x',
    ROOT: CONFIG_ROOT,
    VERSIONS_ROOT: VERSIONS_ROOT
};
