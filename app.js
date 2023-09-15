// chapter 12 to 13 
// Q NO 01:Write a program that takes a character (number or string) in a variable & checks whether the given input is a number, uppercase letter or lower case letter. (Hint: ASCII codes:- A=65, Z=90, a=97, z=122).

//ANS # 01 :

// var char=prompt("Enter value")
// if (char >= "A" && char <="Z"){
//    alert(char + " is uppercase")
// }
// else if (char >= "a" && char <= "z") {
//    alert(char + " is Lowercase");
// }
// else if (char >= "0" && char <= "9") {
//    alert(char + " is a Number");
// }
// else{
//    alert("The character is neither number noralphabet")
// } 

// Q NO 02: Write a JavaScript program that accept two integers and display the larger. Also show if the two integers are equal.

//ANS # 02 :

// var a = parseInt(prompt("value"));
// var num = Number.isInteger(a)
// alert(num);

// Q NO 03: Write a program that takes input a number from user & state whether the number is positive, negative or zero.

//ANS # 03 :

// var number = parseInt(prompt("Enter a number: "));
// if (number > 0) {
//     alert("The number is positive");
// }
// else if (number == 0) {
//   alert("The number is zero");
// }
// else {
//      alert("The number is negative");
// }                                         

// Q NO 04:Write a program that takes a character (i.e. string of length 1) and returns true if it is a vowel, false otherwise.

//ANS # 04 :

//const inputCharacter = prompt("Enter a single character:").toLowerCase();

//const isVowel = inputCharacter === "a" || inputCharacter === "e" || inputCharacter === "i" || inputCharacter === "o" || inputCharacter === "u";

//if (isVowel) {
//  console.log(inputCharacter + " is a vowel.");
//} else {
 // console.log(inputCharacter + " is not a vowel.");
//}


// Q NO 05:Write a program that 
//a. Store correct password in a JS variable.
//b. Asks user to enter his/her password
//c. Validate the two passwords:
//i. Check if user has entered password. If not, then give message “ Please enter your password”
//ii. Check if both passwords are same. If they are same, show message “Correct! The password you entered matches the original password”. Show “Incorrect password” otherwise.

//ANS # 05
// var usarInput = prompt("Enter your password:")
// var pasword = 123456
// if (usarInput == pasword){
//       alert("Correct Password");
// }
// // console.log(usarInput);
//  else if (usarInput == "" || !usarInput.trim())
// {alert("enter your pasword")}
// else{
//       alert("rong password!")
// }

 // Q NO 06:This if/else statement does not work. Try to fix it:
//var greeting;
//var hour = 13;
//if (hour < 18) {
//greeting = "Good day";
//else
//greeting = "Good evening";
//}

//ANS # 06 
//    var greeting;

 // var usarInput = prompt("hour:");
// var hour = 13;
// if (hour < 18) {
//   alert ("Good day");
// } else {
//   alert ("Good evening");
// }
                                            
 // Q NO 07:Write a program that takes time as input from user in 24 hours clock format like: 1900 = 7pm. Implement the following case using if, else & else if statements

//ANS # 07 :

 // Prompt the user for input
// var userInput = prompt("Enter the time in 24-hour format (e.g., 1900):");
// var time = parseInt(userInput);

// if (isNaN(time)) {
//   alert("Please enter a valid time.");
// } else {
//   if (time >= 0 && time < 1200) {
//     alert("Good morning!");
//   } else if (time >= 1200 && time < 1700) {
//     alert("Good afternoon!");
//   } else if (time >= 1700 && time < 2100) {
//     alert("Good evening!");
//   } else if (time >= 2100 && time <= 2359) {
//     alert("Good night!");
//   } else {
//     alert("Invalid time input. Please enter a time between 0000 and 2359.");
//   }
// }
                      
            // chapter no 14 and 16
 
// Q NO 1: Declare an empty array using JS literal notation to store student names in future.

//ANS # 01 :

// var studentNames = [];

 //  Q NO 02:Declare an empty array using JS object notation to store student names in future.

//ANS # 02 :

// var studentList = {
//   names: []
// };

 //Q NO 03:Declare and initialize a strings array.

