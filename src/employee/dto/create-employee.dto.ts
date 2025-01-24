import {
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsPhoneNumber,
  IsString,
} from 'class-validator'

export class CreateEmployeeDto {
  @IsNotEmpty()
  @IsNumber()
  id: number

  @IsNotEmpty()
  @IsString()
  name: string

  @IsOptional()
  @IsPhoneNumber('MM')
  phone: string
}
