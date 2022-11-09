import { ExploreCategoryService } from './explore-category.service';
import { CreateExploreCategoryDto } from './dto/create-explore-category.dto';
export declare class ExploreCategoryController {
    private readonly exploreCategoryService;
    constructor(exploreCategoryService: ExploreCategoryService);
    create(createExploreCategoryDto: CreateExploreCategoryDto): Promise<import("./entities/explore-category.entity").ExploreCategory>;
    findAll(): Promise<import("./entities/explore-category.entity").ExploreCategory[]>;
    findOne(id: number): Promise<import("./entities/explore-category.entity").ExploreCategory>;
    remove(id: string): Promise<import("typeorm").UpdateResult>;
}
