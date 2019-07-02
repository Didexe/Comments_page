(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<div style=\"text-align:center\">\n  <h1>\n    Welcome to {{ title }}!\n  </h1>\n<router-outlet></router-outlet>\n<!-- <div [@routeAnimations]=\"prepareRoute(outlet)\" >\n    <router-outlet #outlet=\"outlet\"></router-outlet>\n</div> -->\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/comment-single/comment-single.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/comment-single/comment-single.component.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form id=\"single-comment-form\">\n    <label>\n        <p>ID: </p>\n        <input type=\"text\" placeholder={{comment.id}} disabled>\n    </label>\n    <label>\n        <p>Date: </p>\n        <input type=\"text\" placeholder=\"{{ comment.date | date:'medium' }}\" disabled>\n    </label>\n    <label>\n        <p>Type: </p>\n        <input type=\"text\" placeholder={{comment.type}} disabled>\n    </label>\n    <label>\n        <p>Description: </p>\n        <textarea type=\"text\" class=\"form-control\" name=\"description\" placeholder={{comment.description}} disabled ></textarea>\n    </label>\n    <div class=\"comment-actions\">\n        <button class=\"btn-delete\" (click)=\"showDialog('delete');\">Delete comment</button>\n        <button class=\"btn-edit\" (click)=\"showDialog('edit');\">Edit comment</button>\n    </div>\n</form>\n\n<!-- edit comment popup -->    \n<div class=\"dialog-background\" *ngIf=displayDelDialog>\n    <div class=\"delete-dialog\">\n        <h3>Are you sure you want to delete this comment?</h3>\n        <button (click)=\"hideDialog('delete');\">Cnacel</button>\n        <button (click)=\"deleteComment();\">Confirm</button>\n    </div>\n</div>\n\n<!-- edit comment popup -->\n<div class=\"dialog-background\" *ngIf=displayEditDialog>\n    <div class=\"edit-dialog\">\n            <form id=\"edit-form\" #editForm=\"ngForm\">\n                    <label>\n                        <p>Comment description: </p>\n                        <input class=\"form-control\" name=\"description\" [(ngModel)]=\"descriptionText\" #description=\"ngModel\" placeholder={{comment.description}} required />\n                        <div class=\"error-message\"><span *ngIf=\"description.invalid\" >Description is required</span></div>\n                    </label>\n                    <label>\n                        <p>Comment type: </p>\n                        <select class=\"form-control\" name=\"type\" [(ngModel)]=\"typeText\" #type=\"ngModel\"  required>\n                            <option disabled selected value></option>\n                            <option value=\"info\">info</option>\n                            <option value=\"warning\">warning</option>\n                            <option value=\"error\">error</option>\n                        </select>\n                        <div class=\"error-message\"><span *ngIf=\"type.invalid\">Type is required</span></div>\n                    </label>\n            </form>\n        <button (click)=\"hideDialog('edit');\">Cnacel</button>\n        <button (click)=\"editComment(typeText, descriptionText);\" [disabled]=\"editForm.invalid\">Edit</button>\n    </div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/comments/comments.component.html":
/*!****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/comments/comments.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<form id=\"comments-form\" #commentsForm=\"ngForm\">\n    <label>\n        <p>Comment description: </p>\n        <input class=\"form-control\" name=\"description\" [(ngModel)]=\"descriptionText\" #description=\"ngModel\" required />\n        <div class=\"error-message\"><span *ngIf=\"description.invalid\" >Description is required</span></div>\n    </label>\n    <label>\n        <p>Comment type: </p>\n        <select class=\"form-control\" name=\"type\" [(ngModel)]=\"typeText\" #type=\"ngModel\" required>\n            <option disabled selected value></option>\n            <option value=\"info\">info</option>\n            <option value=\"warning\">warning</option>\n            <option value=\"error\">error</option>\n        </select>\n        <div class=\"error-message\"><span *ngIf=\"type.invalid\">Type is required</span></div>\n    </label>\n<button type=\"submit\" class=\"btn-add\" [disabled]=\"!commentsForm.valid\" (click)=\"addComment(descriptionText, typeText); descriptionText=''; typeText=''\">Add comment</button>\n</form>\n\n<ul id=\"comments\">\n    <li *ngFor=\"let comment of comments\">\n      <a routerLink=\"/comment/{{comment.id}}\" class=\"comment {{comment.type}}\">\n        <span class=\"date\">{{comment.date | date:'medium' }} </span>|<span class=\"type\">{{comment.type}}</span>|<span class=\"description\">{{comment.description}}</span>\n      </a>\n    </li>\n  </ul>\n"

/***/ }),

