function passWord() {
var testV = 1;
var pass1 = prompt('Please Enter Your Password',' ');
while (testV < 3) {
if (!pass1)
history.go(-1);
if (pass1.toLowerCase() == "purplesheep1010") {
alert('You Got it Right!');
window.location.href='loading.html'
break;
}
testV+=1;
var pass1 =
alert('You got it right!')
window.location.href='blocked.html'
}
if (pass1.toLowerCase()!="password" & testV ==3)
history.go(-1);
return " ";
}
passWord()