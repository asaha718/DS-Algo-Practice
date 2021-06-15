// Easy to merge elements of two sorted arrays into a single sorted array
// Single element is already sorted and also empty

// Idea is that you split a unsorted arr to 2 unsorted arrays. Sort the 2 
// and merge them back to a sorted array

mergeSort= (arr)=> { 
    if(arr.length<=1){ 
        return arr; 
    }

    let mid= Math.floor(arr.length/2); 
    let left= arr.slice(0, mid); 
    let right= arr.slice(mid);
    
    let sortL= mergeSort(left); // keeps breaking the arr down 
    let sortR= mergeSort(right); 

    return merge(sortL, sortR); 
}

merge=(arr1, arr2)=> { 
    let merged= []; 

    while (arr1.length || arr2.length){ 
        let ele1= arr1.length ? arr1[0] : Infinity; 
        let ele2= arr2.length ? arr2[0] : Infinity;
        
        let next; 
        if (ele1 < ele2){ 
            next= arr1.shift(); 
        }else{ 
            next= arr2.shift(); 
        }

        merged.push(next); 
    }

    return merged
}

console.log(mergeSort([42,95,53,75,12,8,24]))