/**
 * Configuration for browserify and its plugins and transforms
 */

let config = require('config'),
    watchify = require('watchify'),
    dev = !process.env.NODE_ENV || process.env.NODE_ENV === 'development';

Object.assign(config, {
    browserify: {
        entries: './main.ts',
        basedir: './src/ts',
        debug: config.debug,
        cache: {},
        packageCache: {},
        plugin: [
            [watchify, {poll:true}]
        ]
    }
});

if (!dev){
    delete config.browserify.plugin;
}

module.exports = config;