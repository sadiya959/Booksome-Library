document.querySelector('.ri-moon-line').addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
})

const hamburger = document.getElementById('hamburger');
const sidebar = document.querySelector('.left-sidebar');
const closeBtn = document.getElementById('close-sidebar');

hamburger.addEventListener('click', () => {
  sidebar.classList.add('active');
});

closeBtn.addEventListener('click', () => {
  sidebar.classList.remove('active');
});