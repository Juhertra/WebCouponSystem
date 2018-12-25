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

/***/ "./src/app/AdminApp/Components/company/company.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/AdminApp/Components/company/company.component.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "* {\n  box-sizing: border-box;\n}\n\nbody {\n  font-family: Arial, Helvetica, sans-serif;\n}\n\n.closebtn {\n  padding: 30px;\n  color: #888;\n  font-size: 20px;\n  cursor: pointer;\n}\n\n.closebtn:hover {\n  color: #000;\n}\n\n/* Float four columns side by side */\n\n.column {\n  float: left;\n  width: 25%;\n  padding: 0 10px;\n}\n\n/* Remove extra left and right margins, due to padding */\n\n.row {\n  margin: 0 -5px;\n}\n\n/* Clear floats after the columns */\n\n.row:after {\n  content: \"\";\n  display: table;\n  clear: both;\n}\n\n/* Responsive columns */\n\n@media screen and (max-width: 600px) {\n  .column {\n    width: 100%;\n    display: block;\n    margin-bottom: 20px;\n  }\n}\n\n/* Style the counter cards */\n\n.card {\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);\n  padding: 16px;\n  text-align: center;\n  background-color: #f1f1f1;\n}"

/***/ }),

/***/ "./src/app/AdminApp/Components/company/company.component.html":
/*!********************************************************************!*\
  !*** ./src/app/AdminApp/Components/company/company.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"column\" *ngFor=\"let company of companies; let i = index\" >\n    <div class=\"card\">\n      <div *ngIf=\"company?.name\">\n        <span class=\"closebtn\" (click)=deleteCompany(company)>&times;</span>\n        <h3>{{company.name}}</h3>\n        <!-- Button trigger modal -->\n        <button type=\"button\" (click)=\"j = i\" class=\"btn btn-primary\" data-toggle=\"modal\" data-target=\"#companyModal\">\n          Update\n        </button>\n      </div>\n      <!-- Modal -->\n      <div class=\"modal fade\" id=\"companyModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"companyModalLabel\"\n        aria-hidden=\"true\" ngModal=company>\n        <div class=\"modal-dialog\" role=\"document\">\n          <div class=\"modal-content\">\n            <div class=\"modal-header\">\n              <div *ngIf=\"companies[j]?.name\">\n                <h5 class=\"modal-title\" id=\"companyModalLabel\">{{companies[j].name}}</h5>\n                <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n                  <span aria-hidden=\"true\">&times;</span>\n                </button>\n              </div>\n            </div>\n            <div class=\"modal-body\">\n              <form>\n                <div class=\"form-group\">\n                  <label for=\"companyInputEmail1\">Email address</label>\n                  <div *ngIf=\"companies[j]?.email\">\n                    <input type=\"email\" class=\"form-control\" id=\"companyInputEmail1\" aria-describedby=\"emailHelp\"\n                      placeholder=\"Enter email\" value=\"{{companies[j].email}}\" [(ngModel)]=\"companies[j].email\" name=\"email\" #email=\"ngModel\">\n                    <small id=\"emailHelp\" class=\"form-text text-muted\">We'll never share your email with anyone else.</small>\n                  </div>\n                </div>\n                <div class=\"form-group\">\n                  <label for=\"companyInputPassword1\">Password</label>\n                  <div *ngIf=\"companies[j]?.password\">\n                    <input type=\"password\" class=\"form-control\" id=\"companyInputPassword1\" placeholder=\"Password\" value=\"{{companies[j].password}}\" [(ngModel)]=\"companies[j].password\" name=\"password\" #password=\"ngModel\">\n                  </div>\n                </div>\n                <div class=\"form-check\">\n                  <input type=\"checkbox\" class=\"form-check-input\" id=\"exampleCheck1\">\n                  <label class=\"form-check-label\" for=\"exampleCheck1\">Show Password</label>\n                </div>\n              </form>\n            </div>\n            <div class=\"modal-footer\">\n              <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Close</button>\n              <button type=\"button\" (click)=updateCompany(companies[j]) class=\"btn btn-primary\">Update changes</button>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n    <p><br></p>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/AdminApp/Components/company/company.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/AdminApp/Components/company/company.component.ts ***!
  \******************************************************************/
