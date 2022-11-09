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
exports.SellerService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const seller_entity_1 = require("./entities/seller.entity");
const seller_product_entity_1 = require("../seller-product/entities/seller-product.entity");
let SellerService = class SellerService {
    constructor(sellerRepository, sellerProductRepository) {
        this.sellerRepository = sellerRepository;
        this.sellerProductRepository = sellerProductRepository;
    }
    async createSeller(request) {
        try {
            const sellerEntity = new seller_entity_1.Seller();
            sellerEntity.sellerId = request.sellerId;
            sellerEntity.videoFooter = request.videoFooter;
            const newSeller = await this.sellerRepository.save(sellerEntity);
            return newSeller;
        }
        catch (err) {
            throw err;
        }
    }
    async loadSellerData(sellerId) {
        const seller = await this.sellerRepository.findOneBy({
            sellerId
        });
        if (seller === null) {
            throw new common_1.NotFoundException("Seller not found using '" + sellerId + "'");
        }
        const sellerProducts = await this.sellerProductRepository.find({ where: { sellerId } });
        const sellerConfig = {
            seller,
            sellerProducts
        };
        return sellerConfig;
    }
    async loadAllSellerData() {
        const sellerDataArray = [];
        const sellers = await this.sellerRepository.find();
        for (const seller of sellers) {
            const sellerProducts = await this.sellerProductRepository.find({ where: { sellerId: seller.sellerId } });
            const sellerConfig = {
                seller,
                sellerProducts
            };
            sellerDataArray.push(sellerConfig);
        }
        return sellerDataArray;
    }
    async getAllSellers() {
        return await this.sellerRepository.find();
    }
    async getOneById(sellerId) {
        try {
            const seller = await this.sellerRepository.findOneBy({ sellerId: sellerId });
            return seller;
        }
        catch (err) {
            throw err;
        }
    }
    async deleteOneById(id) {
        return this.sellerRepository.softDelete(id);
    }
};
SellerService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(seller_entity_1.Seller)),
    __param(1, (0, typeorm_1.InjectRepository)(seller_product_entity_1.SellerProduct)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository])
], SellerService);
exports.SellerService = SellerService;
//# sourceMappingURL=seller.service.js.map