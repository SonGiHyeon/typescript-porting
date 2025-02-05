// Todo: FILLMEIN을 타입에 맞도록 수정하여 오류 메세지가 뜨지 않도록 합니다.

export function sumNumber(a: FILLMEIN, b: FILLMEIN): FILLMEIN {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('Invalid type detected. Only numbers are allowed.');
  }
  return a + b;
}

export let sumString = (first: FILLMEIN, last: FILLMEIN): FILLMEIN => {
  if (typeof first !== 'string' || typeof last !== 'string') {
    throw new Error('Invalid type detected. Only strings are allowed.');
  }

  return `${first} ${last}`;
};

export function isBoolean(a: FILLMEIN, b: FILLMEIN): FILLMEIN {
  if (typeof a !== 'boolean' || typeof b !== 'boolean') {
    return true;
  } else {
    return false;
  }
}

export function concatArray(arr1: FILLMEIN, arr2: FILLMEIN): FILLMEIN {
  return [...arr1, ...arr2];
}

export function mergeObjects(obj1: FILLMEIN, obj2: FILLMEIN): FILLMEIN {
  return { ...obj1, ...obj2 };
}
