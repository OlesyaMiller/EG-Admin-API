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
exports.ImageService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const image_entity_1 = require("./entities/image.entity");
let ImageService = class ImageService {
    constructor(imageRepository) {
        this.imageRepository = imageRepository;
    }
    async createImage(request) {
        try {
            const imageEntity = new image_entity_1.Image();
            imageEntity.filename = request.filename;
            imageEntity.filenameOriginal = request.filenameOriginal;
            imageEntity.size = request.size;
            imageEntity.mimeType = request.mimeType;
            imageEntity.encoding = request.encoding;
            imageEntity.width = request.width;
            imageEntity.height = request.height;
            const newImage = await this.imageRepository.save(imageEntity);
            return newImage;
        }
        catch (err) {
            throw err;
        }
    }
    async findAll() {
        try {
            return await this.imageRepository.find();
        }
        catch (err) {
            throw err;
        }
    }
    async getOneImageById(imageId) {
        try {
            const image = await this.imageRepository.findOneBy({ id: imageId });
            return image;
        }
        catch (err) {
            throw err;
        }
    }
    async deleteOneById(id) {
        return this.imageRepository.softDelete(id);
    }
};
ImageService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(image_entity_1.Image)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], ImageService);
exports.ImageService = ImageService;
//# sourceMappingURL=image.service.js.map