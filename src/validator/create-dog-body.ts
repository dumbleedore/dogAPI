import { IsNotEmpty } from 'class-validator';
export default class CreateDogBody {
  id: string;
  @IsNotEmpty()
  name: string;
  @IsNotEmpty()
  age: number;
  @IsNotEmpty()
  breed: string;
}