/*! exports provided: CompanyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompanyComponent", function() { return CompanyComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_admin_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/admin.service */ "./src/app/services/admin.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CompanyComponent = /** @class */ (function () {
    function CompanyComponent(_service) {
        this._service = _service;
        this.getAllCompanies();
    }
    CompanyComponent.prototype.ngOnInit = function () {
    };
    CompanyComponent.prototype.getAllCompanies = function () {
        var _this = this;
        this._service.getAllCompaniesService().subscribe(function (resp) {
            _this.companies = resp.json();
        });
    };
    CompanyComponent.prototype.deleteCompany = function (company) {
        // fire ajax Delete
        this._service.deleteCompanyService(company).subscribe(function (resp) {
            console.log(company);
            console.log(resp);
        });
    };
    CompanyComponent.prototype.updateCompany = function (company) {
        // fire ajax Put
        this._service.updateCompanyService(company).subscribe(function (resp) {
            console.log(company);
            console.log(resp);
        });
    };
    CompanyComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-company',
            template: __webpack_require__(/*! ./company.component.html */ "./src/app/AdminApp/Components/company/company.component.html"),
            styles: [__webpack_require__(/*! ./company.component.css */ "./src/app/AdminApp/Components/company/company.component.css")]
        }),
        __metadata("design:paramtypes", [_services_admin_service__WEBPACK_IMPORTED_MODULE_1__["AdminService"]])
    ], CompanyComponent);
    return CompanyComponent;
}());



/***/ }),

/***/ "./src/app/AdminApp/Components/createcompany/createcompany.component.css":
/*!*******************************************************************************!*\
  !*** ./src/app/AdminApp/Components/createcompany/createcompany.component.css ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n.container {\n  border-radius: 5px;\n  background-color: white;\n  padding: 20px;\n  width: 40%;\n  float: center;\n} \n\n/* Responsive layout - when the screen is less than 600px wide, make the two columns stack on top of each other instead of next to each other */ \n\n@media screen and (max-width: 600px) {\n  .col-25, .col-75, input[type=button] {\n      width: -webkit-fit-content;\n      width: -moz-fit-content;\n      width: fit-content;\n      margin-top: 0;\n  }\n}"

/***/ }),

/***/ "./src/app/AdminApp/Components/createcompany/createcompany.component.html":
/*!********************************************************************************!*\
  !*** ./src/app/AdminApp/Components/createcompany/createcompany.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <form>\n    <div class=\"row\">\n      <div class=\"col-25\">\n        <label for=\"cname\">Company Name</label>\n      </div>\n      <div class=\"col-75\">\n        <input type=\"text\" id=\"cname\" name=\"companyname\" placeholder=\"Company name\" [(ngModel)]=\"company.name\">\n      </div>\n    </div>\n    <div class=\"row\">\n      <div class=\"col-25\">\n        <label for=\"cpass\">Password</label>\n      </div>\n      <div class=\"col-75\">\n        <input type=\"password\" id=\"companyPassword\" name=\"comppass\" placeholder=\"Password\" [(ngModel)]=\"company.password\">\n      </div>\n    </div>\n    <div class=\"row\">\n      <div class=\"col-25\">\n        <label for=\"cmail\">E-mail</label>\n      </div>\n      <div class=\"col-75\">\n        <input type=\"email\" id=\"cmail\" name=\"mail\" aria-describedby=\"emailHelp\" placeholder=\"E-mail\" [(ngModel)]=\"company.email\">\n      </div>\n    </div><br>\n    <div hidden>\n      {{company | json}}\n    </div>\n    <div class=\"row\">\n      <button type=\"button\" class=\"btn btn-primary\" (click)=\"createCompany()\">Create company</button>\n    </div>\n  </form>\n</div>"

/***/ }),

/***/ "./src/app/AdminApp/Components/createcompany/createcompany.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/AdminApp/Components/createcompany/createcompany.component.ts ***!
  \******************************************************************************/
