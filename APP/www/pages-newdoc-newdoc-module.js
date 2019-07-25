(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-newdoc-newdoc-module"],{

/***/ "./src/app/pages/newdoc/newdoc.module.ts":
/*!***********************************************!*\
  !*** ./src/app/pages/newdoc/newdoc.module.ts ***!
  \***********************************************/
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
/* harmony import */ var _newdoc_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./newdoc.page */ "./src/app/pages/newdoc/newdoc.page.ts");







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

/***/ "./src/app/pages/newdoc/newdoc.page.html":
/*!***********************************************!*\
  !*** ./src/app/pages/newdoc/newdoc.page.html ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>\n      Nuevo Documento\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n\n<ion-content>\n<ion-card>\n<ion-list>\n  <ion-list-header>Caracteristicas de Impresión</ion-list-header>\n  <ion-item>\n    <ion-label>Color</ion-label>\n    <ion-select name=\"cs\" placeholder=\"Selecciona uno\" interface=\"action-sheet\">\n      <ion-select-option value=\"baw\">Blanco y Negro</ion-select-option>\n      <ion-select-option value=\"col\">Color</ion-select-option>\n    </ion-select>\n  </ion-item>\n  <ion-item>\n    <ion-label>Tamaño</ion-label>\n    <ion-select name=\"ts\" placeholder=\"Selecciona uno\" interface=\"action-sheet\">\n      <ion-select-option value=\"let\">Letter 8.5x11 in</ion-select-option>\n      <ion-select-option value=\"A4\">A4 210x297mm</ion-select-option>\n      <ion-select-option value=\"leg\">Legal 8.5x14 in</ion-select-option>\n      <ion-select-option value=\"A2\">A2 Envelope 4.7x5.75mm</ion-select-option>\n      <ion-select-option value=\"A5\">A5 148x210mm</ion-select-option>\n      <ion-select-option value=\"A6\">A6 105x148mm</ion-select-option>\n    </ion-select>\n  </ion-item>\n  <ion-item>\n    <ion-label>Doble página</ion-label>\n    <ion-select name=\"dps\" placeholder=\"Selecciona uno\" interface=\"action-sheet\">\n      <ion-select-option value=\"doff\">Off</ion-select-option>\n      <ion-select-option value=\"dp\">Borde largo (Standar)</ion-select-option>\n      <ion-select-option value=\"dpr\">Borde Corto (Flip)</ion-select-option>\n    </ion-select>\n  </ion-item>\n</ion-list>\n</ion-card>\n\n<ion-card>\n<ion-list>\n  <ion-radio-group>\n    <ion-list-header>\n      <ion-label>Paginas a imprimir</ion-label>\n    </ion-list-header>\n\n    <ion-item>\n      <ion-label>Todas las paginas</ion-label>\n      <ion-radio slot=\"start\" value=\"allpage\" (click)=\"tpag()\" checked></ion-radio>\n    </ion-item>\n\n    <ion-item>\n      <ion-label>Una sola pagina</ion-label>\n      <ion-radio slot=\"start\" value=\"unapg\" (click)=\"unapag()\"></ion-radio>\n    </ion-item>\n\n    <ion-item>\n      <ion-label>Rango</ion-label>\n      <ion-radio slot=\"start\" value=\"rang\" (click)=\"rpag()\"></ion-radio>\n    </ion-item>\n  </ion-radio-group>\n</ion-list>\n<ion-row>\n<ion-col>\n\t<ion-item>\n\t\t<ion-label position=\"floating\" >Pg. inicial</ion-label>\n\t\t<ion-input type=\"number\" name=\"pgini\" inputmode=\"numeric\" [disabled]=\"actpi\" clear-input=\"true\"></ion-input>\n\t</ion-item>\n</ion-col>\n<ion-col>\n\t<ion-item>\n\t\t<ion-label position=\"floating\" >Pg. final</ion-label>\n\t\t<ion-input type=\"number\" name=\"pagfin\" inputmode=\"numeric\" [disabled]=\"actpf\" clear-input=\"true\"></ion-input>\n\t</ion-item>\n</ion-col>\n</ion-row>\n</ion-card>\n\n<ion-card>\n  <ion-item>\n    <ion-label position=\"floating\" >Numero de Impresiones</ion-label>\n    <ion-input type=\"number\" name=\"ncopias\" inputmode=\"numeric\" clear-input=\"true\" value=\"1\" maxlength=\"2\">\n    </ion-input>\n  </ion-item>\n</ion-card>\n\n<ion-card>\n  <ion-button size=\"large\" color=\"primary\" expand=\"block\" (click)=\"choosefile()\">Seleccionar Archivo\n  </ion-button>\n  <ion-label> <b>{{uploadtext}}</b></ion-label>\n</ion-card>\n\n<ion-card>\n  <ion-button size=\"large\" color=\"secondary\" expand=\"block\" [disabled]=\"bsubir\" (click)='uploadFile()'>Confirmar\n  </ion-button>\n</ion-card>\n\n<ion-card>\n  <ion-button href=\"http://192.168.43.27/cam.html\" size=\"large\" color=\"warning\" expand=\"block\">Otra\n  </ion-button>\n</ion-card>\n\n</ion-content>\n"

/***/ }),

