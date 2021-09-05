let string = (prompt('Enter a string for check palindrome or not : '));

let strReverse = string.split("").reverse().join("");

if (string === strReverse) {
  console.log(`${string}`, "=", "It is a palindrome");
} else {
  console.log(`${string}`,"=", "It is NOT a palindrome");
}
