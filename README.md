# Test Driven Development (TDD) for Typescript
**Can be used for practicing TDD using Typescript.**

## Getting Started
+ First of all install all required dependencies:
```
    npm install
```

+ Run karma and typescript transpiler in watch mode
```
    npm run watch
```

At the end you will see a failing test:
```
    PhantomJS 2.1.1 (Linux 0.0.0) Sut should be behaved FAILED
            Expected undefined to be 'behaved'.
    PhantomJS 2.1.1 (Linux 0.0.0): Executed 1 of 1 (1 FAILED) ERROR (0.037 secs / 0.001 secs)
```

+ Solve the failing test and watch how the code is transpiled automatically and the test is run again:
```
07 02 2016 17:56:01.864:INFO [watcher]: Changed file "/home/hanscoder/WebstormProjects/tdd-typescript/build/app/sut.js".
07 02 2016 17:56:02.114:DEBUG [karma]: List of files has changed, trying to execute
07 02 2016 17:56:02.114:DEBUG [karma]: All browsers are ready, executing
07 02 2016 17:56:02.116:DEBUG [phantomjs.launcher]:

07 02 2016 17:56:02.117:DEBUG [web-server]: serving (cached): /home/hanscoder/WebstormProjects/tdd-typescript/node_modules/karma/static/context.html
07 02 2016 17:56:02.123:DEBUG [middleware:source-files]: Requesting /base/build/app/sut.js /
07 02 2016 17:56:02.123:DEBUG [middleware:source-files]: Fetching /home/hanscoder/WebstormProjects/tdd-typescript/build/app/sut.js
07 02 2016 17:56:02.124:DEBUG [web-server]: serving (cached): /home/hanscoder/WebstormProjects/tdd-typescript/build/app/sut.js
07 02 2016 17:56:02.125:DEBUG [middleware:source-files]: Requesting /base/build/test/unit/sut.spec.js /
07 02 2016 17:56:02.125:DEBUG [middleware:source-files]: Fetching /home/hanscoder/WebstormProjects/tdd-typescript/build/test/unit/sut.spec.js
07 02 2016 17:56:02.125:DEBUG [web-server]: serving (cached): /home/hanscoder/WebstormProjects/tdd-typescript/build/test/unit/sut.spec.js
PhantomJS 2.1.1 (Linux 0.0.0): Executed 1 of 1 SUCCESS (0.038 secs / 0.002 secs)
```