/***/ "./src/app/Models/comment.ts":
/*!***********************************!*\
  !*** ./src/app/Models/comment.ts ***!
  \***********************************/
/*! exports provided: Comment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Comment", function() { return Comment; });
class Comment {
    constructor(id, description, type) {
        this.id = id;
        this.description = description;
        this.type = type;
        this.date = Comment.genDate();
    }
    static genDate() {
        return new Date().getTime();
    }
}
Comment.ctorParameters = () => [
    null,
    null,
    null
];


/***/ }),

/***/ "./src/app/Services/comments.service.ts":
/*!**********************************************!*\
  !*** ./src/app/Services/comments.service.ts ***!
  \**********************************************/
/*! exports provided: CommentsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommentsService", function() { return CommentsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _db__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../db */ "./src/app/db.ts");
/* harmony import */ var _Models_comment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Models/comment */ "./src/app/Models/comment.ts");




let CommentsService = class CommentsService {
    getComments() {
        return _db__WEBPACK_IMPORTED_MODULE_2__["Db"].sort((a, b) => {
            return b.date - a.date;
        });
    }
    getComment(id) {
        return _db__WEBPACK_IMPORTED_MODULE_2__["Db"].find(function (comment) {
            return comment.id === id;
        });
    }
    addComment(description, type) {
        let id = Object(_db__WEBPACK_IMPORTED_MODULE_2__["genId"])();
        _db__WEBPACK_IMPORTED_MODULE_2__["Db"].push(new _Models_comment__WEBPACK_IMPORTED_MODULE_3__["Comment"](id, description, type));
        return this.getComments();
    }
    editComment(comment) {
        _db__WEBPACK_IMPORTED_MODULE_2__["Db"].forEach(comm => {
            if (comm.id == comment.id) {
                comm.description = comment.description;
                comm.type = comment.type;
                comm.date = _Models_comment__WEBPACK_IMPORTED_MODULE_3__["Comment"].genDate();
            }
        });
    }
    deleteComment(id) {
        let indToDel = _db__WEBPACK_IMPORTED_MODULE_2__["Db"].findIndex(function (comment) {
            return comment.id === id;
        });
        _db__WEBPACK_IMPORTED_MODULE_2__["Db"].splice(indToDel, 1);
    }
};
CommentsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], CommentsService);



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _comments_comments_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./comments/comments.component */ "./src/app/comments/comments.component.ts");
/* harmony import */ var _comment_single_comment_single_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./comment-single/comment-single.component */ "./src/app/comment-single/comment-single.component.ts");





const routes = [
    { path: '', redirectTo: '/comments', pathMatch: 'full' },
    { path: 'comments', component: _comments_comments_component__WEBPACK_IMPORTED_MODULE_3__["CommentsComponent"] },
    { path: 'comment/:id', component: _comment_single_comment_single_component__WEBPACK_IMPORTED_MODULE_4__["CommentSingleComponent"] },
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.less":
/*!************************************!*\
  !*** ./src/app/app.component.less ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQubGVzcyJ9 */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



let AppComponent = class AppComponent {
    constructor(router) {
        this.router = router;
        this.title = 'comments-app';
    }
    ngOnInit() {
        this.router.navigateByUrl('');
    }
};
AppComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
        styles: [__webpack_require__(/*! ./app.component.less */ "./src/app/app.component.less")]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _comments_comments_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./comments/comments.component */ "./src/app/comments/comments.component.ts");
/* harmony import */ var _comment_single_comment_single_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./comment-single/comment-single.component */ "./src/app/comment-single/comment-single.component.ts");









let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
            _comments_comments_component__WEBPACK_IMPORTED_MODULE_7__["CommentsComponent"],
            _comment_single_comment_single_component__WEBPACK_IMPORTED_MODULE_8__["CommentSingleComponent"],
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"]
        ],
        providers: [],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/comment-single/comment-single.component.less":
