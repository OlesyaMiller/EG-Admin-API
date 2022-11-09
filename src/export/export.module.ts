import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigService } from '@nestjs/config';
import { ExportService } from './export.service';
import {ExportController} from './export.controller';
import { SellerModule } from 'src/seller/seller.module';
import {LiveEventModule} from '../live-event/live-event.module';
import { ExploreCategoryModule } from 'src/explore-category/explore-category.module';
import { ExploreDesignerModule } from 'src/explore-designer/explore-designer.module';
import { ExploreProductModule } from 'src/explore-product/explore-product.module';
import { NavTopDesignerModule } from 'src/nav-top-designer/nav-top-designer.module';
import { NavRecommendedDesignerModule } from 'src/nav-recommended-designer/nav-recommended-designer.module';

@Module({
  imports: [TypeOrmModule.forFeature([]), SellerModule, LiveEventModule, ExploreCategoryModule, ExploreDesignerModule, ExploreProductModule, NavTopDesignerModule, NavRecommendedDesignerModule],
  controllers: [ExportController],
  providers: [ExportService, ConfigService]
})

export class ExportModule {}
