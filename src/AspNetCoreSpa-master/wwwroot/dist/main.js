/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	var parentJsonpFunction = window["webpackJsonp"];
/******/ 	window["webpackJsonp"] = function webpackJsonpCallback(chunkIds, moreModules, executeModules) {
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [], result;
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(installedChunks[chunkId])
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(chunkIds, moreModules, executeModules);
/******/ 		while(resolves.length)
/******/ 			resolves.shift()();

/******/ 	};

/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// objects to store loaded and loading chunks
/******/ 	var installedChunks = {
/******/ 		5: 0
/******/ 	};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.l = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}

/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId) {
/******/ 		if(installedChunks[chunkId] === 0)
/******/ 			return Promise.resolve();

/******/ 		// an Promise means "currently loading".
/******/ 		if(installedChunks[chunkId]) {
/******/ 			return installedChunks[chunkId][2];
/******/ 		}
/******/ 		// start chunk loading
/******/ 		var head = document.getElementsByTagName('head')[0];
/******/ 		var script = document.createElement('script');
/******/ 		script.type = 'text/javascript';
/******/ 		script.charset = 'utf-8';
/******/ 		script.async = true;
/******/ 		script.timeout = 120000;

/******/ 		if (__webpack_require__.nc) {
/******/ 			script.setAttribute("nonce", __webpack_require__.nc);
/******/ 		}
/******/ 		script.src = __webpack_require__.p + "" + chunkId + ".js";
/******/ 		var timeout = setTimeout(onScriptComplete, 120000);
/******/ 		script.onerror = script.onload = onScriptComplete;
/******/ 		function onScriptComplete() {
/******/ 			// avoid mem leaks in IE.
/******/ 			script.onerror = script.onload = null;
/******/ 			clearTimeout(timeout);
/******/ 			var chunk = installedChunks[chunkId];
/******/ 			if(chunk !== 0) {
/******/ 				if(chunk) chunk[1](new Error('Loading chunk ' + chunkId + ' failed.'));
/******/ 				installedChunks[chunkId] = undefined;
/******/ 			}
/******/ 		};
/******/ 		head.appendChild(script);

/******/ 		var promise = new Promise(function(resolve, reject) {
/******/ 			installedChunks[chunkId] = [resolve, reject];
/******/ 		});
/******/ 		return installedChunks[chunkId][2] = promise;
/******/ 	};

/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };

/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};

/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};

/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/dist/";

/******/ 	// on error function for async loading
/******/ 	__webpack_require__.oe = function(err) { console.error(err); throw err; };

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 57);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(1))(0);

/***/ },
/* 1 */
/***/ function(module, exports) {

module.exports = vendor_b601e3a43cc1011f469a;

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(1))(403);

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(1))(234);

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(1))(38);

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = __webpack_require__(0);
var api_gateway_service_1 = __webpack_require__(10);
var DataService = (function () {
    function DataService(http) {
        this.http = http;
    }
    DataService.prototype.get = function (url, params) {
        return this.http.get(url, undefined);
    };
    DataService.prototype.post = function (url, data, params) {
        return this.http.post(url, data, params);
    };
    return DataService;
}());
DataService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [api_gateway_service_1.ApiGatewayService])
], DataService);
exports.DataService = DataService;


/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

"use strict";

var ValidationService = (function () {
    function ValidationService() {
    }
    ValidationService.getValidatorErrorMessage = function (code, fieldLength) {
        var config = {
            'required': 'This is a required field',
            'minlength': 'Minimum length is ' + fieldLength,
            'maxlength': 'Maximum length is ' + fieldLength,
            'invalidCreditCard': 'Invalid credit card number',
            'invalidEmailAddress': 'Invalid email address',
            'invalidPassword': 'Password must be at least 6 characters long, and contain a number and special character.'
        };
        return config[code];
    };
    ValidationService.creditCardValidator = function (control) {
        // Visa, MasterCard, American Express, Diners Club, Discover, JCB
        if (control.value.match(/^(?:4[0-9]{12}(?:[0-9]{3})?|5[1-5][0-9]{14}|6(?:011|5[0-9][0-9])[0-9]{12}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|(?:2131|1800|35\d{3})\d{11})$/)) {
            return undefined;
        }
        else {
            return { 'invalidCreditCard': true };
        }
    };
    ValidationService.emailValidator = function (control) {
        // RFC 2822 compliant regex
        if (control.value.match(/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/)) {
            return undefined;
        }
        else {
            return { 'invalidEmailAddress': true };
        }
    };
    ValidationService.passwordValidator = function (control) {
        // {6,100}           - Assert password is between 6 and 100 characters
        // (?=.*[0-9])       - Assert a string has at least one number
        if (control.value.match(/^(?=.*[0-9])[a-zA-Z0-9!"@#$%^&*]{6,100}$/)) {
            return undefined;
        }
        else {
            return { 'invalidPassword': true };
        }
    };
    return ValidationService;
}());
exports.ValidationService = ValidationService;


/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = __webpack_require__(0);
var router_1 = __webpack_require__(2);
var user_model_1 = __webpack_require__(35);
var AuthService = (function () {
    function AuthService(router) {
        this.router = router;
    }
    AuthService.prototype.logout = function () {
        sessionStorage.clear();
        this.router.navigate(['/login']);
    };
    AuthService.prototype.isLoggedIn = function () {
        return this.user(undefined) !== undefined;
    };
    AuthService.prototype.user = function (user) {
        if (user) {
            sessionStorage.setItem('user', JSON.stringify(user));
        }
        var userData = JSON.parse(sessionStorage.getItem('user'));
        if (userData) {
            user = new user_model_1.User(userData.displayName, userData.roles);
        }
        return user ? user : undefined;
    };
    AuthService.prototype.setAuth = function (res) {
        if (res && res.user) {
            sessionStorage.setItem('user', JSON.stringify(res.user));
        }
    };
    return AuthService;
}());
AuthService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [router_1.Router])
], AuthService);
exports.AuthService = AuthService;


