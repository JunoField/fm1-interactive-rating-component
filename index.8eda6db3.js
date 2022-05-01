function EnableButtonResetColours() {
    document.getElementById("submit-button").disabled = false;
    document.getElementById("circle-one").classList.remove("select-circle-clicked");
    document.getElementById("circle-two").classList.remove("select-circle-clicked");
    document.getElementById("circle-three").classList.remove("select-circle-clicked");
    document.getElementById("circle-four").classList.remove("select-circle-clicked");
    document.getElementById("circle-five").classList.remove("select-circle-clicked");
}
function handleRad1Change() {
    EnableButtonResetColours();
    document.getElementById("circle-one").classList.add("select-circle-clicked");
}
function handleRad2Change() {
    EnableButtonResetColours();
    document.getElementById("circle-two").classList.add("select-circle-clicked");
}
function handleRad3Change() {
    EnableButtonResetColours();
    document.getElementById("circle-three").classList.add("select-circle-clicked");
}
function handleRad4Change() {
    EnableButtonResetColours();
    document.getElementById("circle-four").classList.add("select-circle-clicked");
}
function handleRad5Change() {
    EnableButtonResetColours();
    document.getElementById("circle-five").classList.add("select-circle-clicked");
}
function submitClicked(event) {
    document.getElementById("centre-card-select").style.display = "none";
    document.getElementById("centre-card-thanks").style.display = "block";
    let rating = "unknown";
    if (document.getElementById("radio-one").checked) rating = 1;
    else if (document.getElementById("radio-two").checked) rating = 2;
    else if (document.getElementById("radio-three").checked) rating = 3;
    else if (document.getElementById("radio-four").checked) rating = 4;
    else if (document.getElementById("radio-five").checked) rating = 5;
    document.getElementById("selection-feedback-box").innerHTML = 'You selected ' + rating + ' out of 5';
}

//# sourceMappingURL=index.8eda6db3.js.map
