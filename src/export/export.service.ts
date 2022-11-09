import { Injectable } from "@nestjs/common";
import { ConfigService } from '@nestjs/config';
import { LiveEventService } from '../live-event/live-event.service';
import { SellerService } from 'src/seller/seller.service';
import { ExploreCategoryService } from "src/explore-category/explore-category.service";
import { ExploreDesignerService } from "src/explore-designer/explore-designer.service";
import { ExploreProductService } from "src/explore-product/explore-product.service";
import { NavRecommendedDesignerService } from "src/nav-recommended-designer/nav-recommended-designer.service";
import { NavTopDesignerService } from "src/nav-top-designer/nav-top-designer.service";

@Injectable()
export class ExportService {
    constructor(
        private configService: ConfigService,
        private sellerService: SellerService,
        private liveEventService: LiveEventService,
        private exportCategoryService: ExploreCategoryService,
        private exploredDesignerService: ExploreDesignerService,
        private exploreProductService: ExploreProductService,
        private navRecommendedDesignerService: NavRecommendedDesignerService,
        private navTopDesignerService: NavTopDesignerService
    ) {
    }

    async stringifyAndWrite(data: Object, file: string) {
        const fs = require('fs');
        const sellerConfigJSON = JSON.stringify(data);
        fs.writeFileSync(file, sellerConfigJSON);
        return sellerConfigJSON;
    }

    /**
     * Exports all configuration files.
     */
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

    async exportSeller(sellerId: string) {
        const sellerData = await this.sellerService.loadSellerData(sellerId);
        return this.exportSellerData(sellerData);
    }

    async exportSellerData(sellerData: any) {
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
        }
        const filePath = this.configService.get('CONFIG_EXPORT_DIR') + `/` + 'explore.json';
        return this.stringifyAndWrite(exploreData, filePath);
    }

    async exportNavData() {
        const navData = {
            recommendedDesigners: await this.navRecommendedDesignerService.getAllNavRecommendedDesigners(),
            topDesigners: await this.navTopDesignerService.getAllNavTopDesigners()
        }
        const filePath = this.configService.get('CONFIG_EXPORT_DIR') + `/` + 'nav.json';
        return this.stringifyAndWrite(navData, filePath);
    }
}
