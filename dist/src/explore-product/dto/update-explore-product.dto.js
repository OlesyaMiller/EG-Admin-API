"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateExploreProductDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_explore_product_dto_1 = require("./create-explore-product.dto");
class UpdateExploreProductDto extends (0, mapped_types_1.PartialType)(create_explore_product_dto_1.CreateExploreProductDto) {
}
exports.UpdateExploreProductDto = UpdateExploreProductDto;
//# sourceMappingURL=update-explore-product.dto.js.map