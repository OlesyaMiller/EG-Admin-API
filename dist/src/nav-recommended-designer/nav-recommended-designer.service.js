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
exports.NavRecommendedDesignerService = void 0;
const common_1 = require("@nestjs/common");
const nav_recommended_designer_entity_1 = require("./entities/nav-recommended-designer.entity");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
let NavRecommendedDesignerService = class NavRecommendedDesignerService {
    constructor(navRecommendedDesignerRepository) {
        this.navRecommendedDesignerRepository = navRecommendedDesignerRepository;
    }
    async createNavRecommendedDesigner(request) {
        try {
            const navRecommendedDesignerEntity = new nav_recommended_designer_entity_1.NavRecommendedDesigner();
            navRecommendedDesignerEntity.sellerId = request.sellerId;
            navRecommendedDesignerEntity.name = request.name;
            const newNavRecommendedDesigner = await this.navRecommendedDesignerRepository.save(navRecommendedDesignerEntity);
            return newNavRecommendedDesigner;
        }
        catch (err) {
            throw err;
        }
    }
    getAllNavRecommendedDesigners() {
        return this.navRecommendedDesignerRepository.find();
    }
    async getOneById(navRecommendedDesignerId) {
        try {
            const navRecommendedDesigner = await this.navRecommendedDesignerRepository.findOneBy({ sellerId: navRecommendedDesignerId });
            return navRecommendedDesigner;
        }
        catch (err) {
            throw err;
        }
    }
    async deleteOneById(id) {
        return this.navRecommendedDesignerRepository.softDelete(id);
    }
};
NavRecommendedDesignerService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(nav_recommended_designer_entity_1.NavRecommendedDesigner)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], NavRecommendedDesignerService);
exports.NavRecommendedDesignerService = NavRecommendedDesignerService;
//# sourceMappingURL=nav-recommended-designer.service.js.map