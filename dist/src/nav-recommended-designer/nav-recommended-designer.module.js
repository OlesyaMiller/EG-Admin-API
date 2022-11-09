"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NavRecommendedDesignerModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const nav_recommended_designer_service_1 = require("./nav-recommended-designer.service");
const nav_recommended_designer_controller_1 = require("./nav-recommended-designer.controller");
const nav_recommended_designer_entity_1 = require("./entities/nav-recommended-designer.entity");
const config_1 = require("@nestjs/config");
let NavRecommendedDesignerModule = class NavRecommendedDesignerModule {
};
NavRecommendedDesignerModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([nav_recommended_designer_entity_1.NavRecommendedDesigner])],
        controllers: [nav_recommended_designer_controller_1.NavRecommendedDesignerController],
        providers: [nav_recommended_designer_service_1.NavRecommendedDesignerService, config_1.ConfigService],
        exports: [nav_recommended_designer_service_1.NavRecommendedDesignerService]
    })
], NavRecommendedDesignerModule);
exports.NavRecommendedDesignerModule = NavRecommendedDesignerModule;
//# sourceMappingURL=nav-recommended-designer.module.js.map