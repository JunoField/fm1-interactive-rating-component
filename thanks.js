lightGrey = "hsl(217, 12%, 63%)";
mediumGrey = "hsl(216, 12%, 54%)";
circleBgnd = "#282e36";

function resetRadioColours(){
    document.getElementById("circle-one").style.setProperty("background-color", circleBgnd);
    document.getElementById("circle-two").style.setProperty("background-color", circleBgnd);
    document.getElementById("circle-three").style.setProperty("background-color", circleBgnd);
    document.getElementById("circle-four").style.setProperty("background-color", circleBgnd);
    document.getElementById("circle-five").style.setProperty("background-color", circleBgnd);
    document.getElementById("circle-one").style.setProperty("color", lightGrey);
    document.getElementById("circle-two").style.setProperty("color", lightGrey);
    document.getElementById("circle-three").style.setProperty("color", lightGrey);
    document.getElementById("circle-four").style.setProperty("color", lightGrey);
    document.getElementById("circle-five").style.setProperty("color", lightGrey);
}

function handleRad1Change(){
    resetRadioColours();
    document.getElementById("circle-one").style.setProperty("background-color", mediumGrey);
    document.getElementById("circle-one").style.setProperty("color", "white");
}

function handleRad2Change(){
    resetRadioColours();
    document.getElementById("circle-two").style.setProperty("background-color", mediumGrey);
    document.getElementById("circle-two").style.setProperty("color", "white");
}



function submitClicked(event){
    document.getElementById("centre-card-select").style.display = "none";
    document.getElementById("centre-card-thanks").style.display = "block";
    let rating = unknown;

    if (document.getElementById("radio-one").checked){
        rating = 1;
    } else if (document.getElementById("radio-two").checked){
        rating = 2;
    } else if (document.getElementById("radio-three").checked){
        rating = 3;
    } else if (document.getElementById("radio-four").checked){
        rating = 4;
    } else if (document.getElementById("radio-five").checked){
        rating = 5;
    } 



    document.getElementById("selection-feedback-box").innerHTML = 'You selected ' + rating + ' out of 5';
}

