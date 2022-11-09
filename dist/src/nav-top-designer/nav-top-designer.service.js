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
exports.NavTopDesignerService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const nav_top_designer_entity_1 = require("./entities/nav-top-designer.entity");
const image_entity_1 = require("../image/entities/image.entity");
let NavTopDesignerService = class NavTopDesignerService {
    constructor(navTopDesignerRepository) {
        this.navTopDesignerRepository = navTopDesignerRepository;
    }
    async createNavTopDesigner(request) {
        try {
            const navTopDesignerEntity = new nav_top_designer_entity_1.NavTopDesigner();
            navTopDesignerEntity.sellerId = request.sellerId;
            navTopDesignerEntity.image = new image_entity_1.Image();
            navTopDesignerEntity.image.id = request.imageId;
            const newNavTopDesigner = await this.navTopDesignerRepository.save(navTopDesignerEntity);
            return newNavTopDesigner;
        }
        catch (err) {
            throw err;
        }
    }
    async getAllNavTopDesigners() {
        return await this.navTopDesignerRepository.find();
    }
    async getOneById(navTopDesignerId) {
        try {
            const navTopDesigner = await this.navTopDesignerRepository.findOneBy({ sellerId: navTopDesignerId });
            return navTopDesigner;
        }
        catch (err) {
            throw err;
        }
    }
    async deleteOneById(id) {
        return this.navTopDesignerRepository.softDelete(id);
    }
};
NavTopDesignerService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(nav_top_designer_entity_1.NavTopDesigner)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], NavTopDesignerService);
exports.NavTopDesignerService = NavTopDesignerService;
//# sourceMappingURL=nav-top-designer.service.js.map