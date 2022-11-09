import { Repository, UpdateResult } from 'typeorm';
import { ExploreProduct } from './entities/explore-product.entity';
import { CreateExploreProductDto } from './dto/create-explore-product.dto';
export declare class ExploreProductService {
    private exploreProductRepository;
    constructor(exploreProductRepository: Repository<ExploreProduct>);
    createExploreProduct(request: CreateExploreProductDto): Promise<ExploreProduct>;
    getAllExploreProducts(): Promise<ExploreProduct[]>;
    getOneById(exploreProductId: string): Promise<ExploreProduct>;
    deleteOneById(id: string): Promise<UpdateResult>;
}
