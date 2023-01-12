function getSize<T>(arr: T[]): number {
  return arr.length;
}

const arr1 = [1, 2, 3];

console.log(getSize<number>(arr1));

const arr2 = ["1", "2", "3"];

console.log(getSize<string>(arr2));

interface Mobile<T> {
  name: string;
  price: number;
  option: T;
}

const m1: Mobile<object> = {
  name: "s21",
  price: 1000,
  option: {
    color: "red",
    coupon: false,
  },
};

interface User {
  name: string;
  age: number;
}

interface Car {
  name: string;
  color: string;
}

interface Book {
  price: number;
}

const user: User = { name: "aaa", age: 18 };
const car: Car = { name: "BMW", color: "blue" };
const book: Book = { price: 3000 };

// function showName<T extends { name: string }>(data: T): string {
//   return data.name;
// }

const showName = <T extends { name: string }>(data: T): string => data.name;

showName(user);
showName(car);
