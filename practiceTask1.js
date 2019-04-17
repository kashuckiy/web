function task1() {
	var s, p;
	var a = prompt();
	var	b = prompt();
	s = a * b;
	p = +a + +b;
	alert("Площа = " + s);
	alert("Периметр = " + p);
}
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
function task3(){
	var sum, ser;
	var a = prompt();
	var b = prompt();
	var c = prompt();
	sum = +a + +b + +c;
	ser = sum / 3;
	document.write("(" + a + "+" + b + "+" + c + ") / 3" + "=" + ser.tofixed(3)).getElementById('window');
}
function task4(){
	var num = prompt();
	var prev, next;
	prev = num--;
	next = num ++;
	document.write("The next number for the number" + num + "is" + next);
	document.write("The previous number for the number" + num "is" + prev);
}
function task5(){
	var a = prompt();
	var b = prompt();
	var temp = a;
	a = b;
	b = temp;
	document.write("a = " + a);
	document.write("b = " + b);
}