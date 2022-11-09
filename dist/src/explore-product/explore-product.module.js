"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExploreProductModule = void 0;
const common_1 = require("@nestjs/common");
const explore_product_entity_1 = require("./entities/explore-product.entity");
const explore_product_service_1 = require("./explore-product.service");
const explore_product_controller_1 = require("./explore-product.controller");
const typeorm_1 = require("@nestjs/typeorm");
const config_1 = require("@nestjs/config");
let ExploreProductModule = class ExploreProductModule {
};
ExploreProductModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([explore_product_entity_1.ExploreProduct])],
        controllers: [explore_product_controller_1.ExploreProductController],
        providers: [explore_product_service_1.ExploreProductService, config_1.ConfigService],
        exports: [explore_product_service_1.ExploreProductService]
    })
], ExploreProductModule);
exports.ExploreProductModule = ExploreProductModule;
//# sourceMappingURL=explore-product.module.js.map