/*!**************************************************************!*\
  !*** ./src/app/comment-single/comment-single.component.less ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#single-comment-form,\n#edit-form {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n#single-comment-form label,\n#edit-form label {\n  display: flex;\n  align-items: center;\n}\n#single-comment-form label p,\n#edit-form label p {\n  width: 150px;\n  text-align: right;\n}\n#single-comment-form label input,\n#edit-form label input,\n#single-comment-form label select,\n#edit-form label select,\n#single-comment-form label textarea,\n#edit-form label textarea {\n  width: 150px;\n  margin: 0 10px;\n}\n#single-comment-form label .error-message,\n#edit-form label .error-message {\n  width: 150px;\n  color: red;\n  font-size: 12px;\n  text-align: left;\n}\n#single-comment-form .comment-actions,\n#edit-form .comment-actions {\n  display: flex;\n  width: 325px;\n  justify-content: flex-end;\n}\n#single-comment-form button,\n#edit-form button {\n  margin-top: 20px;\n}\n.dialog-background {\n  width: 100%;\n  height: 100%;\n  background-color: rgba(0, 0, 0, 0.2);\n  position: absolute;\n  top: 0;\n}\n.dialog-background .delete-dialog,\n.dialog-background .edit-dialog {\n  width: 300px;\n  height: 100px;\n  position: absolute;\n  background-color: lightgray;\n  border: 1px solid gray;\n  padding: 30px;\n  top: 33%;\n  left: 32%;\n}\n.dialog-background .edit-dialog {\n  width: 500px;\n  top: 33%;\n  left: 25%;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tbWVudC1zaW5nbGUvQzovVXNlcnMvRGFuaWVsUGV0cm92L0RvY3VtZW50cy9Db21tZW50c19wYWdlL2NvbW1lbnRzLWFwcC9zcmMvYXBwL2NvbW1lbnQtc2luZ2xlL2NvbW1lbnQtc2luZ2xlLmNvbXBvbmVudC5sZXNzIiwic3JjL2FwcC9jb21tZW50LXNpbmdsZS9jb21tZW50LXNpbmdsZS5jb21wb25lbnQubGVzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7RUFDSSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtBQ0VKO0FETEE7O0VBS1EsYUFBQTtFQUNBLG1CQUFBO0FDSVI7QURWQTs7RUFRWSxZQUFBO0VBQ0EsaUJBQUE7QUNNWjtBRGZBOzs7Ozs7RUFZWSxZQUFBO0VBQ0EsY0FBQTtBQ1daO0FEeEJBOztFQWdCWSxZQUFBO0VBQ0EsVUFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQ1laO0FEL0JBOztFQXVCUSxhQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQUFBO0FDWVI7QURyQ0E7O0VBNEJRLGdCQUFBO0FDYVI7QURWQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0Esb0NBQUE7RUFDQSxrQkFBQTtFQUNBLE1BQUE7QUNZSjtBRGpCQTs7RUFPUSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0EsMkJBQUE7RUFDQSxzQkFBQTtFQUNBLGFBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtBQ2NSO0FENUJBO0VBaUJRLFlBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtBQ2NSIiwiZmlsZSI6InNyYy9hcHAvY29tbWVudC1zaW5nbGUvY29tbWVudC1zaW5nbGUuY29tcG9uZW50Lmxlc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjc2luZ2xlLWNvbW1lbnQtZm9ybSwgI2VkaXQtZm9ybSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgbGFiZWwge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBwIHtcbiAgICAgICAgICAgIHdpZHRoOiAxNTBweDtcbiAgICAgICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xuICAgICAgICB9XG4gICAgICAgIGlucHV0LCBzZWxlY3QsIHRleHRhcmVhIHtcbiAgICAgICAgICAgIHdpZHRoOiAxNTBweDtcbiAgICAgICAgICAgIG1hcmdpbjogMCAxMHB4O1xuICAgICAgICB9XG4gICAgICAgIC5lcnJvci1tZXNzYWdlIHtcbiAgICAgICAgICAgIHdpZHRoOiAxNTBweDtcbiAgICAgICAgICAgIGNvbG9yOiByZWQ7XG4gICAgICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgICAgICB9XG4gICAgfVxuICAgIC5jb21tZW50LWFjdGlvbnMge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICB3aWR0aDogMzI1cHg7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gICAgfVxuICAgIGJ1dHRvbiB7XG4gICAgICAgIG1hcmdpbi10b3A6IDIwcHg7XG4gICAgfVxufVxuLmRpYWxvZy1iYWNrZ3JvdW5kIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLDAsMCwuMik7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMDtcbiAgICAuZGVsZXRlLWRpYWxvZywgLmVkaXQtZGlhbG9nIHtcbiAgICAgICAgd2lkdGg6IDMwMHB4O1xuICAgICAgICBoZWlnaHQ6IDEwMHB4O1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Z3JheTtcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgZ3JheTtcbiAgICAgICAgcGFkZGluZzogMzBweDtcbiAgICAgICAgdG9wOiAzMyU7XG4gICAgICAgIGxlZnQ6IDMyJTtcbiAgICB9XG4gICAgLmVkaXQtZGlhbG9nIHtcbiAgICAgICAgd2lkdGg6IDUwMHB4O1xuICAgICAgICB0b3A6IDMzJTtcbiAgICAgICAgbGVmdDogMjUlO1xuICAgIH1cbn0iLCIjc2luZ2xlLWNvbW1lbnQtZm9ybSxcbiNlZGl0LWZvcm0ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuI3NpbmdsZS1jb21tZW50LWZvcm0gbGFiZWwsXG4jZWRpdC1mb3JtIGxhYmVsIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbiNzaW5nbGUtY29tbWVudC1mb3JtIGxhYmVsIHAsXG4jZWRpdC1mb3JtIGxhYmVsIHAge1xuICB3aWR0aDogMTUwcHg7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xufVxuI3NpbmdsZS1jb21tZW50LWZvcm0gbGFiZWwgaW5wdXQsXG4jZWRpdC1mb3JtIGxhYmVsIGlucHV0LFxuI3NpbmdsZS1jb21tZW50LWZvcm0gbGFiZWwgc2VsZWN0LFxuI2VkaXQtZm9ybSBsYWJlbCBzZWxlY3QsXG4jc2luZ2xlLWNvbW1lbnQtZm9ybSBsYWJlbCB0ZXh0YXJlYSxcbiNlZGl0LWZvcm0gbGFiZWwgdGV4dGFyZWEge1xuICB3aWR0aDogMTUwcHg7XG4gIG1hcmdpbjogMCAxMHB4O1xufVxuI3NpbmdsZS1jb21tZW50LWZvcm0gbGFiZWwgLmVycm9yLW1lc3NhZ2UsXG4jZWRpdC1mb3JtIGxhYmVsIC5lcnJvci1tZXNzYWdlIHtcbiAgd2lkdGg6IDE1MHB4O1xuICBjb2xvcjogcmVkO1xuICBmb250LXNpemU6IDEycHg7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG59XG4jc2luZ2xlLWNvbW1lbnQtZm9ybSAuY29tbWVudC1hY3Rpb25zLFxuI2VkaXQtZm9ybSAuY29tbWVudC1hY3Rpb25zIHtcbiAgZGlzcGxheTogZmxleDtcbiAgd2lkdGg6IDMyNXB4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xufVxuI3NpbmdsZS1jb21tZW50LWZvcm0gYnV0dG9uLFxuI2VkaXQtZm9ybSBidXR0b24ge1xuICBtYXJnaW4tdG9wOiAyMHB4O1xufVxuLmRpYWxvZy1iYWNrZ3JvdW5kIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjIpO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbn1cbi5kaWFsb2ctYmFja2dyb3VuZCAuZGVsZXRlLWRpYWxvZyxcbi5kaWFsb2ctYmFja2dyb3VuZCAuZWRpdC1kaWFsb2cge1xuICB3aWR0aDogMzAwcHg7XG4gIGhlaWdodDogMTAwcHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRncmF5O1xuICBib3JkZXI6IDFweCBzb2xpZCBncmF5O1xuICBwYWRkaW5nOiAzMHB4O1xuICB0b3A6IDMzJTtcbiAgbGVmdDogMzIlO1xufVxuLmRpYWxvZy1iYWNrZ3JvdW5kIC5lZGl0LWRpYWxvZyB7XG4gIHdpZHRoOiA1MDBweDtcbiAgdG9wOiAzMyU7XG4gIGxlZnQ6IDI1JTtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/comment-single/comment-single.component.ts":
/*!************************************************************!*\
  !*** ./src/app/comment-single/comment-single.component.ts ***!
  \************************************************************/
