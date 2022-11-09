import { Repository, UpdateResult } from 'typeorm';
import { CreateSellerProductDto } from './dto/create-seller-product.dto';
import { SellerProduct } from './entities/seller-product.entity';
export declare class SellerProductService {
    private sellerProductRepository;
    constructor(sellerProductRepository: Repository<SellerProduct>);
    createSellerProduct(request: CreateSellerProductDto): Promise<SellerProduct>;
    getAllSellerProducts(): Promise<SellerProduct[]>;
    getOneById(sellerProductId: number): Promise<SellerProduct>;
    deleteOneById(id: number): Promise<UpdateResult>;
}
