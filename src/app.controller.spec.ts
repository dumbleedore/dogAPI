import { AppController } from './infra/app.controller';
import { PrismaService } from './infra/prisma.service';
import { Dog } from '@prisma/client';
import { Test } from '@nestjs/testing';
import { randomUUID } from 'crypto';
jest.mock('@prisma/client');
describe('AppController', () => {
  let appController: AppController;
  let appService: PrismaService;

  beforeEach(async () => {
    const moduleRef = await Test.createTestingModule({
      controllers: [AppController],
      providers: [PrismaService],
    }).compile();
    appService = moduleRef.get<PrismaService>(PrismaService);
    appController = moduleRef.get<AppController>(AppController);
  });
  const dog: Dog[] = [
    {
      name: 'Layla',
      breed: 'Labrador',
      createdAt: new Date(),
      id: randomUUID(),
      age: 12,
    },
  ];
  it('should return a list of dogs', async () => {
    appService.dog.findMany = jest.fn().mockImplementation(() => {
      return Promise.resolve(dog);
    });
    const result = await appController.index();
    console.log(appService);
    expect(result).toEqual(dog);
  });
});
