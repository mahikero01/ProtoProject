"use strict";
var Resource = (function () {
    function Resource(ResourcePath, ResourceCategory, ResourceContent) {
        this.ResourcePath = ResourcePath;
        this.ResourceCategory = ResourceCategory;
        this.ResourceContent = ResourceContent;
    }
    return Resource;
}());
exports.Resource = Resource;
