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

/***/ "./src/app/CustomerApp/components/customercoupons/customercoupons.component.css":
/*!**************************************************************************************!*\
  !*** ./src/app/CustomerApp/components/customercoupons/customercoupons.component.css ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "* {\n  box-sizing: border-box;\n}\n\nbody {\n  font-family: Arial, Helvetica, sans-serif;\n}\n\n.closebtn {\n  padding: 30px;\n  color: #888;\n  font-size: 20px;\n  cursor: pointer;\n}\n\n.closebtn:hover {\n  color: #000;\n}\n\n/* Float four columns side by side */\n\n.column {\n  float: left;\n  width: 25%;\n  padding: 0 10px;\n}\n\n/* Remove extra left and right margins, due to padding */\n\n.row {\n  margin: 0 -5px;\n}\n\n/* Clear floats after the columns */\n\n.row:after {\n  content: \"\";\n  display: table;\n  clear: both;\n}\n\n/* Responsive columns */\n\n@media screen and (max-width: 600px) {\n  .column {\n    width: 100%;\n    display: block;\n    margin-bottom: 20px;\n  }\n}\n\n/* Style the counter cards */\n\n.card {\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);\n  padding: 16px;\n  text-align: center;\n  background-color: #f1f1f1;\n}"

/***/ }),

/***/ "./src/app/CustomerApp/components/customercoupons/customercoupons.component.html":
/*!***************************************************************************************!*\
  !*** ./src/app/CustomerApp/components/customercoupons/customercoupons.component.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"column\" *ngFor=\"let coupon of coupons; let i = index\">\n    <div class=\"card\">\n      <div *ngIf=\"coupon?.title\">\n        <h3>{{coupon.title}}</h3>\n        <!-- Button trigger modal -->\n        <button type=\"button\" (click)=\"j = i\" class=\"btn btn-primary\" data-toggle=\"modal\" data-target=\"#couponModal\">Details</button>\n      </div>\n      <!-- Modal -->\n      <div class=\"modal fade\" id=\"couponModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"couponModalLabel\"\n        aria-hidden=\"true\" ngModal=coupon>\n        <div class=\"modal-dialog\" role=\"document\">\n          <div class=\"modal-content\">\n            <div class=\"modal-header\">\n              <div *ngIf=\"coupons[j]?.title\">\n                <h5 class=\"modal-title\" id=\"couponModalLabel\">{{coupons[j].title}}</h5>\n                <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n                  <span aria-hidden=\"true\">&times;</span>\n                </button>\n              </div>\n            </div>\n            <div class=\"modal-body\">\n              <form>\n                <div class=\"form-group\">\n                  <div *ngIf=\"coupons[j]?.startDate\">\n                    <label for=\"couponInputstartDate1\">Start Date</label>\n                    <input type=\"startDate\" class=\"form-control\" id=\"couponInputstartDate1\" aria-describedby=\"startDateHelp\"\n                      value=\"{{coupons[j].startDate}}\" [(ngModel)]=\"coupons[j].startDate\" name=\"startDate\" #startDate=\"ngModel\">\n                  </div>\n                </div>\n                <div class=\"form-group\">\n                  <div *ngIf=\"coupons[j]?.endDate\">\n                    <label for=\"couponInputendDate1\">End Date</label>\n                    <input type=\"endDate\" class=\"form-control\" id=\"couponInputendDate1\" aria-describedby=\"endDateHelp\"\n                      value=\"{{coupons[j].endDate}}\" [(ngModel)]=\"coupons[j].endDate\" name=\"endDate\" #endDate=\"ngModel\">\n                  </div>\n                </div>\n                <!-- <div class=\"form-group\">\n                  <label for=\"couponInputamount1\">Amount</label>\n                  <input type=\"amount\" class=\"form-control\" id=\"couponInputamount1\" aria-describedby=\"amountHelp\"\n                    placeholder=\"Enter Amount\" value=\"{{coupons[j].amount}}\" [(ngModel)]=\"coupons[j].amount\" name=\"amount\" #startDate=\"ngModel\">\n                </div> -->\n                <div class=\"form-group\">\n                  <label for=\"couponInputtype1\">Type</label>\n                  <div *ngIf=\"coupons[j]?.type\">\n                    <!-- <select value=\"{{coupons[j].type}}\" [(ngModel)]=\"coupon.coupontype\" class=\"form-group\" name=\"coupontype\">\n                      <option value=\"\" disabled=\"disabled\" selected=\"selected\">Select Type</option>\n                      <option value=\"RESTAURANTS\">Restaurants</option>\n                      <option value=\"ELECTRICITY\">Electricity</option>\n                      <option value=\"FOOD\">Food</option>\n                      <option value=\"HEALTH\">Health</option>\n                      <option value=\"SPORTS\">Sports</option>\n                      <option value=\"CAMPING\">Camping</option>\n                      <option value=\"TRAVELLING\">Travelling</option>\n                    </select> -->\n                    <input type=\"type\" class=\"form-control\" id=\"couponInputtype1\" aria-describedby=\"typeHelp\" value=\"{{coupons[j].type}}\"\n                      [(ngModel)]=\"coupons[j].type\" name=\"type\" #type=\"ngModel\">\n                  </div>\n                </div>\n                <div class=\"form-group\">\n                  <div *ngIf=\"coupons[j]?.message\">\n                    <label for=\"couponInputmessage1\">Message</label>\n                    <input type=\"message\" class=\"form-control\" id=\"couponInputmessage1\" aria-describedby=\"messageHelp\"\n                      value=\"{{coupons[j].message}}\" [(ngModel)]=\"coupons[j].message\" name=\"message\" #message=\"ngModel\">\n                  </div>\n                </div>\n                <div class=\"form-group\">\n                  <div *ngIf=\"coupons[j]?.price\">\n                    <label for=\"couponInputprice1\">Price</label>\n                    <input type=\"price\" class=\"form-control\" id=\"couponInputprice1\" aria-describedby=\"priceHelp\" value=\"{{coupons[j].price}}\"\n                      [(ngModel)]=\"coupons[j].price\" name=\"price\" #price=\"ngModel\">\n                  </div>\n                </div>\n                <div class=\"form-group\">\n                  <div *ngIf=\"coupons[j]?.image\">\n                    <label for=\"couponInputimage1\">Image</label>\n                    <input type=\"image\" class=\"form-control\" id=\"couponInputimage\" aria-describedby=\"imageHelp\" value=\"{{coupons[j].image}}\"\n                      [(ngModel)]=\"coupons[j].image\" name=\"image\" #image=\"ngModel\">\n                  </div>\n                </div>\n              </form>\n            </div>\n            <div class=\"modal-footer\">\n              <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Close</button>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n    <p><br></p>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/CustomerApp/components/customercoupons/customercoupons.component.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/CustomerApp/components/customercoupons/customercoupons.component.ts ***!
  \*************************************************************************************/