//ANS # 03 :

// var fruits = ["apple", "banana", "cherry", "date"];


 // Q NO 04:Declare and initialize a numbers array.

 //ANS # 04 :

// var numbers = [1, 2, 3, 4, 5];

 //Q NO 05:Declare and initialize a boolean array.
                              
//ANS # 05 :
                              
// var fruits = [true, false, true, false];

//Q NO 06:Declare and initialize a mixed array.

//ANS # 06 :

// var mixedArray = ["apple", 123, true, "banana", false];

 //Q NO 07:Declare and Initialize an array and store available education qualifications in Pakistan (e.g. SSC, HSC, BCS, BS, BCOM, MS, M. Phil., PhD). Show the listed qualifications in your browser like:

 //ANS # 07 :

// var listedQualification = [" ,1) SSC </br>","2) HSC </br>" ," 3) BSC </br>"," 4) BS </br>"," 5) BCOM </br>"," 6) MS </br>"," 7) M.PHIL </br>"," 8) PHD </br>"] 
// document.write("<h1>Qualification</h1>")     
// document.write(listedQualification )

 //Q NO 08:Write a program to store 3 student names in an array.Take
//another array to store score of these three students. 
//Assume that total marks are 500 for each student, display 
//the scores & percentages of students like:

//ANS # 08 :

// var studentNames = ["John", "Alice", "Bob"];

// var studentScores = [420, 380, 450];

// var totalMarks = 500;

// var percentages = [];
// for (let i = 0; i < studentNames.length; i++) {
//     let percentage = (studentScores[i] / totalMarks) * 100;
//     percentages.push(percentage.toFixed(2)); 
// }

// for (let i = 0; i < studentNames.length; i++) {
//    document.write(`Student: ${studentNames[i]}`);
//    document.write(`Score: ${studentScores[i]}`);
//    document.write(`Percentage: ${percentages[i]}%`);
//    document.write("------------");
// }

//Q NO 09 : Initialize an array with color names. Display the array elements in your browser.
//a. Ask the user what color he/she wants to add to the
//beginning & add that color to the beginning of the array.
//Display the updated array in your browser.
//b. Ask the user what color he/she wants to add to the end 
//& add that color to the end of the array. Display the 
//updated array in your browser.
//c. Add two more color to the beginning of the array. 
//Display the updated array in your browser.
//d. Delete the first color in the array. Display the updated
//array in your browser.
//e. Delete the last color in the array. Display the updated
//array in your browser.
//f. Ask the user at which index he/she wants to add a color 
//& color name. Then add the color to desired 
//position/index. . Display the updated array in your browser.
//g. Ask the user at which index he/she wants to delete
//color(s) & how many colors he/she wants to delete. Then
//Arrays | JAVASCRIPT
//Page 3 of 6
//remove the same number of color(s) from user-defined
//position/index. . Display the updated array in your
//browser.

//ANS # 09 :

// Initialize an array with color names
//const colorArray = ["Red", "Green", "Blue", "Yellow"];

// Display the original array
//document.write("Original Array: " + colorArray + "<br>");

// a. Add a color to the beginning of the array
//const addColorBeginning = prompt("Enter a color to add to the beginning:");
//colorArray.unshift(addColorBeginning);

// Display the updated array after adding to the beginning
//document.write("Array after adding to the beginning: " + colorArray + "<br>");

// b. Add a color to the end of the array
//const addColorEnd = prompt("Enter a color to add to the end:");
//colorArray.push(addColorEnd);

// Display the updated array after adding to the end
//document.write("Array after adding to the end: " + colorArray + "<br>");

// c. Add two more colors to the beginning of the array
//colorArray.unshift("Orange", "Purple");

// Display the updated array after adding to the beginning
//document.write("Array after adding two more to the beginning: " + colorArray + "<br>");

// d. Delete the first color in the array
//colorArray.shift();

// Display the updated array after deleting the first color
//document.write("Array after deleting the first color: " + colorArray + "<br>");

// e. Delete the last color in the array
//colorArray.pop();

