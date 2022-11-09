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
Object.defineProperty(exports, "__esModule", { value: true });
exports.NavRecommendedDesigner = void 0;
const typeorm_1 = require("typeorm");
let NavRecommendedDesigner = class NavRecommendedDesigner {
};
__decorate([
    (0, typeorm_1.PrimaryColumn)({ length: 32 }),
    __metadata("design:type", String)
], NavRecommendedDesigner.prototype, "sellerId", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 32 }),
    __metadata("design:type", String)
], NavRecommendedDesigner.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], NavRecommendedDesigner.prototype, "dateCreated", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], NavRecommendedDesigner.prototype, "dateUpdated", void 0);
__decorate([
    (0, typeorm_1.DeleteDateColumn)(),
    __metadata("design:type", Date)
], NavRecommendedDesigner.prototype, "dateDeleted", void 0);
NavRecommendedDesigner = __decorate([
    (0, typeorm_1.Entity)()
], NavRecommendedDesigner);
exports.NavRecommendedDesigner = NavRecommendedDesigner;
//# sourceMappingURL=nav-recommended-designer.entity.js.map