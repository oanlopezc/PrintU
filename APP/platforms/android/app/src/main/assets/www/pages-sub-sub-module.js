(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-sub-sub-module"],{

/***/ "./src/app/pages/sub/sub.module.ts":
/*!*****************************************!*\
  !*** ./src/app/pages/sub/sub.module.ts ***!
  \*****************************************/
/*! exports provided: SubPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubPageModule", function() { return SubPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _sub_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./sub.page */ "./src/app/pages/sub/sub.page.ts");







var routes = [
    {
        path: '',
        component: _sub_page__WEBPACK_IMPORTED_MODULE_6__["SubPage"]
    }
];
var SubPageModule = /** @class */ (function () {
    function SubPageModule() {
    }
    SubPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_sub_page__WEBPACK_IMPORTED_MODULE_6__["SubPage"]]
        })
    ], SubPageModule);
    return SubPageModule;
}());



/***/ }),

/***/ "./src/app/pages/sub/sub.page.html":
/*!*****************************************!*\
  !*** ./src/app/pages/sub/sub.page.html ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title>OMAAY</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\t<form #form=\"ngForm\" (ngSubmit)=\"registro(form)\" method=\"post\">\n\t\t<ion-label position=\"floating\">Nombre</ion-label>\n\t\t<ion-input type=\"text\" ngModel name=\"nombre\" inputmode=\"text\" clear-input=\"true\" minlength=\"3\" maxlength=\"25\" autocomplete=\"on\" autocorret=\"on\"></ion-input>\n\t\t<ion-label position=\"floating\">Apellido</ion-label>\n\t\t<ion-input type=\"text\" ngModel name=\"apellido\" inputmode=\"text\" clear-input=\"true\" minlength=\"3\" maxlength=\"25\" autocomplete=\"on\" autocorret=\"on\"></ion-input>\n\t\t<ion-label position=\"floating\" >Email (UN)</ion-label>\n    \t<ion-input type=\"email\" ngModel name=\"email\" inputmode=\"email\" clear-input=\"true\" value=\"@unal.edu.co\"></ion-input>\n    \t<ion-label position=\"floating\" >Contraseña</ion-label>\n    \t<ion-input type=\"password\" ngModel name=\"password\" inputmode=\"password\" clear-input=\"true\" minlength=\"8\" maxlength=\"16\" ></ion-input>\n    \t<ion-label position=\"floating\" >NFC ID</ion-label>\n    \t<ion-input type=\"text\" ngModel name=\"NFC_id\" inputmode=\"text\"></ion-input>\n    \t<ion-button type=\"submit\" expand=\"block\">Crear</ion-button>\n    </form>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/pages/sub/sub.page.scss":
/*!*****************************************!*\
  !*** ./src/app/pages/sub/sub.page.scss ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3N1Yi9zdWIucGFnZS5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/pages/sub/sub.page.ts":
/*!***************************************!*\
  !*** ./src/app/pages/sub/sub.page.ts ***!
  \***************************************/
/*! exports provided: SubPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubPage", function() { return SubPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");




var SubPage = /** @class */ (function () {
    function SubPage(authService, navCtrl) {
        this.authService = authService;
        this.navCtrl = navCtrl;
    }
    SubPage.prototype.ngOnInit = function () {
    };
    SubPage.prototype.registro = function (form) {
        this.newRegister(form.value.NFC_id, form.value.nombre, form.value.apellido, form.value.email, form.value.password);
        console.log(form.value);
        console.log("omares gay");
    };
    SubPage.prototype.newRegister = function (NFC_id, nombre, apellido, email, password) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                this.mensaje = "?NFC_id=" + NFC_id + "&nombre=" + nombre + "&apellido=" + apellido + "&email=" + email + "&password=" + password;
                console.log(this.mensaje);
                this.authService.holi(this.mensaje).subscribe(function (res) {
                    _this.register = res;
                    console.log(_this.register);
                    console.log("camilo es gay");
                }, function (err) {
                    _this.register = [];
                    console.log("nicolas es gay");
                });
                return [2 /*return*/];
            });
        });
    };
    SubPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-sub',
            template: __webpack_require__(/*! ./sub.page.html */ "./src/app/pages/sub/sub.page.html"),
            styles: [__webpack_require__(/*! ./sub.page.scss */ "./src/app/pages/sub/sub.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"]])
    ], SubPage);
    return SubPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-sub-sub-module.js.map