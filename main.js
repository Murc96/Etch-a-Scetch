"use strict";

const btn = document.querySelector("#reset");
const container = document.querySelector("#drawpad");
const size = 16;

btn.addEventListener("click", () => {
  removeAllChildren(container);
  const promptInput = parseInt(
    prompt(
      "Bitte geben Sie eine zahl zwischen 1 und 100 ein um die Grid größe zu bestimmen."
    )
  );
  if (promptInput >= 1 && promptInput <= 100) {
    createGrid(promptInput);
  } else {
    alert("Es wird eine Zahl zwischen 1 und 100 benötigt!");
  }
});

function createGrid(sizeGrid) {
  container.style.gridTemplateColumns = `repeat(${sizeGrid} , 1fr)`;
  container.style.gridTemplateRows = `repeat(${sizeGrid} , 1fr)`;
  let amount = sizeGrid * sizeGrid;
  for (let i = 0; i < amount; i++) {
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
