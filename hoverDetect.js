const radio1 = document.selectElementById("radio-one");
const circle1 = document.selectElementById("circle-one");

circle1.addEventListener("click", () => {
    console.log("clicked");
    if (radio1.checked){
        circle1.style.color = 'red';
        console.log("color changed");
    };
});
