type MyPick<T, K extends keyof T> = {
  [P in K]: T[P];
};
// [P in K] 遍历
// T[P] get value
//  extends 泛型约束

interface Todo {
    title: string
    description: string
    completed: boolean
  }
  
  type TodoPreview = MyPick<Todo, 'title' | 'completed'>
  
  const todo: TodoPreview = {
      title: 'Clean room',
      completed: false,
  }
// js
// 对比学习
function myPick(todo, keys) {
  const obj = {};
  keys.forEach((key) => {
    if(key in todo){
        todo[key];
    }
  });
  return obj;
}

//1 return obj
//2 foreach
// 3 todo[key]
// 4 in todo
