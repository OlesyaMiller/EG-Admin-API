import { PartialType } from '@nestjs/mapped-types';
import { CreateExploreDesignerDto } from './create-explore-designer.dto';

export class UpdateExploreDesignerDto extends PartialType(CreateExploreDesignerDto) {}
