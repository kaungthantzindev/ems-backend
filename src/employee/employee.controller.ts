import { Body, Controller, Post } from '@nestjs/common'
import { EmployeeService } from './employee.service'
import { CreateEmployeeDto } from './dto/create-employee.dto'
import { ApiOperation, ApiTags } from '@nestjs/swagger'

@Controller('employee')
@ApiTags('Employee')
export class EmployeeController {
  constructor(private readonly employeeService: EmployeeService) {}

  @Post()
  @ApiOperation({ summary: 'create employee' })
  register(@Body() dto: CreateEmployeeDto) {
    return this.employeeService.create(dto)
  }
}
