"use strict";

const btn = document.querySelector("#reset");
const container = document.querySelector("#drawpad");
const size = 16 * 16;

btn.addEventListener("click", () => {
  removeAllChildren(container);
  const promptInput = prompt();
  const newSize = promptInput * promptInput;
  document.querySelector(".container").style.gridTemplateColumn;
  createGrid(newSize);
});

function createGrid(size) {
  for (let i = 0; i < size; i++) {
    const box = document.createElement("div");
    container.appendChild(box);
    box.classList.add("box");
  }
  gridListeners();
}

function gridListeners() {
  const boxes = document.getElementsByClassName("box");

  for (const box of boxes) {
    const r = parseInt(Math.random() * 255);
    const g = parseInt(Math.random() * 255);
    const b = parseInt(Math.random() * 255);
    box.addEventListener("mouseover", () => {
      box.style.backgroundColor = "rgb(" + r + "," + g + "," + b + ")";
    });
  }
}

function removeAllChildren(parent) {
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }
}

createGrid(size);
