function drawTriangle(triangleSize) {

   let pattern = "";
   // Your solution goes here
   for (let i = 0; i < triangleSize; i++) {
      for (let j = 0; j <= i; j++) {
         pattern += "* ";
      }
      console.log(pattern + "\n"); //Pattern of * in a line
      pattern = ""; //resetting the pattern value
   }
}

//DEMO USECASE
drawTriangle(4);
/*

*
* *
* * *
* * * *

*/