function task1() {
	var s, p;
	var a = prompt();
	var	b = prompt();
	s = a * b;
	p = +a + +b;
	alert("Площа = " + s);
	alert("Периметр = " + p);
}
//\\//\\//\\//\\//\\//\\//\\//\\//\\//\//\\
function task2() {
	var sum, dob, ser;
	var a = prompt();
	var b = prompt();
	var c = prompt();
	sum = +a + +b + +c;
	dob = a * b * c;
	ser = sum / 3;
	document.write(a + "+" + b + "+" + c + "=" + sum );
	document.write(a + "*" + b + "*" + c + "=" + dob );
	document.write("(" + a + "+" + b + "+" + c + ") / 3" + "=" + ser);
}
task2();
