"use strict";
var Auth = (function () {
    function Auth(isAuthenticated, userName, domainName) {
        this.isAuthenticated = isAuthenticated;
        this.userName = userName;
        this.domainName = domainName;
    }
    return Auth;
}());
exports.Auth = Auth;
