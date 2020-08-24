function clock() {
  //Date
  var d = new Date();
  var day = d.getDate();
  var year = d.getFullYear();
  var month = d.getMonth() + 1;
  var weekday = d.getDay();
  const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  if (day < 10) {
    day = `0${day}`;
  }
  //Needs to be changed to be less jank
  if (year => 2000) {
    year = year - 2000;
  }
  //Changes the html element to display the date
  date.innerHTML = `${days[weekday]} ${month}-${day}-${year}`;
  //Time
  var t = new Date;
  var hour = t.getHours();
  var minute = t.getMinutes();
  var second = t.getSeconds();
  var am = "AM"
  if (hour > 12) {
    am = "PM"
  }
  if (hour > 12) {
    hour = hour - 12;
  }
  if (minute < 10) {
    minute = `0${minute}`;
  }
  if (second < 10)
    second = `0${second}`;
  //Changes the html element time to display the time
  time.innerHTML = `${hour}:${minute}:${second} ${am}`;
  //Check to see if the time has changed every 1000 milliseconds / every 1 second
  setInterval(clock, 1);
}
//Calls the clock function
clock();