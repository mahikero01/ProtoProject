"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var forms_1 = require("@angular/forms");
//import { MyCommonModule } from '../common-components/mycommon.module';
var ng2_pdf_viewer_1 = require("ng2-pdf-viewer");
var pdf_viewer_component_1 = require("./pdf-viewer.component");
var photo_viewer_component_1 = require("./photo-viewer.component");
var video_viewer_component_1 = require("./video-viewer.component");
var ng2_lazyload_image_1 = require("ng2-lazyload-image");
var ViewerModule = (function () {
    function ViewerModule() {
    }
    return ViewerModule;
}());
ViewerModule = __decorate([
    core_1.NgModule({
        imports: [
            common_1.CommonModule,
            forms_1.FormsModule,
            ng2_lazyload_image_1.LazyLoadImageModule
        ],
        declarations: [
            ng2_pdf_viewer_1.PdfViewerComponent,
            pdf_viewer_component_1.PDFComponent,
            photo_viewer_component_1.PhotoViewerComponent,
            video_viewer_component_1.VideoViewerComponent,
        ],
        providers: [],
        exports: [
            pdf_viewer_component_1.PDFComponent,
            ng2_pdf_viewer_1.PdfViewerComponent,
            photo_viewer_component_1.PhotoViewerComponent,
            video_viewer_component_1.VideoViewerComponent,
        ]
    })
], ViewerModule);
exports.ViewerModule = ViewerModule;
