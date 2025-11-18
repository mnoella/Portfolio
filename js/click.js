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
    
    // Réactiver le scroll du body
    document.body.style.overflow = '';
    
    // Attendre la fin de l'animation avant de cacher le contenu
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
    });
});