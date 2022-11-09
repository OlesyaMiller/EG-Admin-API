import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SellerService } from './seller.service';
import { SellerController } from './seller.controller';
import { Seller } from './entities/seller.entity';
import { SellerProduct } from 'src/seller-product/entities/seller-product.entity';
import { ConfigService } from '@nestjs/config';

@Module({
  imports: [TypeOrmModule.forFeature([Seller, SellerProduct])],
  controllers: [SellerController],
  providers: [SellerService, ConfigService],
  exports: [SellerService]
})

export class SellerModule {}