/*! exports provided: CustomerCouponsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerCouponsComponent", function() { return CustomerCouponsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CustomerCouponsComponent = /** @class */ (function () {
    function CustomerCouponsComponent(_http) {
        this._http = _http;
        this.protocol = "https";
        this.server = "localhost";
        this.port = "8443";
        this.customerApiPath = this.protocol + "://" + this.server + ":" + this.port + "/Customer/";
        this.getAllPurchasedCoupons();
    }
    CustomerCouponsComponent.prototype.ngOnInit = function () {
    };
    CustomerCouponsComponent.prototype.getAllPurchasedCoupons = function () {
        var _this = this;
        return this._http.get(this.customerApiPath + "getAllPurchasedCoupons").subscribe(function (resp) {
            _this.coupons = resp.json();
        });
    };
    CustomerCouponsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-customercoupons',
            template: __webpack_require__(/*! ./customercoupons.component.html */ "./src/app/CustomerApp/components/customercoupons/customercoupons.component.html"),
            styles: [__webpack_require__(/*! ./customercoupons.component.css */ "./src/app/CustomerApp/components/customercoupons/customercoupons.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"]])
    ], CustomerCouponsComponent);
    return CustomerCouponsComponent;
}());



/***/ }),

/***/ "./src/app/CustomerApp/components/purchasecoupon/purchasecoupon.component.css":
/*!************************************************************************************!*\
  !*** ./src/app/CustomerApp/components/purchasecoupon/purchasecoupon.component.css ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "* {\n  box-sizing: border-box;\n}\n\nbody {\n  font-family: Arial, Helvetica, sans-serif;\n}\n\n.closebtn {\n  padding: 30px;\n  color: #888;\n  font-size: 20px;\n  cursor: pointer;\n}\n\n.closebtn:hover {\n  color: #000;\n}\n\n/* Float four columns side by side */\n\n.column {\n  float: left;\n  width: 25%;\n  padding: 0 10px;\n}\n\n/* Remove extra left and right margins, due to padding */\n\n.row {\n  margin: 0 -5px;\n}\n\n/* Clear floats after the columns */\n\n.row:after {\n  content: \"\";\n  display: table;\n  clear: both;\n}\n\n/* Responsive columns */\n\n@media screen and (max-width: 600px) {\n  .column {\n    width: 100%;\n    display: block;\n    margin-bottom: 20px;\n  }\n}\n\n/* Style the counter cards */\n\n.card {\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);\n  padding: 16px;\n  text-align: center;\n  background-color: #f1f1f1;\n}"

/***/ }),

