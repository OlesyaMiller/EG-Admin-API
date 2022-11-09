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
exports.ExploreProductService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const explore_product_entity_1 = require("./entities/explore-product.entity");
let ExploreProductService = class ExploreProductService {
    constructor(exploreProductRepository) {
        this.exploreProductRepository = exploreProductRepository;
    }
    async createExploreProduct(request) {
        try {
            const exploreProductEntity = new explore_product_entity_1.ExploreProduct();
            exploreProductEntity.productId = request.productId;
            exploreProductEntity.name = request.name;
            const newExploreProduct = await this.exploreProductRepository.save(exploreProductEntity);
            return newExploreProduct;
        }
        catch (err) {
            throw err;
        }
    }
    getAllExploreProducts() {
        return this.exploreProductRepository.find();
    }
    async getOneById(exploreProductId) {
        try {
            const exploreProduct = await this.exploreProductRepository.findOneBy({ productId: exploreProductId });
            return exploreProduct;
        }
        catch (err) {
            throw err;
        }
    }
    async deleteOneById(id) {
        return this.exploreProductRepository.softDelete(id);
    }
};
ExploreProductService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(explore_product_entity_1.ExploreProduct)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], ExploreProductService);
exports.ExploreProductService = ExploreProductService;
//# sourceMappingURL=explore-product.service.js.map