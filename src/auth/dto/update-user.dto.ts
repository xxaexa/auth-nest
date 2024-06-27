import { IsEmail, IsOptional, IsString } from 'class-validator';

export class UpdateUserDto {
  @IsOptional()
  @IsEmail()
  readonly email?: string;

  @IsOptional()
  @IsString()
  readonly username?: string;

  @IsOptional()
  @IsString()
  readonly password?: string;

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
