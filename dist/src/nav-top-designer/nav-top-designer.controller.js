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
exports.NavTopDesignerController = void 0;
const common_1 = require("@nestjs/common");
const nav_top_designer_service_1 = require("./nav-top-designer.service");
const create_nav_top_designer_dto_1 = require("./dto/create-nav-top-designer.dto");
const jwt_auth_guard_1 = require("../auth/jwt-auth.guard");
let NavTopDesignerController = class NavTopDesignerController {
    constructor(navTopDesignerService) {
        this.navTopDesignerService = navTopDesignerService;
    }
    create(createNavTopDesignerDto) {
        return this.navTopDesignerService.createNavTopDesigner(createNavTopDesignerDto);
    }
    findAll() {
        return this.navTopDesignerService.getAllNavTopDesigners();
    }
    findOne(sellerId) {
        return this.navTopDesignerService.getOneById(sellerId);
    }
    remove(id) {
        return this.navTopDesignerService.deleteOneById(id);
    }
};
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_nav_top_designer_dto_1.CreateNavTopDesignerDto]),
    __metadata("design:returntype", void 0)
], NavTopDesignerController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], NavTopDesignerController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], NavTopDesignerController.prototype, "findOne", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], NavTopDesignerController.prototype, "remove", null);
NavTopDesignerController = __decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Controller)('nav-top-designer'),
    __metadata("design:paramtypes", [nav_top_designer_service_1.NavTopDesignerService])
], NavTopDesignerController);
exports.NavTopDesignerController = NavTopDesignerController;
//# sourceMappingURL=nav-top-designer.controller.js.map