/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = __webpack_require__(0);
var HomeComponent = (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
        console.log('home component loaded');
    };
    return HomeComponent;
}());
HomeComponent = __decorate([
    core_1.Component({
        selector: 'appc-home',
        styles: [__webpack_require__(47)],
        template: __webpack_require__(40)
    }),
    __metadata("design:paramtypes", [])
], HomeComponent);
exports.HomeComponent = HomeComponent;


/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = __webpack_require__(0);
var forms_1 = __webpack_require__(4);
var validation_service_1 = __webpack_require__(6);
var FormControlService = (function () {
    function FormControlService() {
    }
    FormControlService.prototype.toControlGroup = function (controls) {
        var group = {};
        controls.forEach(function (control) {
            var validators = [];
            // Required
            if (control.required) {
                validators.push(forms_1.Validators.required);
            }
            // Minlength
            if (control.minlength) {
                validators.push(forms_1.Validators.minLength(control.minlength));
            }
            // Maxlength
            if (control.maxlength) {
                validators.push(forms_1.Validators.minLength(control.maxlength));
            }
            // Email
            if (control.type === 'email') {
                validators.push(validation_service_1.ValidationService.emailValidator);
            }
            // Password
            if (control.type === 'password') {
                validators.push(validation_service_1.ValidationService.passwordValidator);
            }
            group[control.key] = new forms_1.FormControl(control.value || '', validators);
        });
        return new forms_1.FormGroup(group);
    };
    return FormControlService;
}());
FormControlService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [])
], FormControlService);
exports.FormControlService = FormControlService;


/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
// CREDIT:
//  The vast majority of this code came right from Ben Nadel's post:
//  http://www.bennadel.com/blog/3047-creating-specialized-http-clients-in-angular-2-beta-8.htm
//
// My updates are mostly adapting it for Typescript:
//  1. Importing required modules
//  2. Adding type notations
//  3. Using the 'fat-arrow' syntax to properly scope in-line functions
//
__webpack_require__(14);
__webpack_require__(50);
__webpack_require__(54);
__webpack_require__(55);
__webpack_require__(53);
var core_1 = __webpack_require__(0);
var http_1 = __webpack_require__(3);
var Observable_1 = __webpack_require__(14);
var Subject_1 = __webpack_require__(56);
var http_error_handler_service_1 = __webpack_require__(12);
// Import the rxjs operators we need (in a production app you'll
//  probably want to import only the operators you actually use)
//
var ApiGatewayOptions = (function () {
    function ApiGatewayOptions() {
        this.headers = {};
        this.params = {};
        this.data = {};
    }
    return ApiGatewayOptions;
}());
exports.ApiGatewayOptions = ApiGatewayOptions;
var ApiGatewayService = (function () {
    function ApiGatewayService(http, httpErrorHandler) {
        this.http = http;
        this.httpErrorHandler = httpErrorHandler;
        // Define the internal Subject we'll use to push the command count
        this.pendingCommandsSubject = new Subject_1.Subject();
        this.pendingCommandCount = 0;
        this.pendingCommands$ = this.pendingCommandsSubject.asObservable();
    }
    // I perform a GET request to the API, appending the given params
    // as URL search parameters. Returns a stream.
    ApiGatewayService.prototype.get = function (url, params) {
        var options = new ApiGatewayOptions();
        options.method = http_1.RequestMethod.Get;
        options.url = url;
        options.params = params;
        return this.request(options);
    };
    // I perform a POST request to the API. If both the params and data
    // are present, the params will be appended as URL search parameters
    // and the data will be serialized as a JSON payload. If only the
    // data is present, it will be serialized as a JSON payload. Returns
    // a stream.
    ApiGatewayService.prototype.post = function (url, data, params) {
        if (!data) {
            data = params;
            params = {};
        }
        var options = new ApiGatewayOptions();
        options.method = http_1.RequestMethod.Post;
        options.url = url;
        options.params = params;
        options.data = data;
        return this.request(options);
    };
    ApiGatewayService.prototype.request = function (options) {
        var _this = this;
        options.method = (options.method || http_1.RequestMethod.Get);
        options.url = (options.url || '');
        options.headers = (options.headers || {});
        options.params = (options.params || {});
        options.data = (options.data || {});
        this.interpolateUrl(options);
        this.addXsrfToken(options);
        this.addContentType(options);
        // TODO add auth token when available
        // this.addAuthToken(options);
        var requestOptions = new http_1.RequestOptions();
        requestOptions.method = options.method;
        requestOptions.url = options.url;
        requestOptions.headers = options.headers;
        requestOptions.search = this.buildUrlSearchParams(options.params);
        requestOptions.body = JSON.stringify(options.data);
        var isCommand = (options.method !== http_1.RequestMethod.Get);
        if (isCommand) {
            this.pendingCommandsSubject.next(++this.pendingCommandCount);
        }
        var stream = this.http.request(options.url, requestOptions)
            .catch(function (error) {
            _this.httpErrorHandler.handle(error);
            return Observable_1.Observable.throw(error);
        })
            .map(this.unwrapHttpValue)
            .catch(function (error) {
            return Observable_1.Observable.throw(_this.unwrapHttpError(error));
        })
            .finally(function () {
            if (isCommand) {
                _this.pendingCommandsSubject.next(--_this.pendingCommandCount);
            }
        });
        return stream;
    };
    ApiGatewayService.prototype.addContentType = function (options) {
        if (options.method !== http_1.RequestMethod.Get) {
            options.headers['Content-Type'] = 'application/json; charset=UTF-8';
        }
        return options;
    };
    ApiGatewayService.prototype.addAuthToken = function (options) {
        options.headers.Authorization = 'Bearer ' + JSON.parse(sessionStorage.getItem('accessToken'));
        return options;
    };
    ApiGatewayService.prototype.extractValue = function (collection, key) {
        var value = collection[key];
        delete (collection[key]);
        return value;
    };
    ApiGatewayService.prototype.addXsrfToken = function (options) {
        var xsrfToken = this.getXsrfCookie();
        if (xsrfToken) {
            options.headers['X-XSRF-TOKEN'] = xsrfToken;
        }
        return options;
    };
    ApiGatewayService.prototype.getXsrfCookie = function () {
        var matches = document.cookie.match(/\bXSRF-TOKEN=([^\s;]+)/);
        try {
            return (matches && decodeURIComponent(matches[1]));
        }
        catch (decodeError) {
            return ('');
        }
    };
    ApiGatewayService.prototype.addCors = function (options) {
        options.headers['Access-Control-Allow-Origin'] = '*';
        return options;
    };
    ApiGatewayService.prototype.buildUrlSearchParams = function (params) {
        var searchParams = new http_1.URLSearchParams();
        for (var key in params) {
            if (params.hasOwnProperty(key)) {
                searchParams.append(key, params[key]);
            }
        }
        return searchParams;
    };
    ApiGatewayService.prototype.interpolateUrl = function (options) {
        var _this = this;
        options.url = options.url.replace(/:([a-zA-Z]+[\w-]*)/g, function ($0, token) {
            // Try to move matching token from the params collection.
            if (options.params.hasOwnProperty(token)) {
                return (_this.extractValue(options.params, token));
            }
            // Try to move matching token from the data collection.
            if (options.data.hasOwnProperty(token)) {
                return (_this.extractValue(options.data, token));
            }
            // If a matching value couldn't be found, just replace
            // the token with the empty string.
            return ('');
        });
        // Clean up any repeating slashes.
        options.url = options.url.replace(/\/{2,}/g, '/');
        // Clean up any trailing slashes.
        options.url = options.url.replace(/\/+$/g, '');
        return options;
    };
    ApiGatewayService.prototype.unwrapHttpError = function (error) {
        try {
            return (error.json());
        }
        catch (jsonError) {
            return ({
                code: -1,
                message: 'An unexpected error occurred.'
            });
        }
    };
    ApiGatewayService.prototype.unwrapHttpValue = function (value) {
        return (value.json());
    };
    return ApiGatewayService;
}());
ApiGatewayService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http, http_error_handler_service_1.HttpErrorHandlerService])
], ApiGatewayService);
exports.ApiGatewayService = ApiGatewayService;


