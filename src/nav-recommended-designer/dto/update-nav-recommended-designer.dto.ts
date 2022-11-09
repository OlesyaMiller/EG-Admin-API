import { PartialType } from '@nestjs/mapped-types';
import { CreateNavRecommendedDesignerDto } from './create-nav-recommended-designer.dto';

export class UpdateNavRecommendedDesignerDto extends PartialType(CreateNavRecommendedDesignerDto) {}
