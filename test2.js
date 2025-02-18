const multiply = (a, b) => {
    let end = b;
    let product = 0;
  
    for (let i = 0; i < end; i++) {
      product += a;
    }
  
    return `product : ${product}`;
  };
  
  console.log(multiply(-2, 6));
  
  const smallest = (a, b, c) => {
    let smallest = 0;
  
    if (a < b && a < c) {
      smallest = a;
      return `smallest : ${smallest}`;
    } else if (b < a && b < c) {
      smallest = b;
      return `smallest : ${smallest}`;
    } else {
      return `smallest : ${smallest}`;
    }
  };
  
  // console.log(smallest(3, 7, 5));
  
  var string1 = "javascript";
  
  var string2 = "CopyEdit";
  
  var string3 = "hello";
  
  const reverseString = (string) => {
    for (let i = string.length - 1; i >= 0; i--) {
      console.log(string[i]);
    }
  };
  
  // console.log(reverseString(string3));
  
  var string1 = "hello";
  
  const countOccurence = (string) => {
      let characters = {};
    for (let i = 0; i < string.length; i++) {
      let count = 1;
      for (let j = 0; j < string.length; j++) {
        if (string[i] === string[j] && i != j) {
          count++;
          // console.log(string[i], count);
        }
      }
      console.log(string[i],count);
      
      characters[`${string[i]}`] = count;
  
    }
  
    return characters;
  };
  
  console.log(countOccurence(string1));
  
  var array1 = [1, 2, 3, 4];
  
  var array2 = [3, 4, 5, 6];
  
  const intersection = (arr1, arr2) => {
    let intersectionArray = [];
  
    for (let i = 0; i < arr1.length; i++) {
      for (let j = 0; j < array2.length; j++) {
        if (array1[i] == array2[j]) {
          intersectionArray.push(array2[j]);
        }
      }
    }
  
    return intersectionArray;
  };
  
  // console.log(intersection(array1, array2));