// type First<T extends any[]> = T extends [] ? never : T[0];
// type First<T extends any[]> = T["length"] extends 0 ? never : T[0];
// type First<T extends any[]> = T[0] extends T[number] ? T[0] : never; //extends union
type First<T extends any[]> = T extends [infer first, ...infer rest]
  ? first
  : never;
type empty = First<[1,2,3]>;
// empty type is undefined

type ages = [1, 2, 3];
type t1 = ages[number];
//1 extends 1
//1 extends 2
//1 extends 3
type test = 1 extends ages[number] ? true : false;

// js
const first = (arrs) => {
  const [first, ...rest] = arrs;
  return first;
};

// 1 extends
// 2 tuple length
// 3 extends unions
// 4 infer 推断
