interface User {
  id: number;
  name: string;
  age: number;
}

const isValid = (user: User) => {
  const result: Record<keyof User, boolean> = {
    id: user.id > 0,
    name: user.name !== "",
    age: user.age > 0,
  };
  return result;
};
