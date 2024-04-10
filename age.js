let date1 = new Date("09/27/2009");
let date2;


let time;

let days;
let age;


document.addEventListener("DOMContentLoaded", function (event) {
	setInterval(function () {
		date2 = new Date();
		time = date2.getTime() - date1.getTime();
		days = time / (1000 * 3600 * 24);
		age = (days / 365.25).toString();
		while (age.length < 18) {
			age = age + '0';
		}
		document.getElementById("age").innerHTML = age;
	}, 1)
});
