const display = document.querySelector(".display");
const buttons = document.querySelectorAll("button");
const specialChars = ["%", "*", "/", "=", "+", "-"];
const container = document.querySelector(".container");
let output = "";

const modeicon = document.querySelector("#mode-icon");
const btnmode = document.querySelector("#btn-mode");
const modetext = document.querySelector("#mode-text");
const root = document.documentElement.style;


//Define function to calculate 
const calculate = (btnValue) =>{
 if(btnValue === "=" && btnValue !== ""){
    output =eval(output.replace("%", "/100"));
 }
 
 else if(btnValue === "AC"){
    output = "";
 }else if(btnValue === "DEL"){
    output = output.toString().slice(0, -1);
 }else {
    //IF output is empty and button is specialchars then return
if(output === "" && specialChars.includes(btnValue))
   return;
   output += btnValue;
 } 

 display.value = output;
 
}

//ADD eventListner to buttons call calculate() on click
buttons.forEach((button) =>{
    //btn click Listener calls calculate() with dataset value as arguments
    button.addEventListener("click", (e) => calculate(e.target.dataset.value));
});


let darkMode = false;

function darkModeProperties() {
    console.log("dark mode actoive");
    root.setProperty("--lm-bg", "#141D2F");
    root.setProperty("--lm-bg-content", "#1E2A47");
    root.setProperty("--lm-text", "white");
    root.setProperty("-lm-text-alt", "white");
    root.setProperty("--lm-shadow-xl", "rgba(70,88,109,0.15)");
    modetext.innerHTML = "LIGHT";
    modeicon.src = "./Images/sun-icon.svg";
    root.setProperty("--lm-icon-bg", "brightness(100%)");
    darkMode = true;
    localStorage.setItem("dark-mode", true);
}

function lightModeProperties() {
    root.setProperty("--lm-bg", "F6F8FF");
    root.setProperty("--lm-bg-content", "FEFEFE");
    root.setProperty("--lm-text", "#4B6A98");
    root.setProperty("--lm-text-alt", "#2B3442");
    root.setProperty("==lm-shadow-xl", "rgba(70,88,109,0.25)");
    modetext.innerHTML = "DARK";
    modeicon.src = "./Images/moon-icon.svg";
    darkMode = false;
    localStorage.setItem("dark-mode", false);

}

function init() {
    darkMode = false;
    const value =localStorage.getItem("dark-mode");

    if(value === null){
        console.log("NULL is present");
        localStorage.setItem("dark-mode", darkMode);
        lightModeProperties();
    }
    else if(value == "true"){
        console.log("true is fired");
        darkModeProperties();
    }else if(value == "false"){
        console.log("false is fired");
        lightModeProperties();
    }
}
init();

//EventListener 
btnmode.addEventListener("click", function() {
    container.classList.toggle("active");
    console.log("Dark mode fired");
    if(darkMode == false){
        darkModeProperties();
    }else{
        lightModeProperties();
    }
}); 

