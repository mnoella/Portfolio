function openModal(project) {
    document.getElementById("myModal").style.display = "block";
    document.getElementById(project + "Modal").classList.add("active");
}

function closeModal() {
    document.getElementById("myModal").style.display = "none";
    document.querySelectorAll(".project-modal").forEach(function(modal) {
        modal.classList.remove("active");
    });
}


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

