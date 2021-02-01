let bgColor = document.getElementById("bgColor");
let textColor = document.getElementById("textColor");
document.getElementById("btn1").addEventListener("click", clickHandler);
document.getElementById("btn2").addEventListener("click", loopHandler);

function clickHandler() {
    console.log(bgColor.value);
    console.log(textColor.value);
    document.getElementById("background").style.backgroundColor  = bgColor.value;
    document.getElementById("divText").style.color  = textColor.value;
}

function loopHandler() {
    const english = ["spring", "summer", "autumn", "winter"];
    const german = ["Fruehling", "Sommer", "Herbst", "Winter"];
    let count = 0;
    english.forEach(element => {
        alert(`The German for ${element} is ${german[count]}`);
        count++;
    });
}

function setDivColour(id, bgColor, textColour) {
    
}