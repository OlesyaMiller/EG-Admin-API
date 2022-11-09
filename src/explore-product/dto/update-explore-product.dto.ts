import { PartialType } from '@nestjs/mapped-types';
import { CreateExploreProductDto } from './create-explore-product.dto';

export class UpdateExploreProductDto extends PartialType(CreateExploreProductDto) {}
