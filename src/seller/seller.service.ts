import {BadRequestException, Injectable, NotFoundException} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, UpdateResult } from 'typeorm';
import { Seller } from './entities/seller.entity';
import { CreateSellerDto } from './dto/create-seller.dto';
import { SellerProduct } from '../seller-product/entities/seller-product.entity';

@Injectable()
export class SellerService {
  constructor(
    @InjectRepository(Seller) private sellerRepository: Repository<Seller>,
    @InjectRepository(SellerProduct) private sellerProductRepository: Repository<SellerProduct>
  ){}

  async createSeller(request: CreateSellerDto): Promise <Seller> {
    try {
      const sellerEntity = new Seller();
      sellerEntity.sellerId = request.sellerId;
      sellerEntity.videoFooter = request.videoFooter;

      const newSeller = await this.sellerRepository.save(sellerEntity);
      return newSeller;
    } catch(err) {
        throw err;
    }
  }


    async loadSellerData(sellerId: string) {
        const seller: Seller = await this.sellerRepository.findOneBy({
            sellerId
        }) ;
        if (seller === null) {
            throw new NotFoundException("Seller not found using '" + sellerId + "'") ;
        }

        const sellerProducts = await this.sellerProductRepository.find({where: {sellerId}});

        const sellerConfig = {
            seller,
            sellerProducts
        };

        return sellerConfig;
    }

  async loadAllSellerData() {
      const sellerDataArray = [] ;
      const sellers : Seller[] = await this.sellerRepository.find() ;
      for (const seller of sellers) {
          const sellerProducts = await this.sellerProductRepository.find({where: {sellerId: seller.sellerId}}) ;

          const sellerConfig = {
              seller,
              sellerProducts
          } ;
          sellerDataArray.push(sellerConfig) ;
      }

      return sellerDataArray;
  }

  async getAllSellers(): Promise <Seller[]> {
    return await this.sellerRepository.find();
  }

  async getOneById(sellerId: string): Promise <Seller> {
    try {
        const seller = await this.sellerRepository.findOneBy({sellerId: sellerId});
        return seller;
    } catch(err) {
        throw err;
    }
  }

  async deleteOneById(id: string): Promise<UpdateResult> {
    return this.sellerRepository.softDelete(id);
  }
}
