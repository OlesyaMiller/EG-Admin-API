import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, UpdateResult } from 'typeorm';
import { ExploreProduct } from './entities/explore-product.entity';
import { CreateExploreProductDto } from './dto/create-explore-product.dto';

@Injectable()
export class ExploreProductService {
  constructor(@InjectRepository(ExploreProduct) private exploreProductRepository: Repository<ExploreProduct>){}

  async createExploreProduct(request: CreateExploreProductDto): Promise <ExploreProduct> {
    try {
      const exploreProductEntity = new ExploreProduct();
      exploreProductEntity.productId = request.productId;
      exploreProductEntity.name = request.name;

      const newExploreProduct = await this.exploreProductRepository.save(exploreProductEntity);
      return newExploreProduct;
    } catch(err) {
        throw err;
    }
  }

  getAllExploreProducts(): Promise <ExploreProduct[]> {
    return this.exploreProductRepository.find(); 
  }

  async getOneById(exploreProductId: string): Promise <ExploreProduct> {
    try {
        const exploreProduct = await this.exploreProductRepository.findOneBy({productId: exploreProductId}); 
        return exploreProduct;
    } catch(err) {
        throw err;
    }
  }

  async deleteOneById(id: string): Promise<UpdateResult> {
    return this.exploreProductRepository.softDelete(id); 
  }
}
