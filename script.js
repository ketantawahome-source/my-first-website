document.addEventListener("DOMContentLoaded", () => {
    const menuToggle = document.querySelector(".menu-toggle");
    const sidebarMenu = document.getElementById("sidebar-menu");
    const sidebarOverlay = document.getElementById("sidebar-overlay");
    const sidebarClose = document.querySelector(".sidebar-close");

    const closeSidebar = () => {
        sidebarMenu?.classList.remove("active");
        sidebarOverlay?.classList.remove("active");
        menuToggle?.classList.remove("active");
        menuToggle?.setAttribute("aria-expanded", "false");
        document.body.classList.remove("sidebar-open");
    };

    const openSidebar = () => {
        sidebarMenu?.classList.add("active");
        sidebarOverlay?.classList.add("active");
        menuToggle?.classList.add("active");
        menuToggle?.setAttribute("aria-expanded", "true");
        document.body.classList.add("sidebar-open");
    };

    if (menuToggle && sidebarMenu && sidebarOverlay) {
        menuToggle.addEventListener("click", () => {
            const isOpen = sidebarMenu.classList.contains("active");
            if (isOpen) {
                closeSidebar();
            } else {
                openSidebar();
            }
        });

        sidebarOverlay.addEventListener("click", closeSidebar);
        sidebarClose?.addEventListener("click", closeSidebar);

        sidebarMenu.querySelectorAll("a").forEach((link) => {
            link.addEventListener("click", closeSidebar);
        });
    }

    const tabButtons = document.querySelectorAll(".tab-btn");
    const tabPanels = document.querySelectorAll(".tab-panel");

    tabButtons.forEach((button) => {
        button.addEventListener("click", () => {
            const target = button.getAttribute("data-target");

            tabButtons.forEach((btn) => btn.classList.remove("active"));
            tabPanels.forEach((panel) => panel.classList.remove("active"));

            button.classList.add("active");
            const activePanel = document.getElementById(target);
            if (activePanel) {
                activePanel.classList.add("active");
            }
        });
    });

    const contactForm = document.getElementById("contact-form");
    if (contactForm) {
        contactForm.addEventListener("submit", (event) => {
            event.preventDefault();
            alert("Message Sent Successfully!");
            contactForm.reset();
        });
    }

    const admissionForm = document.getElementById("admission-form");
    const successMessage = document.getElementById("form-success");
    const formCard = document.querySelector(".form-card");

    if (admissionForm && successMessage && formCard) {
        admissionForm.addEventListener("submit", (event) => {
            event.preventDefault();

            const requiredFields = admissionForm.querySelectorAll("[required]");
            let isValid = true;

            requiredFields.forEach((field) => {
                if (!field.value.trim()) {
                    isValid = false;
                }
            });

            if (!isValid) {
                alert("Please fill out all required fields before submitting.");
                return;
            }

            formCard.style.display = "none";
            successMessage.hidden = false;
            successMessage.classList.add("is-visible");
            successMessage.scrollIntoView({ behavior: "smooth", block: "center" });
        });
    }
});
