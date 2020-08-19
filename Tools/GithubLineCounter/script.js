'use strict';

function countGithub() {
    var repo = document.getElementById("repo").value
    fetch('https://api.github.com/repos/'+repo+'/stats/contributors')
        .then(response => response.json())
        .then(contributors => contributors
            .map(contributor => contributor.weeks
            .   reduce((lineCount, week) => lineCount + week.a - week.d, 0)))
    .then(lineCounts => lineCounts.reduce((lineTotal, lineCount) => lineTotal + lineCount))
    .then(lines => document.getElementById("line").innerHTML = "Lines: " + lines);
}