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
	window.innerHTML = result1 + "<br>" + result2 + "<br>" + result3; 
}
function task3(){
	var sum, ser;
	var a = prompt();
	var b = prompt();
	var c = prompt();
	sum = +a + +b + +c;
	ser = sum / 3;
	var serfix = ser.toFixed(3);
	var window = document.getElementById('window');
	var result = "(" + a + "+" + b + "+" + c + ") / 3" + "=" + serfix;
	window.innerHTML = result;
}
function task4(){
	var num = prompt();
	var prev, next;
	prev = +num - 1;
	next = +num + 1;
	var window = document.getElementById('window');
	var result1 = "The next number for the number " + num + " is " + next;
	var result2 = "The previous number for the number " + num + " is " + prev;
	window.innerHTML = result1 + "<br>" + result2;
}
function task5(){
	var a = prompt();
	var b = prompt();
	var temp = a;
	a = b;
	b = temp;
	var window = document.getElementById('window');
	var result1 = "a = " + a;
	var result2 = "b = " + b;
	window.innerHTML = result1 + "<br>" + result2;
}
function task6(){
	var a = prompt();
	var b = prompt();
	var c = prompt();
	var temp = a;
	a = c;
	c = b;
	b = temp;
	var window = document.getElementById('window');
	var result1 = "a = " + a;
	var result2 = "b = " + b;
	var result3 = "c = " + c;
	window.innerHTML = result1 + '<br>' + result2 + '<br>' + result3;
}
function task7(){
	var byte = prompt();
	var kbyte = byte / 1024;
	var window = document.getElementById('window');
	result = ~~kbyte + " kByte";
	window.innerHTML = result;
}
function task8(){
	var a = prompt();
	var b = Math.floor(a / 100); 
	var c = a - b * 100; 
	var d = Math.floor(c / 10); 
	var e = c - d * 10; 
	var result1 = b + d + e; 
	var result2 = b * d * e;
	var window = document.getElementById('window');
	window.innerHTML = "Сума = " + result1 + '<br>' + "Добуток = " + result2;
}
function task9(){
	var data = prompt();
	var hours, minutes;
	hours = data / 60;
	minutes = data % 60;
	while( hours > 24){
		hours = hours - 24;
	}
	var window = document.getElementById('window');
	window.innerHTML = ~~hours + " : " + minutes;
}
function task10(){
	var n = prompt();
	var sec, min, hours;
	hours = n / 3600;
	min = (n % 3600) / 60;
	sec = (n % 3600) % 60;
	var window = document.getElementById('window');
	window.innerHTML = ~~hours + " : " + ~~min + " : " + sec; 
}
function task11(){
	var year = prompt();
	var result = ((year % 4 == 0) && (year % 100 != 0)) || (year % 400 == 0);
	var window = document.getElementById('window');
	window.innerHTML = result;
}