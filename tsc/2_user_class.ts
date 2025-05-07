// Интерфейс для типизации класса User
interface IUser {
    name: string;
    age: number;
    hello(): void;
  }
  
  // Реализация класса User
  class User implements IUser {
    name: string;
    age: number;
  
    constructor(name: string, age: number) {
      this.name = name;
      this.age = age;
    }
  
    hello(): void {
      console.log(`Hi! My name is ${this.name}. And I am ${this.age} years old.`);
    }
  }
  
  // Пример использования
  const user = new User('Alice', 30);
  user.hello();