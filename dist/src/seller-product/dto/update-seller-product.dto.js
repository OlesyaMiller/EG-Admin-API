"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateSellerProductDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_seller_product_dto_1 = require("./create-seller-product.dto");
class UpdateSellerProductDto extends (0, mapped_types_1.PartialType)(create_seller_product_dto_1.CreateSellerProductDto) {
}
exports.UpdateSellerProductDto = UpdateSellerProductDto;
//# sourceMappingURL=update-seller-product.dto.js.map