// 99 bottles of beer on the wall, 99 bottles of beer.
// Take one down and pass it around, 98 bottles of beer on the wall.
//  ....
// 1 bottle of beer on the wall, 1 bottle of beer.
// Go to the store and buy some more, 99 bottles of beer on the wall.



// 90-70
// var a=90
// while (a>69) {
//     console.log(a)
// }



var msg = "";
var a = "";

for (a = 99; a > 0; a--) {
    if (a > 2) {
        msg += a + " bottles of beer on the wall, " + a + " bottles of beer. <br> Take one down and pass it around," + (a - 1) + " bottles of beer on the wall.<br><br>";
    } else if (a == 2) {
        msg += a + " bottles of beer on the wall, " + a + " bottles of beer. <br> Take one down and pass it around," + (a - 1) + " bottle of beer on the wall.<br><br>";
    } else {
        msg += a + " bottles of beer on the wall, " + a + " bottles of beer. <br> Go to the store and buy some more, 99 bottles of beer on the wall.";
    }
}
document.write(msg);
console.log(msg);



//     if (a > 2) {
//         msg1 += a + " bottles of beer on the wall," + a + " bottles of beer. Take one down and pass it around," + a - 1 + " bottles of beer on the wall."
//     } else if (a == 2) {
//         msg2 += a + " bottles of beer on the wall," + a + " bottles of beer. Take one down and pass it around," + a - 1 + " bottle of beer on the wall."
//     } else {
//         msg3 += a + " bottles of beer on the wall," + (a) + " bottles of beer. Go to the store and buy some more, 99 bottles of beer on the wall."
//     }
// }


// console.log(msg1)
// console.log(msg2)
// console.log(msg3)

//   return msg2;
// } 
// else {
//     return msg3;
// }
//