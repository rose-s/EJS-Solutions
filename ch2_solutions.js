/*
Looping a triangle

Write a loop that makes seven calls to console.log to output the following triangle:

#
##
###
####
#####
######
#######
It may be useful to know that you can find the length of a string by writing .length after it.

var abc = "abc";
console.log(abc.length);
// → 3
Most exercises contain a piece of code that you can modify to solve the exercise. Remember that you can click code blocks to edit them.

*/

//first solution:
var tri = "#######"
for (var i = 0; i < tri.length + 1; i++)
console.log(tri.slice(tri.length - i))

//second solution:
var tri = '';
while (tri.length <= 7) {
	tri += '#';
	console.log (tri);
}


/*
FizzBuzz

Write a program that uses console.log to print all the numbers from 1 to 100, with two exceptions. For numbers divisible by 3, print "Fizz" instead of the number, and for numbers divisible by 5 (and not 3), print "Buzz" instead.

When you have that working, modify your program to print "FizzBuzz", for numbers that are divisible by both 3 and 5 (and still print "Fizz" or "Buzz" for numbers divisible by only one of those).

(This is actually an interview question that has been claimed to weed out a significant percentage of programmer candidates. So if you solved it, you’re now allowed to feel good about yourself.)
*/



var string = '';
for (var i = 1; i <=100; i++){
	if (i % 15 === 0) {
		string += "FizzBuzz "; 
	} else if (i % 5 === 0) {
		string += "Buzz ";
	} else if (i % 3 === 0) {
		string += "Fizz ";
	} else {	
		string += i + " ";}
}
console.log(string);


/*
Chess board

Write a program that creates a string that represents an 8×8 grid, using newline characters to separate lines. At each position of the grid there is either a space or a “#” character. The characters should form a chess board.

Passing this string to console.log should show something like this:

 # # # #
# # # #
 # # # #
# # # #
 # # # #
# # # #
 # # # #
# # # #
When you have a program that generates this pattern, define a variable size = 8 and change the program so that it works for any size, outputting a grid of the given width and height.
*/

//first solution
var size = 8;
var string = '';

for (var i = 1; i <= size; i++) {
	if (i % 2 === 0) {
		string += "# # # #\n"
} else		{
	string += " # # # #\n"
}
} 

console.log(string);

//second solution
var string ='';
var size = 8;
for (var y = 1; y <= size; y++) {
  for (var x = 1; x <= size; x++) {
    if ((x+y) % 2 === 0)
      string += " ";
    else
      string += "#";
  }
  string += "\n";
}
console.log(string);






































