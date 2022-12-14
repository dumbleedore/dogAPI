import { Controller, Get, Post, Body } from '@nestjs/common';
import { randomUUID } from 'node:crypto';
import DogValidator from './models/dogValidator';
import { PrismaService } from './prisma.service';

@Controller('dogAPI')
export class AppController {
  constructor(private readonly prisma: PrismaService) {}

  @Get()
  getHello() {
    return this.prisma.dog.findMany();
  }
  @Post('/create')
  async createDog(@Body() body: DogValidator) {
    const { name, breed, age } = body;
    console.log(body);

    return await this.prisma.dog.create({
      data: {
        id: randomUUID(),
        name,
        age,
        breed,
      },
    });
  }
}
