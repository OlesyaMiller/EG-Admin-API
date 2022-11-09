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
exports.ExploreCategory = void 0;
const typeorm_1 = require("typeorm");
const image_entity_1 = require("../../image/entities/image.entity");
let ExploreCategory = class ExploreCategory {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], ExploreCategory.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 32 }),
    __metadata("design:type", String)
], ExploreCategory.prototype, "category", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => image_entity_1.Image, { eager: true }),
    (0, typeorm_1.JoinColumn)([{ name: "imageId", referencedColumnName: "id" }]),
    __metadata("design:type", image_entity_1.Image)
], ExploreCategory.prototype, "image", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], ExploreCategory.prototype, "dateCreated", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], ExploreCategory.prototype, "dateUpdated", void 0);
__decorate([
    (0, typeorm_1.DeleteDateColumn)(),
    __metadata("design:type", Date)
], ExploreCategory.prototype, "dateDeleted", void 0);
ExploreCategory = __decorate([
    (0, typeorm_1.Entity)()
], ExploreCategory);
exports.ExploreCategory = ExploreCategory;
//# sourceMappingURL=explore-category.entity.js.map