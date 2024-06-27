import { IsEmail, IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class CreateUserDto {
  @IsNotEmpty()
  @IsEmail()
  readonly email: string;

  @IsNotEmpty()
  @IsString()
  readonly username: string;

  @IsNotEmpty()
  @IsString()
  readonly password: string;

  @IsOptional()
  @IsString()
  readonly displayName?: string;

  @IsOptional()
  @IsString()
  readonly gender?: string;

  @IsOptional()
  @IsString()
  readonly birthday?: string;

  @IsOptional()
  @IsString()
  readonly horoscope?: string;

  @IsOptional()
  @IsString()
  readonly zodiac?: string;

  @IsOptional()
  @IsString()
  readonly height?: string;

  @IsOptional()
  @IsString()
  readonly weight?: string;

  @IsOptional()
  @IsString()
  readonly interest?: string;
}
