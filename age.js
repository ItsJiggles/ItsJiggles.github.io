let date1 = new Date("09/27/2009");
let date2 = new Date();

// Calculating the time difference
// of two dates
let Difference_In_Time =
	date2.getTime() - date1.getTime();

// Calculating the no. of days between
// two dates
let Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24);
let age = Difference_In_Days / 365.25;

document.addEventListener("DOMContentLoaded", function (event) {
	document.getElementById("age").innerHTML = age;
});


// To display the final no. of days (result)
console.log
	("Total number of days between dates:\n" +
		date1.toDateString() + " and " +
		date2.toDateString() +
		" is: " + Difference_In_Days + " days");
