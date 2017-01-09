[![Build status](https://asadsahi.visualstudio.com/_apis/public/build/definitions/a1519ab8-9104-47eb-96cc-6c37519c8b69/7/badge)](https://asadsahi.visualstudio.com/playground/_build/index?context=allDefinitions&path=%5C&definitionId=7&_a=completed)
[![Build status](https://ci.appveyor.com/api/projects/status/xm3d3c8wens0ee1b?svg=true)](https://ci.appveyor.com/project/asadsahi/aspnetcorespa)
[![Join the chat at https://gitter.im/aspnetcorespa/Lobby](https://badges.gitter.im/Join%20Chat.svg)](https://gitter.im/aspnetcorespa/Lobby?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)
[![Dependency Status](https://david-dm.org/asadsahi/AspNetCoreSpa.svg)](https://david-dm.org/asadsahi/AspNetCoreSpa)
[![devDependencies Status](https://david-dm.org/asadsahi/AspNetCoreSpa/dev-status.svg)](https://david-dm.org/asadsahi/AspNetCoreSpa?type=dev)
[![MIT license](http://img.shields.io/badge/license-MIT-brightgreen.svg)](http://opensource.org/licenses/MIT)

## Features

* [ASP.NET Core](http://www.dot.net/)
* [Entity Framework Core](https://docs.efproject.net/en/latest/)
* [Angular 2.0.0 Final](https://angular.io/)
* [Webpack 2](https://webpack.github.io/)
* [Bootstrap 4](http://v4-alpha.getbootstrap.com/)
* [ng-bootstrap](https://ng-bootstrap.github.io/)
* [ng2-translate](https://github.com/ocombe/ng2-translate)
* [Typescript 2](http://www.typescriptlang.org/)
* [SASS](http://sass-lang.com/) support
* [Best practices](https://angular.io/docs/ts/latest/guide/style-guide.html) in file and application organization for Angular 2.
* Testing Angular 2 code with [Jasmine](http://jasmine.github.io/) and [Karma](https://karma-runner.github.io/0.13/index.html).
* End-to-end Angular 2 code using [Protractor](http://www.protractortest.org).
* [Istanbul](https://github.com/gotwarlost/istanbul) for test coverage
  * with [Remap Istanbul](https://github.com/SitePen/remap-istanbul) for remapping Javascript to TypeScript coverage
* Type manager with [Typings](https://github.com/typings/typings)
* [HMR](https://webpack.github.io/docs/hot-module-replacement.html) (Hot Module Replacement) with Webpack
* Webpack DLL support for fast rebuilds (~ < 0.5 second)
* [Typedoc](http://typedoc.io/) for typescript documentation
* [Server](https://github.com/aspnet/dotnet-watch) and [client](https://webpack.github.io/docs/hot-module-replacement.html) watches
* Login and Registration functionality using [Asp.Net Identity](https://docs.asp.net/en/latest/security/authentication/identity.html)
* Extensible User/Role identity implementation
* Various social login support, Follow [this](https://github.com/asadsahi/AspNetCoreSpa/wiki/Social-Login-Setup) wiki page to see how it will work.
* Lazy loading of all routes, child routes (About page example) with basic animation example (On about page).
* [Angular 2 dynamic forms](https://angular.io/docs/ts/latest/cookbook/dynamic-form.html) for reusability and to keep html code DRY.
* [Serilog](https://serilog.net/) with [Seq](https://getseq.net/) support to manage structured logging.
* [Swagger](http://swagger.io/) as Api explorer (Visit url **http://localhost:5000/swagger/ui** after running the application)
 
## Pre-requisites

1. [.Net core sdk](https://www.microsoft.com/net/core#windows)
2. Either [VSCode](https://code.visualstudio.com/) with [C#](https://marketplace.visualstudio.com/items?itemName=ms-vscode.csharp) extension OR [Visual studio 2015 update 4](https://www.visualstudio.com/) with [.Net Core tooling](https://www.microsoft.com/net/core#windows)
3. [Nodejs](https://nodejs.org/en/)

**Make sure you have Node version >= 6.0 and NPM >= 3**

## Installation
```
1. Clone the repo
    git clone https://github.com/asadsahi/AspNetCoreSpa
2. Change directory to our repo
    cd AspNetCoreSpa
3. dotnet restore
4. Install global dependencies
    npm install protractor rimraf -g
5. npm install
6. Create webpack vendor manifest file for fast webpack rebuils
    For Development: npm run build:dev
    For Production: npm run build:prod 
8. Run the app:
    1) One way
    set ASPNETCORE_ENVIRONMENT=Development
    `dotnet run` (for single run) OR `dotnet watch run` (in watch mode)
    2) Another way:
    Just F5 key if you are using VS code editor or Visual Studio IDE
9. Browse using http://localhost:5000 or http://localhost:5001 

```

## Other commands

### run Angular 2 tests
```bash
npm run test
# this will also create coverage remaped to typescript files in coverage folder after test run completes
```
### watch and run Angular 2 tests
```bash
npm run watch:test
```
### Typescript documentation
```bash
npm run docs
# this will create documentation in doc folder at the root location (open index.html file) 
```
### run end-to-end tests
```bash
# make sure you have your server running in another terminal (i.e run "dotnet run" command)
npm run e2e
```

### run webdriver (for end-to-end)
```bash
npm run webdriver:update
npm run webdriver:start
```

### run Protractor's elementExplorer (for end-to-end)
```bash
npm run webdriver:start
# in another terminal
npm run e2e:live
```

