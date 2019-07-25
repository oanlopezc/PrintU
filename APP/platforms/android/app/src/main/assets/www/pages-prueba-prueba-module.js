(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-prueba-prueba-module"],{

/***/ "./src/app/pages/prueba/prueba.module.ts":
/*!***********************************************!*\
  !*** ./src/app/pages/prueba/prueba.module.ts ***!
  \***********************************************/
/*! exports provided: PruebaPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PruebaPageModule", function() { return PruebaPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _prueba_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./prueba.page */ "./src/app/pages/prueba/prueba.page.ts");







var routes = [
    {
        path: '',
        component: _prueba_page__WEBPACK_IMPORTED_MODULE_6__["PruebaPage"]
    }
];
var PruebaPageModule = /** @class */ (function () {
    function PruebaPageModule() {
    }
    PruebaPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_prueba_page__WEBPACK_IMPORTED_MODULE_6__["PruebaPage"]]
        })
    ], PruebaPageModule);
    return PruebaPageModule;
}());



/***/ }),

/***/ "./src/app/pages/prueba/prueba.page.html":
/*!***********************************************!*\
  !*** ./src/app/pages/prueba/prueba.page.html ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title>prueba</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\t<ion-card>\n<button size=\"large\" expand=\"block\" (click)=\"getmolina()\">Holi</button>\n</ion-card>\n<br>\n<button (click)=\"getTask()\">holi2</button>\n<br>\n<button (click)=\"getomar()\">holi3</button>\n<br>\n<br>\n<ion-label position=\"floating\">email</ion-label>\n<ion-input name=\"email\" type=\"text\"></ion-input>\n<button (click)=\"un_user()\">final</button>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/pages/prueba/prueba.page.scss":
/*!***********************************************!*\
  !*** ./src/app/pages/prueba/prueba.page.scss ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3BydWViYS9wcnVlYmEucGFnZS5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/pages/prueba/prueba.page.ts":
/*!*********************************************!*\
  !*** ./src/app/pages/prueba/prueba.page.ts ***!
  \*********************************************/
/*! exports provided: PruebaPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PruebaPage", function() { return PruebaPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _services_task_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/task.service */ "./src/app/services/task.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");



var PruebaPage = /** @class */ (function () {
    function PruebaPage(taskService) {
        this.taskService = taskService;
        this.email_mio = "nigarciara@unal.edu.co";
    }
    PruebaPage.prototype.ngOnInit = function () {
    };
    PruebaPage.prototype.getAllTasks = function () {
        this.taskService.getAllTasks()
            .subscribe(function (todos) {
            console.log(todos);
        });
    };
    PruebaPage.prototype.getTask = function () {
        this.taskService.getTask('1')
            .subscribe(function (todo) {
            console.log(todo);
        });
    };
    PruebaPage.prototype.getmolina = function () {
        this.taskService.getUs('1').subscribe(function (todos) {
            console.log(todos);
        });
    };
    PruebaPage.prototype.un_user = function () {
        this.taskService.getuno('nigarciara@unal.edu.co').subscribe(function (my_con) {
            console.log(my_con);
        });
    };
    /*updateTask() {
    const task = {
      id: '1',
      userId: '1',
      title: 'change title',
      completed: true
    };
    this.taskService.updateTask(task)
    .subscribe(todo => {
      console.log(todo);
    });
  }*/
    PruebaPage.prototype.getomar = function () {
        var omitar = {
            id: '4',
            NFC_id: 'aaaaaaaaaa',
            nombre: 'omar',
            apellido: 'lopez',
            email: 'o@unal.edu.co',
            password: 'omar123'
        };
        this.taskService.updateTask(omitar).subscribe(function (abc) {
            console.log(abc);
        });
    };
    PruebaPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-prueba',
            template: __webpack_require__(/*! ./prueba.page.html */ "./src/app/pages/prueba/prueba.page.html"),
            styles: [__webpack_require__(/*! ./prueba.page.scss */ "./src/app/pages/prueba/prueba.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_task_service__WEBPACK_IMPORTED_MODULE_1__["TaskService"]])
    ], PruebaPage);
    return PruebaPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-prueba-prueba-module.js.map