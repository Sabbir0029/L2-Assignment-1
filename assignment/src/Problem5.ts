{
/**
 *Problem 5
 Write a generic function getProperty that takes an object and a property 
 name as arguments and returns the property value. Add a constraint to ensure 
 the property name exists on the object.
 
*/

function getProperty<T, N extends keyof T>(obj: T, key: N): T[N] {
    return obj[key];
  }
  const person = { name: "Alice", age: 30 };
  const result = getProperty(person, "name")
  console.log(result); 
  
}