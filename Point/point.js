var point1 = { x: 1, y: 1 };
var point2 = point1;
point1.y = 100;
console.log("Here point1 and point2 refer to the same memory address");
console.log("Hence the value assigned to point1.y is reflecting to point2.y also: ", point2.y);
//point 1 and point 2 refer to same address to store pont object.
