(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-mydoc-mydoc-module"],{

/***/ "./src/app/pages/mydoc/mydoc.module.ts":
/*!*********************************************!*\
  !*** ./src/app/pages/mydoc/mydoc.module.ts ***!
  \*********************************************/
/*! exports provided: MydocPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MydocPageModule", function() { return MydocPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _mydoc_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./mydoc.page */ "./src/app/pages/mydoc/mydoc.page.ts");







var routes = [
    {
        path: '',
        component: _mydoc_page__WEBPACK_IMPORTED_MODULE_6__["MydocPage"]
    }
];
var MydocPageModule = /** @class */ (function () {
    function MydocPageModule() {
    }
    MydocPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_mydoc_page__WEBPACK_IMPORTED_MODULE_6__["MydocPage"]]
        })
    ], MydocPageModule);
    return MydocPageModule;
}());



/***/ }),

/***/ "./src/app/pages/mydoc/mydoc.page.html":
/*!*********************************************!*\
  !*** ./src/app/pages/mydoc/mydoc.page.html ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>\n      Mis Documentos\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n<ion-fab vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\">\n    <ion-fab-button href=\"/newdoc\">\n      <ion-icon name=\"add\"></ion-icon>\n    </ion-fab-button>\n  </ion-fab>\n\n<ion-list>\n\t<ion-item>\n\t\t<ion-label>Leer Doc de base de datos</ion-label>\n\t</ion-item>\n</ion-list>\n\n</ion-content>\n"

/***/ }),

/***/ "./src/app/pages/mydoc/mydoc.page.scss":
/*!*********************************************!*\
  !*** ./src/app/pages/mydoc/mydoc.page.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL215ZG9jL215ZG9jLnBhZ2Uuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/pages/mydoc/mydoc.page.ts":
/*!*******************************************!*\
  !*** ./src/app/pages/mydoc/mydoc.page.ts ***!
  \*******************************************/
/*! exports provided: MydocPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MydocPage", function() { return MydocPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var MydocPage = /** @class */ (function () {
    function MydocPage() {
    }
    MydocPage.prototype.ngOnInit = function () {
    };
    MydocPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-mydoc',
            template: __webpack_require__(/*! ./mydoc.page.html */ "./src/app/pages/mydoc/mydoc.page.html"),
            styles: [__webpack_require__(/*! ./mydoc.page.scss */ "./src/app/pages/mydoc/mydoc.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], MydocPage);
    return MydocPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-mydoc-mydoc-module.js.map