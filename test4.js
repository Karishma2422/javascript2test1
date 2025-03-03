// Question 1

// var array = [4,1,6,2,8,10]
var array = [10, 20, 30, 5, 7];

const ThirdLargestNumber = (array) => {
  let largest = -Infinity;
  let secondLargest = -Infinity;
  let thirdLargest = -Infinity;

  for (let i = 0; i < array.length; i++) {
    if (array[i] > largest) {
      thirdLargest = secondLargest;
      secondLargest = largest;
      largest = array[i];
    } else if (
      array[i] < largest &&
      array[i] > secondLargest &&
      array[i] > thirdLargest
    ) {
      thirdLargest = secondLargest;
      secondLargest = array[i];
    } else if (
      array[i] < largest &&
      array[i] < secondLargest &&
      array[i] > thirdLargest
    ) {
      thirdLargest = array[i];
    }
  }
  return thirdLargest;
};

// console.log(ThirdLargestNumber(array));

// Question 2

var number = 1234;

const ReverseNumber = (number) =>{


}

console.log(ReverseNumber(number))


// Question 3

// let string1 = "listen";
// let string2 = "silent";

let string1 = "hello";
let string2 = "world";


const Anagram = (str1,str2) => {

    // console.log(str1,str2)

    
    let matched;

    for (let i = 0 ; i < str1.length ; i++){

        matched = false;

        for (let j = 0 ; j < str2.length ; j ++){

            if (str1[i] === str2[j]){
                matched = true;
                break;
            }

        }

        if (matched == false){
            return matched;
        }


    }

    return matched;
}

// console.log(Anagram(string1,string2))

// Question 4

// let string = "aabbccddeffg";
let string = "hello";

const CharRepeat = (str) => {
let matched ;

for (let i = 0 ; i < string.length ; i ++ ){

    matched = false;

    for (let j = 0 ; j < string.length ; j ++){

        // console.log(str[i],str[j])


        if (string[i] === string[j] && i != j){
            matched = true;
            break;
        }

    }

    if (matched == false){
        return string[i];
    }

}

return "There is no non repeating character";

}

// console.log(CharRepeat(string))

// Question 5

let sentence = "JavaScript is an amazing language";

// let sentence = "I love coding";

const LongestWord = (sentence) => {

    let count = 0;
    let word = "";
    let largest = 0;
    let data = {};


    for (let i = 0 ; i < sentence.length ; i ++){

        console.log(sentence[i]);

        if (sentence[i]!== " "){
            word += sentence[i];
            count++;
            if (count > largest){
                largest = count;
            }

        } else if (sentence[i] === " "){
            result = word;
            data[result] = count;
            count = 0;
            word = "";
        }


        
    }

    result = word;
    data[result] = count;

    console.log(data)
    console.log(largest)

    for (key in data){
        if (data[key] === largest){
            return key;
        }
    }

   

}

// console.log(LongestWord(sentence))