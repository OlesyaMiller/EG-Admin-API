import {Controller, Get, Param, UseGuards} from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import {ExportService} from './export.service';

@UseGuards(JwtAuthGuard)
@Controller('export')
export class ExportController {
    constructor(private exportService: ExportService) {}

    @Get('live-events')
    exportLiveEvents() {
        return this.exportService.exportLiveEvents() ;
    }

    @Get('seller/:id')
    exportSeller(@Param('id') id: string) {
        return this.exportService.exportSeller(id) ;
    }

    @Get('sellers')
    exportSellers() {
        return this.exportService.exportAllSellers() ;
    }

    @Get('explore')
    exportExploreData() {
        return this.exportService.exportExploreData();
    }

    @Get('nav')
    exportNavData() {
        return this.exportService.exportNavData();
    }

    @Get('all')
    exportAll() {
        return this.exportService.exportAll();
    }
}
