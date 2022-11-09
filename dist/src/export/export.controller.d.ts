import { ExportService } from './export.service';
export declare class ExportController {
    private exportService;
    constructor(exportService: ExportService);
    exportLiveEvents(): Promise<string>;
    exportSeller(id: string): Promise<string>;
    exportSellers(): Promise<{
        sellers: number;
    }>;
    exportExploreData(): Promise<string>;
    exportNavData(): Promise<string>;
    exportAll(): Promise<void>;
}
