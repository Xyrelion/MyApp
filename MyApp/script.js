const toggleButton = document.getElementById('themeToggle');
let isDark = false;

toggleButton.addEventListener('click', () => {
  isDark = !isDark;
  document.body.style.background = isDark ? '#333' : '#fff';
  document.body.style.color = isDark ? '#fff' : '#333';
});

// Example:  
const fontSizeButton = document.getElementById('fontButton');  
fontSizeButton.addEventListener('click', () => {  
  document.body.style.fontSize = '24px';  
});  

// Dark Mode Toggle
const toggleButton = document.getElementById("darkModeToggle");
let isDark = false;

toggleButton.addEventListener("click", () => {
  isDark = !isDark;
  document.body.style.background = isDark ? "#333" : "#fff";
  document.body.style.color = isDark ? "#fff" : "#333";
});

// // Font Size Toggle (ADD THIS CODE)
// const fontButton = document.getElementById("fontButton");
// let isLarge = false;

fontButton.addEventListener("click", () => {
  isLarge = !isLarge;
  document.body.style.fontSize = isLarge ? "24px" : "16px";
});