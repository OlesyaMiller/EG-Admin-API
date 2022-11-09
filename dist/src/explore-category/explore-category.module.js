"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExploreCategoryModule = void 0;
const common_1 = require("@nestjs/common");
const explore_category_entity_1 = require("./entities/explore-category.entity");
const explore_category_service_1 = require("./explore-category.service");
const explore_category_controller_1 = require("./explore-category.controller");
const typeorm_1 = require("@nestjs/typeorm");
const image_module_1 = require("../image/image.module");
const image_entity_1 = require("../image/entities/image.entity");
let ExploreCategoryModule = class ExploreCategoryModule {
};
ExploreCategoryModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([explore_category_entity_1.ExploreCategory, image_entity_1.Image]), image_module_1.ImageModule],
        controllers: [explore_category_controller_1.ExploreCategoryController],
        providers: [explore_category_service_1.ExploreCategoryService],
        exports: [explore_category_service_1.ExploreCategoryService]
    })
], ExploreCategoryModule);
exports.ExploreCategoryModule = ExploreCategoryModule;
//# sourceMappingURL=explore-category.module.js.map