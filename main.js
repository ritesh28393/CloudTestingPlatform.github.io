(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/dashboard/dashboard.component.ts");
/* harmony import */ var _module_tool_module_tool_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./module-tool/module-tool.component */ "./src/app/module-tool/module-tool.component.ts");
/* harmony import */ var _csp_csp_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./csp/csp.component */ "./src/app/csp/csp.component.ts");
/* harmony import */ var _csp_login_csp_login_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./csp-login/csp-login.component */ "./src/app/csp-login/csp-login.component.ts");
/* harmony import */ var _instance_info_instance_info_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./instance-info/instance-info.component */ "./src/app/instance-info/instance-info.component.ts");
/* harmony import */ var _uploader_uploader_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./uploader/uploader.component */ "./src/app/uploader/uploader.component.ts");
/* harmony import */ var _test_scenario_list_test_scenario_list_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./test-scenario-list/test-scenario-list.component */ "./src/app/test-scenario-list/test-scenario-list.component.ts");
/* harmony import */ var _summary_report_summary_report_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./summary-report/summary-report.component */ "./src/app/summary-report/summary-report.component.ts");
/* harmony import */ var _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./not-found/not-found.component */ "./src/app/not-found/not-found.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var routes = [
    { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_2__["LoginComponent"] },
    { path: 'dashboard', component: _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_3__["DashboardComponent"] },
    { path: 'module-tool', component: _module_tool_module_tool_component__WEBPACK_IMPORTED_MODULE_4__["ModuleToolComponent"] },
    { path: 'csp', component: _csp_csp_component__WEBPACK_IMPORTED_MODULE_5__["CspComponent"] },
    { path: 'csp-login', component: _csp_login_csp_login_component__WEBPACK_IMPORTED_MODULE_6__["CspLoginComponent"] },
    { path: 'instance-info', component: _instance_info_instance_info_component__WEBPACK_IMPORTED_MODULE_7__["InstanceInfoComponent"] },
    { path: 'uploader', component: _uploader_uploader_component__WEBPACK_IMPORTED_MODULE_8__["UploaderComponent"] },
    { path: 'test-scenario-list', component: _test_scenario_list_test_scenario_list_component__WEBPACK_IMPORTED_MODULE_9__["TestScenarioListComponent"] },
    { path: 'summary-report', component: _summary_report_summary_report_component__WEBPACK_IMPORTED_MODULE_10__["SummaryReportComponent"] },
    { path: '', redirectTo: '/login', pathMatch: 'full' },
    { path: '**', component: _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_11__["NotFoundComponent"] },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'CloudTestingPlatform';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: "<router-outlet></router-outlet>",
            styles: []
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/dashboard/dashboard.component.ts");
/* harmony import */ var _module_tool_module_tool_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./module-tool/module-tool.component */ "./src/app/module-tool/module-tool.component.ts");
/* harmony import */ var _csp_csp_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./csp/csp.component */ "./src/app/csp/csp.component.ts");
/* harmony import */ var _csp_login_csp_login_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./csp-login/csp-login.component */ "./src/app/csp-login/csp-login.component.ts");
/* harmony import */ var _instance_info_instance_info_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./instance-info/instance-info.component */ "./src/app/instance-info/instance-info.component.ts");
/* harmony import */ var _uploader_uploader_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./uploader/uploader.component */ "./src/app/uploader/uploader.component.ts");
/* harmony import */ var _test_scenario_list_test_scenario_list_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./test-scenario-list/test-scenario-list.component */ "./src/app/test-scenario-list/test-scenario-list.component.ts");
/* harmony import */ var _summary_report_summary_report_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./summary-report/summary-report.component */ "./src/app/summary-report/summary-report.component.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/footer/footer.component.ts");
/* harmony import */ var _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./not-found/not-found.component */ "./src/app/not-found/not-found.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"],
                _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_5__["DashboardComponent"],
                _module_tool_module_tool_component__WEBPACK_IMPORTED_MODULE_6__["ModuleToolComponent"],
                _csp_csp_component__WEBPACK_IMPORTED_MODULE_7__["CspComponent"],
                _csp_login_csp_login_component__WEBPACK_IMPORTED_MODULE_8__["CspLoginComponent"],
                _instance_info_instance_info_component__WEBPACK_IMPORTED_MODULE_9__["InstanceInfoComponent"],
                _uploader_uploader_component__WEBPACK_IMPORTED_MODULE_10__["UploaderComponent"],
                _test_scenario_list_test_scenario_list_component__WEBPACK_IMPORTED_MODULE_11__["TestScenarioListComponent"],
                _summary_report_summary_report_component__WEBPACK_IMPORTED_MODULE_12__["SummaryReportComponent"],
                _header_header_component__WEBPACK_IMPORTED_MODULE_13__["HeaderComponent"],
                _footer_footer_component__WEBPACK_IMPORTED_MODULE_14__["FooterComponent"],
                _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_15__["NotFoundComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/csp-login/csp-login.component.html":
/*!****************************************************!*\
  !*** ./src/app/csp-login/csp-login.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\r\n<div class=\"content-screen\">\r\n    <form>\r\n        <div class=\"row\">\r\n            <div class=\"offset-lg-4 col-lg-4\">\r\n                <div class=\"form-group\">\r\n                    <label for=\"user\">User Name:</label>\r\n                    <input type=\"text\" class=\"form-control\" id=\"user\">\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"row\">\r\n            <div class=\"offset-lg-4 col-lg-4\">\r\n                <div class=\"form-group\">\r\n                    <label for=\"pwd\">Password:</label>\r\n                    <input type=\"password\" class=\"form-control\" id=\"pwd\">\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"row\">\r\n            <div class=\"offset-lg-4 col-lg-1\">\r\n                <button type=\"submit\" class=\"btn btn-primary\" (click)=\"navigate('/instance-info')\">Submit</button>\r\n            </div>\r\n        </div>\r\n    </form>\r\n</div>\r\n<app-footer></app-footer>"

/***/ }),

