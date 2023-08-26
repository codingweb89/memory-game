
const lives = document.querySelector(".lives");
let livesArray = ["❤", "❤", "❤", "❤", "❤"];

class GamerEvents {
    constructor(arraylives, lives) {
        this.arraylives = arraylives;
        this.lives = lives;
    };

    addLives() {
        this.arraylives.forEach(eachLives => {
            this.lives.innerHTML += "<span>" + eachLives + "</span>";
        })
    }

    removeLife() {
        this.arraylives.pop();
        this.lives.innerHTML = "";
        this.addLives();
    }
}

const Gamer = new GamerEvents(livesArray, lives);
Gamer.addLives();

let emojis = ["😎", "😎", "😃", "😃", "😍", "😍", "😂", "😂", "😆", "😆", "🥰", "🥰", "😜", "😜", "😁", "😁", "😘", "😘", "💀", "💀"];
let shuffleEmojis = emojis.sort(() => (Math.random() > .5) ? 2 : -1);

const parentDiv = document.querySelector(".parent");

function addEmojis() {
    for(var i = 0; i < emojis.length; i++) {
        parentDiv.innerHTML += "<span>" + shuffleEmojis[i] + "</span>";
    }
}
addEmojis();



function addSpanClass() {
    const span = parentDiv.querySelectorAll("span");
    span.forEach(eachSpan => {
        eachSpan.addEventListener("click", e => {
            let currenttarget = e.currentTarget;
            currenttarget.classList.add("opened");

            if(document.querySelectorAll(".opened").length > 1) {
                if(document.querySelectorAll(".opened")[0].innerHTML == document.querySelectorAll(".opened")[1].innerHTML) {
                    document.querySelectorAll(".opened")[1].classList.add("matched");
                    document.querySelectorAll(".opened")[0].classList.add("matched");

                    setTimeout(() => {
                        document.querySelectorAll(".opened")[1].classList.remove("opened");
                        document.querySelectorAll(".opened")[0].classList.remove("opened");
                    }, 500)
                }else {
                    setTimeout(() => {
                        document.querySelectorAll(".opened")[1].classList.remove("opened");
                        document.querySelectorAll(".opened")[0].classList.remove("opened");

                        Gamer.removeLife();
                        
                        if(lives.innerHTML == "") {
                            console.log("GAME OVER")
                            document.querySelector(".game-over").classList.remove("display-none")
                            let array = Array.from(parentDiv.querySelectorAll("span"));
                            for(let i = 0; i < array.length; i++) {
                            array[i].classList.add("pointer-events-none")
                        }
                        }
                    }, 500)
                }
            }

            if(document.querySelectorAll(".matched").length == emojis.length) {
                setTimeout(() => {
                    alert("Winner");
                    window.location.reload();
                }, 500)
            }
        })
    })
}
addSpanClass();

document.getElementById("startAgain").onclick = function() {
    window.location.reload();
};
document.getElementById("restart").onclick = function() {
    window.location.reload();
}
document.getElementById("exit").onclick = function() {
    document.querySelector(".game-over").classList.add("display-none")
}