/*! exports provided: CreatecompanyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreatecompanyComponent", function() { return CreatecompanyComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _Common_Company__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../Common/Company */ "./src/app/Common/Company.ts");
/* harmony import */ var _services_admin_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/admin.service */ "./src/app/services/admin.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CreatecompanyComponent = /** @class */ (function () {
    function CreatecompanyComponent(_http, _service) {
        this._http = _http;
        this._service = _service;
        this.httpspath = "";
        this.company = new _Common_Company__WEBPACK_IMPORTED_MODULE_2__["Company"]();
        this.httpspath = this._service.adminApiPath;
    }
    CreatecompanyComponent.prototype.ngOnInit = function () {
    };
    CreatecompanyComponent.prototype.createCompany = function () {
        // fire ajax POST
        this._http.post(this.httpspath + "createCompany", this.company).subscribe(function (resp) {
            console.log(resp);
        });
    };
    CreatecompanyComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-createcompany',
            template: __webpack_require__(/*! ./createcompany.component.html */ "./src/app/AdminApp/Components/createcompany/createcompany.component.html"),
            styles: [__webpack_require__(/*! ./createcompany.component.css */ "./src/app/AdminApp/Components/createcompany/createcompany.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"], _services_admin_service__WEBPACK_IMPORTED_MODULE_3__["AdminService"]])
    ], CreatecompanyComponent);
    return CreatecompanyComponent;
}());



/***/ }),

/***/ "./src/app/AdminApp/Components/createcustomer/createcustomer.component.css":
/*!*********************************************************************************!*\
  !*** ./src/app/AdminApp/Components/createcustomer/createcustomer.component.css ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n.container {\n  border-radius: 5px;\n  background-color: white;\n  padding: 20px;\n  width: 40%;\n  float: center;\n} \n\n/* Responsive layout - when the screen is less than 600px wide, make the two columns stack on top of each other instead of next to each other */ \n\n@media screen and (max-width: 600px) {\n  .col-25, .col-75, input[type=button] {\n      width: -webkit-fit-content;\n      width: -moz-fit-content;\n      width: fit-content;\n      margin-top: 0;\n  }\n}"

/***/ }),

/***/ "./src/app/AdminApp/Components/createcustomer/createcustomer.component.html":
/*!**********************************************************************************!*\
  !*** ./src/app/AdminApp/Components/createcustomer/createcustomer.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <form>\n    <div class=\"row\">\n      <div class=\"col-25\">\n        <label for=\"custname\">Customer Name</label>\n      </div>\n      <div class=\"col-75\">\n        <input type=\"text\" id=\"custname\" name=\"customername\" placeholder=\"Customer name\" [(ngModel)]=\"customer.name\">\n      </div>\n    </div>\n    <div class=\"row\">\n      <div class=\"col-25\">\n        <label for=\"custpass\">Password</label>\n      </div>\n      <div class=\"col-75\">\n        <input type=\"password\" id=\"custpass\" name=\"customerpass\" placeholder=\"Password\" [(ngModel)]=\"customer.password\">\n      </div>\n    </div><br>\n    <div hidden>\n      {{customer | json}}\n    </div>\n    <div class=\"row\">\n      <button type=\"button\" class=\"btn btn-primary\" (click)=\"createCustomer()\" >Create Customer</button>\n    </div>\n  </form>\n</div>"

/***/ }),

/***/ "./src/app/AdminApp/Components/createcustomer/createcustomer.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/AdminApp/Components/createcustomer/createcustomer.component.ts ***!
  \********************************************************************************/
/*! exports provided: CreatecustomerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreatecustomerComponent", function() { return CreatecustomerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _Common_Customer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../Common/Customer */ "./src/app/Common/Customer.ts");
/* harmony import */ var _services_admin_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/admin.service */ "./src/app/services/admin.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CreatecustomerComponent = /** @class */ (function () {
    function CreatecustomerComponent(_http, _service) {
        this._http = _http;
        this._service = _service;
        this.httpspath = "";
        this.customer = new _Common_Customer__WEBPACK_IMPORTED_MODULE_2__["Customer"];
        this.httpspath = this._service.adminApiPath;
    }
    CreatecustomerComponent.prototype.ngOnInit = function () {
    };
    CreatecustomerComponent.prototype.createCustomer = function () {
        // fire ajax POST
        this._http.post(this.httpspath + "createCustomer", this.customer).subscribe(function (resp) {
            console.log(resp);
        });
    };
    CreatecustomerComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-createcustomer',
            template: __webpack_require__(/*! ./createcustomer.component.html */ "./src/app/AdminApp/Components/createcustomer/createcustomer.component.html"),
            styles: [__webpack_require__(/*! ./createcustomer.component.css */ "./src/app/AdminApp/Components/createcustomer/createcustomer.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"], _services_admin_service__WEBPACK_IMPORTED_MODULE_3__["AdminService"]])
    ], CreatecustomerComponent);
    return CreatecustomerComponent;
}());