// Display the updated array after deleting the last color
//document.write("Array after deleting the last color: " + colorArray + "<br>");

// f. Add a color at a specific index
//const addColorIndex = parseInt(prompt("Enter the index where you want to add a color:"));
//const addColorName = prompt("Enter the color name to add at that index:");
//colorArray.splice(addColorIndex, 0, addColorName);

// Display the updated array after adding at the specified index
//document.write("Array after adding at index " + addColorIndex + ": " + colorArray + "<br>");

// g. Delete colors at a specific index
//const deleteIndex = parseInt(prompt("Enter the index from which you want to delete colors:"));
//const deleteCount = parseInt(prompt("Enter the number of colors to delete:"));
//colorArray.splice(deleteIndex, deleteCount);

// Display the updated array after deleting at the specified index
//document.write("Array after deleting at index " + deleteIndex + ": " + colorArray + "<br>");



//Q NO 10: Write a program to store student scores in an array & sort the array in ascending order using Array’s sort method

 //ANS # 10:

 // const studentScores = [85, 92, 78, 95, 88, 70, 89];

//studentScores.sort((a, b) => a - b);

//console.log("Sorted Student Scores (Ascending):", studentScores);

//Q NO 11: Write a program to initialize an array with city names. 
//Copy 3 array elements from cities array to selectedCities 
//array.

//ANS # 11:

//const cities = ["Karachi", "Lahore","Islamabad", "Quetta","Peshawar"];

//const selectedCities = [];

//selectedCities.push(cities[0]);
//selectedCities.push(cities[1]);
//selectedCities.push(cities[2]);

//console.log("Selected Cities:", selectedCities);

//Q NO 12: Write a program to create a single string from the 
//below mentioned array:
//var arr = [“This ”, “ is ”, “ my ”, “ cat”];
//(Use array’s join method)

//ANS # 12:

//var arr = ["This ", " is ", " my ", " cat"];
//var singleString = arr.join('');
//console.log(singleString);

//13. Create a new array. Store values one by one in such a way
//that you can access the values in the order in which they 
//were stored. (FIFO-First In First Out)

//ANS # 13:

//const fifoQueue = [];

//fifoQueue.push("Value 1");
//fifoQueue.push("Value 2");
//fifoQueue.push("Value 3");

//const firstValue = fifoQueue.shift(); 
//const secondValue = fifoQueue.shift();
//const thirdValue = fifoQueue.shift(); 

//console.log("First Value:", firstValue);
//console.log("Second Value:", secondValue);
//console.log("Third Value:", thirdValue);

//14. Create a new array. Store values one by one in such a way
//that you can access the values in reverse order. (Last In-First Out)

//ANS # 14:

//const lifoStack = [];

//lifoStack.push("Value 1");
//lifoStack.push("Value 2");
//lifoStack.push("Value 3");

//const thirdValue = lifoStack.pop(); 
//const secondValue = lifoStack.pop();
//const firstValue = lifoStack.pop(); 

//console.log("Third Value:", thirdValue);
//console.log("Second Value:", secondValue);
//console.log("First Value:", firstValue);

//15. Write a program to store phone manufacturers (Apple,
//Samsung, Motorola, Nokia, Sony & Haier) in an array. 
//Display the following dropdown/select menu in your 
//browser using document.write() method:

//ANS # 15 :

//const manufacturers = ["Apple", "Samsung", "Motorola", "Nokia", "Sony", "Haier"];

//document.write('<select id="manufacturerSelect">');

//for (let i = 0; i < manufacturers.length; i++) {
//  document.write('<option value="' + manufacturers[i] + '">' + manufacturers[i] + '</option>');}

//document.write('</select>');

//document.write('<br>');
//document.write('<button onclick="getSelectedManufacturer()">Get Selected Manufacturer</button>');

//document.write('<script>');
//document.write('function getSelectedManufacturer() {');
//document.write('  var select = document.getElementById("manufacturerSelect");');
//document.write('  var selectedManufacturer = select.options[select.selectedIndex].value;');
//document.write('  alert("Selected Manufacturer: " + selectedManufacturer);');
//document.write('}');
//document.write('</script>');



