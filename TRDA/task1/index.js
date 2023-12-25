function getUnique(arr) {
    let uniqueArr = [];
  
    arr.forEach(element => {
      if (!uniqueArr.includes(element)) {
        uniqueArr.push(element);
      }
    });
  
    return uniqueArr; 
  }
  
  const input = [1, 2, 3, 2, 4, 5, 3];
  
  const result = getUnique(input);
  
  console.log(result);