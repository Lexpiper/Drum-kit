let numberOfButton = document.querySelectorAll(".drum").length;

for (let i = 0; i < numberOfButton; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function () {
        let buttonHtml = this.innerHTML;
        makeSound(buttonHtml);
        buttonAnimation(buttonHtml);
    });
}

// keyboard event listner
document.addEventListener("keypress", (event) => {
    makeSound(event.key);
    buttonAnimation(event.key);
})


const makeSound = (key) => {
    switch (key) {
        case 'z':
            let tom1 = new Audio("sounds/tom-1.mp3");
            tom1.play();
            break;

        case "x":
            let tome2 = new Audio("sounds/tom-2.mp3");
            tome2.play();
            break;

        case "c":
            let tom3 = new Audio("sounds/tom-3.mp3");
            tom3.play();
            break;

        case "b":
            let tom4 = new Audio("sounds/tom-4.mp3");
            tom4.play();
            break;

        case "j":
            let snare1 = new Audio("sounds/snare.mp3");
            snare1.play();
            break;

        case "k":
            let crash1 = new Audio("sounds/crash.mp3");
            crash1.play();
            break;

        case "l":
            let kick = new Audio("sounds/kick-bass.mp3");
            kick.play();
            break;


        default:
            console.log(buttonHtml)
    }
}

function buttonAnimation (currentKey) {
    let currentButton = document.querySelector("." + currentKey);
    currentButton.classList.add("pressed");
    setTimeout(() => {
        currentButton.classList.remove("pressed")
        
    }, 100);

}
