function triggerBtnClick() {
    createSVGElements(540);
    setTimeout(swapElements, 1200);
    setTimeout(clearSvgElements, 3600);
    document.querySelector(".trigger-btn").style.display = "none";
}
function createSVGElements(count) {
    for (let i = 0; i < count; i++) {
        const svgElement = document.createElement("div");
        svgElement.classList.add("svg-icon");
        svgElement.innerHTML = `
                    <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1.24264 8.24264L8 15L14.7574 8.24264C15.553 7.44699 16 6.36786 16 5.24264V5.05234C16 2.8143 14.1857 1 11.9477 1C10.7166 1 9.55233 1.55959 8.78331 2.52086L8 3.5L7.21669 2.52086C6.44767 1.55959 5.28338 1 4.05234 1C1.8143 1 0 2.8143 0 5.05234V5.24264C0 6.36786 0.44699 7.44699 1.24264 8.24264Z" fill="${getRandomColor()}"></path>
                    </svg>
                `;
        svgElement.style.left = `${Math.random() * 110 - 5}dvw`;
        svgElement.style.top = `${(Math.random() + 1.05) * 140}dvh`;
        document.body.appendChild(svgElement);
    }
}
function clearSvgElements() {
    const svgElements = document.querySelectorAll(".svg-icon");
    svgElements.forEach((svgElement) => {
        svgElement.remove();
    });
}

function getRandomColor() {
    return `hsl(${Math.random() * 360}, 100%, 50%)`;
}
function swapElements() {
    document.querySelector(".trigger-btn").classList.add("hidden");
    document.querySelector(".text").classList.add("show");
}
