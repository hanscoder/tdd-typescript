module.exports = function(config) {
    config.set({
        frameworks: ['systemjs', 'jasmine'],

        systemjs: {
          configFile: "system.config.js"
        },

        files: [
            'build/**/*.js'
        ],

        browsers: ['PhantomJS']

    });
};