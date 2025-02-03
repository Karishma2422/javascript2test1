// Q.1 Swap two numbers

var a = 5;
var b = 10;

function QuestionOne(a, b) {
  console.log(a, b);

  a = a + b; // 15
  b = a - b; // 5
  a = a - b; // 10

  console.log(a, b);
}

console.log(QuestionOne(a, b, c));

// Q.2 Largest of three numbers

var a = 3;
var b = 7;
var c = 5;

function QuestionTwo(a, b, c) {
  let largest = 0;

  if (a > largest && a > b && a > c) {
    largest = a;
  } else if (b > largest && b > a && b > c) {
    largest = b;
  } else {
    largest = c;
  }

  return largest;
}

// console.log(QuestionTwo(a, b, c));

// Q.3 check if number is prime

var num = 11;

function QuestionThree(num) {
  if (num < 2) {
    return `${num} is not a prime number`;
  }
  for (let i = 2; i <= num; i++) {
    if (num % i == 0) {
      return `${num} is not a prime number`;
    }
  }

  return `${num} is a prime number`;
}

// console.log(QuestionThree(num));

// Q. 4 Reverse an array

var array = [1, 2, 3, 4];

function QuestionFour(array) {
  var newArray = [];

  for (let i = array.length - 1; i >= 0; i--) {
    console.log(array[i]);
    newArray[array.length - 1 - i] = array[i];
  }

  return newArray;
}

// console.log(QuestionFour(array));

// Q. 5 Sum of even numbers in an array

var array = [1, 2, 3, 4, 5, 6];

function QuestionFive(array) {
  let sum = 0;

  console.log("array :", array);

  for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 == 0) {
      sum = sum + array[i];
    }
  }

  return sum;
}

console.log(QuestionFive(array));

// Q. 6 number of vowels in a string

var string = "hello world";

function QuestionSix(string) {
  var count = 0;

  for (let i = 0; i < string.length; i++) {
    if (
      string[i] == "a" ||
      string[i] == "e" ||
      string[i] == "i" ||
      string[i] == "o" ||
      string[i] == "u"
    ) {
      count++;
    }
  }

  return count;
}

// console.log(QuestionSix(string));

// Q. 7 second largest number in an array

var array = [10, 20, 4, 45, 99];

function QuestionSeven() {
  var newArray = [];
  var largest = 0; // first value

  for (let i = 0; i < array.length; i++) {
    // console.log(largest,"largest", array[i], "array[i]")
    if (array[i] > largest) {
      largest = array[i];
      newArray.push(largest);
      // console.log(newArray);
    }
  }
  console.log("second largest : ", newArray[newArray.length - 2]);
}

// console.log(QuestionSeven(array));

// Q. 8 remove duplicate from array

var array = [1, 2, 2, 3, 4, 4, 5];

function QuestionEight(array) {
  let newArray = [];

  for (let i = 0; i < array.length; i++) {
    var equal = false;
    for (let j = i + 1; j < array.length; j++) {
      console.log(array[i], array[j]);

      if (array[i] == array[j]) {
        equal = true;
        console.log(equal);
      }
    }

    if (equal == false) {
      newArray.push(array[i]);
      console.log(newArray);
    }
  }
}

// console.log(QuestionEight(array));
// Q. 9 Factorial

var number = 5;

function QuestionNine(number) {
  let factorial = 1;

  for (let i = 1; i <= number; i++) {
    factorial = factorial * i;
    // console.log(factorial);
  }

  return factorial;
}

// console.log(QuestionNine(number))

// Q. 10 Array is sorted or not

var array1 = [1, 2, 3, 4, 5];
var array2 = [1, 3, 2, 4, 5];

function QuestionTen(array) {
  let sorted = true;
  console.log(array, "array");

  for (let i = 0; i < array.length; i++) {
    if (i == 0 && array[i] < array[i + 1]) {
      console.log("sorted");
    } else if (
      i == array.length - 1 &&
      array[array.length - 1] > array[array.length - 2]
    ) {
      console.log("sorted");
    } else if (array[i] > array[i - 1] && array[i] < array[i + 1]) {
      console.log("sorted");
    } else {
      console.log("unsorted");
      sorted = false;
    }
  }

  return sorted;
}

// console.log(QuestionTen(array1));