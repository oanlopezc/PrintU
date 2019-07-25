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

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>\n      Ubicación Impresoras\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\t<div id=\"map\"></div>\n\t<ion-card>\n\t\t<ion-row>\n\t\t\t<ion-col>\n\t\t\t\t<img class=\"iconx\" src=\"http://maps.google.com/mapfiles/ms/icons/red-dot.png\" alt=\"\"> \n\t\t\t</ion-col>\n\t\t\t<ion-col>\n\t\t\t\tMi ubicación\n\t\t\t</ion-col>\n\t\t\t<ion-col>\n\t\t\t</ion-col>\n\t\t</ion-row>\n\t</ion-card>\n\t<ion-card>\n\t\t<ion-row>\n\t\t\t<ion-col>\n\t\t\t\t<img class=\"iconx\" src=\"http://maps.google.com/mapfiles/ms/icons/blue-dot.png\" alt=\"\"> \n\t\t\t</ion-col>\n\t\t\t<ion-col>\n\t\t\t\tUbicación PrintU\n\t\t\t</ion-col>\n\t\t\t<ion-col>\n\t\t\t</ion-col>\n\t\t</ion-row>\n\t</ion-card>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/ubicacion/ubicacion.page.scss":
/*!***********************************************!*\
  !*** ./src/app/ubicacion/ubicacion.page.scss ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#map {\n  height: 85%;\n  width: 100%; }\n\n.iconx {\n  display: block;\n  width: 20%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL25pY29sYXNfZ2FyY2lhX3IvcHJveWVjdHNfaW9uaWMvaW1wXzIvc3JjL2FwcC91YmljYWNpb24vdWJpY2FjaW9uLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNHLFdBQVc7RUFDWCxXQUFXLEVBQUE7O0FBR2Q7RUFDQyxjQUFjO0VBQ2QsVUFBVSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvdWJpY2FjaW9uL3ViaWNhY2lvbi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjbWFwe1xuICAgaGVpZ2h0OiA4NSU7XG4gICB3aWR0aDogMTAwJTtcbn1cblxuLmljb254e1xuXHRkaXNwbGF5OiBibG9jaztcblx0d2lkdGg6IDIwJTtcbn1cbiJdfQ== */"

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
/* harmony import */ var _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/geolocation/ngx */ "./node_modules/@ionic-native/geolocation/ngx/index.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");




var UbicacionPage = /** @class */ (function () {
    function UbicacionPage(geolocation, loadingCtrl) {
        this.geolocation = geolocation;
        this.loadingCtrl = loadingCtrl;
        this.mapRef = null;
    }
    UbicacionPage.prototype.ngOnInit = function () {
        this.loadMap();
    };
    UbicacionPage.prototype.loadMap = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var UNlatlng, Alatlng, Blatlng, Clatlng, Dlatlng, loading, myLatLng, mapEle;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        UNlatlng = {
                            lat: 4.6377025328025265,
                            lng: -74.08395409584047
                        };
                        Alatlng = {
                            lat: 4.63651553014389,
                            lng: -74.0844637155533
                        };
                        Blatlng = {
                            lat: 4.638504560496676,
                            lng: -74.08384144306184
                        };
                        Clatlng = {
                            lat: 4.639253118856058,
                            lng: -74.08262908458711
                        };
                        Dlatlng = {
                            lat: 4.63728547804165,
                            lng: -74.0828436613083
                        };
                        return [4 /*yield*/, this.loadingCtrl.create()];
                    case 1:
                        loading = _a.sent();
                        loading.present();
                        return [4 /*yield*/, this.getLocation()];
                    case 2:
                        myLatLng = _a.sent();
                        mapEle = document.getElementById('map');
                        this.mapRef = new google.maps.Map(mapEle, {
                            center: UNlatlng,
                            zoom: 16,
                            minZoom: 12,
                            maxZoom: 20
                        });
                        google.maps.event
                            .addListenerOnce(this.mapRef, 'idle', function () {
                            loading.dismiss();
                            var marker = new google.maps.Marker({
                                position: myLatLng,
                                map: _this.mapRef,
                                title: "Mi Ubicación",
                                draggable: true,
                                icon: { url: "http://maps.google.com/mapfiles/ms/icons/red-dot.png" }
                            });
                            var infowindow = new google.maps.InfoWindow({
                                content: "MI UBICACIÓN"
                            });
                            marker.addListener('click', function () {
                                infowindow.open(Map, marker);
                            });
                            var markerA = new google.maps.Marker({
                                position: Alatlng,
                                map: _this.mapRef,
                                title: "Edificio Medicina PISO 1,2",
                                draggable: false,
                                icon: { url: "http://maps.google.com/mapfiles/ms/icons/blue-dot.png" }
                            });
                            var infowindowA = new google.maps.InfoWindow({
                                content: "Edificio Medicina PISO 1,2"
                            });
                            markerA.addListener('click', function () {
                                infowindowA.open(Map, markerA);
                            });
                            var markerB = new google.maps.Marker({
                                position: Blatlng,
                                map: _this.mapRef,
                                title: "Edificio Aulas de Ingenieria PISO 1",
                                draggable: false,
                                icon: { url: "http://maps.google.com/mapfiles/ms/icons/blue-dot.png" }
                            });
                            var infowindowB = new google.maps.InfoWindow({
                                content: "Edificio Aulas de Ingenieria PISO 1"
                            });
                            markerB.addListener('click', function () {
                                infowindowB.open(Map, markerB);
                            });
                            var markerC = new google.maps.Marker({
                                position: Clatlng,
                                map: _this.mapRef,
                                title: "Edificio Lab. Ingenieria Electrica y Electronica PISO 1",
                                draggable: false,
                                icon: { url: "http://maps.google.com/mapfiles/ms/icons/blue-dot.png" }
                            });
                            var infowindowC = new google.maps.InfoWindow({
                                content: "Edificio Lab. Ingenieria Electrica y Electronica PISO 1"
                            });
                            markerC.addListener('click', function () {
                                infowindowC.open(Map, markerC);
                            });
                            var markerD = new google.maps.Marker({
                                position: Dlatlng,
                                map: _this.mapRef,
                                title: "Edificio Facultad Ingenieria PISO 1,2,3",
                                draggable: false,
                                icon: { url: "http://maps.google.com/mapfiles/ms/icons/blue-dot.png" }
                            });
                            var infowindowD = new google.maps.InfoWindow({
                                content: "Edificio Facultad Ingenieria PISO 1,2,3"
                            });
                            markerD.addListener('click', function () {
                                infowindowD.open(Map, markerD);
                            });
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    UbicacionPage.prototype.getLocation = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var rta;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.geolocation.getCurrentPosition()];
                    case 1:
                        rta = _a.sent();
                        return [2 /*return*/, {
                                lat: rta.coords.latitude,
                                lng: rta.coords.longitude
                            }];
                }
            });
        });
    };
    UbicacionPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-ubicacion',
            template: __webpack_require__(/*! ./ubicacion.page.html */ "./src/app/ubicacion/ubicacion.page.html"),
            styles: [__webpack_require__(/*! ./ubicacion.page.scss */ "./src/app/ubicacion/ubicacion.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_2__["Geolocation"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"]])
    ], UbicacionPage);
    return UbicacionPage;
}());



/***/ })

}]);
//# sourceMappingURL=ubicacion-ubicacion-module.js.map