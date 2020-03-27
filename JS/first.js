console.log( 'Hello World');

var a = 7,b = 3;
var x = a + b;
console.log('x =', x);

var a = 8, b = 4;
var y = a - b;
console.log('y =', y)

var a = 10, b = 6, c = 2;
var d = (a + b) * c;
console.log('d=', d);

var a = 15, b = 3, c = 4;
var z = (a - b) / c;
console.log('z=', z);
if (z = 3){
    console.log("Yes, you're right");
    
}
else {
console.log("Wrong, try again");
}
             /* Task #1 */
function generateFibonacciSequence(n){
    var fibo = [1, 1];
    for (var i = 2; i < n; i++) {
        fibo [ i ] = fibo[i - 1] + fibo[i - 2];
    }
    return fibo;
}
console.log( generateFibonacciSequence(5));
console.log( generateFibonacciSequence(10));

       

             /* Task #2 */


function countWordsInASentence(sentence){
    return sentence.split(' ').length;
}
console.log(countWordsInASentence("Have a nice day"))

     /* Task #2(a)*/

function countWordsInASentence(sentence){
    var i, count = 0;
    for( i = 0; i < sentence.length; i++) {
        count++;
    }
}
return count;
console.log(countWordsInAString('Have a nice day'));

/* Task #3*/
  
function shuffleArray(cars) { 
         return 0.5 - Math.random ()};
     

console.log( shuffleArray (Honda, Skoda, Porsche, Audi, Tesla, Renault);






function countOccurences(String str, String word){
    String a [] = str.split (" ");
    var count = 0;
    for (var i = 0; i < a.length; i++){
        if (word.equals(a[i]))
        count++;
    }
    return count
}
{
 String str = "Kyiv is a capital of Ukraine Kyiv is a big city";
 String word = "Kyiv";
}

console.log(countOccurences(str, word));



function Circle (radius)
 {
    this.radius = radius;
    this.area = function ()
    {
    return Math.PI * this.radius * this.radius; 
};
this.perimeter = function ()
{
    return 2*this.Math.PI*this.radius;
};
var c = new circle (3);
console.log( "Area = ", c.area().toFixed(2));
console.log("Perimeter = ", c.perimeter().toFixed(2));





function countOccurences(string, word){
    return string.split(word).length - 1;
}
var text = "Kyiv is A capital of Ukraine Kyiv is A big city";
console.log(countOccurences(text, "Kyiv"));
console.log(countOccurences(text, "is"));
console.log(countOccurences(text, "A"));
console.log(countOccurences(text, "capital"));
console.log(countOccurences(text, "Ukraine"));
console.log(countOccurences(text, "big"));