/***/ "./src/app/CustomerApp/components/purchasecoupon/purchasecoupon.component.html":
/*!*************************************************************************************!*\
  !*** ./src/app/CustomerApp/components/purchasecoupon/purchasecoupon.component.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"column\" *ngFor=\"let coupon of coupons; let i = index\" >\n    <div class=\"card\">\n      <div *ngIf=\"coupon?.title\">\n        <h3>{{coupon.title}}</h3>\n        <!-- Button trigger modal -->\n        <button type=\"button\" (click)=\"j = i\" class=\"btn btn-primary\" data-toggle=\"modal\" data-target=\"#couponModal\">Details</button>\n    </div>\n      <!-- Modal -->\n      <div class=\"modal fade\" id=\"couponModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"couponModalLabel\"\n        aria-hidden=\"true\" ngModal=coupon>\n        <div class=\"modal-dialog\" role=\"document\">\n          <div class=\"modal-content\">\n            <div class=\"modal-header\">\n              <div *ngIf=\"coupons[j]?.title\">\n                <h5 class=\"modal-title\" id=\"couponModalLabel\">{{coupons[j].title}}</h5>\n                <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n                  <span aria-hidden=\"true\">&times;</span>\n                </button>\n              </div>\n            </div>\n            <div class=\"modal-body\">\n              <form>\n                <div class=\"form-group\">\n                  <div *ngIf=\"coupons[j]?.startDate\">\n                    <label for=\"couponInputstartDate1\">Start Date</label>\n                    <input type=\"startDate\" class=\"form-control\" id=\"couponInputstartDate1\" aria-describedby=\"startDateHelp\"\n                      placeholder=\"Enter Start Date\" value=\"{{coupons[j].startDate}}\" [(ngModel)]=\"coupons[j].startDate\" name=\"startDate\" #startDate=\"ngModel\">\n                  </div>\n                </div>\n                <div class=\"form-group\">\n                  <div *ngIf=\"coupons[j]?.endDate\">\n                    <label for=\"couponInputendDate1\">End Date</label>\n                    <input type=\"endDate\" class=\"form-control\" id=\"couponInputendDate1\" aria-describedby=\"endDateHelp\"\n                      placeholder=\"Enter End Date\" value=\"{{coupons[j].endDate}}\" [(ngModel)]=\"coupons[j].endDate\" name=\"endDate\" #endDate=\"ngModel\">\n                  </div>\n                </div>\n                <div class=\"form-group\">\n                  <div *ngIf=\"coupons[j]?.amount\">\n                    <label for=\"couponInputamount1\">Amount</label>\n                    <input type=\"amount\" class=\"form-control\" id=\"couponInputamount1\" aria-describedby=\"amountHelp\"\n                      placeholder=\"Enter Amount\" value=\"{{coupons[j].amount}}\" [(ngModel)]=\"coupons[j].amount\" name=\"amount\" #amount=\"ngModel\">\n                  </div>\n                </div>\n                <div class=\"form-group\">\n                  <label for=\"couponInputtype1\">Type</label>\n                  <div *ngIf=\"coupons[j]?.type\">\n                    <!-- <select value=\"{{coupons[j].type}}\" [(ngModel)]=\"coupon.coupontype\" class=\"form-group\" name=\"coupontype\">\n                      <option value=\"\" disabled=\"disabled\" selected=\"selected\">Select Type</option>\n                      <option value=\"RESTAURANTS\">Restaurants</option>\n                      <option value=\"ELECTRICITY\">Electricity</option>\n                      <option value=\"FOOD\">Food</option>\n                      <option value=\"HEALTH\">Health</option>\n                      <option value=\"SPORTS\">Sports</option>\n                      <option value=\"CAMPING\">Camping</option>\n                      <option value=\"TRAVELLING\">Travelling</option>\n                    </select> -->\n                    <input type=\"couponType\" class=\"form-control\" id=\"couponInputtype1\" aria-describedby=\"typeHelp\"\n                      placeholder=\"Enter Type\" value=\"{{coupons[j].type}}\" [(ngModel)]=\"coupons[j].type\" name=\"type\" #couponType=\"ngModel\">\n                  </div>\n                </div>\n                <div class=\"form-group\">\n                  <div *ngIf=\"coupons[j]?.message\">\n                    <label for=\"couponInputmessage1\">Message</label>\n                    <input type=\"message\" class=\"form-control\" id=\"couponInputmessage1\" aria-describedby=\"messageHelp\"\n                      placeholder=\"Enter Message\" value=\"{{coupons[j].message}}\" [(ngModel)]=\"coupons[j].message\" name=\"message\" #message=\"ngModel\">\n                  </div>\n                </div>\n                <div class=\"form-group\">\n                  <div *ngIf=\"coupons[j]?.price\">\n                    <label for=\"couponInputprice1\">Price</label>\n                    <input type=\"price\" class=\"form-control\" id=\"couponInputprice1\" aria-describedby=\"priceHelp\"\n                      placeholder=\"Enter Price\" value=\"{{coupons[j].price}}\" [(ngModel)]=\"coupons[j].price\" name=\"price\" #price=\"ngModel\">\n                  </div>\n                </div>\n                <div class=\"form-group\">\n                  <div *ngIf=\"coupons[j]?.image\">\n                    <label for=\"couponInputimage1\">Image</label>\n                    <input type=\"image\" class=\"form-control\" id=\"couponInputimage\" aria-describedby=\"imageHelp\"\n                      placeholder=\"Enter Image\" value=\"{{coupons[j].image}}\" [(ngModel)]=\"coupons[j].image\" name=\"image\" #image=\"ngModel\">\n                  </div>\n                </div>\n              </form>\n            </div>\n            <div class=\"modal-footer\">\n              <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Close</button>\n              <button type=\"button\" (click)=purchaseCoupon(coupons[j]) class=\"btn btn-primary\">Purchase</button>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n    <p><br></p>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/CustomerApp/components/purchasecoupon/purchasecoupon.component.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/CustomerApp/components/purchasecoupon/purchasecoupon.component.ts ***!
  \***********************************************************************************/
