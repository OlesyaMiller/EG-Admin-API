"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExportService = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const live_event_service_1 = require("../live-event/live-event.service");
const seller_service_1 = require("../seller/seller.service");
const explore_category_service_1 = require("../explore-category/explore-category.service");
const explore_designer_service_1 = require("../explore-designer/explore-designer.service");
const explore_product_service_1 = require("../explore-product/explore-product.service");
const nav_recommended_designer_service_1 = require("../nav-recommended-designer/nav-recommended-designer.service");
const nav_top_designer_service_1 = require("../nav-top-designer/nav-top-designer.service");
let ExportService = class ExportService {
    constructor(configService, sellerService, liveEventService, exportCategoryService, exploredDesignerService, exploreProductService, navRecommendedDesignerService, navTopDesignerService) {
        this.configService = configService;
        this.sellerService = sellerService;
        this.liveEventService = liveEventService;
        this.exportCategoryService = exportCategoryService;
        this.exploredDesignerService = exploredDesignerService;
        this.exploreProductService = exploreProductService;
        this.navRecommendedDesignerService = navRecommendedDesignerService;
        this.navTopDesignerService = navTopDesignerService;
    }
    async stringifyAndWrite(data, file) {
        const fs = require('fs');
        const sellerConfigJSON = JSON.stringify(data);
        fs.writeFileSync(file, sellerConfigJSON);
        return sellerConfigJSON;
    }
    async exportAll() {
        await this.exportAllSellers();
        await this.exportExploreData();
        await this.exportLiveEvents();
        await this.exportNavData();
    }
    async exportAllSellers() {
        const sellerDataArray = await this.sellerService.loadAllSellerData();
        for (let data of sellerDataArray) {
            await this.exportSellerData(data);
        }
        return { sellers: sellerDataArray.length };
    }
    async exportSeller(sellerId) {
        const sellerData = await this.sellerService.loadSellerData(sellerId);
        return this.exportSellerData(sellerData);
    }
    async exportSellerData(sellerData) {
        const filePath = this.configService.get('CONFIG_EXPORT_DIR') + `/` + `seller.${sellerData.seller.sellerId}.config.json`;
        return this.stringifyAndWrite(sellerData, filePath);
    }
    async exportLiveEvents() {
        const events = await this.liveEventService.loadNotEndedEvents();
        const filePath = this.configService.get('CONFIG_EXPORT_DIR') + `/` + `live.events.config.json`;
        return this.stringifyAndWrite(events, filePath);
    }
    async exportExploreData() {
        const exploreData = {
            categories: await this.exportCategoryService.getAllExploreCategories(),
            designers: await this.exploredDesignerService.getAllExploreDesigners(),
            products: await this.exploreProductService.getAllExploreProducts()
        };
        const filePath = this.configService.get('CONFIG_EXPORT_DIR') + `/` + 'explore.json';
        return this.stringifyAndWrite(exploreData, filePath);
    }
    async exportNavData() {
        const navData = {
            recommendedDesigners: await this.navRecommendedDesignerService.getAllNavRecommendedDesigners(),
            topDesigners: await this.navTopDesignerService.getAllNavTopDesigners()
        };
        const filePath = this.configService.get('CONFIG_EXPORT_DIR') + `/` + 'nav.json';
        return this.stringifyAndWrite(navData, filePath);
    }
};
ExportService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [config_1.ConfigService,
        seller_service_1.SellerService,
        live_event_service_1.LiveEventService,
        explore_category_service_1.ExploreCategoryService,
        explore_designer_service_1.ExploreDesignerService,
        explore_product_service_1.ExploreProductService,
        nav_recommended_designer_service_1.NavRecommendedDesignerService,
        nav_top_designer_service_1.NavTopDesignerService])
], ExportService);
exports.ExportService = ExportService;
//# sourceMappingURL=export.service.js.map