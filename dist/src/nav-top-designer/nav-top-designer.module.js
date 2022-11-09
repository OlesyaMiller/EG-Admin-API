"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NavTopDesignerModule = void 0;
const common_1 = require("@nestjs/common");
const nav_top_designer_service_1 = require("./nav-top-designer.service");
const nav_top_designer_controller_1 = require("./nav-top-designer.controller");
const typeorm_1 = require("@nestjs/typeorm");
const nav_top_designer_entity_1 = require("./entities/nav-top-designer.entity");
const config_1 = require("@nestjs/config");
const image_entity_1 = require("../image/entities/image.entity");
const image_module_1 = require("../image/image.module");
let NavTopDesignerModule = class NavTopDesignerModule {
};
NavTopDesignerModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([nav_top_designer_entity_1.NavTopDesigner, image_entity_1.Image]), image_module_1.ImageModule],
        controllers: [nav_top_designer_controller_1.NavTopDesignerController],
        providers: [nav_top_designer_service_1.NavTopDesignerService, config_1.ConfigService],
        exports: [nav_top_designer_service_1.NavTopDesignerService]
    })
], NavTopDesignerModule);
exports.NavTopDesignerModule = NavTopDesignerModule;
//# sourceMappingURL=nav-top-designer.module.js.map