/***/ }),

/***/ "./src/app/AdminApp/Components/customers/customers.component.css":
/*!***********************************************************************!*\
  !*** ./src/app/AdminApp/Components/customers/customers.component.css ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "* {\n  box-sizing: border-box;\n}\n\nbody {\n  font-family: Arial, Helvetica, sans-serif;\n}\n\n.closebtn {\n  padding: 30px;\n  color: #888;\n  font-size: 20px;\n  cursor: pointer;\n}\n\n.closebtn:hover {\n  color: #000;\n}\n\n/* Float four columns side by side */\n\n.column {\n  float: left;\n  width: 25%;\n  padding: 0 10px;\n}\n\n/* Remove extra left and right margins, due to padding */\n\n.row {\n  margin: 0 -5px;\n}\n\n/* Clear floats after the columns */\n\n.row:after {\n  content: \"\";\n  display: table;\n  clear: both;\n}\n\n/* Responsive columns */\n\n@media screen and (max-width: 600px) {\n  .column {\n    width: 100%;\n    display: block;\n    margin-bottom: 20px;\n  }\n}\n\n/* Style the counter cards */\n\n.card {\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);\n  padding: 16px;\n  text-align: center;\n  background-color: #f1f1f1;\n}"

/***/ }),

/***/ "./src/app/AdminApp/Components/customers/customers.component.html":
/*!************************************************************************!*\
  !*** ./src/app/AdminApp/Components/customers/customers.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"column\" *ngFor=\"let customer of customers; let i = index\">\n    <div class=\"card\"> \n      <div *ngIf=\"customer?.name\">\n        <span class=\"closebtn\" (click)=\"deleteCustomer(customer)\">&times;</span>\n        <h3>{{customer.name}}</h3>\n        <!-- Button trigger modal -->\n        <button type=\"button\" (click)=\"j = i\" class=\"btn btn-primary\" data-toggle=\"modal\" data-target=\"#customerModal\">\n          Update\n        </button>\n      </div>\n      <!-- Modal -->\n      <div class=\"modal fade\" id=\"customerModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"customerModalLabel\"\n        aria-hidden=\"true\" ngModal=customer>\n        <div class=\"modal-dialog\" role=\"document\">\n          <div class=\"modal-content\">\n            <div class=\"modal-header\">\n              <div *ngIf=\"customers[j]?.name\">\n                <h5 class=\"modal-title\" id=\"customerModalLabel\">{{customers[j].name}}</h5>\n                <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n                  <span aria-hidden=\"true\">&times;</span>\n                </button>\n              </div>\n            </div>\n            <div class=\"modal-body\">\n              <form>\n                <div class=\"form-group\">\n                  <label for=\"customerInputPassword1\">Password</label>\n                  <div *ngIf=\"customers[j]?.password\">\n                    <input type=\"password\" class=\"form-control\" id=\"customerInputPassword1\" placeholder=\"Password\"\n                      value=\"{{customers[j].password}}\" [(ngModel)]=\"customers[j].password\" name=\"password\" #password=\"ngModel\">\n                  </div>\n                </div>\n                <div class=\"form-check\">\n                  <input type=\"checkbox\" class=\"form-check-input\" id=\"exampleCheck1\">\n                  <label class=\"form-check-label\" for=\"exampleCheck1\">Show Password</label>\n                </div>\n              </form>\n            </div>\n            <div class=\"modal-footer\">\n              <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Close</button>\n              <button type=\"button\" (click)=updateCustomer(customers[j]) class=\"btn btn-primary\">Update changes</button>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n    <p><br></p>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/AdminApp/Components/customers/customers.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/AdminApp/Components/customers/customers.component.ts ***!
  \**********************************************************************/
