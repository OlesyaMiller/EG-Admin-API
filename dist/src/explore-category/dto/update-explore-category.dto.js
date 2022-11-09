"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateExploreCategoryDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_explore_category_dto_1 = require("./create-explore-category.dto");
class UpdateExploreCategoryDto extends (0, mapped_types_1.PartialType)(create_explore_category_dto_1.CreateExploreCategoryDto) {
}
exports.UpdateExploreCategoryDto = UpdateExploreCategoryDto;
//# sourceMappingURL=update-explore-category.dto.js.map