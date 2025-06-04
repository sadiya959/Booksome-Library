const toggleButton = document.querySelector('.theme-toggle');
const body = document.body;

const sidebarLinks = document.querySelectorAll('.sidebar-menu li a');

sidebarLinks.forEach(link => {
  if (link.href === window.location.href) {
    link.parentElement.classList.add('active');
  }

  link.addEventListener('click', () => {
    sidebarLinks.forEach(l => l.parentElement.classList.remove('active'));
    link.parentElement.classList.add('active');
  });
});


window.addEventListener('DOMContentLoaded', () => {
  const theme  = localStorage.getItem('theme') 

  if (theme === 'dark') {
    body.classList.add('dark-mode');
  }

  toggleButton.addEventListener('click', () => {
    body.classList.toggle('dark-mode');

    if(body.classList.contains("dark-mode")){
      localStorage.setItem('theme', 'dark');
    } else {
      localStorage.setItem('theme', 'light');
    }
  })
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