"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const live_event_module_1 = require("./live-event/live-event.module");
const explore_category_module_1 = require("./explore-category/explore-category.module");
const explore_designer_module_1 = require("./explore-designer/explore-designer.module");
const explore_product_module_1 = require("./explore-product/explore-product.module");
const image_module_1 = require("./image/image.module");
const nav_top_designer_module_1 = require("./nav-top-designer/nav-top-designer.module");
const nav_recommended_designer_module_1 = require("./nav-recommended-designer/nav-recommended-designer.module");
const seller_module_1 = require("./seller/seller.module");
const seller_product_module_1 = require("./seller-product/seller-product.module");
const config_1 = require("@nestjs/config");
const export_module_1 = require("./export/export.module");
const user_module_1 = require("./user/user.module");
const auth_module_1 = require("./auth/auth.module");
const db_config_1 = require("./config/db.config");
let AppModule = class AppModule {
};
AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot({
                isGlobal: true,
                load: [db_config_1.default]
            }),
            typeorm_1.TypeOrmModule.forRootAsync({
                inject: [config_1.ConfigService],
                useFactory: async (configService) => (Object.assign({}, configService.get('database')))
            }),
            export_module_1.ExportModule,
            image_module_1.ImageModule,
            seller_module_1.SellerModule,
            seller_product_module_1.SellerProductModule,
            live_event_module_1.LiveEventModule,
            explore_category_module_1.ExploreCategoryModule,
            explore_designer_module_1.ExploreDesignerModule,
            explore_product_module_1.ExploreProductModule,
            nav_recommended_designer_module_1.NavRecommendedDesignerModule,
            nav_top_designer_module_1.NavTopDesignerModule,
            user_module_1.UserModule,
            auth_module_1.AuthModule
        ],
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map