/*! exports provided: PurchaseCouponComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PurchaseCouponComponent", function() { return PurchaseCouponComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_2__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PurchaseCouponComponent = /** @class */ (function () {
    function PurchaseCouponComponent(_http) {
        this._http = _http;
        this.protocol = "https";
        this.server = "localhost";
        this.port = "8443";
        this.customerApiPath = this.protocol + "://" + this.server + ":" + this.port + "/Customer/";
        this.getAllAvailableCoupons();
    }
    PurchaseCouponComponent.prototype.ngOnInit = function () {
    };
    PurchaseCouponComponent.prototype.getAllAvailableCoupons = function () {
        var _this = this;
        return this._http.get(this.customerApiPath + "getAllAvailableCoupons").subscribe(function (resp) {
            _this.coupons = resp.json();
        });
    };
    PurchaseCouponComponent.prototype.purchaseCoupon = function (coupon) {
        var _this = this;
        sweetalert2__WEBPACK_IMPORTED_MODULE_2___default()({
            title: 'Are you sure?',
            text: "You are about to purchase coupon: " + coupon.title + "?!",
            type: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, putchase it!'
        }).then(function (result) {
            if (result.value) {
                // fire ajax POST
                _this._http.post(_this.customerApiPath + "purchaseCoupon", coupon).subscribe(function (resp) {
                    console.log(resp);
                }, function (err) {
                    console.error('Error while putchasing company:' + coupon.title, err);
                    sweetalert2__WEBPACK_IMPORTED_MODULE_2___default()({
                        title: 'Error!',
                        text: 'Oops... ' + 'Something went wrong!',
                        confirmButtonText: 'OK'
                    });
                });
            }
        });
    };
    PurchaseCouponComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-purchasecoupon',
            template: __webpack_require__(/*! ./purchasecoupon.component.html */ "./src/app/CustomerApp/components/purchasecoupon/purchasecoupon.component.html"),
            styles: [__webpack_require__(/*! ./purchasecoupon.component.css */ "./src/app/CustomerApp/components/purchasecoupon/purchasecoupon.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"]])
    ], PurchaseCouponComponent);
    return PurchaseCouponComponent;
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

