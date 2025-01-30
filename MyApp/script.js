const toggleButton = document.getElementById('darkModeToggle');
let isDark = false;

toggleButton.addEventListener('click', () => {
  isDark = !isDark;
  document.body.style.background = isDark ? '#333' : '#fff';
  document.body.style.color = isDark ? '#fff' : '#333';
});