type TupleToObject<T extends readonly (string | number | symbol)[]> = {
  [P in T[number]]: P;
};


// typeof  value =>  type
// as const   readonly

const tuple = ["tesla", "model 3", "model X", "model Y"] as const;
