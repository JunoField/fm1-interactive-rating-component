let rating=0;function handleRadChange(e){document.getElementById("submit-button").disabled=!1;for(let e=1;e<=5;e++)document.getElementById("circle-"+e).classList.remove("select-circle-clicked");document.getElementById("circle-"+e).classList.add("select-circle-clicked"),rating=e}function submitClicked(e){rating>0&&(document.getElementById("centre-card-select").style.display="none",document.getElementById("centre-card-thanks").style.display="block",document.getElementById("selection-feedback-box").innerHTML="You selected "+rating+" out of 5")}
//# sourceMappingURL=index.1eebe4b4.js.map
