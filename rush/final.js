const toggleNav = () => document.getElementById('navbar')?.classList.toggle('active');

document.addEventListener('click', (e) => {
    const bar = document.getElementById('navbar');
    if (bar && !bar.contains(e.target)) {
        bar.classList.remove('active');
    }
});