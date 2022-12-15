interface DogProps {
  id: string;
  name: string;
  age: number;
  breed: string;
}
export default class Dog {
  private props: DogProps;
  constructor(props) {
    this.props = props;
  }
  public set setName(name: string) {
    this.props.name = name;
  }
  public set setBreed(breed: string) {
    this.props.breed = breed;
  }
  public set setAge(age: number) {
    this.props.age = age;
  }
  public set setId(id: string) {
    this.props.id = id;
  }
  public get getName() {
    return this.props.name;
  }
  public get getBreed() {
    return this.props.breed;
  }
  public get getAge() {
    return this.props.age;
  }
  public get getId() {
    return this.props.id;
  }
}
