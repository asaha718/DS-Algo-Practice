//Easy to sort elements of an array relative to a particular target value
// O(n^2) time complexity. Worst case we always pick largest or smallest 
// pivot value so you keep having to sort for each value

// O(n) space because each recursive call filters creating a new array. 
const quickSort = (array) => {
  if (array.length <= 1) {
    return array;
  }

  let pivot = array.shift();
  let left = array.filter((el) => pivot > el);
  let right = array.filter((el) => pivot <= el);

  let leftSorted= quickSort(left); 
  let rightSorted= quickSort(right); 

  return [...leftSorted, pivot, ...rightSorted]
};

let arr = [42, 95, 53, 75, 12, 8, 24];

console.log(quickSort(arr))
