var HeroNum

function Random(max) {
    return Math.floor(Math.random() * Math.floor(max) + 1);
}

function GenTank() {
    HeroNum = Random(8)

    if (HeroNum == 1) {
        return "D.VA"
    }
    if (HeroNum == 2) {
        return "ORISA"
    }
    if (HeroNum == 3) {
        return "REINHARDT"
    }
    if (HeroNum == 4) {
        return "ROADHOG"
    }
    if (HeroNum == 5) {
        return "SIGMA"
    }
    if (HeroNum == 6) {
        return "WINSTON"
    }
    if (HeroNum == 7) {
        return "WRECKING BALL"
    }
    if (HeroNum == 8) {
        return "ZARYA"
    }

    return "ERROR"
}

function GenDamage() {
    HeroNum = Random(17)

    if (HeroNum == 1) {
        return "ASHE"
    }
    if (HeroNum == 2) {
        return "BASTION"
    }
    if (HeroNum == 3) {
        return "DOOMFIST"
    }
    if (HeroNum == 4) {
        return "ECHO"
    }
    if (HeroNum == 5) {
        return "GENJI"
    }
    if (HeroNum == 6) {
        return "HANZO"
    }
    if (HeroNum == 7) {
        return "JUNKRAT"
    }
    if (HeroNum == 8) {
        return "MCCREE"
    }
    if (HeroNum == 9) {
        return "MEI"
    }
    if (HeroNum == 10) {
        return "PHARAH"
    }
    if (HeroNum == 11) {
        return "REAPER"
    }
    if (HeroNum == 12) {
        return "SOLDIER: 76"
    }
    if (HeroNum == 13) {
        return "SOMBRA"
    }
    if (HeroNum == 14) {
        return "SYMMETRA"
    }
    if (HeroNum == 15) {
        return "TORBJÖRN"
    }
    if (HeroNum == 16) {
        return "TRACER"
    }
    if (HeroNum == 17) {
        return "WIDOWMAKER"
    }

    return "ERROR"
}

function GenSupport() {
    HeroNum = Random(7)

    if (HeroNum == 1)  {
        return "ANA"
    }
    if (HeroNum == 2)  {
        return "BAPTISTE"
    }
    if (HeroNum == 3)  {
        return "BRIGITTE"
    }
    if (HeroNum == 4)  {
        return "LÚCIO"
    }
    if (HeroNum == 5)  {
        return "MERCY"
    }
    if (HeroNum == 6)  {
        return "MOIRA"
    }
    if (HeroNum == 7)  {
        return "ZENYATTA"
    }

    return "ERROR"
}

function GenAll() {
    HeroNum = Random(32)

    if (HeroNum == 1) {
        return "ANA"
    }
    if (HeroNum == 2) {
        return "ASHE"
    }
    if (HeroNum == 3) {
        return "BAPTISTE"
    }
    if (HeroNum == 4) {
        return "BASTION"
    }
    if (HeroNum == 5) {
        return "BRIGITTE"
    }
    if (HeroNum == 6) {
        return "D.VA"
    }
    if (HeroNum == 7) {
        return "DOOMFIST"
    }
    if (HeroNum == 8) {
        return "ECHO"
    }
    if (HeroNum == 9) {
        return "GENJI"
    }
    if (HeroNum == 10) {
        return "HANZO"
    }
    if (HeroNum == 11) {
        return "JUNKRAT"
    }
    if (HeroNum == 12) {
        return "LÚCIO"
    }
    if (HeroNum == 13) {
        return "MCCREE"
    }
    if (HeroNum == 14) {
        return "MEI"
    }
    if (HeroNum == 15) {
        return "MERCY"
    }
    if (HeroNum == 16) {
        return "MOIRA"
    }
    if (HeroNum == 17) {
        return "ORISA"
    }
    if (HeroNum == 18) {
        return "PHARAH"
    }
    if (HeroNum == 19) {
        return "REAPER"
    }
    if (HeroNum == 20) {
        return "REINHARDT"
    }
    if (HeroNum == 21) {
        return "ROADHOG"
    }
    if (HeroNum == 22) {
        return "SIGMA"
    }
    if (HeroNum == 23) {
        return "SOLDIER: 76"
    }
    if (HeroNum == 24) {
        return "SOMBRA"
    }
    if (HeroNum == 25) {
        return "SYMMETRA"
    }
    if (HeroNum == 26) {
        return "TORBJÖRN"
    }
    if (HeroNum == 27) {
        return "TRACER"
    }
    if (HeroNum == 28) {
        return "WIDOWMAKER"
    }
    if (HeroNum == 29) {
        return "WINSTON"
    }
    if (HeroNum == 30) {
        return "WRECKING BALL"
    }
    if (HeroNum == 31) {
        return "ZARYA"
    }
    if (HeroNum == 32) {
        return "ZENYATTA"
    }

    return "ERROR"
}

function Gen(type) {
    var Hero
    if (type == 0) {
        Hero = GenAll()
    }
    if (type == 1) {
        Hero = GenTank()
    }
    if (type == 2) {
        Hero = GenDamage()
    }
    if (type == 3) {
        Hero = GenSupport()
    }

    document.getElementById("hero").innerHTML = "Your Hero Is: " + Hero
}

Gen(0)