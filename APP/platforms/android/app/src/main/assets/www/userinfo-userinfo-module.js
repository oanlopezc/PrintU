(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["userinfo-userinfo-module"],{

/***/ "./src/app/userinfo/userinfo.module.ts":
/*!*********************************************!*\
  !*** ./src/app/userinfo/userinfo.module.ts ***!
  \*********************************************/
/*! exports provided: UserinfoPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserinfoPageModule", function() { return UserinfoPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _userinfo_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./userinfo.page */ "./src/app/userinfo/userinfo.page.ts");







var routes = [
    {
        path: '',
        component: _userinfo_page__WEBPACK_IMPORTED_MODULE_6__["UserinfoPage"]
    }
];
var UserinfoPageModule = /** @class */ (function () {
    function UserinfoPageModule() {
    }
    UserinfoPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_userinfo_page__WEBPACK_IMPORTED_MODULE_6__["UserinfoPage"]]
        })
    ], UserinfoPageModule);
    return UserinfoPageModule;
}());



/***/ }),

/***/ "./src/app/userinfo/userinfo.page.html":
/*!*********************************************!*\
  !*** ./src/app/userinfo/userinfo.page.html ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title>userinfo</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n</ion-content>\n"

/***/ }),

/***/ "./src/app/userinfo/userinfo.page.scss":
/*!*********************************************!*\
  !*** ./src/app/userinfo/userinfo.page.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXJpbmZvL3VzZXJpbmZvLnBhZ2Uuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/userinfo/userinfo.page.ts":
/*!*******************************************!*\
  !*** ./src/app/userinfo/userinfo.page.ts ***!
  \*******************************************/
/*! exports provided: UserinfoPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserinfoPage", function() { return UserinfoPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var UserinfoPage = /** @class */ (function () {
    function UserinfoPage() {
    }
    UserinfoPage.prototype.ngOnInit = function () {
    };
    UserinfoPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-userinfo',
            template: __webpack_require__(/*! ./userinfo.page.html */ "./src/app/userinfo/userinfo.page.html"),
            styles: [__webpack_require__(/*! ./userinfo.page.scss */ "./src/app/userinfo/userinfo.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], UserinfoPage);
    return UserinfoPage;
}());



/***/ })

}]);
//# sourceMappingURL=userinfo-userinfo-module.js.map