import { PartialType } from '@nestjs/mapped-types';
import { CreateNavTopDesignerDto } from './create-nav-top-designer.dto';

export class UpdateNavTopDesignerDto extends PartialType(CreateNavTopDesignerDto) {}
