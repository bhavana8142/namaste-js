import { appTitle } from "./app.js";
document.title = appTitle;


const chapters = [
    "why should I learn java script?",
    "java script 1",
    "java script 1",
    "java script 1",
    "java script 1",
    "java script 1",
    "java script 1",
    "java script 1",
    "java script 1",
    "java script 1",
    "java script 1",
    "java script 1",
    "java script 1",
    "java script 1",
    "java script 1",
    "java script 1",
    "java script 1",
    "java script 1",
    "java script 1",
    "java script 1",
    "java script 1",
    "java script 1",
    "java script 1",
    "java script 1",
    "java script 1",
    "java script 1",
    "java script 1",
    "java script 1",
    "java script 1",
    "java script 1",

    "java script 1",
    "java script 1",
]
const listContainer = document.getElementById("chapters-list-container");

chapters.forEach((chapter) => {
    const listEle = document.createElement("li");
    listEle.innerHTML = `${chapter}`;
    listEle.classList.add("font20px");
    listEle.classList.add("whitetext");
    listEle.classList.add("margin")

    listContainer.appendChild(listEle);
});

