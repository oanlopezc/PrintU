(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["medio-medio-module"],{

/***/ "./src/app/medio/medio.module.ts":
/*!***************************************!*\
  !*** ./src/app/medio/medio.module.ts ***!
  \***************************************/
/*! exports provided: MedioPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MedioPageModule", function() { return MedioPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _medio_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./medio.page */ "./src/app/medio/medio.page.ts");







var routes = [
    {
        path: '',
        component: _medio_page__WEBPACK_IMPORTED_MODULE_6__["MedioPage"]
    }
];
var MedioPageModule = /** @class */ (function () {
    function MedioPageModule() {
    }
    MedioPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_medio_page__WEBPACK_IMPORTED_MODULE_6__["MedioPage"]]
        })
    ], MedioPageModule);
    return MedioPageModule;
}());



/***/ }),

/***/ "./src/app/medio/medio.page.html":
/*!***************************************!*\
  !*** ./src/app/medio/medio.page.html ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>\n      Medio de Pago\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n</ion-content>\n"

/***/ }),

/***/ "./src/app/medio/medio.page.scss":
/*!***************************************!*\
  !*** ./src/app/medio/medio.page.scss ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21lZGlvL21lZGlvLnBhZ2Uuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/medio/medio.page.ts":
/*!*************************************!*\
  !*** ./src/app/medio/medio.page.ts ***!
  \*************************************/
/*! exports provided: MedioPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MedioPage", function() { return MedioPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var MedioPage = /** @class */ (function () {
    function MedioPage() {
    }
    MedioPage.prototype.ngOnInit = function () {
    };
    MedioPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-medio',
            template: __webpack_require__(/*! ./medio.page.html */ "./src/app/medio/medio.page.html"),
            styles: [__webpack_require__(/*! ./medio.page.scss */ "./src/app/medio/medio.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], MedioPage);
    return MedioPage;
}());



/***/ })

}]);
//# sourceMappingURL=medio-medio-module.js.map