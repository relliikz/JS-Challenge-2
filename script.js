const rolling = document.getElementById('roll-dice');
const rolls = [];



function rollDice(){
    let input = document.getElementById("user-Input").value;
    if (input > 20){
        alert("Please enter a number less than 20");
    } else {
    for(let i = 0; i < input; i++){
        rolls.push(Math.floor(Math.random() * 6) + 1);
        if (input > 20){
            alert("Please enter a number less than 20");
            break;
         }
        }
        setTimeout(function(){
            for(let i = 0; i < rolls.length; i++){
                document.getElementById('roll-dice').innerHTML += rolls[i] + " ";
            }
            },input*1000);
    }

}

function average(){
    let sum = 0;
    for(let i = 0; i < rolls.length; i++){
        sum += rolls[i];
    }
    let average = sum / rolls.length;
    document.getElementById("average-dice").innerHTML = average;
}

function total(){
    let sum = 0;
    for(let i = 0; i < rolls.length; i++){
        sum += rolls[i];
    }
    document.getElementById("total-dice").innerHTML = sum;
}

function reset(){
    rolls.length=0;
    document.getElementById("roll-dice").innerHTML = "";
}

