
let x = 4
let size = 500/x;

for (let i = 0; i < (x*x); i++) {
    const container = document.querySelector("#sketchpage");
    const content = document.createElement("div");
    content.classList.add("dot");
    content.textContent = "";
    content.style.height = size + "px";
    content.style.width = size + "px";
    container.appendChild(content);
}


