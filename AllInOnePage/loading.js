import { appTitle } from "./app.js";
document.title = appTitle;
const title = document.getElementById("title");
title.textContent = "Nenu java script nerchukunttunna".toUpperCase();
// title.textContent = "నేను జావా స్క్రిప్ట్ నేర్చుకుంటున్న";
// title.textContent = "नेनु जावा स्क्रिप्ट नेचुकुंटुन्ना ";



const titles = ["నేను జావా స్క్రిప్ట్ నేర్చుకుంటున్న", "नेनु जावा स्क्रिप्ट नेचुकुंटुन्ना "]
let count = 0;
const intervalId = setInterval(() => {
    if (count < titles.length) {
        title.textContent = titles[count];
        count++;
    }
    else {
        clearInterval(intervalId);
        window.location.href = "home.html";
    }


}, 2000);
