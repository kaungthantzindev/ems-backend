import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common'
import { EmployeeService } from './employee.service'
import { CreateEmployeeDto } from './dto/create-employee.dto'
import { ApiOperation, ApiTags } from '@nestjs/swagger'
import { UpdateEmployeeDto } from './dto/update-employee.dto'

@Controller('employee')
@ApiTags('Employee')
export class EmployeeController {
  constructor(private readonly employeeService: EmployeeService) {}

  @Get()
  @ApiOperation({ summary: 'get all employee list' })
  getAll() {
    return this.employeeService.getAll()
  }

  @Get(':id')
  @ApiOperation({ summary: 'get employee detail' })
  getEmployee(@Param('id') id: string) {
    return this.employeeService.getOne(parseInt(id))
  }

  @Post()
  @ApiOperation({ summary: 'create employee' })
  register(@Body() dto: CreateEmployeeDto) {
    return this.employeeService.create(dto)
  }

  @Patch(':id')
  @ApiOperation({ summary: 'update employee' })
  update(@Param('id') id: string, @Body() dto: UpdateEmployeeDto) {
    return this.employeeService.update(parseInt(id), dto)
  }

  @Delete()
  @ApiOperation({ summary: 'delete employee' })
  delete(@Param('id') id: number) {
    return this.employeeService.delete(id)
  }
}
