import { Module } from '@nestjs/common';
import { ExploreProduct } from './entities/explore-product.entity';
import { ExploreProductService } from './explore-product.service';
import { ExploreProductController } from './explore-product.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigService } from '@nestjs/config';

@Module({
  imports: [TypeOrmModule.forFeature([ExploreProduct])],
  controllers: [ExploreProductController],
  providers: [ExploreProductService, ConfigService],
  exports: [ExploreProductService]
})
export class ExploreProductModule {}
