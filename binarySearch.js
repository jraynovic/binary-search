function binarySearch(sortedArray, numSearchFor){
    let start = 0;
    let end = sortedArray.length - 1; //compensate for index starting at 0

    while (start <= end) { // while our search section is greater than the end. 
        let middle = Math.floor((start + end) / 2); // grab out middle
        if (sortedArray[middle] === numSearchFor) { //if the middle is our value return middle val
            return middle; // found the numSearchFor
        } else if (sortedArray[middle] < numSearchFor) {//if middle is less than val we are looking for
            start = middle + 1;//change start to the val to the right
        } else {// middle is larger than val we are looking for
            end = middle - 1;// leave start alone and change end to the val left
        }
    }
	// numSearchFor wasn't found
    return -1;
}

array = [1,2,3,4,8,10,11,13,19,20,22,31,40,56]
console.log(binarySearch(array, 13))