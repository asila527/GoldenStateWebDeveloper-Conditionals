// If age is negative, print an error message

let age = Number(prompt("What is your age?"));
if (age < 0) {
    alert("Impossible!");
}

// If age is 21, print "HBD!"

if (age === 21) {
    alert('HBD!!!');
}

// If age is odd, print "Your age is odd, cool!!!"
if (age % 2 !=0) {
    alert("Your age is odd, cool!")
}

// SUPER BONUS: if age is a perfect square, print "perfect square!"

if (age % Math.sqrt(age) === 0) {
    alert("Perfect square!")
}