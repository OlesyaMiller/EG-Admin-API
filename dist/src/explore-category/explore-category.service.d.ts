import { ExploreCategory } from './entities/explore-category.entity';
import { Repository, UpdateResult } from 'typeorm';
import { CreateExploreCategoryDto } from './dto/create-explore-category.dto';
export declare class ExploreCategoryService {
    private exploreCategoryRepository;
    constructor(exploreCategoryRepository: Repository<ExploreCategory>);
    createExploreCategory(request: CreateExploreCategoryDto): Promise<ExploreCategory>;
    getAllExploreCategories(): Promise<ExploreCategory[]>;
    getOneById(exploreCategoryId: number): Promise<ExploreCategory>;
    deleteOneById(id: number): Promise<UpdateResult>;
}
