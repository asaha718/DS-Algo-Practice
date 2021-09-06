// Selection sort selects the smallest elements of the array and directly places 
// them at the beginning of the array in sorted position
// O(n^2) time complexity
// O(1) space complexity

selection_sort= (arr)=> { 

    for(let i=0; i< arr.length; i++){ 
        let minIdx= i; 
        for(let j=i+1; j< arr.length; j++){ 
            if(arr[minIdx]> arr[j]){ 
                minIdx = j; 
            }
        }
        [arr[i], arr[minIdx]] = [arr[minIdx], arr[i]]; 
    }
    return arr


}

console.log(selection_sort([3,1,12,4,6,5,16,15]))