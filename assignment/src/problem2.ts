{
/**
## Problem 2
    Create a TypeScript function removeDuplicates that accepts an array of 
    numbers and returns a new array with duplicates removed.Preserve 
    the original order of elements.
 **/
function removeDuplicates(arr: number[]): number[] {
    const newArray: number[] = [...new Set(arr)];
    return newArray;
  }
  
  const result = removeDuplicates([1, 2, 2, 3, 4, 4, 5])
  console.log(result);
  

}