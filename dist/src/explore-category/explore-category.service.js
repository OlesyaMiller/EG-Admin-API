"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExploreCategoryService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const explore_category_entity_1 = require("./entities/explore-category.entity");
const typeorm_2 = require("typeorm");
const image_entity_1 = require("../image/entities/image.entity");
let ExploreCategoryService = class ExploreCategoryService {
    constructor(exploreCategoryRepository) {
        this.exploreCategoryRepository = exploreCategoryRepository;
    }
    async createExploreCategory(request) {
        try {
            const exploreCategoryEntity = new explore_category_entity_1.ExploreCategory();
            exploreCategoryEntity.category = request.category;
            exploreCategoryEntity.image = new image_entity_1.Image();
            exploreCategoryEntity.image.id = request.imageId;
            const newExploreCategory = await this.exploreCategoryRepository.save(exploreCategoryEntity);
            return newExploreCategory;
        }
        catch (err) {
            throw err;
        }
    }
    getAllExploreCategories() {
        return this.exploreCategoryRepository.find();
    }
    async getOneById(exploreCategoryId) {
        try {
            const exploreCategory = await this.exploreCategoryRepository.findOneBy({ id: exploreCategoryId });
            return exploreCategory;
        }
        catch (err) {
            throw err;
        }
    }
    async deleteOneById(id) {
        return this.exploreCategoryRepository.softDelete(id);
    }
};
ExploreCategoryService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(explore_category_entity_1.ExploreCategory)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], ExploreCategoryService);
exports.ExploreCategoryService = ExploreCategoryService;
//# sourceMappingURL=explore-category.service.js.map