/***/ "./src/app/pages/newdoc/newdoc.page.scss":
/*!***********************************************!*\
  !*** ./src/app/pages/newdoc/newdoc.page.scss ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL25ld2RvYy9uZXdkb2MucGFnZS5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/pages/newdoc/newdoc.page.ts":
/*!*********************************************!*\
  !*** ./src/app/pages/newdoc/newdoc.page.ts ***!
  \*********************************************/
/*! exports provided: NewdocPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewdocPage", function() { return NewdocPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_native_file_chooser_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/file-chooser/ngx */ "./node_modules/@ionic-native/file-chooser/ngx/index.js");
/* harmony import */ var _ionic_native_file_path_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/file-path/ngx */ "./node_modules/@ionic-native/file-path/ngx/index.js");
/* harmony import */ var _ionic_native_file_opener_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/file-opener/ngx */ "./node_modules/@ionic-native/file-opener/ngx/index.js");
/* harmony import */ var _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/file-transfer/ngx */ "./node_modules/@ionic-native/file-transfer/ngx/index.js");
/* harmony import */ var _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/file/ngx */ "./node_modules/@ionic-native/file/ngx/index.js");







var NewdocPage = /** @class */ (function () {
    function NewdocPage(fileChooser, filePath, fileOpener, transfer, file) {
        this.fileChooser = fileChooser;
        this.filePath = filePath;
        this.fileOpener = fileOpener;
        this.transfer = transfer;
        this.file = file;
        this.actpi = true;
        this.actpf = true;
        this.bsubir = true;
        this.uploadtext = "";
        this.downloadtext = "";
        this.dir = "";
    }
    NewdocPage.prototype.ngOnInit = function () {
    };
    NewdocPage.prototype.unapag = function () {
        this.actpf = true;
        this.actpi = false;
    };
    NewdocPage.prototype.rpag = function () {
        this.actpf = false;
        this.actpi = false;
    };
    NewdocPage.prototype.tpag = function () {
        this.actpf = true;
        this.actpi = true;
    };
    NewdocPage.prototype.choosefile = function () {
        var _this = this;
        this.fileChooser.open()
            .then(function (file) {
            _this.filePath.resolveNativePath(file).then(function (resolvedFilePath) {
                _this.dir = resolvedFilePath;
                _this.fileOpener.open(resolvedFilePath, 'application/pdf').then(function (value) {
                    //alert('El archivo seleccionado es: ' + resolvedFilePath);
                    _this.fileTransfer = _this.transfer.create();
                    var options = {
                        fileKey: 'file',
                        mimeType: 'application/pdf',
                        fileName: 'nico.pdf',
                        chunkedMode: false,
                        headers: {}
                    };
                    _this.uploadtext = "Subiendo archivo... ";
                    _this.fileTransfer.upload(resolvedFilePath, "http://10.203.163.52/upload.php", options).then(function (value) {
                        alert("Transferencia completada = " + JSON.stringify(value));
                        _this.uploadtext = "";
                    }).catch(function (err) {
                        alert(JSON.stringify(err));
                    });
                });
            }).catch(function (err) {
                alert(JSON.stringify(err));
            }).catch(function (err) {
                alert(JSON.stringify(err));
            });
        }).catch(function (err) {
            alert(JSON.stringify(err));
        });
        this.bsubir = false;
    };
    NewdocPage.prototype.abort_upload = function () {
        this.fileTransfer.abort();
        alert("Subida cancelada.");
    };
    NewdocPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-newdoc',
            template: __webpack_require__(/*! ./newdoc.page.html */ "./src/app/pages/newdoc/newdoc.page.html"),
            styles: [__webpack_require__(/*! ./newdoc.page.scss */ "./src/app/pages/newdoc/newdoc.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_native_file_chooser_ngx__WEBPACK_IMPORTED_MODULE_2__["FileChooser"],
            _ionic_native_file_path_ngx__WEBPACK_IMPORTED_MODULE_3__["FilePath"],
            _ionic_native_file_opener_ngx__WEBPACK_IMPORTED_MODULE_4__["FileOpener"],
            _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_5__["FileTransfer"],
            _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_6__["File"]])
    ], NewdocPage);
    return NewdocPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-newdoc-newdoc-module.js.map