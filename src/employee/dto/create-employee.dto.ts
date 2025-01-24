import { IsNotEmpty, IsPhoneNumber, IsString } from 'class-validator'

export class CreateEmployeeDto {
  @IsNotEmpty()
  @IsString()
  name: string

  @IsNotEmpty()
  @IsPhoneNumber()
  phone: string
}
