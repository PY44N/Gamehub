//Variables being declared
var score = 0;
var clickLevel = 1;
var upgradeCost = 50;
var coderCost = 1000;
var superUpgradeCost = 750;
var coders = 0;
var coderLevel = 1;
var coderUpgradeCost = 1250;
var rebirths = 1;
var rebirthCost = 1000000;

function addScore() {
  score = score + clickLevel * rebirths;
  refreshHTML()
}

function upgradeClick() {
  if (score >= upgradeCost) {
    clickLevel++
    score = score - upgradeCost
    upgradeCost = upgradeCost +10;
    refreshHTML()
  }
}

function superUpgrade() {
  if (score >= superUpgradeCost) {
    clickLevel = clickLevel +10;
    score = score - superUpgradeCost
    superUpgradeCost = superUpgradeCost +250;
    refreshHTML()
  }
}

function buyClicker() {
  if (score >= coderCost) {
    coders++
    score = score - coderCost
    coderCost = coderCost +200;
    refreshHTML()
    gameLoop()
  }
}

/*function buyClickerAll() {
  while (score >= coderCost) {
    buyClicker()
  }
}*/

function upgradeCoder() {
  if (score >= coderUpgradeCost) {
    coderLevel++
    score = score - coderUpgradeCost
    coderUpgradeCost = coderUpgradeCost +300;
    refreshHTML()
  }
}

/*function upgradeCoderAll() {
  while (score >= coderUpgradeCost) {
    upgradeCoder()
  }
}*/

function rebirth() {
  if (score >= rebirthCost) {
    rebirths++
    rebirthCost = 100000000;
    score = 0;
    clickLevel = 1;
    upgradeCost = 1000;
    coderCost = 3000;
    superUpgradeCost = 5000;
    coders = 0;
    coderLevel = 1;
    coderUpgradeCost = 5000;
    refreshHTML()
  }
}

function refreshHTML() {
  document.getElementById("linescoded").innerHTML = 
  "Lines Coded:" + score; 
  document.getElementById("level").innerHTML = 
  "Level:" + clickLevel;
  document.getElementById("coderCost").innerHTML = 
  "Cost to Buy Coders:" + coderCost;
  document.getElementById("coders").innerHTML = 
  "Coders:" + coders;
  document.getElementById("coderLevel").innerHTML = 
  "Coder Level:" + coderLevel;
  document.getElementById("coderUpgradeCost").innerHTML = "Cost to Upgrade Coders:" + coderUpgradeCost;
  document.getElementById("upgradeCost").innerHTML = 
  "Cost to Upgrade:" + upgradeCost;
  document.getElementById("superUpgradeCost").innerHTML = "Cost to Super Upgrade:" + superUpgradeCost;
  document.getElementById("rebirthLevel").innerHTML =  "Rebirths:" + rebirths;
  document.getElementById("rebirthCost").innerHTML = "Rebirth Cost:" + rebirthCost;
}

function gameLoop() {
  score = score + coders * coderLevel * rebirths;
  refreshHTML()
  setTimeout(gameLoop, 1000)
}