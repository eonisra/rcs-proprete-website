/* ==========================================================================
   MODALE MENTIONS LÉGALES
   ========================================================================== */
var modal = document.getElementById("modal-mentions");
var btn = document.getElementById("link-mentions");
var span = document.getElementsByClassName("close-modal")[0];

btn.onclick = function(e) {
    e.preventDefault();
    modal.style.display = "block";
}

span.onclick = function() {
    modal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

/* ==========================================================================
   ANIMATIONS AU DÉFILEMENT (INTERSECTION OBSERVER)
   ========================================================================== */
document.addEventListener('DOMContentLoaded', function() {
    const options = {
        root: null,
        rootMargin: '0px',
        threshold: 0.15 
    };

    const observer = new IntersectionObserver(function(entries, observer) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('reveal-visible');
                observer.unobserve(entry.target); 
            }
        });
    }, options);

    const elementsToReveal = document.querySelectorAll('.reveal');
    elementsToReveal.forEach(el => observer.observe(el));
});

/* ==========================================================================
   HEADER DYNAMIQUE (CHANGEMENT AU SCROLL)
   ========================================================================== */
const header = document.querySelector('header');

// On écoute l'événement "scroll" sur la fenêtre entière
window.addEventListener('scroll', () => {
    // Si on est descendu de plus de 50 pixels
    if (window.scrollY > 50) {
        header.classList.add('scrolled'); // On active le CSS réduit
    } else {
        header.classList.remove('scrolled'); // On remet le CSS normal
    }
});