let numbers = [1, 2, 3];
for (let num of numbers) {
    console.log(num);
}

/* Generates:
var numbers = [1, 2, 3];
for (var _i = 0; _i < numbers.length; _i++) {
  var num = numbers[_i];
  console.log(num);
}
 */
