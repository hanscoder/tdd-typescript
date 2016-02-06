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
            {pattern: "build/**/*.js.map", served: true, included: false, watched: false, nocache: true},
            {pattern: "src/**/*.ts", served: true, included: false, watched: false, nocache: true}
        ],

        preprocessors: {
            'build/**/*.js': ['sourcemap']
        },

        logLevel: 'config.LOG_INFO',

        browsers: ['PhantomJS']

    });
};