/*! exports provided: CustomerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerComponent", function() { return CustomerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_admin_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/admin.service */ "./src/app/services/admin.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CustomerComponent = /** @class */ (function () {
    function CustomerComponent(_service) {
        this._service = _service;
        this.getAllCustomers();
    }
    CustomerComponent.prototype.ngOnInit = function () {
    };
    CustomerComponent.prototype.getAllCustomers = function () {
        var _this = this;
        this._service.getAllCustomersService().subscribe(function (resp) {
            _this.customers = resp.json();
        }, function (error) {
            error.callback = function () { return _this.customer; };
            throw error;
        });
    };
    CustomerComponent.prototype.deleteCustomer = function (customer) {
        var _this = this;
        // fire ajax delete
        this._service.deleteCustomerService(customer).subscribe(function (resp) {
            console.log(customer);
            console.log(resp);
        }, function (error) {
            error.callback = function () { return _this.customer; };
            throw error;
        });
    };
    CustomerComponent.prototype.updateCustomer = function (customer) {
        var _this = this;
        // fire ajax Put
        this._service.updateCustomerService(customer).subscribe(function (resp) {
            console.log(customer);
            console.log(resp);
        }, function (error) {
            error.callback = function () { return _this.customer; };
            throw error;
        });
    };
    CustomerComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-customers',
            template: __webpack_require__(/*! ./customers.component.html */ "./src/app/AdminApp/Components/customers/customers.component.html"),
            styles: [__webpack_require__(/*! ./customers.component.css */ "./src/app/AdminApp/Components/customers/customers.component.css")]
        }),
        __metadata("design:paramtypes", [_services_admin_service__WEBPACK_IMPORTED_MODULE_1__["AdminService"]])
    ], CustomerComponent);
    return CustomerComponent;
}());



/***/ }),

/***/ "./src/app/Common/Company.ts":
/*!***********************************!*\
  !*** ./src/app/Common/Company.ts ***!
  \***********************************/
/*! exports provided: Company */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Company", function() { return Company; });
var Company = /** @class */ (function () {
    function Company(id, name, password, email) {
        this.id = id;
        this.name = name;
        this.password = password;
        this.email = email;
    }
    return Company;
}());



/***/ }),

/***/ "./src/app/Common/Customer.ts":
/*!************************************!*\
  !*** ./src/app/Common/Customer.ts ***!
  \************************************/
