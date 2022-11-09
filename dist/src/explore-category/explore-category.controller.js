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
exports.ExploreCategoryController = void 0;
const common_1 = require("@nestjs/common");
const explore_category_service_1 = require("./explore-category.service");
const create_explore_category_dto_1 = require("./dto/create-explore-category.dto");
const jwt_auth_guard_1 = require("../auth/jwt-auth.guard");
let ExploreCategoryController = class ExploreCategoryController {
    constructor(exploreCategoryService) {
        this.exploreCategoryService = exploreCategoryService;
    }
    create(createExploreCategoryDto) {
        return this.exploreCategoryService.createExploreCategory(createExploreCategoryDto);
    }
    findAll() {
        return this.exploreCategoryService.getAllExploreCategories();
    }
    findOne(id) {
        return this.exploreCategoryService.getOneById(id);
    }
    remove(id) {
        return this.exploreCategoryService.deleteOneById(+id);
    }
};
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_explore_category_dto_1.CreateExploreCategoryDto]),
    __metadata("design:returntype", void 0)
], ExploreCategoryController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ExploreCategoryController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], ExploreCategoryController.prototype, "findOne", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ExploreCategoryController.prototype, "remove", null);
ExploreCategoryController = __decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Controller)('explore-category'),
    __metadata("design:paramtypes", [explore_category_service_1.ExploreCategoryService])
], ExploreCategoryController);
exports.ExploreCategoryController = ExploreCategoryController;
//# sourceMappingURL=explore-category.controller.js.map