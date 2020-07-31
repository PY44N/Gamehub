function clock() {
  var d = new Date();
  var day = d.getDate();
  var year = d.getFullYear();
  var month = d.getMonth() + 1;
  if (day < 10) {
    day = "0" + day;
  }
  if (year => 2000) {
    year = year - 2000;
  }
  date.innerHTML = month + "-" + day + "-" + year;

  var t = new Date;
  var hour = t.getHours();
  var minute = t.getMinutes();
  var am = "AM"
  if (hour > 12) {
    am = "PM"
  }
  if (hour > 12) {
    hour = hour - 12;
  }
  if (minute < 10) {
    minute = "0" + minute;
  }
  time.innerHTML = hour + ":" + minute + " " + am;
  setInterval(clock, 750)
}
clock();