/*! exports provided: Customer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Customer", function() { return Customer; });
var Customer = /** @class */ (function () {
    function Customer(id, name, password) {
        this.id = id;
        this.name = name;
        this.password = password;
    }
    return Customer;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-inverse\">\n    <div class=\"container-fluid\">\n        <div class=\"navbar-header\">\n            <button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\".navbar-collapse\">\n                <span class=\"icon-bar\"></span>\n                <span class=\"icon-bar\"></span>\n                <span class=\"icon-bar\"></span>\n            </button>\n            <a class=\"navbar-brand\">Coupon System</a>\n        </div>\n        <div class=\"collapse navbar-collapse\">\n            <ul class=\"nav navbar-nav\">\n                <li>\n                    <a routerLink=\"/createcompany\">Create Company</a>\n                </li>\n                <li>\n                    <a routerLink=\"/createcustomer\">Create Customer</a>\n                </li>\n                <li>\n                    <a routerLink=\"/getallcompanies\">Companies</a>\n                </li>\n                <li>\n                    <a routerLink=\"/getallcustomers\">Customers</a>\n                </li>\n            </ul>\n            <ul class=\"nav navbar-nav navbar-right\">\n                <li>\n                    <a input type=\"search\" id=\"autosearch\" routerLink=\"/search\"><span>Search...</span></a>\n                </li>\n                <li>\n                    <a (click)=logout()>Logout</a>\n                </li>\n                <li>\n                    <a>Admin</a>\n                </li>\n            </ul>\n        </div>\n    </div>\n</nav>\n\n<div class=\"container\">\n    <router-outlet></router-outlet>\n</div>"

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
/* harmony import */ var _services_admin_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./services/admin.service */ "./src/app/services/admin.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = /** @class */ (function () {
    function AppComponent(_service) {
        this._service = _service;
        this.title = 'WebCouponSystem';
    }
    AppComponent.prototype.logout = function () {
        var _this = this;
        this._service.logoutService(this.request, this.response).subscribe(function (resp) {
            window.location.href = _this._service.loginPath + "/login.html";
        });
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [_services_admin_service__WEBPACK_IMPORTED_MODULE_1__["AdminService"]])
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
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _AdminApp_Components_company_company_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./AdminApp/Components/company/company.component */ "./src/app/AdminApp/Components/company/company.component.ts");
/* harmony import */ var _AdminApp_Components_customers_customers_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./AdminApp/Components/customers/customers.component */ "./src/app/AdminApp/Components/customers/customers.component.ts");
/* harmony import */ var _AdminApp_Components_createcustomer_createcustomer_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./AdminApp/Components/createcustomer/createcustomer.component */ "./src/app/AdminApp/Components/createcustomer/createcustomer.component.ts");
/* harmony import */ var _AdminApp_Components_createcompany_createcompany_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./AdminApp/Components/createcompany/createcompany.component */ "./src/app/AdminApp/Components/createcompany/createcompany.component.ts");
/* harmony import */ var _signup_signup_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./signup/signup.component */ "./src/app/signup/signup.component.ts");
/* harmony import */ var _services_admin_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./services/admin.service */ "./src/app/services/admin.service.ts");
/* harmony import */ var _search_search_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./search/search.component */ "./src/app/search/search.component.ts");
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
                _app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"],
                _AdminApp_Components_company_company_component__WEBPACK_IMPORTED_MODULE_8__["CompanyComponent"],
                _AdminApp_Components_customers_customers_component__WEBPACK_IMPORTED_MODULE_9__["CustomerComponent"],
                _AdminApp_Components_createcustomer_createcustomer_component__WEBPACK_IMPORTED_MODULE_10__["CreatecustomerComponent"],
                _AdminApp_Components_createcompany_createcompany_component__WEBPACK_IMPORTED_MODULE_11__["CreatecompanyComponent"],
                _signup_signup_component__WEBPACK_IMPORTED_MODULE_12__["SignupComponent"],
                _search_search_component__WEBPACK_IMPORTED_MODULE_14__["SearchComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_http__WEBPACK_IMPORTED_MODULE_3__["HttpModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
                // Swal,
                _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forRoot([
                    {
                        path: 'createcustomer',
                        component: _AdminApp_Components_createcustomer_createcustomer_component__WEBPACK_IMPORTED_MODULE_10__["CreatecustomerComponent"],
                    },
                    {
                        path: 'createcompany',
                        component: _AdminApp_Components_createcompany_createcompany_component__WEBPACK_IMPORTED_MODULE_11__["CreatecompanyComponent"],
                    },
                    {
                        path: 'getallcompanies',
                        component: _AdminApp_Components_company_company_component__WEBPACK_IMPORTED_MODULE_8__["CompanyComponent"],
                    },
                    {
                        path: 'getallcustomers',
                        component: _AdminApp_Components_customers_customers_component__WEBPACK_IMPORTED_MODULE_9__["CustomerComponent"],
                    },
                    {
                        path: 'search',
                        component: _search_search_component__WEBPACK_IMPORTED_MODULE_14__["SearchComponent"],
                    }
                ])
            ],
            providers: [_services_admin_service__WEBPACK_IMPORTED_MODULE_13__["AdminService"],
                { provide: _angular_common__WEBPACK_IMPORTED_MODULE_6__["LocationStrategy"], useClass: _angular_common__WEBPACK_IMPORTED_MODULE_6__["HashLocationStrategy"] }],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]],
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/search/search.component.css":
/*!*********************************************!*\
  !*** ./src/app/search/search.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#myInput {\n  /* background-image: url('/css/searchicon.png'); Add a search icon to input */\n  background-position: 10px 12px; /* Position the search icon */\n  background-repeat: no-repeat; /* Do not repeat the icon image */\n  width: 100%; /* Full-width */\n  font-size: 16px; /* Increase font-size */\n  padding: 12px 20px 12px 40px; /* Add some padding */\n  border: 1px solid #ddd; /* Add a grey border */\n  margin-bottom: 12px; /* Add some space below the input */\n}\n\n#myTable {\n  border-collapse: collapse; /* Collapse borders */\n  width: 100%; /* Full-width */\n  border: 1px solid #ddd; /* Add a grey border */\n  font-size: 18px; /* Increase font-size */\n}\n\n#myTable th, #myTable td {\n  text-align: left; /* Left-align text */\n  padding: 12px; /* Add padding */\n}\n\n#myTable tr {\n  /* Add a bottom border to all table rows */\n  border-bottom: 1px solid #ddd; \n}\n\n#myTable tr.header, #myTable tr:hover {\n  /* Add a grey background color to the table header and on hover */\n  background-color: #f1f1f1;\n}\n"

