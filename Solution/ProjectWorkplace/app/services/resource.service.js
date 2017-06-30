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
var ResourceService = (function () {
    function ResourceService(http) {
        this.http = http;
        this.headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        this.apiUrl = 'api/Resources';
    }
    //pass the question id
    ResourceService.prototype.getResourcePath = function (resourceCategory) {
        var url = this.apiUrl + "/GetResourcePath/?resourceCategory=" + resourceCategory;
        return this.http
            .get(url)
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    //this get values related to PW_TEMPORARYUSERS (NOT YET DONE)
    ResourceService.prototype.getResourcePath2 = function (resourceCategory) {
        var url = this.apiUrl + "/GetResourcePath2/?resourceCategory=" + resourceCategory;
        return this.http
            .get(url)
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    ResourceService.prototype.getVideo = function (isLeader) {
        var url = this.apiUrl + "/GetVideo/?isLeader=" + isLeader;
        return this.http
            .get(url)
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    ResourceService.prototype.getCurrentUser = function () {
        var url = this.apiUrl + "/GetCurrentUser/";
        return this.http
            .get(url)
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    ResourceService.prototype.handleError = function (error) {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    };
    return ResourceService;
}());
ResourceService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], ResourceService);
exports.ResourceService = ResourceService;
