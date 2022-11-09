import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, UpdateResult } from 'typeorm';
import { CreateSellerProductDto } from './dto/create-seller-product.dto';
import { SellerProduct } from './entities/seller-product.entity';

@Injectable()
export class SellerProductService {
  constructor(@InjectRepository(SellerProduct) private sellerProductRepository: Repository<SellerProduct>){}

  async createSellerProduct(request: CreateSellerProductDto): Promise <SellerProduct> {
    try {
      const sellerProductEntity = new SellerProduct();
      sellerProductEntity.sellerId = request.sellerId;
      sellerProductEntity.productId = request.productId;

      const newSellerProduct = await this.sellerProductRepository.save(sellerProductEntity);
      return newSellerProduct;
    } catch(err) {
        throw err;
    }
  }

  getAllSellerProducts() {
    return this.sellerProductRepository.find();
  }

  async getOneById(sellerProductId: number): Promise <SellerProduct> {
    try {
        const sellerProduct = await this.sellerProductRepository.findOneBy({id: sellerProductId}); 
        return sellerProduct;
    } catch(err) {
        throw err;
    }
  }

  async deleteOneById(id: number): Promise<UpdateResult> {
    return this.sellerProductRepository.softDelete(id); 
  }
}
