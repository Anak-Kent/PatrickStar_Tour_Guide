document.addEventListener("DOMContentLoaded", function () {
    const modalTriggers = document.querySelectorAll("[data-modal-open]");
    const modals = document.querySelectorAll(".destination-modal");

    let previousFocus = null;

    // Open a destination pop-up
    function openModal(modalId, trigger) {
        const modal = document.getElementById(modalId);

        if (!modal) {
            return;
        }

        previousFocus = trigger;

        modal.classList.add("is-open");
        modal.setAttribute("aria-hidden", "false");
        document.body.classList.add("modal-open");

        const closeButton = modal.querySelector(".modal-close");

        if (closeButton) {
            closeButton.focus();
        }
    }

    // Close a destination pop-up
    function closeModal(modal) {
        if (!modal) {
            return;
        }

        modal.classList.remove("is-open");
        modal.setAttribute("aria-hidden", "true");

        const anyOpen = document.querySelector(
            ".destination-modal.is-open"
        );

        if (!anyOpen) {
            document.body.classList.remove("modal-open");

            if (previousFocus) {
                previousFocus.focus();
                previousFocus = null;
            }
        }
    }

    // Add click events to Learn More buttons
    modalTriggers.forEach(function (trigger) {
        trigger.addEventListener("click", function () {
            openModal(trigger.dataset.modalOpen, trigger);
        });
    });

    // Add events for closing pop-ups
    modals.forEach(function (modal) {
        const closeButton = modal.querySelector(".modal-close");

        if (closeButton) {
            closeButton.addEventListener("click", function () {
                closeModal(modal);
            });
        }

        // Close when clicking outside the pop-up content
        modal.addEventListener("click", function (event) {
            if (event.target === modal) {
                closeModal(modal);
            }
        });
    });

    // Close the pop-up by pressing Escape
    document.addEventListener("keydown", function (event) {
        if (event.key === "Escape") {
            const openModalElement = document.querySelector(
                ".destination-modal.is-open"
            );

            if (openModalElement) {
                closeModal(openModalElement);
            }
        }
    });

    // Back to Top button
    const topButton = document.getElementById("topBtn");

    if (topButton) {
        topButton.addEventListener("click", function () {
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });
        });
    }
});

function toggleNews(button) {
    const details = button.previousElementSibling;
        if (!details || !details.classList.contains("news-details")) {
        return;
    }
    const expanded = details.classList.toggle("show");

    button.textContent = expanded ? "Read Less" : "Read More";
    button.setAttribute("aria-expanded", expanded);
}

document.addEventListener("DOMContentLoaded", function () {
    // Show or hide password
    const passwordInput = document.getElementById("password");
    const togglePassword = document.getElementById("togglePassword");

    if (passwordInput && togglePassword) {
        togglePassword.addEventListener("click", function () {
            const showing = passwordInput.type === "text";

            passwordInput.type = showing ? "password" : "text";

            togglePassword.innerHTML = showing
                ? '<i class="fa-solid fa-eye"></i>'
                : '<i class="fa-solid fa-eye-slash"></i>';

            togglePassword.setAttribute(
                "aria-label",
                showing ? "Show password" : "Hide password"
            );

            togglePassword.setAttribute(
                "aria-pressed",
                String(!showing)
            );
        });
    }

    // Login form demonstration
    const loginForm = document.getElementById("loginForm");
    const loginMessage = document.getElementById("loginMessage");

    if (loginForm && loginMessage) {
        loginForm.addEventListener("submit", function (event) {
            event.preventDefault();

            if (!loginForm.checkValidity()) {
                loginForm.reportValidity();
                return;
            }

            loginMessage.textContent =
                "Your form is valid, but account authentication " +
                "is not connected yet. A secure login system " +
                "requires a server.";

            loginMessage.style.color = "#004aad";
        });
    }
});