/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = __webpack_require__(0);
var data_service_1 = __webpack_require__(5);
var ContentService = (function () {
    function ContentService(dataService) {
        this.dataService = dataService;
    }
    ContentService.prototype.get = function (lang) {
        return this.dataService.get('api/content?lang=' + (lang || 'en'));
    };
    return ContentService;
}());
ContentService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [data_service_1.DataService])
], ContentService);
exports.ContentService = ContentService;


/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
// CREDIT:
//  The vast majority of this code came right from Ben Nadel's post:
//  http://www.bennadel.com/blog/3047-creating-specialized-http-clients-in-angular-2-beta-8.htm
//
// My updates are mostly adapting it for Typescript:
//  1. Importing required modules
//  2. Adding type notations
//  3. Using the 'fat-arrow' syntax to properly scope in-line functions
//
var core_1 = __webpack_require__(0);
var router_1 = __webpack_require__(2);
var HttpErrorHandlerService = (function () {
    function HttpErrorHandlerService(_router) {
        this._router = _router;
    }
    HttpErrorHandlerService.prototype.handle = function (error) {
        if (error.status === 401) {
            sessionStorage.clear();
            // window.location.href = 'login';
            this._router.navigate(['Login']);
        }
    };
    return HttpErrorHandlerService;
}());
HttpErrorHandlerService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [router_1.Router])
], HttpErrorHandlerService);
exports.HttpErrorHandlerService = HttpErrorHandlerService;


