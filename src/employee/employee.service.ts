import { Injectable } from '@nestjs/common'
import { PrismaService } from 'src/prisma/prisma.service'
import { CreateEmployeeDto } from './dto/create-employee.dto'

@Injectable()
export class EmployeeService {
  constructor(private readonly prismaService: PrismaService) {}

  async create(dto: CreateEmployeeDto) {
    try {
      const employee = await this.prismaService.employee.create({
        data: dto,
      })

      return employee
    } catch (error) {
      throw error
    }
  }
}
