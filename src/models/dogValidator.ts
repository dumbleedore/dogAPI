import { IsNotEmpty } from 'class-validator';

export default class DogValidator {
  id: string;
  @IsNotEmpty()
  name: string;
  @IsNotEmpty()
  age: number;
  @IsNotEmpty()
  breed: string;
}