/*! exports provided: CommentSingleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommentSingleComponent", function() { return CommentSingleComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _Services_comments_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Services/comments.service */ "./src/app/Services/comments.service.ts");




let CommentSingleComponent = class CommentSingleComponent {
    constructor(router, route, CommentsService) {
        this.router = router;
        this.route = route;
        this.CommentsService = CommentsService;
    }
    ngOnInit() {
        this.id = +this.route.snapshot.paramMap.get('id');
        this.getComment();
    }
    getComment() {
        this.comment = this.CommentsService.getComment(this.id);
    }
    deleteComment() {
        this.CommentsService.deleteComment(this.id);
        // this.router.navigateByUrl('/comments');
        this.router.navigate(['/comments', { queryParams: { delete: 'success' } }]);
    }
    editComment(type, description) {
        // this.CommentsService.editComment(this.comment);
        this.CommentsService.editComment({ id: this.comment.id, type, description });
        this.router.navigate(['/comments', { queryParams: { edit: 'success' } }]);
    }
    showDialog(name) {
        switch (name) {
            case 'delete':
                this.displayDelDialog = true;
                break;
            case 'edit':
                this.displayEditDialog = true;
        }
    }
    hideDialog(name) {
        switch (name) {
            case 'delete':
                this.displayDelDialog = false;
                break;
            case 'edit':
                this.displayEditDialog = false;
        }
    }
};
CommentSingleComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _Services_comments_service__WEBPACK_IMPORTED_MODULE_3__["CommentsService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], CommentSingleComponent.prototype, "comment", void 0);
CommentSingleComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-comment-single',
        template: __webpack_require__(/*! raw-loader!./comment-single.component.html */ "./node_modules/raw-loader/index.js!./src/app/comment-single/comment-single.component.html"),
        styles: [__webpack_require__(/*! ./comment-single.component.less */ "./src/app/comment-single/comment-single.component.less")]
    })
], CommentSingleComponent);



