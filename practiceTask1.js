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
	var window = document.getElementById('window');
	result1 = a + "+" + b + "+" + c + "=" + sum ;
	result2 = a + "*" + b + "*" + c + "=" + dob ;
	result3 = "(" + a + "+" + b + "+" + c + ") / 3" + "=" + ser;
	window.innerHTML = result1 + '<br>' + result2 + '<br>' + result3; 
}
function task3(){
	var sum, ser;
	var a = prompt();
	var b = prompt();
	var c = prompt();
	sum = +a + +b + +c;
	ser = sum / 3;
	serfix = ser.toFixed(3);
	var window = document.getElementById('window');
	var result = "(" + a + "+" + b + "+" + c + ") / 3" + "=" + serfix;
	window.innerHTML = result;
}
function task4(){
	var num = prompt();
	var prev, next;
	prev = num--;
	next = num ++;
	document.write("The next number for the number" + num + "is" + next);
	document.write("The previous number for the number" + num + "is" + prev);
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