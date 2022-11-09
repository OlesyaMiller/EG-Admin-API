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
exports.ExploreProductController = void 0;
const common_1 = require("@nestjs/common");
const explore_product_service_1 = require("./explore-product.service");
const create_explore_product_dto_1 = require("./dto/create-explore-product.dto");
const jwt_auth_guard_1 = require("../auth/jwt-auth.guard");
let ExploreProductController = class ExploreProductController {
    constructor(exploreProductService) {
        this.exploreProductService = exploreProductService;
    }
    create(createExploreProductDto) {
        return this.exploreProductService.createExploreProduct(createExploreProductDto);
    }
    findAll() {
        return this.exploreProductService.getAllExploreProducts();
    }
    findOne(id) {
        return this.exploreProductService.getOneById(id);
    }
    remove(id) {
        return this.exploreProductService.deleteOneById(id);
    }
};
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_explore_product_dto_1.CreateExploreProductDto]),
    __metadata("design:returntype", void 0)
], ExploreProductController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ExploreProductController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ExploreProductController.prototype, "findOne", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ExploreProductController.prototype, "remove", null);
ExploreProductController = __decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Controller)('explore-product'),
    __metadata("design:paramtypes", [explore_product_service_1.ExploreProductService])
], ExploreProductController);
exports.ExploreProductController = ExploreProductController;
//# sourceMappingURL=explore-product.controller.js.map