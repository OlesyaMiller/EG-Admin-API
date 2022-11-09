import { SellerService } from './seller.service';
import { CreateSellerDto } from './dto/create-seller.dto';
export declare class SellerController {
    private readonly sellerService;
    constructor(sellerService: SellerService);
    create(createSellerDto: CreateSellerDto): Promise<import("./entities/seller.entity").Seller>;
    findAll(): Promise<import("./entities/seller.entity").Seller[]>;
    findOne(id: string): Promise<import("./entities/seller.entity").Seller>;
    remove(id: string): Promise<import("typeorm").UpdateResult>;
}
