const btn = document.querySelector(".btn_add_row");
const inputContent = document.querySelector(".input_area");
const container = document.querySelector(".container");
const rmvButton = document.querySelector(".rmv-button");
let rowList = [1];

function addRow() {
    let rowsNumber = 1;
    btn.addEventListener("click", function () {
        if (rowsNumber === 10 || rowList.length === 10) {
            alert("Too much rows !");
        } else {
            const newDiv = document.createElement("DIV");
            newDiv.setAttribute('id', "new_row");
            newDiv.innerHTML = `<br>${inputContent.value}  <button class="rmv-button">Remove</button></br>`;
            container.appendChild(newDiv);
            rowList.push(newDiv);
        }
    })
}

function remove() {
    rmvButton.addEventListener("click", function () {
        let div = document.getElementById("new_row");
        container.removeChild(div)
        // rowList.pop(div);
    })
}

addRow();
remove();