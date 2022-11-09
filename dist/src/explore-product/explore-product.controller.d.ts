import { ExploreProductService } from './explore-product.service';
import { CreateExploreProductDto } from './dto/create-explore-product.dto';
export declare class ExploreProductController {
    private readonly exploreProductService;
    constructor(exploreProductService: ExploreProductService);
    create(createExploreProductDto: CreateExploreProductDto): Promise<import("./entities/explore-product.entity").ExploreProduct>;
    findAll(): Promise<import("./entities/explore-product.entity").ExploreProduct[]>;
    findOne(id: string): Promise<import("./entities/explore-product.entity").ExploreProduct>;
    remove(id: string): Promise<import("typeorm").UpdateResult>;
}
