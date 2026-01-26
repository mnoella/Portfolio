// Ouvrir le drawer avec le projet spécifique
function openDrawer(projectId) {
    const drawer = document.getElementById('projectDrawer');
    const projectDetail = document.getElementById(projectId + 'Drawer');
    
    // Cacher tous les détails de projets
    const allDetails = document.querySelectorAll('.project-detail');
    allDetails.forEach(detail => detail.classList.remove('active'));
    
    // Afficher le projet sélectionné
    if (projectDetail) {
        projectDetail.classList.add('active');
    }
    
    // Ouvrir le drawer
    drawer.classList.add('active');
    
    // Empêcher le scroll du body quand le drawer est ouvert
    document.body.style.overflow = 'hidden';
    
    // Réinitialiser le scroll du drawer au début
    const drawerBody = document.querySelector('.drawer-body');
    if (drawerBody) {
        drawerBody.scrollTop = 0;
    }
}

// Fermer le drawer
function closeDrawer() {
    const drawer = document.getElementById('projectDrawer');
    drawer.classList.remove('active');
    
    document.body.style.overflow = '';
    
    setTimeout(() => {
        const allDetails = document.querySelectorAll('.project-detail');
        allDetails.forEach(detail => detail.classList.remove('active'));
    }, 300);
}

// Fermer le drawer avec la touche Echap
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        const drawer = document.getElementById('projectDrawer');
        if (drawer && drawer.classList.contains('active')) {
            closeDrawer();
        }
    }
});

// Empêcher la propagation du clic sur le contenu du drawer
document.addEventListener('DOMContentLoaded', function() {
    const drawerContent = document.querySelector('.drawer-content');
    if (drawerContent) {
        drawerContent.addEventListener('click', function(event) {
            event.stopPropagation();
        });
    }
});

// Fermer le menu burger
function closeBurgerMenu() {
    const navMenu = document.getElementById('navMenu');
    const burgerMenu = document.getElementById('burgerMenu');
    const navOverlay = document.getElementById('navOverlay');
    
    if (navMenu) navMenu.classList.remove('active');
    if (burgerMenu) burgerMenu.classList.remove('active');
    if (navOverlay) navOverlay.classList.remove('active');
    document.body.style.overflow = '';
}

// Ouvrir le menu burger
function openBurgerMenu() {
    const navMenu = document.getElementById('navMenu');
    const burgerMenu = document.getElementById('burgerMenu');
    const navOverlay = document.getElementById('navOverlay');
    
    if (navMenu) navMenu.classList.add('active');
    if (burgerMenu) burgerMenu.classList.add('active');
    if (navOverlay) navOverlay.classList.add('active');
    document.body.style.overflow = 'hidden';
}

// Navigation fluide
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');

        
        if (href.startsWith('http')) {
            return; 
        }

        e.preventDefault();

        const targetId = href.substring(1);
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop,
                behavior: 'smooth'
            });
        }

        // Fermer le menu burger après avoir cliqué sur un lien
        const navMenu = document.getElementById('navMenu');
        if (navMenu && navMenu.classList.contains('active')) {
            closeBurgerMenu();
        }
    });
});

// Gestion d'éyat du menu burger
document.addEventListener('DOMContentLoaded', function() {
    const burgerMenu = document.getElementById('burgerMenu');
    const navMenu = document.getElementById('navMenu');
    const navClose = document.getElementById('navClose');
    const navOverlay = document.getElementById('navOverlay');

    // Ouvrir avec le bouton burger
    if (burgerMenu && navMenu) {
        burgerMenu.addEventListener('click', function() {
            if (navMenu.classList.contains('active')) {
                closeBurgerMenu();
            } else {
                openBurgerMenu();
            }
        });
    }

    // Fermer le menu 
    if (navClose) {
        navClose.addEventListener('click', function(e) {
            e.stopPropagation();
            closeBurgerMenu();
        });
    }

    // Fermer le menu en overlay
    if (navOverlay) {
        navOverlay.addEventListener('click', function() {
            closeBurgerMenu();
        });
    }

    if (navMenu) {
        navMenu.addEventListener('click', function(e) {
            e.stopPropagation();
        });
    }
});