/***/ }),

/***/ "./src/app/comments/comments.component.less":
/*!**************************************************!*\
  !*** ./src/app/comments/comments.component.less ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#comments-form {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n#comments-form label {\n  display: flex;\n  align-items: center;\n}\n#comments-form label p {\n  width: 150px;\n  text-align: right;\n}\n#comments-form label input {\n  width: 150px;\n  margin: 0 10px;\n}\n#comments-form label select {\n  width: 154px;\n  height: 21px;\n  margin: 0 10px;\n}\n#comments-form label .error-message {\n  width: 150px;\n  color: red;\n  font-size: 12px;\n  text-align: left;\n}\n#comments-form button {\n  margin-top: 20px;\n}\n#comments {\n  width: 60%;\n  min-height: 30px;\n  margin: auto;\n  margin-top: 30px;\n}\n#comments li {\n  list-style-type: none;\n  text-align: left;\n  padding: 5px;\n  background-color: lightgrey;\n  border-bottom: 1px solid white;\n}\n#comments li a {\n  display: flex;\n  text-decoration: none;\n}\n#comments li a span {\n  margin: 0 10px;\n}\n#comments li a span.date {\n  width: 33%;\n}\n#comments li a span.type {\n  width: 10%;\n}\n#comments li a span.description {\n  width: 55%;\n}\n#comments li a.info {\n  color: green;\n}\n#comments li a.warning {\n  color: yellow;\n}\n#comments li a.error {\n  color: red;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tbWVudHMvQzovVXNlcnMvRGFuaWVsUGV0cm92L0RvY3VtZW50cy9Db21tZW50c19wYWdlL2NvbW1lbnRzLWFwcC9zcmMvYXBwL2NvbW1lbnRzL2NvbW1lbnRzLmNvbXBvbmVudC5sZXNzIiwic3JjL2FwcC9jb21tZW50cy9jb21tZW50cy5jb21wb25lbnQubGVzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0FDQ0o7QURKQTtFQUtRLGFBQUE7RUFDQSxtQkFBQTtBQ0VSO0FEUkE7RUFRWSxZQUFBO0VBQ0EsaUJBQUE7QUNHWjtBRFpBO0VBWVksWUFBQTtFQUNBLGNBQUE7QUNHWjtBRGhCQTtFQWdCWSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7QUNHWjtBRHJCQTtFQXFCWSxZQUFBO0VBQ0EsVUFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQ0daO0FEM0JBO0VBNEJRLGdCQUFBO0FDRVI7QURDQTtFQUNJLFVBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtBQ0NKO0FETEE7RUFNUSxxQkFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLDJCQUFBO0VBQ0EsOEJBQUE7QUNFUjtBRFpBO0VBWVksYUFBQTtFQWFBLHFCQUFBO0FDVFo7QURoQkE7RUFjZ0IsY0FBQTtBQ0toQjtBREpnQjtFQUNJLFVBQUE7QUNNcEI7QURKZ0I7RUFDSSxVQUFBO0FDTXBCO0FESmdCO0VBQ0ksVUFBQTtBQ01wQjtBREZZO0VBQ0ksWUFBQTtBQ0loQjtBREZZO0VBQ0ksYUFBQTtBQ0loQjtBREZZO0VBQ0ksVUFBQTtBQ0loQiIsImZpbGUiOiJzcmMvYXBwL2NvbW1lbnRzL2NvbW1lbnRzLmNvbXBvbmVudC5sZXNzIiwic291cmNlc0NvbnRlbnQiOlsiI2NvbW1lbnRzLWZvcm17XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgbGFiZWwge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBwIHtcbiAgICAgICAgICAgIHdpZHRoOiAxNTBweDtcbiAgICAgICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xuICAgICAgICB9XG4gICAgICAgIGlucHV0IHtcbiAgICAgICAgICAgIHdpZHRoOiAxNTBweDtcbiAgICAgICAgICAgIG1hcmdpbjogMCAxMHB4O1xuICAgICAgICB9XG4gICAgICAgIHNlbGVjdCB7XG4gICAgICAgICAgICB3aWR0aDogMTU0cHg7XG4gICAgICAgICAgICBoZWlnaHQ6IDIxcHg7XG4gICAgICAgICAgICBtYXJnaW46IDAgMTBweDtcbiAgICAgICAgfVxuICAgICAgICAuZXJyb3ItbWVzc2FnZSB7XG4gICAgICAgICAgICB3aWR0aDogMTUwcHg7XG4gICAgICAgICAgICBjb2xvcjogcmVkO1xuICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAgICAgfVxuICAgIH1cbiAgICBidXR0b24ge1xuICAgICAgICBtYXJnaW4tdG9wOiAyMHB4O1xuICAgIH1cbn1cbiNjb21tZW50cyB7XG4gICAgd2lkdGg6IDYwJTtcbiAgICBtaW4taGVpZ2h0OiAzMHB4O1xuICAgIG1hcmdpbjogYXV0bztcbiAgICBtYXJnaW4tdG9wOiAzMHB4O1xuICAgIGxpIHtcbiAgICAgICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xuICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgICAgICBwYWRkaW5nOjVweDtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRncmV5O1xuICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgd2hpdGU7XG4gICAgICAgIGEge1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIHNwYW4ge1xuICAgICAgICAgICAgICAgIG1hcmdpbjogMCAxMHB4O1xuICAgICAgICAgICAgICAgICYuZGF0ZSB7XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAzMyU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICYudHlwZSB7XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMCU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICYuZGVzY3JpcHRpb24ge1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDogNTUlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgICAgICYuaW5mbyB7XG4gICAgICAgICAgICAgICAgY29sb3I6IGdyZWVuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgJi53YXJuaW5nIHtcbiAgICAgICAgICAgICAgICBjb2xvcjogeWVsbG93O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgJi5lcnJvciB7XG4gICAgICAgICAgICAgICAgY29sb3I6IHJlZDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn0iLCIjY29tbWVudHMtZm9ybSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4jY29tbWVudHMtZm9ybSBsYWJlbCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4jY29tbWVudHMtZm9ybSBsYWJlbCBwIHtcbiAgd2lkdGg6IDE1MHB4O1xuICB0ZXh0LWFsaWduOiByaWdodDtcbn1cbiNjb21tZW50cy1mb3JtIGxhYmVsIGlucHV0IHtcbiAgd2lkdGg6IDE1MHB4O1xuICBtYXJnaW46IDAgMTBweDtcbn1cbiNjb21tZW50cy1mb3JtIGxhYmVsIHNlbGVjdCB7XG4gIHdpZHRoOiAxNTRweDtcbiAgaGVpZ2h0OiAyMXB4O1xuICBtYXJnaW46IDAgMTBweDtcbn1cbiNjb21tZW50cy1mb3JtIGxhYmVsIC5lcnJvci1tZXNzYWdlIHtcbiAgd2lkdGg6IDE1MHB4O1xuICBjb2xvcjogcmVkO1xuICBmb250LXNpemU6IDEycHg7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG59XG4jY29tbWVudHMtZm9ybSBidXR0b24ge1xuICBtYXJnaW4tdG9wOiAyMHB4O1xufVxuI2NvbW1lbnRzIHtcbiAgd2lkdGg6IDYwJTtcbiAgbWluLWhlaWdodDogMzBweDtcbiAgbWFyZ2luOiBhdXRvO1xuICBtYXJnaW4tdG9wOiAzMHB4O1xufVxuI2NvbW1lbnRzIGxpIHtcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBwYWRkaW5nOiA1cHg7XG4gIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Z3JleTtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHdoaXRlO1xufVxuI2NvbW1lbnRzIGxpIGEge1xuICBkaXNwbGF5OiBmbGV4O1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG4jY29tbWVudHMgbGkgYSBzcGFuIHtcbiAgbWFyZ2luOiAwIDEwcHg7XG59XG4jY29tbWVudHMgbGkgYSBzcGFuLmRhdGUge1xuICB3aWR0aDogMzMlO1xufVxuI2NvbW1lbnRzIGxpIGEgc3Bhbi50eXBlIHtcbiAgd2lkdGg6IDEwJTtcbn1cbiNjb21tZW50cyBsaSBhIHNwYW4uZGVzY3JpcHRpb24ge1xuICB3aWR0aDogNTUlO1xufVxuI2NvbW1lbnRzIGxpIGEuaW5mbyB7XG4gIGNvbG9yOiBncmVlbjtcbn1cbiNjb21tZW50cyBsaSBhLndhcm5pbmcge1xuICBjb2xvcjogeWVsbG93O1xufVxuI2NvbW1lbnRzIGxpIGEuZXJyb3Ige1xuICBjb2xvcjogcmVkO1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/comments/comments.component.ts":
/*!************************************************!*\
  !*** ./src/app/comments/comments.component.ts ***!
  \************************************************/