/***/ }),

/***/ "./src/app/search/search.component.html":
/*!**********************************************!*\
  !*** ./src/app/search/search.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<input type=\"text\" id=\"myInput\" onkeyup=\"myFunction()\" placeholder=\"Search for names..\" [(ngModel)]=\"binding\">\n\n<table id=\"myTable\">\n  <tr class=\"header\">\n    <th style=\"width:60%;\">Name</th>\n    <th style=\"width:40%;\">Country</th>\n  </tr>\n  <tr>\n    <td>Alfreds Futterkiste</td>\n    <td>Germany</td>\n  </tr>\n  <tr>\n    <td>Berglunds snabbkop</td>\n    <td>Sweden</td>\n  </tr>\n  <tr>\n    <td>Island Trading</td>\n    <td>UK</td>\n  </tr>\n  <tr>\n    <td>Koniglich Essen</td>\n    <td>Germany</td>\n  </tr>\n</table>\n"

/***/ }),

/***/ "./src/app/search/search.component.ts":
/*!********************************************!*\
  !*** ./src/app/search/search.component.ts ***!
  \********************************************/
/*! exports provided: SearchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchComponent", function() { return SearchComponent; });
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

var SearchComponent = /** @class */ (function () {
    function SearchComponent() {
    }
    SearchComponent.prototype.ngOnInit = function () {
        function myFunction() {
            var input, filter, table, tr, td, i, txtValue;
            input = document.getElementById("myInput");
            filter = input.value.toUpperCase();
            table = document.getElementById("myTable");
            tr = table.getElementsByTagName("tr");
            for (i = 0; i < tr.length; i++) {
                td = tr[i].getElementsByTagName("td")[0];
                if (td) {
                    txtValue = td.textContent || td.innerText;
                    if (txtValue.toUpperCase().indexOf(filter) > -1) {
                        tr[i].style.display = "";
                    }
                    else {
                        tr[i].style.display = "none";
                    }
                }
            }
        }
    };
    SearchComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-search',
            template: __webpack_require__(/*! ./search.component.html */ "./src/app/search/search.component.html"),
            styles: [__webpack_require__(/*! ./search.component.css */ "./src/app/search/search.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], SearchComponent);
    return SearchComponent;
}());



/***/ }),

/***/ "./src/app/services/admin.service.ts":
/*!*******************************************!*\
  !*** ./src/app/services/admin.service.ts ***!
  \*******************************************/
/*! exports provided: AdminService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminService", function() { return AdminService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _Common_Company__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Common/Company */ "./src/app/Common/Company.ts");
/* harmony import */ var _Common_Customer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Common/Customer */ "./src/app/Common/Customer.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AdminService = /** @class */ (function () {
    function AdminService(_http) {
        this._http = _http;
        this.company = new _Common_Company__WEBPACK_IMPORTED_MODULE_2__["Company"]();
        this.customer = new _Common_Customer__WEBPACK_IMPORTED_MODULE_3__["Customer"]();
        this.protocol = "https";
        this.server = "localhost";
        this.port = "8443";
        this.loginPath = this.protocol + "://" + this.server + ":" + this.port;
        this.adminApiPath = this.protocol + "://" + this.server + ":" + this.port + "/Admin/";
    }
    AdminService.prototype.logoutService = function (request, response) {
        return this._http.post(this.adminApiPath + "logout", request, response);
    };
    AdminService.prototype.getAllCompaniesService = function () {
        return this._http.get(this.adminApiPath + "getAllCompanies");
    };
    AdminService.prototype.getCompanyByNameService = function (company) {
        return this._http.get(this.adminApiPath + "getCompanyByName/" + company.name);
    };
    AdminService.prototype.getCompanyByIDService = function (company) {
        return this._http.get(this.adminApiPath + "getCompanyByID/" + company.id);
    };
    AdminService.prototype.deleteCompanyService = function (company) {
        return this._http.delete(this.adminApiPath + "removeCompany/" + company.id, new _angular_http__WEBPACK_IMPORTED_MODULE_1__["RequestOptions"]({ body: company }));
    };
    AdminService.prototype.updateCompanyService = function (company) {
        return this._http.put(this.adminApiPath + "updateCompany/" + company.id, company);
    };
    AdminService.prototype.getAllCustomersService = function () {
        return this._http.get(this.adminApiPath + "getAllCustomers");
    };
    AdminService.prototype.getCustomerByNameService = function (customer) {
        return this._http.get(this.adminApiPath + "getCustomerByName/" + customer.name);
    };
    AdminService.prototype.getCustomerByIDService = function (customer) {
        return this._http.get(this.adminApiPath + "getCustomer/" + customer.id);
    };
    AdminService.prototype.deleteCustomerService = function (customer) {
        return this._http.delete(this.adminApiPath + "removeCustomer/" + customer.id, new _angular_http__WEBPACK_IMPORTED_MODULE_1__["RequestOptions"]({ body: customer }));
    };
    AdminService.prototype.updateCustomerService = function (customer) {
        return this._http.put(this.adminApiPath + "updateCustomer/" + customer.id, customer);
    };
    AdminService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"]])
    ], AdminService);
    return AdminService;
}());



