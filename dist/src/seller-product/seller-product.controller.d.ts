import { SellerProductService } from './seller-product.service';
import { CreateSellerProductDto } from './dto/create-seller-product.dto';
export declare class SellerProductController {
    private readonly sellerProductService;
    constructor(sellerProductService: SellerProductService);
    create(createSellerProductDto: CreateSellerProductDto): Promise<import("./entities/seller-product.entity").SellerProduct>;
    findAll(): Promise<import("./entities/seller-product.entity").SellerProduct[]>;
    findOne(id: number): Promise<import("./entities/seller-product.entity").SellerProduct>;
    remove(id: string): Promise<import("typeorm").UpdateResult>;
}