/***/ "./src/app/csp-login/csp-login.component.ts":
/*!**************************************************!*\
  !*** ./src/app/csp-login/csp-login.component.ts ***!
  \**************************************************/
/*! exports provided: CspLoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CspLoginComponent", function() { return CspLoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CspLoginComponent = /** @class */ (function () {
    function CspLoginComponent(_router) {
        this._router = _router;
    }
    CspLoginComponent.prototype.ngOnInit = function () {
    };
    CspLoginComponent.prototype.navigate = function (path) {
        this._router.navigate([path]);
    };
    CspLoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            template: __webpack_require__(/*! ./csp-login.component.html */ "./src/app/csp-login/csp-login.component.html")
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], CspLoginComponent);
    return CspLoginComponent;
}());



/***/ }),

/***/ "./src/app/csp/csp.component.html":
/*!****************************************!*\
  !*** ./src/app/csp/csp.component.html ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\r\n<div class=\"content-screen\">\r\n    <div class=\"card-deck\">\r\n        <div class=\"card bg-light hover\" (click)=\"navigate('/csp-login')\">\r\n            <div class=\"card-body text-center\">\r\n                <p class=\"card-text\">\r\n                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.\r\n                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat\r\n                </p>\r\n            </div>\r\n        </div>\r\n        <div class=\"card bg-light hover\" (click)=\"navigate('/csp-login')\">\r\n            <div class=\"card-body text-center\">\r\n                <p class=\"card-text\">\r\n                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.\r\n                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat\r\n                </p>\r\n            </div>\r\n        </div>\r\n        <div class=\"card bg-light hover\" (click)=\"navigate('/csp-login')\">\r\n            <div class=\"card-body text-center\">\r\n                <p class=\"card-text\">\r\n                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.\r\n                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat\r\n                </p>\r\n            </div>\r\n        </div>\r\n        <div class=\"card bg-light hover\" (click)=\"navigate('/csp-login')\">\r\n            <div class=\"card-body text-center\">\r\n                <p class=\"card-text\">\r\n                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.\r\n                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat\r\n                </p>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n<app-footer></app-footer>"

/***/ }),

/***/ "./src/app/csp/csp.component.ts":
/*!**************************************!*\
  !*** ./src/app/csp/csp.component.ts ***!
  \**************************************/
