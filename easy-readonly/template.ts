type MyReadonly<T> = {
  readonly [P in keyof T]:T[P]
};

// in map
// keyof get interface key(title/description)
// readonly key word cannot reassign
// T[P] interfalce value(sting/number)

// readonly 
// type User = {
//   readonly name: string;
// };

// let t: User = {
//   name: "marco",
// };
// t.name = "23";

interface Todo {
  title: string;
  description: string;
}

const todo: MyReadonly<Todo> = {
  title: "Hey",
  description: "foobar",
};

todo.title = "Hello"; // Error: cannot reassign a readonly property
todo.description = "barFoo"; // Error: cannot reassign a readonly property
