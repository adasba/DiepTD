//does calculations for "powering" a tank
function powerTank(tank, power1) {
    ctr7 = 0;
    aN = 0;
    aN2 = [];
    while (pW[tank].length > ctr7) {
        if (pW[pW[tank][ctr7]] >= power1 / (pW[tank].length - aN)) {
            aN2.push(pW[tank][ctr7]);
        } else {
            aN++;
        }
        ctr7++;
    }
    ctr7 = 0;
    while (aN2.length > ctr7) {
        pW[aN2[ctr7]] = pW[aN2[ctr7]] - (power1 / (pW[tank].length - aN));
        ctr7++;
    }
}
//sees how much usable power there is for a tank
function usableTankPower(tank) {
    aN = 0;
    ctr7 = 0;
    while (pW[tank].length > ctr7) {
        aN = aN + pW[pW[tank][ctr7]]
        ctr7++;
    }
    return aN;
}
//makes recycle buttons with less lines of code.
function recycle(variable1) {
    ctx.textAlign = "center";
    tankIcon2(50, 784 + variable1, "#CA7676", "#A56262");
    ctx.font = "Bold 14px Ubuntu";
    ctx.fillStyle = "White";
    ctx.lineWidth = 4;
    ctx.strokeStyle = "rgb(40, 40, 40)";
    ctx.strokeText("Recycle [R]", 125, 805 + variable1);
    ctx.fillText("Recycle [R]", 125, 805 + variable1);
}
//ends a level once there are no tanks
function endLevel() {
    lVA = 0;
    lctr = 0;
    xE = [];
    yE = [];
    tE = [];
    dE = [];
    hPE = [];
    mHPE = [];
    tMRE = [];
    tMRE2 = [];
    xB = [];
    yB = [];
    dB = [];
    lTB = [];
    teams = [];
    vB = [];
    tB = [];
    xP = [];
    yP = [];
    tP = [];
    hPP = [];
    mHPP = [];
    xE = [];
    yE = [];
    tE = [];
    dE = [];
    hPE = [];
    mHPE = [];
    tMRE = [];
    tMRE2 = [];
    level = -1;
    ctr9 = 0;
    ctr12 = 0;
    xS = [];
    yS = [];
    tS = [];
    var hPS = [];
    var mHPS = [];
    var tMRS = [];
    var tMRS2 = [];
    var dS = [];
    var pW = [];
    var pW2 = [];
    var costS = [];
}
function deathMsg() {
    ctr8 = 1;
    deathM = deathMS[Math.floor(Math.random() * deathMS.length)];
}
function message(message, message2) {
    ctr11 = 1;
    msg = message;
    if (message2 != undefined || message2 != "") {
        msg2 = message2;
    }
}
function startLevel(whichLevel) {
    ctr10 = 0;
    while (ctr10 < sConfig[whichLevel].length) {
        if (sConfig[whichLevel][ctr10].type == "square") {
            summonPolygon(sConfig[whichLevel][ctr10].x, sConfig[whichLevel][ctr10].y, 0);
        } else if (sConfig[whichLevel][ctr10].type == "triangle") {
            summonPolygon(sConfig[whichLevel][ctr10].x, sConfig[whichLevel][ctr10].y, 1);
        } else if (sConfig[whichLevel][ctr10].type == "pentagon") {
            summonPolygon(sConfig[whichLevel][ctr10].x, sConfig[whichLevel][ctr10].y, 2);
        } else if (sConfig[whichLevel][ctr10].type == "tank") {
            summonTower(sConfig[whichLevel][ctr10].x, sConfig[whichLevel][ctr10].y, sConfig[whichLevel][ctr10].tankType);
        }
        ctr10++
    }
    ctr10 = 0;
}
function levelIcon(whatLevel, description, difficulty, iconX, iconY) {
    tankIcon3(iconX - x + 512, iconY - y + 512, "#75C6C3", "#60A2A0");
    ctx.fillStyle = "White";
    ctx.lineWidth = 6;
    ctx.strokeStyle = "rgb(40, 40, 40)";
    ctx.font = "Bold 14px Ubuntu";
    ctx.textAlign = "center";
    ctx.strokeText("Level " + (whatLevel + 1), iconX + 50 - x + 512, iconY + 20 - y + 512);
    ctx.fillText("Level " + (whatLevel + 1), iconX + 50 - x + 512, iconY + 20 - y + 512);
    ctx.strokeText(description, iconX + 50 - x + 512, iconY + 43 - y + 512);
    ctx.fillText(description, iconX + 50 - x + 512, iconY + 43 - y + 512);
    ctx.strokeText(difficulty, iconX + 50 - x + 512, iconY + 66 - y + 512);
    ctx.fillText(difficulty, iconX + 50 - x + 512, iconY + 66 - y + 512);
    if (levelC[whatLevel] == 0) {
        ctx.strokeText("Incomplete", iconX + 50 - x + 512, iconY + 89 - y + 512);
        ctx.fillText("Incomplete", iconX + 50 - x + 512, iconY + 89 - y + 512);
    } else {
        ctx.strokeText("Completed!", iconX + 50 - x + 512, iconY + 89 - y + 512);
        ctx.fillText("Completed!", iconX + 50 - x + 512, iconY + 89 - y + 512);
    }
}
function lvlMouseBox(boxX, boxY) {
    if (mP.x > -50 - x + 512 + boxX && mP.y > 0 - y + 512 + boxY && mP.x < 150 - x + 512 + boxX && mP.y < 100 - y + 512 + boxY) {
        return true;
    } else {
        return false;
    }
}