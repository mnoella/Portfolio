document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

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
