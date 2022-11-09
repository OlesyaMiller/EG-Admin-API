"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExportModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const config_1 = require("@nestjs/config");
const export_service_1 = require("./export.service");
const export_controller_1 = require("./export.controller");
const seller_module_1 = require("../seller/seller.module");
const live_event_module_1 = require("../live-event/live-event.module");
const explore_category_module_1 = require("../explore-category/explore-category.module");
const explore_designer_module_1 = require("../explore-designer/explore-designer.module");
const explore_product_module_1 = require("../explore-product/explore-product.module");
const nav_top_designer_module_1 = require("../nav-top-designer/nav-top-designer.module");
const nav_recommended_designer_module_1 = require("../nav-recommended-designer/nav-recommended-designer.module");
let ExportModule = class ExportModule {
};
ExportModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([]), seller_module_1.SellerModule, live_event_module_1.LiveEventModule, explore_category_module_1.ExploreCategoryModule, explore_designer_module_1.ExploreDesignerModule, explore_product_module_1.ExploreProductModule, nav_top_designer_module_1.NavTopDesignerModule, nav_recommended_designer_module_1.NavRecommendedDesignerModule],
        controllers: [export_controller_1.ExportController],
        providers: [export_service_1.ExportService, config_1.ConfigService]
    })
], ExportModule);
exports.ExportModule = ExportModule;
//# sourceMappingURL=export.module.js.map