function makeChange(changeDue) {
    changeDue = changeDue.toPrecision(3);
    numberOfQuarters = Math.floor(changeDue / .25);
    changeLeft = (changeDue - numberOfQuarters * .25).toPrecision(2);
    numberOfDimes = Math.floor(changeLeft / .1);
    changeLeft = (changeLeft - numberOfDimes * .1).toPrecision(2);
    numberOfNickels = Math.floor(changeLeft / .05);
    changeLeft = (changeLeft - numberOfNickels * .05).toPrecision(2);
    numberOfPennies = (changeLeft / .01);
    let change = {
        quarters: numberOfQuarters,
        dimes: numberOfDimes,
        nickels: numberOfNickels,
        pennies: numberOfPennies
    }
    return change;
}

function showUserChange(){
    let changeInputElement = document.getElementById("goodTimeInput");
    let changeInput = Number(changeInputElement.value);
    let coinsDue = makeChange(changeInput);
    updateQuarterText(coinsDue.quarters);
    updateDimesText(coinsDue.dimes);
    updateNickelsText(coinsDue.dimes);
    updatePenniesText(coinsDue.pennies);
}

function updateQuarterText(quarterAmount) {
    let quarterText = document.getElementById("goodQuarters");
    quarterText.innerHTML = quarterAmount;
}

function updateDimesText(dimeAmount){
    let dimeText = document.getElementById("niceDimes");
    dimeText.innerHTML = dimeAmount;
}

function updateNickelsText(nickelAmount){
    let nickelText = document.getElementById("coolNickels");
    nickelText.innerHTML = nickelAmount;
}

function updatePenniesText(penniesAmount){
    let penniesText = document.getElementById("sweetPennies");
    penniesText.innerHTML = penniesAmount;
}