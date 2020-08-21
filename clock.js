let time = document.getElementById('time');
let date = document.getElementById('date');
const days = ["Sun", "Mon", "Tues", "Wed", "Thurs", "Fri", "Sat"];
var cm;
setInterval(function(){
  showTime()
},0);
var d = new Date();
function showTime() {
  var today = new Date();
  var dd = today.getDate();
  var year = today.getFullYear();
  var month = today.getMonth()+1;
  var day = today.getDay();
  if (dd < 10) {
    dd = '0'+dd;
  }
  
  if (month < 10) {
    month = '0'+month;
  }
  var h = today.getHours();
  var m = today.getMinutes();
  var s = today.getSeconds();
  if (h > 12) {
    cm ="PM"
    h = h -12
  } else {
    cm ="AM"
  }
  if (s < 10) {
    s = '0'+s;
  }
  if (m < 10) {
    m = '0'+m;
  }
  if (h < 10) {
    h = '0'+h;
  }
  time.innerHTML = `${h}:${m}:${s} ${cm}`
  date.innerHTML = `${month}-${dd}-${year} ${days[day]}`
}