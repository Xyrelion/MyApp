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