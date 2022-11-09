"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExploreDesignerModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const explore_designer_entity_1 = require("./entities/explore-designer.entity");
const explore_designer_service_1 = require("./explore-designer.service");
const explore_designer_controller_1 = require("./explore-designer.controller");
const config_1 = require("@nestjs/config");
const image_module_1 = require("../image/image.module");
const image_entity_1 = require("../image/entities/image.entity");
let ExploreDesignerModule = class ExploreDesignerModule {
};
ExploreDesignerModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([explore_designer_entity_1.ExploreDesigner, image_entity_1.Image]), image_module_1.ImageModule],
        controllers: [explore_designer_controller_1.ExploreDesignerController],
        providers: [explore_designer_service_1.ExploreDesignerService, config_1.ConfigService],
        exports: [explore_designer_service_1.ExploreDesignerService]
    })
], ExploreDesignerModule);
exports.ExploreDesignerModule = ExploreDesignerModule;
//# sourceMappingURL=explore-designer.module.js.map