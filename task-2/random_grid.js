function generateGrid(width, height) {
    let container = document.querySelector(".container");

    for (let i = 0; i < height; i++) {
        let row = document.createElement("div");
        for (let j = 0; j < width; j++) {
            let cell = document.createElement("div");
            cell.className = "cell";
            cell.textContent = " cell ";
            row.appendChild(cell);
        }
        container.appendChild(row);
    }
}

function switchCellColor() {
    const cells = document.getElementsByClassName("cell");
    setInterval(
        function () {
            let random = Math.floor(Math.random() * (cells.length));
            cells[random].classList.add("active");
            setTimeout(() => setActive(cells, random), 500)
        }, 500);
}

function setActive(cells, random) {
    cells[random].classList.remove("active");
}

generateGrid(10, 10);
switchCellColor();
