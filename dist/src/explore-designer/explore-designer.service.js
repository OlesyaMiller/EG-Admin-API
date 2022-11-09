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
exports.ExploreDesignerService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const explore_designer_entity_1 = require("./entities/explore-designer.entity");
const image_entity_1 = require("../image/entities/image.entity");
let ExploreDesignerService = class ExploreDesignerService {
    constructor(exploreDesignerRepository) {
        this.exploreDesignerRepository = exploreDesignerRepository;
    }
    async createExploreDesigner(request) {
        try {
            const exploreDesignerEntity = new explore_designer_entity_1.ExploreDesigner();
            exploreDesignerEntity.sellerId = request.sellerId;
            exploreDesignerEntity.image = new image_entity_1.Image();
            exploreDesignerEntity.image.id = request.imageId;
            const newExploreDesigner = await this.exploreDesignerRepository.save(exploreDesignerEntity);
            return newExploreDesigner;
        }
        catch (err) {
            throw err;
        }
    }
    getAllExploreDesigners() {
        return this.exploreDesignerRepository.find();
    }
    async getOneById(exploreDesignerId) {
        try {
            const exploreDesigner = await this.exploreDesignerRepository.findOneBy({ sellerId: exploreDesignerId });
            return exploreDesigner;
        }
        catch (err) {
            throw err;
        }
    }
    async deleteOneById(sellerId) {
        return this.exploreDesignerRepository.softDelete(sellerId);
    }
};
ExploreDesignerService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(explore_designer_entity_1.ExploreDesigner)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], ExploreDesignerService);
exports.ExploreDesignerService = ExploreDesignerService;
//# sourceMappingURL=explore-designer.service.js.map