/***/ }),

/***/ "./src/app/signup/signup.component.css":
/*!*********************************************!*\
  !*** ./src/app/signup/signup.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/signup/signup.component.html":
/*!**********************************************!*\
  !*** ./src/app/signup/signup.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <div class=\"modal fade\" id=\"modalRegisterForm\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\" aria-hidden=\"true\">\n  <div class=\"modal-dialog\" role=\"document\">\n      <div class=\"modal-content\">\n          <div class=\"modal-header text-center\">\n              <h4 class=\"modal-title w-100 font-weight-bold\">Sign up</h4>\n              <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n                  <span aria-hidden=\"true\">&times;</span>\n              </button>\n          </div>\n          <div class=\"modal-body mx-3\">\n              <div class=\"md-form mb-5\">\n                  <i class=\"fa fa-user prefix grey-text\"></i>\n                  <input type=\"text\" id=\"orangeForm-name\" class=\"form-control validate\">\n                  <label data-error=\"wrong\" data-success=\"right\" for=\"orangeForm-name\">Your name</label>\n              </div>\n              <div class=\"md-form mb-5\">\n                  <i class=\"fa fa-envelope prefix grey-text\"></i>\n                  <input type=\"email\" id=\"orangeForm-email\" class=\"form-control validate\">\n                  <label data-error=\"wrong\" data-success=\"right\" for=\"orangeForm-email\">Your email</label>\n              </div>\n\n              <div class=\"md-form mb-4\">\n                  <i class=\"fa fa-lock prefix grey-text\"></i>\n                  <input type=\"password\" id=\"orangeForm-pass\" class=\"form-control validate\">\n                  <label data-error=\"wrong\" data-success=\"right\" for=\"orangeForm-pass\">Your password</label>\n              </div>\n\n          </div>\n          <div class=\"modal-footer d-flex justify-content-center\">\n              <button class=\"btn btn-deep-orange\">Sign up</button>\n          </div>\n      </div>\n  </div>\n</div> -->\n\n<!-- <div class=\"text-center\"> -->\n  <!-- <a href=\"\" class=\"btn btn-default btn-rounded mb-4\" data-toggle=\"modal\" data-target=\"#modalRegisterForm\">Launch Modal Register Form</a> -->\n<!-- </div> -->\n<!-- <p>\n  This works\n</p> -->"

/***/ }),

/***/ "./src/app/signup/signup.component.ts":
/*!********************************************!*\
  !*** ./src/app/signup/signup.component.ts ***!
  \********************************************/
/*! exports provided: SignupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupComponent", function() { return SignupComponent; });
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

var SignupComponent = /** @class */ (function () {
    function SignupComponent() {
    }
    SignupComponent.prototype.ngOnInit = function () {
    };
    SignupComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-signup',
            template: __webpack_require__(/*! ./signup.component.html */ "./src/app/signup/signup.component.html"),
            styles: [__webpack_require__(/*! ./signup.component.css */ "./src/app/signup/signup.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], SignupComponent);
    return SignupComponent;
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
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
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
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/Shared/WebCouponSystem/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map