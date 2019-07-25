(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["comousar-comousar-module"],{

/***/ "./src/app/comousar/comousar.module.ts":
/*!*********************************************!*\
  !*** ./src/app/comousar/comousar.module.ts ***!
  \*********************************************/
/*! exports provided: ComousarPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComousarPageModule", function() { return ComousarPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _comousar_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./comousar.page */ "./src/app/comousar/comousar.page.ts");







var routes = [
    {
        path: '',
        component: _comousar_page__WEBPACK_IMPORTED_MODULE_6__["ComousarPage"]
    }
];
var ComousarPageModule = /** @class */ (function () {
    function ComousarPageModule() {
    }
    ComousarPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_comousar_page__WEBPACK_IMPORTED_MODULE_6__["ComousarPage"]]
        })
    ], ComousarPageModule);
    return ComousarPageModule;
}());



/***/ }),

/***/ "./src/app/comousar/comousar.page.html":
/*!*********************************************!*\
  !*** ./src/app/comousar/comousar.page.html ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>\n      ¿Cómo Usar?\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\t<ion-card>\n\t\t<ion-img class=\"icony\" src=\"/assets/icon/imagen_printU.jpeg\"></ion-img>\n\t\t<ion-card-header>\n\t\t\t<ion-card-subtitle>Primer paso</ion-card-subtitle>\n\t\t\t<ion-card-title>Reguistrate</ion-card-title>\n\t\t</ion-card-header>\n\t\t<ion-card-content>\n\t\t\tPara poder hacer uso de PrintU debes pertenecer a la Universidad Nacional de Colombia, así que debes realizar el reguistro con tu correo institucional, llenar unos datos basicos y seleccionar una contraseña.\n\t\t</ion-card-content>\n\t</ion-card>\n\n\t<ion-card>\n\t\t<ion-img class=\"icony\" src=\"/assets/icon/imagen_printU.jpeg\"></ion-img>\n\t\t<ion-card-header>\n\t\t\t<ion-card-subtitle>Segundo paso</ion-card-subtitle>\n\t\t\t<ion-card-title>Inicia Sesión</ion-card-title>\n\t\t</ion-card-header>\n\t\t<ion-card-content>\n\t\t\tEn la pestaña \"Perfil\" debes realizar el inicio con tu correo institucional y tu contraseña establecida, Sino la recuerdas, te ayudamos a reestablecerla.\n\t\t</ion-card-content>\n\t</ion-card>\n\n\t<ion-card>\n\t\t<ion-img class=\"icony\" src=\"/assets/icon/imagen_printU.jpeg\"></ion-img>\n\t\t<ion-card-header>\n\t\t\t<ion-card-subtitle>Tercer paso</ion-card-subtitle>\n\t\t\t<ion-card-title>Subir el documento</ion-card-title>\n\t\t</ion-card-header>\n\t\t<ion-card-content>\n\t\t\tEn la pestaña \"Nuevo Docuemento\" puedes subir tus documentos a la nuve, seleccionandolos desde el celular y estableciendo los parametros de impresion, como el color, tamaño de la hoja, numero de copias, etc.\n\t\t</ion-card-content>\n\t</ion-card>\n\n\t<ion-card>\n\t\t<ion-img class=\"icony\" src=\"/assets/icon/imagen_printU.jpeg\"></ion-img>\n\t\t<ion-card-header>\n\t\t\t<ion-card-subtitle>Cuarto paso</ion-card-subtitle>\n\t\t\t<ion-card-title>Tu saldo</ion-card-title>\n\t\t</ion-card-header>\n\t\t<ion-card-content>\n\t\t\tEn la pestaña \"Medio de pago\" puedes revisar los medios de pago establecidos para el pago y puedes revisar tu saldo, ademas puedes verificar los costos de nuestro servicio.\n\t\t</ion-card-content>\n\t</ion-card>\n\n\t<ion-card>\n\t\t<ion-img class=\"icony\" src=\"/assets/icon/imagen_printU.jpeg\"></ion-img>\n\t\t<ion-card-header>\n\t\t\t<ion-card-subtitle>Quinto paso</ion-card-subtitle>\n\t\t\t<ion-card-title>Ubicación</ion-card-title>\n\t\t</ion-card-header>\n\t\t<ion-card-content>\n\t\t\tEn la pestaña \"Ubicación\" puedes revisar el mapa de la Universidad Nacional, donde estará indicada tu ubicación, la ubicacion de los puntos de impresion y los puntos de recarga.\n\t\t</ion-card-content>\n\t</ion-card>\n\n\t<ion-card>\n\t\t<ion-img class=\"icony\" src=\"/assets/icon/imagen_printU.jpeg\"></ion-img>\n\t\t<ion-card-header>\n\t\t\t<ion-card-subtitle>Sexto paso</ion-card-subtitle>\n\t\t\t<ion-card-title>Impresión</ion-card-title>\n\t\t</ion-card-header>\n\t\t<ion-card-content>\n\t\t\tAl llegar a tu ubicacion de impresión debes poner tu carnet de la universidad como identificador, posterior seleccionas tu documento a imprimir. Y listo...\n\t\t</ion-card-content>\n\t</ion-card>\n\n</ion-content>\n"

/***/ }),

/***/ "./src/app/comousar/comousar.page.scss":
/*!*********************************************!*\
  !*** ./src/app/comousar/comousar.page.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".icony {\n  display: block;\n  margin-left: auto;\n  margin-right: auto;\n  width: 50%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL25pY29sYXNfZ2FyY2lhX3IvcHJveWVjdHNfaW9uaWMvaW1wXzIvc3JjL2FwcC9jb21vdXNhci9jb21vdXNhci5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDQyxjQUFjO0VBQ2QsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixVQUFVLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9jb21vdXNhci9jb21vdXNhci5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaWNvbnl7XG5cdGRpc3BsYXk6IGJsb2NrO1xuXHRtYXJnaW4tbGVmdDogYXV0bztcblx0bWFyZ2luLXJpZ2h0OiBhdXRvO1xuXHR3aWR0aDogNTAlO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/comousar/comousar.page.ts":
/*!*******************************************!*\
  !*** ./src/app/comousar/comousar.page.ts ***!
  \*******************************************/
/*! exports provided: ComousarPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComousarPage", function() { return ComousarPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ComousarPage = /** @class */ (function () {
    function ComousarPage() {
    }
    ComousarPage.prototype.ngOnInit = function () {
    };
    ComousarPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-comousar',
            template: __webpack_require__(/*! ./comousar.page.html */ "./src/app/comousar/comousar.page.html"),
            styles: [__webpack_require__(/*! ./comousar.page.scss */ "./src/app/comousar/comousar.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ComousarPage);
    return ComousarPage;
}());



/***/ })

}]);
//# sourceMappingURL=comousar-comousar-module.js.map