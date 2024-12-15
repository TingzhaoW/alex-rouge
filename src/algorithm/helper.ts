export function deepCopy<T>(obj: T): T {
  if (obj === null || typeof obj !== "object") {
    return obj; // Primitive values or null are returned as is
  }

  if (Array.isArray(obj)) {
    return obj.map(deepCopy) as unknown as T; // Deep copy array elements
  }

  const copy = {} as T; // Create a new object of the same type
  for (const key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      copy[key as keyof T] = deepCopy(obj[key as keyof T]); // Recursively copy properties
    }
  }

  return copy;
}

export function deepEqual(obj1: any, obj2: any): boolean {
  // Check if both values are strictly equal
  if (obj1 === obj2) return true;

  // Check if either value is null or not an object
  if (
    obj1 === null ||
    obj2 === null ||
    typeof obj1 !== "object" ||
    typeof obj2 !== "object"
  ) {
    return false;
  }

  // Check if both values have the same constructor
  if (obj1.constructor !== obj2.constructor) {
    return false;
  }

  // Compare the keys of both objects
  const keys1 = Object.keys(obj1);
  const keys2 = Object.keys(obj2);

  if (keys1.length !== keys2.length) return false;

  // Recursively compare each key and value
  for (const key of keys1) {
    if (!keys2.includes(key) || !deepEqual(obj1[key], obj2[key])) {
      return false;
    }
  }

  return true;
}
