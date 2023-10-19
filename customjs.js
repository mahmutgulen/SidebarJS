const bars = document.querySelector('.bars');
const sidebar = document.querySelector('.sidebar');
const close = document.querySelector('.fa-xmark');

bars.addEventListener('click', () => {
    sidebar.classList.toggle('showSideBar');
});

close.addEventListener('click', () => {
    sidebar.classList.remove('showSideBar');
});