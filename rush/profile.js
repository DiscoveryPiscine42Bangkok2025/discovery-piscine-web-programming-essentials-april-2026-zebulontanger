/* navigation bar */

/* toggles the 'active' class on the navbar */
const toggleNav = () => document.getElementById('navbar')?.classList.toggle('active');

/* closes the navbar automatically if you click anywhere outside of it. */
document.addEventListener('click', (e) => {
  const bar = document.getElementById('navbar');
  if (bar && !bar.contains(e.target)) {
    bar.classList.remove('active');
  }
});

/* scrolling */

/* handles the smooth movement and centering of the target element */
const performSmoothScroll = () => {
    const targetId = window.location.hash.substring(1);
    const targetElement = document.getElementById(targetId);
    
    if (targetElement) {
        /* timeout to ensure that the browser is ready and any page transitions are finished */
        setTimeout(() => {
            targetElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }, 100);
    }
};

/* handles navigation clicks, clicking updates the hash (triggering the scroll) and also works the same way if clicked from home page */
const scrollToSection = (id) => {
  if (window.location.pathname.includes("lamtan.html")) {
    /* changing the hash automatically triggers the 'hashchange' listener below */
    window.location.hash = id;
  } else {
    window.location.href = `lamtan.html#${id}`;
  }
};

/* listen for page loads and hash changes to trigger the smooth scroll */
window.addEventListener('load', performSmoothScroll);
window.addEventListener('hashchange', performSmoothScroll);