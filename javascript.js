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
            content.style.backgroundColor = "#BAB2B5";
        })
        container.appendChild(content);
    }
}

// Reset Button
const button = document.createElement('button')
button.innerText = "Reset Sketchpad";
button.classList.add("button");
button.addEventListener('click', changeSketch)
document.getElementById("tools").appendChild(button);

// Remove Child Nodes
function removeChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
    console.log("removeChildNodes ran");
}

// Change Grid when Slide Changed & Reset Grid
function changeSketch() {
    const container = document.querySelector("#sketchpage");
    removeChildNodes(container);

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
            content.style.backgroundColor = "#BAB2B5";
        })
        container.appendChild(content);
    }
}


