(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["ubicacion-ubicacion-module"],{

/***/ "./src/app/ubicacion/ubicacion.module.ts":
/*!***********************************************!*\
  !*** ./src/app/ubicacion/ubicacion.module.ts ***!
  \***********************************************/
/*! exports provided: UbicacionPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UbicacionPageModule", function() { return UbicacionPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ubicacion_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ubicacion.page */ "./src/app/ubicacion/ubicacion.page.ts");







var routes = [
    {
        path: '',
        component: _ubicacion_page__WEBPACK_IMPORTED_MODULE_6__["UbicacionPage"]
    }
];
var UbicacionPageModule = /** @class */ (function () {
    function UbicacionPageModule() {
    }
    UbicacionPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_ubicacion_page__WEBPACK_IMPORTED_MODULE_6__["UbicacionPage"]]
        })
    ], UbicacionPageModule);
    return UbicacionPageModule;
}());



/***/ }),

/***/ "./src/app/ubicacion/ubicacion.page.html":
/*!***********************************************!*\
  !*** ./src/app/ubicacion/ubicacion.page.html ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>\n      Ubicación Impresoras\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\t<div id=\"map_canvas\">\n\t</div>\n\n</ion-content>\n"

/***/ }),

/***/ "./src/app/ubicacion/ubicacion.page.scss":
/*!***********************************************!*\
  !*** ./src/app/ubicacion/ubicacion.page.scss ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "page-ubicacion #map_canvas {\n  display: block;\n  height: 100%;\n  width: 100%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL25pY29sYXNfZ2FyY2lhX3IvcHJveWVjdHNfaW9uaWMvaW1wXzIvc3JjL2FwcC91YmljYWNpb24vdWJpY2FjaW9uLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVJLGNBQWM7RUFDZCxZQUFZO0VBQ1osV0FBVyxFQUFBIiwiZmlsZSI6InNyYy9hcHAvdWJpY2FjaW9uL3ViaWNhY2lvbi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJwYWdlLXViaWNhY2lvbiB7XG4gICNtYXBfY2FudmFze1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxufSJdfQ== */"

/***/ }),

/***/ "./src/app/ubicacion/ubicacion.page.ts":
/*!*********************************************!*\
  !*** ./src/app/ubicacion/ubicacion.page.ts ***!
  \*********************************************/
/*! exports provided: UbicacionPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UbicacionPage", function() { return UbicacionPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_native_google_maps__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/google-maps */ "./node_modules/@ionic-native/google-maps/index.js");



var UbicacionPage = /** @class */ (function () {
    function UbicacionPage(googlemapas) {
        this.googlemapas = googlemapas;
    }
    UbicacionPage.prototype.ngOnInit = function () {
    };
    UbicacionPage.prototype.ionViewDidLoad = function () {
        this.cargarmapa();
    };
    UbicacionPage.prototype.cargarmapa = function () {
        var opcionesmapa = {
            mapType: 'MAP_TYPE_TERRAIN',
            controls: {
                compass: true,
                myLocationButton: true,
                zoom: true
            }, camera: {
                target: {
                    lat: 43.0741904,
                    lng: -89.3809802
                },
                zoom: 18,
                tilt: 30
            }
        };
        this.map = this.googlemapas.create('map_canvas', opcionesmapa);
        this.map.one(_ionic_native_google_maps__WEBPACK_IMPORTED_MODULE_2__["GoogleMapsEvent"].MAP_READY).then(function (resultado) {
            console.log('mapa listo');
        }).catch(function (error) {
            console.log('error ' + error);
        });
    };
    UbicacionPage.prototype.tomarposicion = function () {
        var _this = this;
        this.map.getMyLocation()
            .then(function (response) {
            _this.map.moveCamera({
                target: response.latLng
            });
            _this.map.addMarker({
                title: 'My Position',
                icon: 'blue',
                animation: 'DROP',
                position: response.latLng
            });
        })
            .catch(function (error) {
            console.log(error);
        });
    };
    UbicacionPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-ubicacion',
            template: __webpack_require__(/*! ./ubicacion.page.html */ "./src/app/ubicacion/ubicacion.page.html"),
            styles: [__webpack_require__(/*! ./ubicacion.page.scss */ "./src/app/ubicacion/ubicacion.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_native_google_maps__WEBPACK_IMPORTED_MODULE_2__["GoogleMaps"]])
    ], UbicacionPage);
    return UbicacionPage;
}());



/***/ })

}]);
//# sourceMappingURL=ubicacion-ubicacion-module.js.map