/*! exports provided: CspComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CspComponent", function() { return CspComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CspComponent = /** @class */ (function () {
    function CspComponent(_router) {
        this._router = _router;
    }
    CspComponent.prototype.ngOnInit = function () {
    };
    CspComponent.prototype.navigate = function (path) {
        this._router.navigate([path]);
    };
    CspComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            template: __webpack_require__(/*! ./csp.component.html */ "./src/app/csp/csp.component.html")
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], CspComponent);
    return CspComponent;
}());



/***/ }),

/***/ "./src/app/dashboard/dashboard.component.ts":
/*!**************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.ts ***!
  \**************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DashboardComponent = /** @class */ (function () {
    function DashboardComponent() {
    }
    DashboardComponent.prototype.ngOnInit = function () {
    };
    DashboardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-dashboard',
            template: "\n    <p>\n      dashboard works!\n    </p>\n  ",
            styles: []
        }),
        __metadata("design:paramtypes", [])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/app/footer/footer.component.ts":
/*!********************************************!*\
  !*** ./src/app/footer/footer.component.ts ***!
  \********************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-footer',
            template: "\n    <div class=\"my-footer\">\n      footer works!\n    </div>\n  ",
            styles: []
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/header/header.component.ts":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HeaderComponent = /** @class */ (function () {
    function HeaderComponent() {
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-header',
            template: "\n    <div class=\"my-header\">\n      header works!\n    </div>\n  ",
            styles: []
        }),
        __metadata("design:paramtypes", [])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/instance-info/instance-info.component.html":
/*!************************************************************!*\
  !*** ./src/app/instance-info/instance-info.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\r\n<div class=\"content-screen\">\r\n    <div class=\"card-columns\">\r\n        <div class=\"card bg-light\">\r\n            <div class=\"card-body text-center\">\r\n                <p class=\"card-text\">\r\n                    {{flipBackFlag? backCardText : frontCardText}}\r\n                </p>\r\n                <a href=\"javascript:void(0)\" (click)=\"flip()\" class=\"card-link\">See{{flipBackFlag? ' Info' : ' Property'}}</a>\r\n                <a href=\"javascript:void(0)\" (click)=\"navigate('/uploader')\" class=\"card-link\">Process</a>\r\n            </div>\r\n        </div>\r\n        <div class=\"card bg-light\">\r\n            <div class=\"card-body text-center\">\r\n                <p class=\"card-text\">\r\n                    {{flipBackFlag? backCardText : frontCardText}}\r\n                </p>\r\n                <a href=\"javascript:void(0)\" (click)=\"flip()\" class=\"card-link\">See{{flipBackFlag? ' Info' : ' Property'}}</a>\r\n                <a href=\"javascript:void(0)\" (click)=\"navigate('/uploader')\" class=\"card-link\">Process</a>\r\n            </div>\r\n        </div>\r\n        <div class=\"card bg-light\">\r\n            <div class=\"card-body text-center\">\r\n                <p class=\"card-text\">\r\n                    {{flipBackFlag? backCardText : frontCardText}}\r\n                </p>\r\n                <a href=\"javascript:void(0)\" (click)=\"flip()\" class=\"card-link\">See{{flipBackFlag? ' Info' : ' Property'}}</a>\r\n                <a href=\"javascript:void(0)\" (click)=\"navigate('/uploader')\" class=\"card-link\">Process</a>\r\n            </div>\r\n        </div>\r\n        <div class=\"card bg-light\">\r\n            <div class=\"card-body text-center\">\r\n                <p class=\"card-text\">\r\n                    {{flipBackFlag? backCardText : frontCardText}}\r\n                </p>\r\n                <a href=\"javascript:void(0)\" (click)=\"flip()\" class=\"card-link\">See{{flipBackFlag? ' Info' : ' Property'}}</a>\r\n                <a href=\"javascript:void(0)\" (click)=\"navigate('/uploader')\" class=\"card-link\">Process</a>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n<app-footer></app-footer>"

/***/ }),

/***/ "./src/app/instance-info/instance-info.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/instance-info/instance-info.component.ts ***!
  \**********************************************************/
