function playSound(key) {
    const sound = new Audio(`public/sounds/${key}.mp3`);
    sound.play();
}

function makeAnimation(key) {
    document.getElementById(key).classList.add("pressed");
    setTimeout(() => {
        document.getElementById(key).classList.remove("pressed");
    }, 100);
}

for(let i = 0; i < document.querySelectorAll(".drum").length; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", (event) => {
        let key = event.target.attributes.id.value;

        playSound(key);
        makeAnimation(key);
    })
}

document.addEventListener("keydown", (event) => {
    const key = event.key;
    const id = document.querySelector(`.${key}`).id;
    
    playSound(id);
    makeAnimation(id);
});