/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__index__ = __webpack_require__(52);
Object.defineProperty(exports, "__esModule", { value: true });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(exports, "translateLoaderFactory", function() { return __WEBPACK_IMPORTED_MODULE_0__index__["translateLoaderFactory"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(exports, "TranslateModule", function() { return __WEBPACK_IMPORTED_MODULE_0__index__["TranslateModule"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(exports, "TranslatePipe", function() { return __WEBPACK_IMPORTED_MODULE_0__index__["TranslatePipe"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(exports, "MissingTranslationHandler", function() { return __WEBPACK_IMPORTED_MODULE_0__index__["MissingTranslationHandler"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(exports, "TranslateLoader", function() { return __WEBPACK_IMPORTED_MODULE_0__index__["TranslateLoader"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(exports, "TranslateStaticLoader", function() { return __WEBPACK_IMPORTED_MODULE_0__index__["TranslateStaticLoader"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(exports, "TranslateService", function() { return __WEBPACK_IMPORTED_MODULE_0__index__["TranslateService"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(exports, "TranslateParser", function() { return __WEBPACK_IMPORTED_MODULE_0__index__["TranslateParser"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(exports, "DefaultTranslateParser", function() { return __WEBPACK_IMPORTED_MODULE_0__index__["DefaultTranslateParser"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(exports, "TranslateDirective", function() { return __WEBPACK_IMPORTED_MODULE_0__index__["TranslateDirective"]; });



/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(1))(1);

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(1))(101);

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = __webpack_require__(0);
var platform_browser_1 = __webpack_require__(15);
// import { FormsModule } from '@angular/forms';
var http_1 = __webpack_require__(3);
var app_routes_1 = __webpack_require__(24);
var app_service_1 = __webpack_require__(25);
var app_component_1 = __webpack_require__(23);
var shared_module_1 = __webpack_require__(20);
var home_module_1 = __webpack_require__(26);
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        declarations: [app_component_1.AppComponent],
        imports: [
            platform_browser_1.BrowserModule,
            app_routes_1.routing,
            // FormsModule,
            http_1.HttpModule,
            // Only module that app module loads
            shared_module_1.SharedModule.forRoot(),
            home_module_1.HomeModule
        ],
        providers: [
            app_service_1.AppService
        ],
        bootstrap: [app_component_1.AppComponent]
    }),
    __metadata("design:paramtypes", [])
], AppModule);
exports.AppModule = AppModule;


/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(1))(402);

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(1))(409);

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(1))(411);

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = __webpack_require__(0);
var common_1 = __webpack_require__(22);
var forms_1 = __webpack_require__(4);
var router_1 = __webpack_require__(2);
var http_1 = __webpack_require__(3);
var ng_bootstrap_1 = __webpack_require__(51);
var ng2_translate_1 = __webpack_require__(13);
var page_heading_directive_1 = __webpack_require__(28);
var dynamic_form_component_1 = __webpack_require__(30);
var dynamic_form_control_component_1 = __webpack_require__(29);
var error_message_component_1 = __webpack_require__(31);
var error_summary_component_1 = __webpack_require__(32);
var form_control_service_1 = __webpack_require__(9);
var header_component_1 = __webpack_require__(34);
var footer_component_1 = __webpack_require__(33);
// Services
var data_service_1 = __webpack_require__(5);
var api_gateway_service_1 = __webpack_require__(10);
var auth_service_1 = __webpack_require__(7);
var http_error_handler_service_1 = __webpack_require__(12);
var api_translation_loader_service_1 = __webpack_require__(37);
var content_service_1 = __webpack_require__(11);
var utility_service_1 = __webpack_require__(38);
var uppercase_pipe_1 = __webpack_require__(36);
var SharedModule = SharedModule_1 = (function () {
    function SharedModule() {
    }
    SharedModule.forRoot = function () {
        return {
            ngModule: SharedModule_1,
            providers: [
                // Providers
                http_error_handler_service_1.HttpErrorHandlerService,
                api_gateway_service_1.ApiGatewayService,
                auth_service_1.AuthService,
                data_service_1.DataService,
                content_service_1.ContentService,
                form_control_service_1.FormControlService,
                utility_service_1.UtilityService
            ]
        };
    };
    return SharedModule;
}());
SharedModule = SharedModule_1 = __decorate([
    core_1.NgModule({
        imports: [
            common_1.CommonModule,
            forms_1.FormsModule,
            forms_1.ReactiveFormsModule,
            router_1.RouterModule,
            ng_bootstrap_1.NgbModule.forRoot(),
            // No need to export as these modules don't expose any components/directive etc'
            http_1.HttpModule,
            http_1.JsonpModule,
            ng2_translate_1.TranslateModule.forRoot({ provide: ng2_translate_1.TranslateLoader, useClass: api_translation_loader_service_1.ApiTranslationLoader })
        ],
        declarations: [
            dynamic_form_component_1.DynamicFormComponent,
            dynamic_form_control_component_1.DynamicFormControlComponent,
            error_message_component_1.ErrorMessageComponent,
            error_summary_component_1.ErrorSummaryComponent,
            footer_component_1.FooterComponent,
            header_component_1.HeaderComponent,
            page_heading_directive_1.PageHeadingComponent,
            uppercase_pipe_1.UppercasePipe
        ],
        exports: [
            // Modules
            common_1.CommonModule,
            forms_1.FormsModule,
            forms_1.ReactiveFormsModule,
            router_1.RouterModule,
            ng_bootstrap_1.NgbModule,
            ng2_translate_1.TranslateModule,
            // Providers, Components, directive, pipes
            dynamic_form_component_1.DynamicFormComponent,
            dynamic_form_control_component_1.DynamicFormControlComponent,
            error_summary_component_1.ErrorSummaryComponent,
            error_message_component_1.ErrorMessageComponent,
            footer_component_1.FooterComponent,
            header_component_1.HeaderComponent,
            page_heading_directive_1.PageHeadingComponent,
            uppercase_pipe_1.UppercasePipe
        ]
    }),
    __metadata("design:paramtypes", [])
], SharedModule);
exports.SharedModule = SharedModule;
var SharedModule_1;


/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

"use strict";

var ControlBase = (function () {
    function ControlBase(options) {
        if (options === void 0) { options = {}; }
        this.value = options.value;
        this.key = options.key || '';
        this.label = options.label || '';
        this.placeholder = options.placeholder || '';
        this.required = !!options.required;
        this.minlength = options.minlength;
        this.maxlength = options.maxlength;
        this.order = options.order === undefined ? 1 : options.order;
        this.type = options.type || '';
        this.class = options.class || '';
    }
    return ControlBase;
}());
exports.ControlBase = ControlBase;


/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(1))(18);

/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var platform_browser_1 = __webpack_require__(15);
var core_1 = __webpack_require__(0);
var ng2_translate_1 = __webpack_require__(13);
/*
 * App Component
 * Top Level Component
 */
var AppComponent = (function () {
    function AppComponent(translate, titleService) {
        this.translate = translate;
        this.titleService = titleService;
        // this language will be used as a fallback when a translation isn't found in the current language
        translate.setDefaultLang('en');
        // the lang to use, if the lang isn't available, it will use the current loader to get them
        translate.use('en');
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.translate.get('TITLE')
            .subscribe(function (title) { return _this.setTitle(title); });
    };
    AppComponent.prototype.setTitle = function (newTitle) {
        this.titleService.setTitle(newTitle);
    };
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'appc-app',
        styles: [__webpack_require__(46)],
        template: __webpack_require__(39)
    }),
    __metadata("design:paramtypes", [ng2_translate_1.TranslateService, platform_browser_1.Title])
], AppComponent);
exports.AppComponent = AppComponent;


/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

"use strict";

var router_1 = __webpack_require__(2);
var routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    // Lazy async modules
    {
        path: 'login', loadChildren: function () { return new Promise(function (resolve) { __webpack_require__.e/* nsure */(1).then((function (require) { resolve(__webpack_require__(60)['LoginModule']); }).bind(null, __webpack_require__)).catch(__webpack_require__.oe); }); }
    },
    {
        path: 'register', loadChildren: function () { return new Promise(function (resolve) { __webpack_require__.e/* nsure */(3).then((function (require) { resolve(__webpack_require__(62)['RegisterModule']); }).bind(null, __webpack_require__)).catch(__webpack_require__.oe); }); }
    },
    {
        path: 'profile', loadChildren: function () { return new Promise(function (resolve) { __webpack_require__.e/* nsure */(2).then((function (require) { resolve(__webpack_require__(61)['ProfileModule']); }).bind(null, __webpack_require__)).catch(__webpack_require__.oe); }); }
    },
    {
        path: 'admin', loadChildren: function () { return new Promise(function (resolve) { __webpack_require__.e/* nsure */(4).then((function (require) { resolve(__webpack_require__(58)['AdminModule']); }).bind(null, __webpack_require__)).catch(__webpack_require__.oe); }); }
    },
    {
        path: 'examples', loadChildren: function () { return new Promise(function (resolve) { __webpack_require__.e/* nsure */(0).then((function (require) { resolve(__webpack_require__(59)['ExamplesModule']); }).bind(null, __webpack_require__)).catch(__webpack_require__.oe); }); }
    }
];
exports.routing = router_1.RouterModule.forRoot(routes);


/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = __webpack_require__(0);
var AppService = (function () {
    function AppService() {
    }
    return AppService;
}());
AppService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [])
], AppService);
exports.AppService = AppService;


/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = __webpack_require__(0);
var home_component_1 = __webpack_require__(8);
var home_routes_1 = __webpack_require__(27);
var HomeModule = (function () {
    function HomeModule() {
    }
    return HomeModule;
}());
HomeModule = __decorate([
    core_1.NgModule({
        imports: [home_routes_1.routing],
        declarations: [home_component_1.HomeComponent]
    }),
    __metadata("design:paramtypes", [])
], HomeModule);
exports.HomeModule = HomeModule;


/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

"use strict";

var router_1 = __webpack_require__(2);
var home_component_1 = __webpack_require__(8);
var routes = [
    { path: 'home', component: home_component_1.HomeComponent }
];
exports.routing = router_1.RouterModule.forChild(routes);


/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = __webpack_require__(0);
var PageHeadingComponent = (function () {
    function PageHeadingComponent() {
    }
    return PageHeadingComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], PageHeadingComponent.prototype, "text", void 0);
PageHeadingComponent = __decorate([
    core_1.Component({
        selector: 'appc-page-heading',
        template: "<h4>{{text}}</h4>"
    }),
    __metadata("design:paramtypes", [])
], PageHeadingComponent);
exports.PageHeadingComponent = PageHeadingComponent;


/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = __webpack_require__(0);
var DynamicFormControlComponent = (function () {
    function DynamicFormControlComponent() {
        this.control = undefined;
        this.form = undefined;
    }
    Object.defineProperty(DynamicFormControlComponent.prototype, "valid", {
        get: function () {
            return this.form.controls[this.control.key].valid;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DynamicFormControlComponent.prototype, "invalid", {
        get: function () {
            return !this.form.controls[this.control.key].valid && this.form.controls[this.control.key].touched;
        },
        enumerable: true,
        configurable: true
    });
    return DynamicFormControlComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], DynamicFormControlComponent.prototype, "control", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], DynamicFormControlComponent.prototype, "form", void 0);
DynamicFormControlComponent = __decorate([
    core_1.Component({
        selector: 'appc-dynamic-control',
        template: __webpack_require__(41)
    }),
    __metadata("design:paramtypes", [])
], DynamicFormControlComponent);
exports.DynamicFormControlComponent = DynamicFormControlComponent;


/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = __webpack_require__(0);
var form_control_service_1 = __webpack_require__(9);
var DynamicFormComponent = (function () {
    function DynamicFormComponent(_controlService) {
        this._controlService = _controlService;
        this.controls = [];
        this.btnText = 'Submit'; // Default value at least
        this.formClass = 'form-horizontal';
        // Note: don't keep name of output events as same as native events such as submit etc.
        this.formsubmit = new core_1.EventEmitter();
    }
    DynamicFormComponent.prototype.ngOnInit = function () {
        var sortedControls = this.controls.sort(function (a, b) { return a.order - b.order; });
        this.form = this._controlService.toControlGroup(sortedControls);
    };
    DynamicFormComponent.prototype.onSubmit = function () {
        this.formsubmit.emit(this.form.value);
    };
    return DynamicFormComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Array)
], DynamicFormComponent.prototype, "controls", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], DynamicFormComponent.prototype, "btnText", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], DynamicFormComponent.prototype, "formClass", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", core_1.EventEmitter)
], DynamicFormComponent.prototype, "formsubmit", void 0);
DynamicFormComponent = __decorate([
    core_1.Component({
        selector: 'appc-dynamic-form',
        template: __webpack_require__(42)
    }),
    __metadata("design:paramtypes", [form_control_service_1.FormControlService])
], DynamicFormComponent);
exports.DynamicFormComponent = DynamicFormComponent;


/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = __webpack_require__(0);
var forms_1 = __webpack_require__(4);
var control_base_1 = __webpack_require__(21);
var validation_service_1 = __webpack_require__(6);
var ErrorMessageComponent = (function () {
    function ErrorMessageComponent() {
    }
    Object.defineProperty(ErrorMessageComponent.prototype, "errorMessage", {
        get: function () {
            var c = this.form.form.get(this.control.key);
            for (var propertyName in c.errors) {
                if (c.errors.hasOwnProperty(propertyName) && c.touched) {
                    return validation_service_1.ValidationService.getValidatorErrorMessage(propertyName, this.control.minlength || this.control.maxlength);
                }
            }
            return undefined;
        },
        enumerable: true,
        configurable: true
    });
    return ErrorMessageComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", control_base_1.ControlBase)
], ErrorMessageComponent.prototype, "control", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", forms_1.FormGroupDirective)
], ErrorMessageComponent.prototype, "form", void 0);
ErrorMessageComponent = __decorate([
    core_1.Component({
        selector: 'appc-control-error-message',
        template: "<div *ngIf=\"errorMessage\" class=\"form-control-feedback\"> {{errorMessage}} </div>"
    }),
    __metadata("design:paramtypes", [])
], ErrorMessageComponent);
exports.ErrorMessageComponent = ErrorMessageComponent;


/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = __webpack_require__(0);
var ErrorSummaryComponent = (function () {
    function ErrorSummaryComponent() {
    }
    return ErrorSummaryComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], ErrorSummaryComponent.prototype, "errors", void 0);
ErrorSummaryComponent = __decorate([
    core_1.Component({
        selector: 'appc-error-summary',
        template: __webpack_require__(43)
    }),
    __metadata("design:paramtypes", [])
], ErrorSummaryComponent);
exports.ErrorSummaryComponent = ErrorSummaryComponent;


/***/ },
/* 33 */
/***/ function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = __webpack_require__(0);
var FooterComponent = (function () {
    function FooterComponent() {
    }
    return FooterComponent;
}());
FooterComponent = __decorate([
    core_1.Component({
        selector: 'appc-footer',
        styles: [__webpack_require__(48)],
        template: __webpack_require__(44)
    }),
    __metadata("design:paramtypes", [])
], FooterComponent);
exports.FooterComponent = FooterComponent;


/***/ },
/* 34 */
/***/ function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = __webpack_require__(0);
var router_1 = __webpack_require__(2);
var auth_service_1 = __webpack_require__(7);
var HeaderComponent = (function () {
    function HeaderComponent(router, authService) {
        this.router = router;
        this.authService = authService;
        this.isCollapsed = true;
    }
    HeaderComponent.prototype.toggleNav = function () {
        this.isCollapsed = !this.isCollapsed;
    };
    return HeaderComponent;
}());
HeaderComponent = __decorate([
    core_1.Component({
        selector: 'appc-header',
        styles: [__webpack_require__(49)],
        template: __webpack_require__(45)
    }),
    __metadata("design:paramtypes", [router_1.Router, auth_service_1.AuthService])
], HeaderComponent);
exports.HeaderComponent = HeaderComponent;


/***/ },
/* 35 */
/***/ function(module, exports, __webpack_require__) {

"use strict";

var User = (function () {
    function User(displayName, roles) {
        this.displayName = displayName;
        this.roles = roles;
    }
    return User;
}());
exports.User = User;


/***/ },
/* 36 */
/***/ function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = __webpack_require__(0);
var UppercasePipe = (function () {
    function UppercasePipe() {
    }
    UppercasePipe.prototype.transform = function (value) {
        return value.toUpperCase();
    };
    return UppercasePipe;
}());
UppercasePipe = __decorate([
    core_1.Pipe({
        name: 'appfUppercase'
    }),
    __metadata("design:paramtypes", [])
], UppercasePipe);
exports.UppercasePipe = UppercasePipe;


/***/ },
/* 37 */
/***/ function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = __webpack_require__(0);
var content_service_1 = __webpack_require__(11);
var ApiTranslationLoader = (function () {
    function ApiTranslationLoader(cs) {
        this.cs = cs;
    }
    ApiTranslationLoader.prototype.getTranslation = function (lang) {
        return this.cs.get(lang);
    };
    return ApiTranslationLoader;
}());
ApiTranslationLoader = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [content_service_1.ContentService])
], ApiTranslationLoader);
exports.ApiTranslationLoader = ApiTranslationLoader;
var CustomMissingTranslationHandler = (function () {
    function CustomMissingTranslationHandler() {
    }
    CustomMissingTranslationHandler.prototype.handle = function (params) {
        return params.key;
    };
    return CustomMissingTranslationHandler;
}());
CustomMissingTranslationHandler = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [])
], CustomMissingTranslationHandler);
exports.CustomMissingTranslationHandler = CustomMissingTranslationHandler;


