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

/* ==========================================================================
   LOGIQUE DE LA LIGHTBOX (Version sécurisée)
   ========================================================================== */
document.addEventListener('DOMContentLoaded', function() {
    const lightbox = document.getElementById("lightbox");
    const lightboxImg = document.getElementById("img-zoom");
    const captionText = document.getElementById("caption");
    const closeLightbox = document.querySelector(".close-lightbox");

    // On vérifie que la lightbox existe bien sur la page pour éviter les erreurs
    if (lightbox) {
        const imagesGalerie = document.querySelectorAll(".image-box img");

        // On attache l'action de clic à chaque image
        imagesGalerie.forEach(img => {
            img.addEventListener('click', function() {
                if (window.innerWidth > 768) {
                    lightbox.style.display = "flex"; 
                    lightboxImg.src = this.src; 
                    captionText.innerHTML = this.alt; 
                }
            });
        });

        // Fermer quand on clique sur la croix
        closeLightbox.addEventListener('click', function() {
            lightbox.style.display = "none";
        });

        // Fermer quand on clique n'importe où sur le fond noir
        lightbox.addEventListener('click', function(event) {
            if (event.target !== lightboxImg) {
                lightbox.style.display = "none";
            }
        });
    }
});


/* ==========================================================================
   LOGIQUE DES FLÈCHES DU CARROUSEL
   ========================================================================== */
document.addEventListener('DOMContentLoaded', function() {
    const galerie = document.querySelector('.galerie');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');

    if (galerie && prevBtn && nextBtn) {
        // La largeur d'une image (400px) + l'espace (20px) = 420px de défilement
        const scrollAmount = 420; 

        nextBtn.addEventListener('click', () => {
            galerie.scrollBy({
                left: scrollAmount, 
                behavior: 'smooth' // Défilement fluide
            });
        });

        prevBtn.addEventListener('click', () => {
            galerie.scrollBy({
                left: -scrollAmount, 
                behavior: 'smooth'
            });
        });
    }
});



/* ==========================================================================
   LOGIQUE DU MENU HAMBURGER (MOBILE)
   ========================================================================== */
document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-menu a');

    if (menuToggle && navMenu) {
        // Au clic sur le bouton ☰
        menuToggle.addEventListener('click', () => {
            menuToggle.classList.toggle('active');
            navMenu.classList.toggle('active');
        });

        // Fermer le menu quand on clique sur un lien (très important !)
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                menuToggle.classList.remove('active');
                navMenu.classList.remove('active');
            });
        });
    }
});