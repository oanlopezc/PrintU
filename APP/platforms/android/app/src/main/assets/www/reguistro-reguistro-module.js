(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["reguistro-reguistro-module"],{

/***/ "./src/app/reguistro/reguistro.module.ts":
/*!***********************************************!*\
  !*** ./src/app/reguistro/reguistro.module.ts ***!
  \***********************************************/
/*! exports provided: ReguistroPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReguistroPageModule", function() { return ReguistroPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _reguistro_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./reguistro.page */ "./src/app/reguistro/reguistro.page.ts");







var routes = [
    {
        path: '',
        component: _reguistro_page__WEBPACK_IMPORTED_MODULE_6__["ReguistroPage"]
    }
];
var ReguistroPageModule = /** @class */ (function () {
    function ReguistroPageModule() {
    }
    ReguistroPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_reguistro_page__WEBPACK_IMPORTED_MODULE_6__["ReguistroPage"]]
        })
    ], ReguistroPageModule);
    return ReguistroPageModule;
}());



/***/ }),

/***/ "./src/app/reguistro/reguistro.page.html":
/*!***********************************************!*\
  !*** ./src/app/reguistro/reguistro.page.html ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>\n      Reguistrate\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\t<ion-card>\n\t\t<ion-card-header>\n\t\t\t<ion-card-title>Datos Personales</ion-card-title>\n\t\t</ion-card-header>\n\t\t<ion-card-content>\n\n\t\t\t<ion-item>\n\t\t\t\t<ion-label position=\"floating\">Nombre</ion-label>\n\t\t\t\t<ion-input type=\"text\" name=\"namer\" inputmode=\"text\" clear-input=\"true\" minlength=\"3\" maxlength=\"25\" autocomplete=\"on\" autocorret=\"on\"></ion-input>\n\t\t\t</ion-item>\n\t\t\t<br>\n\t\t\t<ion-item>\n\t\t\t\t<ion-label position=\"floating\">Apellido</ion-label>\n\t\t\t\t<ion-input type=\"text\" name=\"apellidor\" inputmode=\"text\" clear-input=\"true\" minlength=\"3\" maxlength=\"25\" autocomplete=\"on\" autocorret=\"on\"></ion-input>\n\t\t\t</ion-item>\n\t\t\t<br>\n\t\t\t<ion-item>\n\t\t\t\t<ion-label position=\"floating\">Celular</ion-label>\n\t\t\t\t<ion-input type=\"tel\" name=\"numcel\" inputmode=\"tel\" clear-input=\"true\" minlength=\"10\" maxlength=\"10\"></ion-input>\n\t\t\t</ion-item>\n\t\t\t<br>\n\t\t\t<ion-item>\n    \t\t\t<ion-label position=\"floating\" >Email (UN)</ion-label>\n    \t\t\t<ion-input type=\"email\" name=\"email_r\" inputmode=\"email\" clear-input=\"true\" value=\"@unal.edu.co\"></ion-input>\n  \t\t\t</ion-item>\n  \t\t\t<br>\n  \t\t\t<ion-item>\n    \t\t\t<ion-label position=\"floating\" >Contraseña</ion-label>\n    \t\t\t<ion-input type=\"password\" name=\"password_r\" inputmode=\"password\" clear-input=\"true\" minlength=\"8\" maxlength=\"16\" ></ion-input>\n  \t\t\t</ion-item>\n  \t\t\t<ion-item>\n    \t\t\t<ion-label position=\"floating\" >Confirmar Contraseña</ion-label>\n    \t\t\t<ion-input type=\"password\" name=\"password_rc\" inputmode=\"password\" clear-input=\"true\" minlength=\"8\" maxlength=\"16\" ></ion-input>\n  \t\t\t</ion-item>\n\n  \t\t</ion-card-content>\n\t</ion-card>\n\t<ion-card>\n\t\t<ion-button expand=\"block\" size=\"large\" [disabled]=\"false\">Ingresar</ion-button>\n\t</ion-card>\t\n\n\n</ion-content>\n"

/***/ }),

/***/ "./src/app/reguistro/reguistro.page.scss":
/*!***********************************************!*\
  !*** ./src/app/reguistro/reguistro.page.scss ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3JlZ3Vpc3Ryby9yZWd1aXN0cm8ucGFnZS5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/reguistro/reguistro.page.ts":
/*!*********************************************!*\
  !*** ./src/app/reguistro/reguistro.page.ts ***!
  \*********************************************/
/*! exports provided: ReguistroPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReguistroPage", function() { return ReguistroPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ReguistroPage = /** @class */ (function () {
    function ReguistroPage() {
    }
    ReguistroPage.prototype.ngOnInit = function () {
    };
    ReguistroPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-reguistro',
            template: __webpack_require__(/*! ./reguistro.page.html */ "./src/app/reguistro/reguistro.page.html"),
            styles: [__webpack_require__(/*! ./reguistro.page.scss */ "./src/app/reguistro/reguistro.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ReguistroPage);
    return ReguistroPage;
}());



/***/ })

}]);
//# sourceMappingURL=reguistro-reguistro-module.js.map