/*! exports provided: InstanceInfoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InstanceInfoComponent", function() { return InstanceInfoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var InstanceInfoComponent = /** @class */ (function () {
    function InstanceInfoComponent(_router) {
        this._router = _router;
        this.frontCardText = 'Front Instance Info';
        this.backCardText = 'Back Instance Property';
        this.flipBackFlag = false;
    }
    InstanceInfoComponent.prototype.ngOnInit = function () {
    };
    InstanceInfoComponent.prototype.flip = function () {
        this.flipBackFlag = !this.flipBackFlag;
    };
    InstanceInfoComponent.prototype.navigate = function (path) {
        this._router.navigate([path]);
    };
    InstanceInfoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            template: __webpack_require__(/*! ./instance-info.component.html */ "./src/app/instance-info/instance-info.component.html")
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], InstanceInfoComponent);
    return InstanceInfoComponent;
}());



/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"full-screen\">\r\n    <form>\r\n        <div class=\"row\">\r\n            <div class=\"offset-lg-4 col-lg-4\">\r\n                <div class=\"form-group\">\r\n                    <label for=\"user\">User Name:</label>\r\n                    <input type=\"text\" class=\"form-control\" id=\"user\">\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"row\">\r\n            <div class=\"offset-lg-4 col-lg-4\">\r\n                <div class=\"form-group\">\r\n                    <label for=\"pwd\">Password:</label>\r\n                    <input type=\"password\" class=\"form-control\" id=\"pwd\">\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"row\">\r\n            <div class=\"offset-lg-4 col-lg-1\">\r\n                <button type=\"submit\" class=\"btn btn-primary\" (click)=\"navigate('/module-tool')\">Submit</button>\r\n            </div>\r\n        </div>\r\n    </form>\r\n</div>"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LoginComponent = /** @class */ (function () {
    function LoginComponent(_router) {
        this._router = _router;
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.navigate = function (path) {
        this._router.navigate([path]);
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login.component.html")
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/module-tool/module-tool.component.html":
/*!********************************************************!*\
  !*** ./src/app/module-tool/module-tool.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\r\n<div class=\"content-screen\">\r\n    <div class=\"card-deck\">\r\n        <div class=\"card bg-light hover\" (click)=\"navigate('/csp')\">\r\n            <div class=\"card-body text-center\">\r\n                <p class=\"card-text\">\r\n                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.\r\n                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat\r\n                </p>\r\n            </div>\r\n        </div>\r\n        <div class=\"card bg-light hover\" (click)=\"navigate('/csp')\">\r\n            <div class=\"card-body text-center\">\r\n                <p class=\"card-text\">\r\n                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.\r\n                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat\r\n                </p>\r\n            </div>\r\n        </div>\r\n        <div class=\"card bg-light hover\" (click)=\"navigate('/csp')\">\r\n            <div class=\"card-body text-center\">\r\n                <p class=\"card-text\">\r\n                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.\r\n                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat\r\n                </p>\r\n            </div>\r\n        </div>\r\n        <div class=\"card bg-light hover\" (click)=\"navigate('/csp')\">\r\n            <div class=\"card-body text-center\">\r\n                <p class=\"card-text\">\r\n                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.\r\n                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat\r\n                </p>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n<app-footer></app-footer>"

/***/ }),

/***/ "./src/app/module-tool/module-tool.component.ts":
/*!******************************************************!*\
  !*** ./src/app/module-tool/module-tool.component.ts ***!
  \******************************************************/
/*! exports provided: ModuleToolComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModuleToolComponent", function() { return ModuleToolComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ModuleToolComponent = /** @class */ (function () {
    function ModuleToolComponent(_router) {
        this._router = _router;
    }
    ModuleToolComponent.prototype.ngOnInit = function () {
    };
    ModuleToolComponent.prototype.navigate = function (path) {
        this._router.navigate([path]);
    };
    ModuleToolComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            template: __webpack_require__(/*! ./module-tool.component.html */ "./src/app/module-tool/module-tool.component.html")
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], ModuleToolComponent);
    return ModuleToolComponent;
}());



/***/ }),

/***/ "./src/app/not-found/not-found.component.ts":
/*!**************************************************!*\
  !*** ./src/app/not-found/not-found.component.ts ***!
  \**************************************************/