/***/ },
/* 38 */
/***/ function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = __webpack_require__(0);
var router_1 = __webpack_require__(2);
var UtilityService = (function () {
    function UtilityService(router) {
        this._router = router;
    }
    UtilityService.prototype.convertDateTime = function (date) {
        var _formattedDate = new Date(date.toString());
        return _formattedDate.toDateString();
    };
    UtilityService.prototype.navigate = function (path) {
        this._router.navigate([path]);
    };
    UtilityService.prototype.navigateToSignIn = function () {
        this.navigate('/login');
    };
    return UtilityService;
}());
UtilityService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [router_1.Router])
], UtilityService);
exports.UtilityService = UtilityService;


/***/ },
/* 39 */
/***/ function(module, exports) {

module.exports = "<!-- header component -->\n<appc-header></appc-header>\n\n<div class=\"container\">\n    <!-- component routing placeholder -->\n    <router-outlet></router-outlet>\n\n</div>\n\n<div class=\"container\">\n    <!-- footer component -->\n    <appc-footer></appc-footer>\n\n</div>";

/***/ },
/* 40 */
/***/ function(module, exports) {

module.exports = "<div class=\"jumbotron\">\n    <div class=\"container\">\n        <h2>Asp.Net Core &hearts; Angular 2 &hearts; Bootstrap 4 &hearts; Webpack</h2>\n    </div>\n</div>\n\n<div class=\"row\">\n    <div class=\"col-md-4\">\n        <h4>\n            Asp.Net Core\n        </h4>\n        <p>\n            ASP.NET is an open source web framework for building modern web applications and services.\n        </p>\n        <p>\n            <a class=\"btn btn-outline-info\" target=\"_blank\" href=\"http://www.asp.net/\">More info »</a>\n        </p>\n    </div>\n    <div class=\"col-md-4\">\n        <h4>\n            Angular 2\n        </h4>\n        <p>\n            One Framework Mobile and desktop\n        </p>\n        <p>\n            <a class=\"btn btn-outline-info\" target=\"_blank\" href=\"https://angular.io/\">More info »</a>\n        </p>\n    </div>\n\n    <div class=\"col-md-4\">\n        <h4>\n            ng-bootstrap\n        </h4>\n        <p>\n            Angular 2, powered by Bootstrap 4 written by the angular-ui Team.\n        </p>\n        <p>\n            <a class=\"btn btn-outline-info\" target=\"_blank\" href=\"https://ng-bootstrap.github.io/#/home\">More info »</a>\n        </p>\n    </div>\n    <div class=\"col-md-4\">\n        <h4>\n            Bootstrap 4\n        </h4>\n        <p>\n            Bootstrap is the most popular HTML, CSS, and JS framework for developing responsive, mobile first projects on the web.\n        </p>\n        <p>\n            <a class=\"btn btn-outline-info\" target=\"_blank\" href=\"http://v4-alpha.getbootstrap.com/\">More info »</a>\n        </p>\n    </div>\n    <div class=\"col-md-4\">\n        <h4>\n            Webpack 2\n        </h4>\n        <p>\n            Module bundler\n        </p>\n        <p>\n            <a class=\"btn btn-outline-info\" target=\"_blank\" href=\"https://webpack.js.org/\">More info »</a>\n        </p>\n    </div>\n    <div class=\"col-md-4\">\n        <h4>\n            ng2-translate\n        </h4>\n        <p>\n            An implementation of angular translate for Angular 2.\n        </p>\n        <p>\n            <a class=\"btn btn-outline-info\" target=\"_blank\" href=\"https://github.com/ocombe/ng2-translate\">More info »</a>\n        </p>\n    </div>\n</div>";

/***/ },
/* 41 */
/***/ function(module, exports) {

module.exports = "<!--{{f.controls[control.key]  | json}}-->\n<div #f=\"ngForm\" [formGroup]=\"form\" [ngSwitch]=\"control.type\" class=\"form-group {{control.class}}\" [class.has-danger]=\"invalid\"\n    [class.has-success]=\"valid\" [class.form-check]=\"control.type === 'checkbox'\">\n\n    <label *ngSwitchCase=\"'dropdown'\" [attr.for]=\"control.key\" class=\"col-form-label\">{{control.label}}</label>\n    <select *ngSwitchCase=\"'dropdown'\" [id]=\"control.key\" [formControlName]=\"control.key\" [class.form-control-success]=\"valid\"\n        [class.form-control-danger]=\"invalid\" class=\"form-control\">\n            <option *ngFor=\"let opt of control.options\" [value]=\"opt.key\">{{opt.value}}</option>\n    </select>\n\n    <label *ngSwitchCase=\"'checkbox'\" [attr.for]=\"control.key\" class=\"form-check-label\">\n    <input #ck *ngSwitchCase=\"'checkbox'\" (change)=\"control.value = ck.checked\" [id]=\"control.key\" [formControlName]=\"control.key\"\n        [type]=\"control.type\" class=\"form-check-input\">\n        {{control.label}}\n    </label>\n\n    <!--This is not the switch case because of multiple control types-->\n    <label *ngIf=\"control.type === 'textbox' || control.type === 'email' || control.type === 'password'\" [attr.for]=\"control.key\" class=\"col-form-label\">{{control.label}}</label>\n    <input *ngIf=\"control.type === 'textbox' || control.type === 'email' || control.type === 'password'\" [id]=\"control.key\" [formControlName]=\"control.key\" [type]=\"control.type\"\n        [placeholder]=\"control.placeholder\" [class.form-control-success]=\"valid\" [class.form-control-danger]=\"invalid\" class=\"form-control\">\n\n\n\n    <appc-control-error-message [form]=\"f\" [control]=\"control\"></appc-control-error-message>\n\n</div>";

/***/ },
/* 42 */
/***/ function(module, exports) {

module.exports = "<form class=\"{{formClass}}\" (ngSubmit)=\"onSubmit()\" [formGroup]=\"form\" novalidate role=\"form\">\n    <appc-dynamic-control *ngFor=\"let ctrl of controls\" [control]=\"ctrl\" [form]=\"form\"></appc-dynamic-control>\n\n    <button type=\"submit\" class=\"btn btn-primary pull-right\" [disabled]=\"!form.valid\">{{btnText}}</button>\n</form>";

/***/ },
/* 43 */
/***/ function(module, exports) {

module.exports = "<div class=\"alert alert-danger\" *ngIf=\"errors?.length > 0\">\n    <div *ngFor=\"let error of errors\">\n        {{error}}\n    </div>\n</div>";

/***/ },
/* 44 */
/***/ function(module, exports) {

module.exports = "<footer class=\"text-muted\">\n  <div class=\"container\">\n      <hr>\n    <p class=\"text-muted\">\n        &copy; 2015-2016 {{'title' | translate}} Company\n    </p>\n  </div>\n</footer>\n";

/***/ },
/* 45 */
/***/ function(module, exports) {

module.exports = "<header class=\"navbar navbar-light navbar-static-top\">\n    <div class=\"container\">\n        <nav>\n            <div class=\"clearfix\">\n                <button class=\"navbar-toggler float-xs-right hidden-sm-up collapsed\" type=\"button\" data-toggle=\"collapse\" data-target=\"#bd-main-nav\"\n                    aria-controls=\"bd-main-nav\" aria-expanded=\"false\" aria-label=\"Toggle navigation\" (click)=\"toggleNav()\">\n                    ☰\n                </button>\n                <a class=\"navbar-brand hidden-sm-up\" routerLink=\"home\">\n                    Ng2fbBootstrap\n                </a>\n            </div>\n            <div class=\"navbar-toggleable-xs collapse\" [class.in]=\"!isCollapsed\" id=\"bd-main-nav\" aria-expanded=\"false\" style=\"height: 0px;\">\n                <ul class=\"nav navbar-nav\">\n                    <li class=\"nav-item\">\n                        <a class=\"nav-item nav-link\" routerLinkActive=\"active\" routerLink=\"home\">Home</a>\n                    </li>\n                    <li class=\"nav-item\">\n                        <a class=\"nav-item nav-link\" routerLinkActive=\"active\" routerLink=\"examples\">Examples</a>\n                    </li>\n                    <li>\n                        <ul class=\"nav float-xs-left float-md-right\">\n\n                            <li class=\"nav-item\" *ngIf=\"authService.isLoggedIn() && authService.user()\">\n                                <a class=\"nav-item nav-link\" routerLinkActive=\"active\" routerLink=\"profile\">\n                                    <i class=\"fa fa-user\"></i> {{authService.user().displayName}}\n                                </a>\n                            </li>\n\n                            <li class=\"nav-item\" *ngIf=\"!authService.isLoggedIn()\">\n                                <a class=\"nav-item nav-link\" routerLinkActive=\"active\" routerLink=\"register\">\n                                    <i class=\"fa fa-user\"></i> Register\n                                </a>\n                            </li>\n\n                            <li class=\"nav-item\" *ngIf=\"!authService.isLoggedIn()\">\n                                <a class=\"nav-item nav-link\" routerLinkActive=\"active\" routerLink=\"login\">\n                                    <i class=\"fa fa-sign-in\"></i>Login\n                                </a>\n                            </li>\n                            <li class=\"nav-item\" *ngIf=\"authService.isLoggedIn() && authService.user()?.roles?.indexOf('Admin') > -1\">\n                                <a class=\"nav-item nav-link\" routerLinkActive=\"active\" routerLink=\"admin\">\n                                    <i class=\"fa fa-gear\"></i> Admin\n                                </a>\n                            </li>\n                            <li class=\"nav-item\" *ngIf=\"authService.isLoggedIn()\">\n                                <a class=\"nav-item nav-link\" (click)=\"authService.logout()\" routerLinkActive=\"active\" href=\"javascript:void(null);\">\n                                    <i class=\"fa fa-sign-out\"></i> Logout\n                                </a>\n                            </li>\n\n                        </ul>\n                    </li>\n                </ul>\n            </div>\n        </nav>\n    </div>\n</header>";

/***/ },
/* 46 */
/***/ function(module, exports) {

module.exports = ""

/***/ },
/* 47 */
/***/ function(module, exports) {

module.exports = "\n"

/***/ },
/* 48 */
/***/ function(module, exports) {

module.exports = ".footer {\n  padding-top: 40px;\n  padding-bottom: 40px;\n  margin-top: 40px;\n  border-top: 1px solid #eee; }\n"

/***/ },
/* 49 */
/***/ function(module, exports) {

module.exports = ""

/***/ },
/* 50 */
/***/ function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(1))(371);

/***/ },
/* 51 */
/***/ function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(1))(404);

/***/ },
/* 52 */
/***/ function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(1))(408);

/***/ },
/* 53 */
/***/ function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(1))(550);

/***/ },
/* 54 */
/***/ function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(1))(561);

/***/ },
/* 55 */
/***/ function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(1))(584);

/***/ },
/* 56 */
/***/ function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(1))(8);

/***/ },
/* 57 */
/***/ function(module, exports, __webpack_require__) {

"use strict";

__webpack_require__(18);
__webpack_require__(19);
var platform_browser_dynamic_1 = __webpack_require__(17);
var core_1 = __webpack_require__(0);
var app_module_1 = __webpack_require__(16);
// Enable either Hot Module Reloading or production mode
/* tslint:disable */
if (false) {
    module['hot'].accept();
    module['hot'].dispose(function () { });
}
else {
    core_1.enableProdMode();
}
platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(app_module_1.AppModule);


/***/ }
/******/ ]);
//# sourceMappingURL=main.js.map