/*! exports provided: CommentsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommentsComponent", function() { return CommentsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _Services_comments_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Services/comments.service */ "./src/app/Services/comments.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");




let CommentsComponent = class CommentsComponent {
    constructor(CommentsService, route) {
        this.CommentsService = CommentsService;
        this.route = route;
    }
    ngOnInit() {
        this.route.queryParams.subscribe(params => {
            console.log(params);
        });
        this.getComments();
    }
    getComments() {
        this.comments = this.CommentsService.getComments().sort((a, b) => {
            return b.date - a.date;
        });
    }
    addComment(description, type) {
        this.comments = this.CommentsService.addComment(description, type);
    }
};
CommentsComponent.ctorParameters = () => [
    { type: _Services_comments_service__WEBPACK_IMPORTED_MODULE_2__["CommentsService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }
];
CommentsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-comments',
        template: __webpack_require__(/*! raw-loader!./comments.component.html */ "./node_modules/raw-loader/index.js!./src/app/comments/comments.component.html"),
        styles: [__webpack_require__(/*! ./comments.component.less */ "./src/app/comments/comments.component.less")]
    })
], CommentsComponent);



/***/ }),

/***/ "./src/app/db.ts":
/*!***********************!*\
  !*** ./src/app/db.ts ***!
  \***********************/
/*! exports provided: Db, genId */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Db", function() { return Db; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "genId", function() { return genId; });
const Db = [];
let lastId = 0;
function genId() {
    lastId++;
    return lastId;
}


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\DanielPetrov\Documents\Comments_page\comments-app\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map