module.exports = "<nav class=\"navbar navbar-inverse\">\n  <div class=\"container-fluid\">\n      <div class=\"navbar-header\">\n          <button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\".navbar-collapse\">\n              <span class=\"icon-bar\"></span>\n              <span class=\"icon-bar\"></span>\n              <span class=\"icon-bar\"></span>\n          </button>\n          <a class=\"navbar-brand\" href=\"#\">Coupon System</a>\n      </div>\n      <div class=\"collapse navbar-collapse\">\n          <ul class=\"nav navbar-nav\">\n              <li>\n                  <a routerLink=\"/purchaseCoupon\">Purchase Coupons</a>\n              </li>\n              <li>\n                  <a routerLink=\"/ownedCoupon\">Coupons Owned</a>\n              </li>\n          </ul>\n          <ul class=\"nav navbar-nav navbar-right\">\n              <li>\n                  <a input type=\"search\" id=\"autosearch\" routerLink=\"/search\"><span>Search...</span></a>\n              </li>\n              <li>\n                    <a><span (click)=logout() class=\"glyphicon glyphicon-log-in\">Logout</span></a>\n              </li>\n              <li>\n                <a>Customer</a>\n            </li>\n          </ul>\n      </div>\n  </div>\n</nav>\n\n<div class=\"container\">\n  <router-outlet></router-outlet>\n</div>"

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
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_2__);
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
    function AppComponent(_http) {
        this._http = _http;
        this.title = 'WebCouponSystemCustomer';
    }
    AppComponent.prototype.logout = function (response, request) {
        var _this = this;
        sweetalert2__WEBPACK_IMPORTED_MODULE_2___default()({
            title: 'Are you sure?',
            text: "You are about to logout!",
            type: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, logout!'
        }).then(function (result) {
            if (result.value) {
                _this._http.post("https://localhost:8443/Customer/logout", request, response).subscribe(function (resp) {
                    window.location.href = "https://localhost:8443/login.html";
                }, function (err) {
                    console.error('Error while logging out from Customer', err);
                    sweetalert2__WEBPACK_IMPORTED_MODULE_2___default()({
                        title: 'Error!',
                        text: 'Oops... ' + 'Something went wrong!',
                        confirmButtonText: 'OK'
                    });
                });
            }
        });
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"]])
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
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _CustomerApp_components_purchasecoupon_purchasecoupon_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./CustomerApp/components/purchasecoupon/purchasecoupon.component */ "./src/app/CustomerApp/components/purchasecoupon/purchasecoupon.component.ts");
/* harmony import */ var _CustomerApp_components_customercoupons_customercoupons_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./CustomerApp/components/customercoupons/customercoupons.component */ "./src/app/CustomerApp/components/customercoupons/customercoupons.component.ts");
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
                _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
                _CustomerApp_components_purchasecoupon_purchasecoupon_component__WEBPACK_IMPORTED_MODULE_7__["PurchaseCouponComponent"],
                _CustomerApp_components_customercoupons_customercoupons_component__WEBPACK_IMPORTED_MODULE_8__["CustomerCouponsComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_http__WEBPACK_IMPORTED_MODULE_4__["HttpModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot([
                    {
                        path: 'purchaseCoupon',
                        component: _CustomerApp_components_purchasecoupon_purchasecoupon_component__WEBPACK_IMPORTED_MODULE_7__["PurchaseCouponComponent"],
                    },
                    {
                        path: 'ownedCoupon',
                        component: _CustomerApp_components_customercoupons_customercoupons_component__WEBPACK_IMPORTED_MODULE_8__["CustomerCouponsComponent"],
                    }
                ]),
            ],
            providers: [{ provide: _angular_common__WEBPACK_IMPORTED_MODULE_5__["LocationStrategy"], useClass: _angular_common__WEBPACK_IMPORTED_MODULE_5__["HashLocationStrategy"] }],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
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

module.exports = __webpack_require__(/*! /Users/Shared/WebCouponSystemCustomer/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map