function getCommonElements(arr1, arr2) {

    let common = [];
    
    for (let i = 0; i < arr1.length; i++) {
      const el1 = arr1[i];
      
      for (let j = 0; j < arr2.length; j++) {
        const el2 = arr2[j];
        
        if (el1 === el2) {
          common.push(el1);
        }
      }
    }
  
    return common;
  }
  
  const array1 = [1, 3, 5, 7, 9];
  const array2 = [3, 5, 11, 13, 15];
  
  const commonElements = getCommonElements(array1, array2);
  
  console.log(commonElements); // [3, 5]