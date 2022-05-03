let rating = 0;

function EnableButtonResetColours(){
    document.getElementById("submit-button").disabled = false;
    for (let i = 1; i <= 5; i++){
        document.getElementById("circle-" + i).classList.remove("select-circle-clicked");
    }
}

function handleRadChange(buttonNumber){
    EnableButtonResetColours();    
    document.getElementById("circle-" + buttonNumber).classList.add("select-circle-clicked");
    rating = buttonNumber;
}



function submitClicked(event){
    if (rating > 0){
        document.getElementById("centre-card-select").style.display = "none";
        document.getElementById("centre-card-thanks").style.display = "block";
        document.getElementById("selection-feedback-box").innerHTML = 'You selected ' + rating + ' out of 5';
    }
}

