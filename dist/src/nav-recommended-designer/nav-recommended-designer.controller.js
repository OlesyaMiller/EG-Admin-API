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
exports.NavRecommendedDesignerController = void 0;
const common_1 = require("@nestjs/common");
const nav_recommended_designer_service_1 = require("./nav-recommended-designer.service");
const create_nav_recommended_designer_dto_1 = require("./dto/create-nav-recommended-designer.dto");
const jwt_auth_guard_1 = require("../auth/jwt-auth.guard");
let NavRecommendedDesignerController = class NavRecommendedDesignerController {
    constructor(navRecommendedDesignerService) {
        this.navRecommendedDesignerService = navRecommendedDesignerService;
    }
    create(createNavRecommendedDesignerDto) {
        return this.navRecommendedDesignerService.createNavRecommendedDesigner(createNavRecommendedDesignerDto);
    }
    findAll() {
        return this.navRecommendedDesignerService.getAllNavRecommendedDesigners();
    }
    findOne(id) {
        return this.navRecommendedDesignerService.getOneById(id);
    }
    remove(id) {
        return this.navRecommendedDesignerService.deleteOneById(id);
    }
};
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_nav_recommended_designer_dto_1.CreateNavRecommendedDesignerDto]),
    __metadata("design:returntype", void 0)
], NavRecommendedDesignerController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], NavRecommendedDesignerController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], NavRecommendedDesignerController.prototype, "findOne", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], NavRecommendedDesignerController.prototype, "remove", null);
NavRecommendedDesignerController = __decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Controller)('nav-recommended-designer'),
    __metadata("design:paramtypes", [nav_recommended_designer_service_1.NavRecommendedDesignerService])
], NavRecommendedDesignerController);
exports.NavRecommendedDesignerController = NavRecommendedDesignerController;
//# sourceMappingURL=nav-recommended-designer.controller.js.map