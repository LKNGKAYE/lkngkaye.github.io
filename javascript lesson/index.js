// start writing java script//
// alert(welcome to javascript lesson)



var student1 = "chris"
var student2 = "edmund"
var welcome_msg = ("hai, lets do JS together " + student1 + ", " + student2)
console.log(welcome_msg)

/*
1. create a fucntion with takes two inputs (names)
2. Inside that function, concatenante those two inputs using + operator
2. return the resulted_string

4.call that function wiht u and yr friends names
5. print the returned results. 
-----------------------
6. Advance optional
It shd look like this
if i pass Bala and Ken as inputs to the function, it shd return "Bala Bala/ Ken Ken"


*/


function joinNames(name1, name2) {
    var joined_string = name1 + " " + name2
    return joined_string
}

var name1 = "edmund"
var name2 = "Kong"
var nameString = joinNames(name1, name2)

console.log(nameString)


// function processInput() {
//     var input1 = document.getElementById("input1").value
//     var input2 = document.getElementById("input2").value

//     var num1 = parseInt(input1)
//     var num2 = parseInt(input2)

//     var result = add(num1, num2)

//     // UPDATE THE HTML HEADER
//     document.getElementById("result_header").innerHTML = result
// }

// NEW EXERCISE

// 1.0  Given the following variables
var days = 5;
var fullTime = false;
// 1.1  Write an if statement to determine if lesson is full time.
//      Part time lesson consists of 8 days.
// 1.2  To create an if statement, write:
//      if(days < 8){ ...code to fill...  }
// 1.3  To changee fullTime to true, in the if statement within the { curly braces } write:
//      fullTime = true;
// 1.4  Print the value of fullTime in the console by writing after 1.2:
//      console.log(fullTime);
// WRITE THE CODE FOR STEP 1 BELOW THIS LINE:

if (days<8) {
    fullTime = true
    }
console.log(fullTime)