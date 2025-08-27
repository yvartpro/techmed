import { IsOptional, IsString } from 'class-validator';

export class CreateActivityDto {
  @IsString()
  title!: string;

  @IsOptional()
  @IsString()
  description?: string;
}
