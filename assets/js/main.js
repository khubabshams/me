document.addEventListener("DOMContentLoaded", function () {
    const sections = ["home", "skills", "projects", "contact"];
    const navLinksById = Object.fromEntries(
        sections.map((id) => [id, document.querySelector(`#top-menu a[href="#${id}"]`)])
    );
    const navLinks = Object.values(navLinksById).filter(Boolean);
    const sectionElements = sections.map((id) => document.getElementById(id)).filter(Boolean);

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (!entry.isIntersecting) {
                    return;
                }
                navLinks.forEach((link) => link.parentElement.classList.remove("active"));
                const activeLink = navLinksById[entry.target.id];
                if (activeLink) {
                    activeLink.parentElement.classList.add("active");
                }
            });
        },
        { threshold: 0.5 }
    );

    sectionElements.forEach((section) => observer.observe(section));

    navLinks.forEach((link) => {
        link.addEventListener("click", function () {
            navLinks.forEach((item) => item.parentElement.classList.remove("active"));
            this.parentElement.classList.add("active");
        });
    });

    const contactForm = document.getElementById("contact-form");
    const emailJsAvailable = typeof emailjs !== "undefined" && emailjs && typeof emailjs.sendForm === "function";
    if (!contactForm || !emailJsAvailable) {
        return;
    }

    emailjs.init("ap8wKb5uCooYnSoEl");

    contactForm.addEventListener("submit", function (event) {
        event.preventDefault();
        emailjs.sendForm("service_av1uj1r", "template_91ekwcq", this).then(
            function () {
                alert("Message sent successfully!");
                contactForm.reset();
            },
            function () {
                alert("Failed to send message. Please try again later.");
            }
        );
    });
});
