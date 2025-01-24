import { Type } from 'class-transformer'
import {
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  // Max,
  // MaxLength,
  // MinLength,
} from 'class-validator'

export class CreateEmployeeDto {
  @IsNotEmpty()
  @IsNumber()
  id: number

  @IsNotEmpty()
  @IsString()
  name: string

  @IsOptional()
  @Type(() => Number)
  @IsNumber()
  // @MaxLength(11)
  // @MinLength(5)
  phone: string
}
