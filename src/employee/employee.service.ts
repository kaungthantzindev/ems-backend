import {
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common'
import { PrismaService } from 'src/prisma/prisma.service'
import { CreateEmployeeDto } from './dto/create-employee.dto'
import { UpdateEmployeeDto } from './dto/update-employee.dto'
import { PrismaClientKnownRequestError } from '@prisma/client/runtime/library'

@Injectable()
export class EmployeeService {
  constructor(private readonly prismaService: PrismaService) {}

  async getAll() {
    return this.prismaService.employee.findMany()
  }

  async getOne(id: number) {
    try {
      const employee = await this.prismaService.employee.findFirst({
        where: { id },
      })

      if (!employee) {
        throw new NotFoundException('Employee not found')
      }

      return employee
    } catch (error) {
      throw error
    }
  }

  async create(dto: CreateEmployeeDto) {
    try {
      const employee = await this.prismaService.employee.create({
        data: dto,
      })

      return employee
    } catch (error) {
      if (error instanceof PrismaClientKnownRequestError) {
        if (error.code === 'P2002')
          throw new ConflictException('Employee already exist')
      }
      throw error
    }
  }

  async update(id: number, dto: UpdateEmployeeDto) {
    try {
      const employee = await this.prismaService.employee.findFirst({
        where: { id },
      })

      if (!employee) {
        throw new NotFoundException('Employee not found')
      }

      const updatedEmployee = await this.prismaService.employee.update({
        data: dto,
        where: { id },
      })

      return updatedEmployee
    } catch (error) {
      throw error
    }
  }

  async delete(id: number) {
    try {
      const employee = await this.prismaService.employee.findFirst({
        where: { id },
      })

      if (!employee) {
        throw new NotFoundException('Employee not found')
      }

      await this.prismaService.employee.delete({
        where: { id },
      })
    } catch (error) {
      throw error
    }
  }
}
