// The idea behind bubble sort is that every pair of 
// adjacent values is compared, and then the two values 
// swap positions if the first value is greater than the
// second. This way during each pass through the array, the
// largest value “bubbles up” to the top, and after each 
// pass the elements furthest to the right are in the correct order.
// O(n^2) time complexity
// O(1) space complexity (in place)

bubble_sort= (arr) => { 
    let sorted= false; 

    while(!sorted){ 

        sorted=true; 

        for(let i=0; i< arr.length-1; i++){ 
            if(arr[i]>arr[i+1]){ 
                [arr[i], arr[i+1]] = [arr[i+1], arr[i]]
                // let tmp = arr[i];
                // arr[i] = arr[i + 1];
                // arr[i + 1] = tmp;
                sorted = false
            } 
        }
    }
    return arr
}

// console.log(bubble_sort([3,1,12,4,6,5,16,15]))


//callback method

let larger= (ele1, ele2) => { 
    if(ele1 > ele2){ 
        return 1
    }else if(ele1 < ele2){ 
        return -1
    }else{ 
        return 0
    }
} 

Array.prototype.bubble= function (callback = null){ 
    if(callback=== null) callback= larger; 

    let arr= this.slice(); 
    let sorted= false; 

    while(!sorted){ 
        sorted=true; 
        for(i=0; i< arr.length-1; i++){ 
            if(callback(arr[i], arr[i+1])=== 1){ 
                sorted = false; 
                [arr[i], arr[i+1]]= [arr[i+1], arr[i]]
            }
        }
    } 
    return arr

}

console.log([3,1,12,4,6,5,16,15].bubble())