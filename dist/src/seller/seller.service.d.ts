import { Repository, UpdateResult } from 'typeorm';
import { Seller } from './entities/seller.entity';
import { CreateSellerDto } from './dto/create-seller.dto';
import { SellerProduct } from '../seller-product/entities/seller-product.entity';
export declare class SellerService {
    private sellerRepository;
    private sellerProductRepository;
    constructor(sellerRepository: Repository<Seller>, sellerProductRepository: Repository<SellerProduct>);
    createSeller(request: CreateSellerDto): Promise<Seller>;
    loadSellerData(sellerId: string): Promise<{
        seller: Seller;
        sellerProducts: SellerProduct[];
    }>;
    loadAllSellerData(): Promise<any[]>;
    getAllSellers(): Promise<Seller[]>;
    getOneById(sellerId: string): Promise<Seller>;
    deleteOneById(id: string): Promise<UpdateResult>;
}
