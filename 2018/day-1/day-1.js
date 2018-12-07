// current;
// currentPos;
// currentNeg;
// result;

// read in data using fs.readFile
// place data into an array
// sum all the values

const fs = require("fs");
let frequencies = [];
let netChange = 0;

//async
const data = fs.readFileSync("data.txt", "utf8");

frequencies = data
  .toString()
  .split("\n")
  .map(Number);

netChange = frequencies.reduce((a, b) => a + b, 0);
console.log(`net change = ${netChange}`);

//async
// fs.readFile("data.txt", "utf8", function(err, data) {
//   if (err) {
//     throw err;
//   }
//   frequencies = data.toString().split("\n");
//   //   console.log(frequencies);
//   processData(); // callback
// });

//const processData = () => {
//   let netChange;
//   //console.log(frequencies);
//   console.log("read all data");
// };
