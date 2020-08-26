const container = document.querySelector("container");

function generateElements() {

    const height = 10;
    const width = 10;

    for (let i = 0; i < width * height; i++) {
        let square = document.createElement("div");
        square.className = "grid-square";
        container.appendChild(square);
        // container.innerHTML += `<div class="grid-square"></div>`;
    }
    const squares = document.querySelectorAll(".grid-square");
    squares[0].classList.add("contains-player");
}

let X = 0,
    Y = 0;

function move(direction) {
    const playerDiv = document.querySelector(".grid-square.contains-player");
    playerDiv.classList.remove("contains-player");

    let newPlayerDiv;

    switch (direction) {
        case "left":
            X--;
            break;
        case "up":
            Y--;
            break;
        case "right":
            X++;
            break;
        case "down":
            Y++;
            break;
    }
    newPlayerDiv = squares[(Y * width) + X];
    newPlayerDiv.classList.add("contains-player");
}

function toBeExecutedOnKeyDown(event) {
    let direction;

    switch (event.which) {
        case 37:
            direction = "left";
            break;
        case 38:
            direction = "up";
            break;
        case 39:
            direction = "right";
            break;
        case 40:
            direction = "down";
            break;
    }
    move(direction);
    // window.onkeydown = toBeExecutedOnKeyDown;
}

generateElements();