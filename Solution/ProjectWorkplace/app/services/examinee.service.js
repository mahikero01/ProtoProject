"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
require("rxjs/add/operator/toPromise");
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var ExamineeService = (function () {
    function ExamineeService(http) {
        this.http = http;
        this.headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        this.apiUrl = 'api/Examinees';
    }
    //pass the question id
    ExamineeService.prototype.getExaminees = function () {
        return this.http
            .get(this.apiUrl, { headers: this.headers })
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    ExamineeService.prototype.getExaminee = function (personId) {
        var url = this.apiUrl + "/" + personId;
        return this.http
            .get(url)
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    ExamineeService.prototype.postExaminee = function (newExaminee) {
        return this.http
            .post(this.apiUrl, JSON.stringify(newExaminee), { headers: this.headers })
            .toPromise()
            .then(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    ExamineeService.prototype.putExaminee = function (examinee) {
        var url = this.apiUrl + "/" + examinee.ExamineeID;
        return this.http
            .put(url, JSON.stringify(examinee), { headers: this.headers })
            .toPromise()
            .then(function () { return examinee; })
            .catch(this.handleError);
    };
    ExamineeService.prototype.DeleteExaminee = function (examineeId) {
        var url = this.apiUrl + "/" + examineeId;
        return this.http
            .delete(url, { headers: this.headers })
            .toPromise()
            .then(function () { return null; })
            .catch(this.handleError);
    };
    ExamineeService.prototype.handleError = function (error) {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    };
    return ExamineeService;
}());
ExamineeService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], ExamineeService);
exports.ExamineeService = ExamineeService;
