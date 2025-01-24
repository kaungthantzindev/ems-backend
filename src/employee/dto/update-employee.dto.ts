import { IsOptional, IsPhoneNumber, IsString } from 'class-validator'

export class UpdateEmployeeDto {
  @IsOptional()
  @IsString()
  name: string

  @IsOptional()
  @IsPhoneNumber('MM')
  phone: string
}