/*! exports provided: NotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotFoundComponent", function() { return NotFoundComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NotFoundComponent = /** @class */ (function () {
    function NotFoundComponent() {
    }
    NotFoundComponent.prototype.ngOnInit = function () {
    };
    NotFoundComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            template: "\n    <p>\n      Page Not Found!\n    </p>\n  "
        }),
        __metadata("design:paramtypes", [])
    ], NotFoundComponent);
    return NotFoundComponent;
}());



/***/ }),

/***/ "./src/app/summary-report/summary-report.component.html":
/*!**************************************************************!*\
  !*** ./src/app/summary-report/summary-report.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\r\n<div class=\"content-screen\">\r\n    <div class=\"card bg-danger text-light\">\r\n        <div class=\"card-body\">\r\n            <div class=\"row\">\r\n                <div class=\"col-lg-3\">Property 1</div>\r\n                <div class=\"col-lg-6\">orem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore\r\n                    magna aliqua. Ut enim ad minim veniam, quis nostrud exercita</div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <br/>\r\n    <div class=\"card bg-success text-light\">\r\n        <div class=\"card-body\">\r\n            <div class=\"row\">\r\n                <div class=\"col-lg-3\">Property 1</div>\r\n                <div class=\"col-lg-6\">orem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore\r\n                    magna aliqua. Ut enim ad minim veniam, quis nostrud exercita</div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <br/>\r\n    <div class=\"card bg-success text-light\">\r\n        <div class=\"card-body\">\r\n            <div class=\"row\">\r\n                <div class=\"col-lg-3\">Property 1</div>\r\n                <div class=\"col-lg-6\">orem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore\r\n                    magna aliqua. Ut enim ad minim veniam, quis nostrud exercita</div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <br/>\r\n    <div class=\"card bg-success text-light\">\r\n        <div class=\"card-body\">\r\n            <div class=\"row\">\r\n                <div class=\"col-lg-3\">Property 1</div>\r\n                <div class=\"col-lg-6\">orem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore\r\n                    magna aliqua. Ut enim ad minim veniam, quis nostrud exercita</div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <br/>\r\n    <div class=\"card bg-danger text-light\">\r\n        <div class=\"card-body\">\r\n            <div class=\"row\">\r\n                <div class=\"col-lg-3\">Property 1</div>\r\n                <div class=\"col-lg-6\">orem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore\r\n                    magna aliqua. Ut enim ad minim veniam, quis nostrud exercita</div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <br/>\r\n    <div class=\"card bg-success text-light\">\r\n        <div class=\"card-body\">\r\n            <div class=\"row\">\r\n                <div class=\"col-lg-3\">Property 1</div>\r\n                <div class=\"col-lg-6\">orem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore\r\n                    magna aliqua. Ut enim ad minim veniam, quis nostrud exercita</div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <br/>\r\n</div>\r\n<app-footer></app-footer>"

/***/ }),

/***/ "./src/app/summary-report/summary-report.component.ts":
/*!************************************************************!*\
  !*** ./src/app/summary-report/summary-report.component.ts ***!
  \************************************************************/
/*! exports provided: SummaryReportComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SummaryReportComponent", function() { return SummaryReportComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SummaryReportComponent = /** @class */ (function () {
    function SummaryReportComponent(_router) {
        this._router = _router;
    }
    SummaryReportComponent.prototype.ngOnInit = function () {
    };
    SummaryReportComponent.prototype.navigate = function (path) {
        this._router.navigate([path]);
    };
    SummaryReportComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            template: __webpack_require__(/*! ./summary-report.component.html */ "./src/app/summary-report/summary-report.component.html")
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], SummaryReportComponent);
    return SummaryReportComponent;
}());



/***/ }),

