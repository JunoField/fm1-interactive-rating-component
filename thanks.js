function submitClicked(event){
    document.getElementById("centre-card-select").style.display = "none";
    document.getElementById("centre-card-thanks").style.display = "block";
    let rating = 9;

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

