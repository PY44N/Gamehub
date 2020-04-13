// command trains.push(new Train());
// random console.log(Math.round(Math.random() * 10))
var i = 1;
var spawn;
var randomNumber = 6; // spawns train under number
wait(1000);
spawnTrain()
function spawnTrain() {
spawn = Math.round(Math.random() * 10)
console.log(spawn)
if (spawn < randomNumber) {
  trains.push(new Train());
  console.log("spawned train")
}
else if (spawn > randomNumber) {
  console.log("didn't spawn train")
}
spawn = Math.round(Math.random() * 10)
console.log(spawn)
if (spawn < randomNumber) {
  trains.push(new Train());
  console.log("spawned train")
}
else if (spawn > randomNumber) {
  console.log("didn't spawn train")
}
spawn = Math.round(Math.random() * 10)
console.log(spawn)
if (spawn < randomNumber) {
  trains.push(new Train());
  console.log("spawned train")
}
else if (spawn > randomNumber) {
  console.log("didn't spawn train")
}
spawnTrain()
}
function nothing() {
  // does nothing
}
function wait(ms)
{
var d = new Date();
var d2 = null;
do { d2 = new Date(); }
while(d2-d < ms);
}
