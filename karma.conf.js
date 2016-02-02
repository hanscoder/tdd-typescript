module.exports = function(config) {
    config.set({
        plugins: [
            'karma-systemjs', 'karma-sourcemap-loader', 'karma-jasmine', 'karma-phantomjs-launcher'
        ],

        frameworks: ['systemjs', 'jasmine'],

        systemjs: {
          configFile: "system.config.js"
        },

        files: [
            'build/**/*.js',
            {pattern: "build/**/*.js.map", served: true, included: false, watched: false},
            {pattern: "src/**/*.ts", served: true, included: false, watched: false}
        ],

        preprocessors: {
            'build/**/*.js': ['sourcemap']
        },

        logLevel: 'config.LOG_DEBUG',

        browsers: ['PhantomJS']

    });
};