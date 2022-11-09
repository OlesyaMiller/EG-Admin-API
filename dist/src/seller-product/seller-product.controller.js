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
exports.SellerProductController = void 0;
const common_1 = require("@nestjs/common");
const seller_product_service_1 = require("./seller-product.service");
const create_seller_product_dto_1 = require("./dto/create-seller-product.dto");
const jwt_auth_guard_1 = require("../auth/jwt-auth.guard");
let SellerProductController = class SellerProductController {
    constructor(sellerProductService) {
        this.sellerProductService = sellerProductService;
    }
    create(createSellerProductDto) {
        return this.sellerProductService.createSellerProduct(createSellerProductDto);
    }
    findAll() {
        return this.sellerProductService.getAllSellerProducts();
    }
    findOne(id) {
        return this.sellerProductService.getOneById(id);
    }
    remove(id) {
        return this.sellerProductService.deleteOneById(+id);
    }
};
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_seller_product_dto_1.CreateSellerProductDto]),
    __metadata("design:returntype", void 0)
], SellerProductController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], SellerProductController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], SellerProductController.prototype, "findOne", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], SellerProductController.prototype, "remove", null);
SellerProductController = __decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Controller)('seller-product'),
    __metadata("design:paramtypes", [seller_product_service_1.SellerProductService])
], SellerProductController);
exports.SellerProductController = SellerProductController;
//# sourceMappingURL=seller-product.controller.js.map