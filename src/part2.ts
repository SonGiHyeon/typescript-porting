export function sumNumber(a: number, b: number): number {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('Invalid type detected. Only numbers are allowed.');
  }
  return a + b;
}

export let sumString = (first: string, last: string): string => {
  if (typeof first !== 'string' || typeof last !== 'string') {
    throw new Error('Invalid type detected. Only strings are allowed.');
  }

  return `${first} ${last}`;
};

export function isBoolean(a: boolean, b: boolean): boolean {
  if (typeof a !== 'boolean' || typeof b !== 'boolean') {
    return true;
  } else {
    return false;
  }
}

export function concatArray<T>(arr1: T[], arr2: T[]): T[] {
  return [...arr1, ...arr2];
}

export function mergeObjects<T extends object, U extends object>(obj1: T, obj2: U): T & U {
  return { ...obj1, ...obj2 };
}