/***/ "./src/app/test-scenario-list/test-scenario-list.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/test-scenario-list/test-scenario-list.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\r\n<div class=\"content-screen\">\r\n    <form>\r\n        <div class=\"row\">\r\n            <div class=\"offset-lg-3 col-lg-6\">\r\n                <div class=\"card bg-light text-dark\">\r\n                    <div class=\"card-body\">\r\n                        <div class=\"custom-control custom-checkbox\">\r\n                            <input type=\"checkbox\" class=\"custom-control-input\" id=\"customCheck1\" name=\"example1\">\r\n                            <label class=\"custom-control-label\" for=\"customCheck1\">Value 1</label>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <br/>\r\n        <div class=\"row\">\r\n            <div class=\"offset-lg-3 col-lg-6\">\r\n                <div class=\"card bg-light text-dark\">\r\n                    <div class=\"card-body\">\r\n                        <div class=\"custom-control custom-checkbox\">\r\n                            <input type=\"checkbox\" class=\"custom-control-input\" id=\"customCheck2\" name=\"example1\">\r\n                            <label class=\"custom-control-label\" for=\"customCheck2\">Value 2</label>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <br/>\r\n        <div class=\"row\">\r\n            <div class=\"offset-lg-3 col-lg-6\">\r\n                <div class=\"card bg-light text-dark\">\r\n                    <div class=\"card-body\">\r\n                        <div class=\"custom-control custom-checkbox\">\r\n                            <input type=\"checkbox\" class=\"custom-control-input\" id=\"customCheck3\" name=\"example1\">\r\n                            <label class=\"custom-control-label\" for=\"customCheck3\">Value 3</label>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <br/>\r\n        <div class=\"row\">\r\n            <div class=\"offset-lg-5 col-lg-1\">\r\n                <button type=\"submit\" class=\"btn btn-primary\" (click)=\"navigate('/summary-report')\">Submit</button>\r\n            </div>\r\n        </div>\r\n    </form>\r\n</div>\r\n<app-footer></app-footer>"

/***/ }),

/***/ "./src/app/test-scenario-list/test-scenario-list.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/test-scenario-list/test-scenario-list.component.ts ***!
  \********************************************************************/
/*! exports provided: TestScenarioListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TestScenarioListComponent", function() { return TestScenarioListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TestScenarioListComponent = /** @class */ (function () {
    function TestScenarioListComponent(_router) {
        this._router = _router;
    }
    TestScenarioListComponent.prototype.ngOnInit = function () {
    };
    TestScenarioListComponent.prototype.navigate = function (path) {
        this._router.navigate([path]);
    };
    TestScenarioListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            template: __webpack_require__(/*! ./test-scenario-list.component.html */ "./src/app/test-scenario-list/test-scenario-list.component.html")
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], TestScenarioListComponent);
    return TestScenarioListComponent;
}());



/***/ }),

/***/ "./src/app/uploader/uploader.component.html":
/*!**************************************************!*\
  !*** ./src/app/uploader/uploader.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\r\n<div class=\"content-screen\">\r\n    <form>\r\n        <div class=\"row\">\r\n            <div class=\"offset-lg-3 col-lg-6\">\r\n                <div class=\"custom-file\">\r\n                    <input type=\"file\" class=\"custom-file-input\" id=\"customFile\">\r\n                    <label class=\"custom-file-label\" for=\"customFile\">Choose file</label>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <br/>\r\n        <div class=\"row\">\r\n            <div class=\"offset-lg-5 col-lg-1\">\r\n                <button type=\"submit\" class=\"btn btn-primary\" (click)=\"navigate('/test-scenario-list')\">Submit</button>\r\n            </div>\r\n        </div>\r\n    </form>\r\n</div>\r\n<app-footer></app-footer>"

/***/ }),

/***/ "./src/app/uploader/uploader.component.ts":
/*!************************************************!*\
  !*** ./src/app/uploader/uploader.component.ts ***!
  \************************************************/
/*! exports provided: UploaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UploaderComponent", function() { return UploaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UploaderComponent = /** @class */ (function () {
    function UploaderComponent(_router) {
        this._router = _router;
    }
    UploaderComponent.prototype.ngOnInit = function () {
    };
    UploaderComponent.prototype.navigate = function (path) {
        this._router.navigate([path]);
    };
    UploaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            template: __webpack_require__(/*! ./uploader.component.html */ "./src/app/uploader/uploader.component.html")
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], UploaderComponent);
    return UploaderComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, for easier debugging, you can ignore zone related error
 * stack frames such as `zone.run`/`zoneDelegate.invokeTask` by importing the
 * below file. Don't forget to comment it out in production mode
 * because it will have a performance impact when errors are thrown
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Ritesh Raj\Desktop\CloudTestingPlatform\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map