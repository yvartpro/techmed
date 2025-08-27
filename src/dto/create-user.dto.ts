import { IsEmail, IsOptional, IsString } from 'class-validator';

export class CreateUserDto {
  @IsEmail()
  email!: string;

  @IsString()
  fullname!: string;

  @IsOptional()
  @IsString()
  phone?: string;
}
