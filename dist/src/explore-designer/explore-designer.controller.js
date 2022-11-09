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
exports.ExploreDesignerController = void 0;
const common_1 = require("@nestjs/common");
const explore_designer_service_1 = require("./explore-designer.service");
const create_explore_designer_dto_1 = require("./dto/create-explore-designer.dto");
const jwt_auth_guard_1 = require("../auth/jwt-auth.guard");
let ExploreDesignerController = class ExploreDesignerController {
    constructor(exploreDesignerService) {
        this.exploreDesignerService = exploreDesignerService;
    }
    create(createExploreDesignerDto) {
        return this.exploreDesignerService.createExploreDesigner(createExploreDesignerDto);
    }
    findAll() {
        return this.exploreDesignerService.getAllExploreDesigners();
    }
    findOne(id) {
        return this.exploreDesignerService.getOneById(id);
    }
    remove(id) {
        return this.exploreDesignerService.deleteOneById(id);
    }
};
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_explore_designer_dto_1.CreateExploreDesignerDto]),
    __metadata("design:returntype", void 0)
], ExploreDesignerController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ExploreDesignerController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ExploreDesignerController.prototype, "findOne", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ExploreDesignerController.prototype, "remove", null);
ExploreDesignerController = __decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Controller)('explore-designer'),
    __metadata("design:paramtypes", [explore_designer_service_1.ExploreDesignerService])
], ExploreDesignerController);
exports.ExploreDesignerController = ExploreDesignerController;
//# sourceMappingURL=explore-designer.controller.js.map