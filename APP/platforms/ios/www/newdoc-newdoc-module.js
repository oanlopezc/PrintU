(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["newdoc-newdoc-module"],{

/***/ "./src/app/newdoc/newdoc.module.ts":
/*!*****************************************!*\
  !*** ./src/app/newdoc/newdoc.module.ts ***!
  \*****************************************/
/*! exports provided: NewdocPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewdocPageModule", function() { return NewdocPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _newdoc_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./newdoc.page */ "./src/app/newdoc/newdoc.page.ts");







var routes = [
    {
        path: '',
        component: _newdoc_page__WEBPACK_IMPORTED_MODULE_6__["NewdocPage"]
    }
];
var NewdocPageModule = /** @class */ (function () {
    function NewdocPageModule() {
    }
    NewdocPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_newdoc_page__WEBPACK_IMPORTED_MODULE_6__["NewdocPage"]]
        })
    ], NewdocPageModule);
    return NewdocPageModule;
}());



/***/ }),

/***/ "./src/app/newdoc/newdoc.page.html":
/*!*****************************************!*\
  !*** ./src/app/newdoc/newdoc.page.html ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>\n      Nuevo Documento\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n\n<ion-content>\n\n<ion-card>\n\t<ion-button size=\"large\" color=\"primary\" expand=\"block\" (click)=\"choosefile()\">Seleccionar Archivo\n  </ion-button>\n</ion-card>\n\n<ion-card>\n<ion-list>\n  <ion-radio-group>\n    <ion-list-header>\n      <ion-label>Color de Impresión</ion-label>\n    </ion-list-header>\n\n    <ion-item>\n      <ion-label>Blanco y Negro</ion-label>\n      <ion-radio slot=\"start\" value=\"baw\" checked></ion-radio>\n    </ion-item>\n\n    <ion-item>\n      <ion-label>Color</ion-label>\n      <ion-radio slot=\"start\" value=\"col\"></ion-radio>\n    </ion-item>\n  </ion-radio-group>\n</ion-list>\n</ion-card>\n\n<ion-card>\n<ion-list>\n  <ion-radio-group>\n    <ion-list-header>\n      <ion-label>Paginas a imprimir</ion-label>\n    </ion-list-header>\n\n    <ion-item>\n      <ion-label>Todas las paginas</ion-label>\n      <ion-radio slot=\"start\" value=\"allpage\" (click)=\"nactivepg()\" checked></ion-radio>\n    </ion-item>\n\n    <ion-item>\n      <ion-label>Una sola pagina</ion-label>\n      <ion-radio slot=\"start\" value=\"unapg\" (click)=\"nactivepg()\"></ion-radio>\n    </ion-item>\n\n    <ion-item>\n      <ion-label>Rango</ion-label>\n      <ion-radio slot=\"start\" value=\"rang\" (click)=\"activepg()\"></ion-radio>\n    </ion-item>\n  </ion-radio-group>\n</ion-list>\n<ion-row>\n<ion-col>\n\t<ion-item>\n\t\t<ion-label position=\"floating\" >Pg inicial</ion-label>\n\t\t<ion-input type=\"text\" name=\"pgini\" inputmode=\"numeric\" [disabled]=\"act\"></ion-input>\n\t</ion-item>\n</ion-col>\n<ion-col>\n\t<ion-item>\n\t\t<ion-label position=\"floating\" >Pg final</ion-label>\n\t\t<ion-input type=\"text\" name=\"pagfin\" inputmode=\"numeric\" [disabled]=\"act\"></ion-input>\n\t</ion-item>\n</ion-col>\n</ion-row>\n</ion-card>\n\n<ion-card>\n\t<ion-item>\n  \t\t<ion-label position=\"floating\">Numero de copias</ion-label>\n  \t\t<ion-datetime name=\"npg\" dayValues=\"1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20\" display-format=\"D\" value=\"1\">\n  \t\t</ion-datetime>\n\t</ion-item>\n</ion-card>\n\n<ion-card>\n<ion-list>\n  <ion-radio-group>\n    <ion-list-header>\n      <ion-label>Tamaño del papel</ion-label>\n    </ion-list-header>\n\n    <ion-item>\n      <ion-label>Tamaño carta</ion-label>\n      <ion-radio slot=\"start\" value=\"tcar\" checked></ion-radio>\n    </ion-item>\n\n    <ion-item>\n      <ion-label>Tamaño oficio</ion-label>\n      <ion-radio slot=\"start\" value=\"tofi\"></ion-radio>\n    </ion-item>\n  </ion-radio-group>\n</ion-list>\t\n</ion-card>\n\n<ion-card>\n<ion-list>\n  <ion-radio-group>\n    <ion-list-header>\n      <ion-label>Disposición</ion-label>\n    </ion-list-header>\n\n    <ion-item>\n      <ion-label>Una sola cara</ion-label>\n      <ion-radio slot=\"start\" value=\"cara1\" checked></ion-radio>\n    </ion-item>\n\n    <ion-item>\n      <ion-label>Por ambas caras</ion-label>\n      <ion-radio slot=\"start\" value=\"cara2\"></ion-radio>\n    </ion-item>\n  </ion-radio-group>\n</ion-list>\t\n</ion-card>\n\n</ion-content>\n"

/***/ }),

/***/ "./src/app/newdoc/newdoc.page.scss":
/*!*****************************************!*\
  !*** ./src/app/newdoc/newdoc.page.scss ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL25ld2RvYy9uZXdkb2MucGFnZS5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/newdoc/newdoc.page.ts":
/*!***************************************!*\
  !*** ./src/app/newdoc/newdoc.page.ts ***!
  \***************************************/
/*! exports provided: NewdocPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewdocPage", function() { return NewdocPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_native_file_chooser_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/file-chooser/ngx */ "./node_modules/@ionic-native/file-chooser/ngx/index.js");



var NewdocPage = /** @class */ (function () {
    function NewdocPage(fileChooser) {
        this.fileChooser = fileChooser;
        this.act = true;
    }
    NewdocPage.prototype.nactivepg = function () {
        this.act = true;
    };
    NewdocPage.prototype.activepg = function () {
        this.act = false;
    };
    NewdocPage.prototype.choosefile = function () {
        console.log("sel_doc");
        this.fileChooser.open()
            .then(function (uri) { return console.log(uri); })
            .catch(function (e) { return console.log(e); });
    };
    NewdocPage.prototype.ngOnInit = function () {
    };
    NewdocPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-newdoc',
            template: __webpack_require__(/*! ./newdoc.page.html */ "./src/app/newdoc/newdoc.page.html"),
            styles: [__webpack_require__(/*! ./newdoc.page.scss */ "./src/app/newdoc/newdoc.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_native_file_chooser_ngx__WEBPACK_IMPORTED_MODULE_2__["FileChooser"]])
    ], NewdocPage);
    return NewdocPage;
}());



/***/ })

}]);
//# sourceMappingURL=newdoc-newdoc-module.js.map