import { PartialType } from '@nestjs/mapped-types';
import { CreateExploreCategoryDto } from './create-explore-category.dto';

export class UpdateExploreCategoryDto extends PartialType(CreateExploreCategoryDto) {}
