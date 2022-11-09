import {Module} from '@nestjs/common';
import {TypeOrmModule} from '@nestjs/typeorm';
import {AppController} from './app.controller';
import {AppService} from './app.service';
import {LiveEventModule} from './live-event/live-event.module';
import { ExploreCategoryModule } from './explore-category/explore-category.module';
import { ExploreDesignerModule } from './explore-designer/explore-designer.module';
import { ExploreProductModule } from './explore-product/explore-product.module';
import { ImageModule } from './image/image.module';
import { NavTopDesignerModule } from './nav-top-designer/nav-top-designer.module';
import { NavRecommendedDesignerModule } from './nav-recommended-designer/nav-recommended-designer.module';
import { SellerModule } from './seller/seller.module';
import { SellerProductModule } from './seller-product/seller-product.module';
import config from '../ormconfig';
import {ConfigModule, ConfigService} from '@nestjs/config';
import { ExportModule } from './export/export.module';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';

import dbConfiguration from "./config/db.config";

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
        load: [dbConfiguration]
    }),
    TypeOrmModule.forRootAsync({
        inject: [ConfigService],
        useFactory: async (configService: ConfigService) => ({...configService.get('database')})
    }),
    ExportModule,
    ImageModule,
    SellerModule, 
    SellerProductModule,
    LiveEventModule,
    ExploreCategoryModule,
    ExploreDesignerModule, 
    ExploreProductModule,
    NavRecommendedDesignerModule,
    NavTopDesignerModule,
    UserModule,
    AuthModule 
  ],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {}

