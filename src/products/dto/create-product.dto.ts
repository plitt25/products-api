import { IsString, IsInt, IsBoolean } from 'class-validator';
import { Type } from 'class-transformer';

export class CreateProductDto {
  @IsString()
  name: string;

  @Type(() => Number)
  @IsInt()
  price: number;

  @Type(() => Number)
  @IsInt()
  porcentPromo: number;

  @IsBoolean()
  promo: boolean;
}
