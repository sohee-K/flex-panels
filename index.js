const panels = document.querySelectorAll(".panel");

function toggleOpen(event) {
    event.stopPropagation();
    event.target.classList.toggle("open");
}

function init() {
    panels.forEach(panel => panel.addEventListener("click", toggleOpen));
}

init();