import { Controller, Get, Post, Body, Query, Param } from '@nestjs/common';
import { randomUUID } from 'node:crypto';
import CreateDogBody from '../validator/create-dog-body';
import { PrismaService } from '../infra/prisma.service';

@Controller('dogAPI')
export class AppController {
  constructor(private readonly prisma: PrismaService) {}

  @Get()
  async index() {
    return await this.prisma.dog.findMany();
  }
  @Get('findByName/:name')
  async findByName(@Param('name') name: string) {
    console.log(`entrou`);
    return await this.prisma.dog.findMany({
      where: { name: name },
    });
  }
  @Post('/create')
  async createDog(@Body() body: CreateDogBody) {
    // getting DAO //
    const { name, breed, age } = body;
    //saving on database //
    return await this.prisma.dog.create({
      data: {
        id: randomUUID(),
        name: name,
        breed: breed,
        age: age,
      },
    });
  }
}
