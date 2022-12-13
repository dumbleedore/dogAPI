import { Controller, Get, Post } from '@nestjs/common';
import { randomUUID } from 'node:crypto';
import { PrismaService } from './prisma.service';

@Controller('dogAPI')
export class AppController {
  constructor(private readonly prisma: PrismaService) {}

  @Get()
  getHello() {
    return this.prisma.dog.findMany();
  }
  @Post('/create')
  async createDog() {
    return await this.prisma.dog.create({
      data: {
        id: 1,
        name: 'Bobby',
        age: 3,
        breed: 'Pitbull',
      },
    });
  }
}
