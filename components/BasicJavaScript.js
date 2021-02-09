import * as React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';

const BasicJavaScript = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.textTitle}>
        Test Bootcamp React Native
      </Text>
    </View>
  );
};

export default BasicJavaScript;

//Start Soal Algoritma Pertama
const arr = [1,2,3,4,5,6,7];
var i = 0;

for(i = 0; i < arr.length; i++){
  console.log(arr[i]);
  for(var j = i; j < (arr.length)-1; j++){
    console.log('0');
  }
  console.log('\n');
}
//End Soal Algoritma Pertama

//Start Soal Algoritma Kedua
function splitArray(arr, len) {
  var data = [], i = 0, n = arr.length;
  while (i < n) {
    data.push(arr.slice(i, i += len));
  }
  return data;
}

var numbers=[1,2,33,44,55,33,44,22,44,33,2,77,66,1,2,3,4,5,6,7,89,3,3,8,9,75,4,3,2,2,1,3];
var numbersPair=splitArray(numbers,11);
var sumData = [0,0,0];
var avgData = [0,0,0];

for(var x = 0; x < numbersPair.length; x++){
  numbersPair[x].sort(function(a, b){
    return a - b;
  });
  for(var z = 0; z < numbersPair[x].length; z++){
    sumData[x] = sumData[x] + numbersPair[x][z];
  }
  avgData[x] = sumData[x]/numbersPair[x].length;
  //Start log
  console.log(numbersPair[x], sumData[x], avgData[x], 
  Math.max(...numbersPair[x]), Math.min(...numbersPair[x]));
  //End log
}
//End Soal Algoritma Kedua

//Start Soal Algoritma Ketiga
var str = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras interdum mi eu magna fermentum, vel luctus tellus semper. Nunc dignissim eleifend ipsum, nec viverra mauris pellentesque non. Fusce auctor ex id mauris egestas, quis luctus nunc pharetra. Sed in dignissim nisi. Aliquam sed tempor urna, nec aliquam mi. Aenean eu feugiat lacus, vel dictum eros. Nulla condimentum porttitor aliquet. Vestibulum vehicula elit non arcu auctor maximus. Quisque est eros, maximus nec diam faucibus, mollis odio."

let counter = str => {
  return str.split('').reduce((total, letter) => {
    total[letter] ? total[letter]++ : total[letter] = 1;
    return total;
  }, {});
};
console.log(counter(str))

var resultString = ""
var lettersx = /^[A-Za-z]+$/;
for(var n=0;n<str.length;n++)
{
  if(/^[a-zA-Z]*$/.test(str.charAt(n))){
    var curr = String.fromCharCode(str.charCodeAt(n)+5);
    resultString = resultString + curr;
  } else {
    resultString = resultString + " ";
  }
}

console.log(resultString);
//End Soal Algoritma Ketiga

//Start Soal Algoritma Keempat
var randNum = Math.floor(Math.random() * 100);
console.log(randNum);
//End Soal Algoritma Keempat

const styles = StyleSheet.create({
  container:{padding: 20},
  textTitle:{textAlign:'center'},
});