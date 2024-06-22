import { IsEmail, IsOptional, IsString } from 'class-validator';

export class UpdateAuthDto {
  @IsString()
  @IsOptional()
  name?: string;

  @IsOptional()
  @IsString()
  @IsEmail()
  email?: string;

  @IsOptional()
  @IsString()
  password?: string;
}
