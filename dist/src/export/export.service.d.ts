import { ConfigService } from '@nestjs/config';
import { LiveEventService } from '../live-event/live-event.service';
import { SellerService } from 'src/seller/seller.service';
import { ExploreCategoryService } from "src/explore-category/explore-category.service";
import { ExploreDesignerService } from "src/explore-designer/explore-designer.service";
import { ExploreProductService } from "src/explore-product/explore-product.service";
import { NavRecommendedDesignerService } from "src/nav-recommended-designer/nav-recommended-designer.service";
import { NavTopDesignerService } from "src/nav-top-designer/nav-top-designer.service";
export declare class ExportService {
    private configService;
    private sellerService;
    private liveEventService;
    private exportCategoryService;
    private exploredDesignerService;
    private exploreProductService;
    private navRecommendedDesignerService;
    private navTopDesignerService;
    constructor(configService: ConfigService, sellerService: SellerService, liveEventService: LiveEventService, exportCategoryService: ExploreCategoryService, exploredDesignerService: ExploreDesignerService, exploreProductService: ExploreProductService, navRecommendedDesignerService: NavRecommendedDesignerService, navTopDesignerService: NavTopDesignerService);
    stringifyAndWrite(data: Object, file: string): Promise<string>;
    exportAll(): Promise<void>;
    exportAllSellers(): Promise<{
        sellers: number;
    }>;
    exportSeller(sellerId: string): Promise<string>;
    exportSellerData(sellerData: any): Promise<string>;
    exportLiveEvents(): Promise<string>;
    exportExploreData(): Promise<string>;
    exportNavData(): Promise<string>;
}
