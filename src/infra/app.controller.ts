import { Controller, Get, Post, Body } from '@nestjs/common';
import { randomUUID } from 'node:crypto';
import CreateDogBody from '../validator/create-dog-body';
import { PrismaService } from '../infra/prisma.service';
import Dog from 'src/models/Dog';

@Controller('dogAPI')
export class AppController {
  constructor(private readonly prisma: PrismaService) {}

  @Get()
  getHello() {
    return this.prisma.dog.findMany();
  }
  @Post('/create')
  async createDog(@Body() body: CreateDogBody) {
    // getting DAO //
    const { name, breed, age } = body;
    // create new Dog //
    const dog = new Dog({
      id: randomUUID(),
      name: name,
      breed: breed,
      age: age,
    });
    //saving on database //
    return await this.prisma.dog.create({
      data: {
        id: dog.getId,
        name: dog.getName,
        breed: dog.getBreed,
        age: dog.getAge,
      },
    });
  }
}
