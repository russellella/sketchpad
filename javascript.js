// Initial Sketchpad Setup
window.onload = initialSketchpad();

function initialSketchpad() {
let x = "16";
let size = 500/x;
    for (let i = 0; i < (x*x); i++) {
        const container = document.querySelector("#sketchpage");
        const content = document.createElement("div");
        content.classList.add("dot");
        content.textContent = "";
        content.style.height = size + "px";
        content.style.width = size + "px";
        content.addEventListener("mouseenter", () => {
            content.style.backgroundColor = "black";
        })
        container.appendChild(content);

    }
}

// Insert Reset Button
const button = document.createElement('button')
button.innerText = "Reset Sketchpad";
button.classList.add("button");
button.addEventListener('click', resetSketchpad)
document.getElementById("tools").appendChild(button);

// Clear Sketchpad
function resetSketchpad() {
    const container = document.querySelector("#sketchpage");
    removeChildNodes(container);
    console.log("resetSketchpad ran");
    initialSketchpad();
}

// Remove Child Nodes
function removeChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
    console.log("removeChildNodes ran");
}

/*
// Reset Grid when Slide Changed
function changeSketch() {
    const container = document.getElementById("sketchpage");
    container.replaceChildren();

    let x = document.getElementById("sketchRange").value
    let size = 500/x;
    

    for (let i = 0; i < (x*x); i++) {
        const container = document.querySelector("#sketchpage");
        const content = document.createElement("div");
        content.classList.add("dot");
        content.textContent = "";
        content.style.height = size + "px";
        content.style.width = size + "px";
        content.addEventListener("mouseenter", () => {
            content.style.backgroundColor = "black";
        })
        container.appendChild(content);
    }
}

*/

/*







const container = document.getElementById("sketchpage");
    removeAllChildNodes(container);
*/