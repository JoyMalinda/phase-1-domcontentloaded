document.addEventListener("DOMContentLoaded", function() {
    const textParagraph = document.getElementById("text");
    textParagraph.innerHTML = "This is really cool!"
  });
console.log(
  "This console.log() fires when index.js loads - before DOMContentLoaded is triggered"
);