var t = document.getElementsByTagName('button');
var b = document.getElementsByClassName("btn");
for (var b = 0; b < t.length; b++) {
	if (b==0) {
		t[0].innerHTML = 'hello1';
		console.log(t[0].innerText);
	}
	else if (b==1) {
		t[1].innerHTML = 'hello2';
		console.log(t[1].innerText);
	}
	else if (b==2) {
		t[2].innerHTML = 'hello3';
		console.log(t[2].innerText);
	}
	else { 
		t[3].innerHTML = 'hello4';
		console.log(t[3].innerText);
	}
}
