import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SellerProductService } from './seller-product.service';
import { SellerProductController } from './seller-product.controller';
import { SellerProduct } from './entities/seller-product.entity';

@Module({
  imports: [TypeOrmModule.forFeature([SellerProduct])],
  controllers: [SellerProductController],
  providers: [SellerProductService]
})
export class SellerProductModule {}
