//string we're looping over
var str = "hello";
//first character is at index 0
var count = 0;

while(count < str.length) {
    console.log(str[count]);
    count++;
}
//First exercise done! printed all numbers between -10 and 19
var count = -10;

while(count <= 19) {
    console.log(count);
    count++;
}
//Second exercise, print all even numbers between 10-40
var num = 10;

while(num <= 40) {
        console.log(num);
    num+=2;
}
//Third exercise, print all odd numbers between 300-333
var num = 300;

while(num <= 333) {
    if(num % 2 !== 0){
        console.log(num);
    }
    num+=1;
}
//Final exercise, print all numbers divisible by 5 AND 3 between 5 and 50
var num = 5;

while(num <= 50) {
    if(num % 5 === 0 && num % 3 === 0){
        console.log(num);
    }
    num+=1;
}