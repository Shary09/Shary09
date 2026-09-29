const contactForm = document.querySelector(".contact-form");

if (contactForm) {
    contactForm.addEventListener("submit", (event) => {
        event.preventDefault();

        const formData = new FormData(contactForm);
        const subject = "Propuesta de colaboración";
        const body = `${formData.get("message")}\n\nCorreo de contacto: ${formData.get("email")}`;
        const status = contactForm.querySelector(".form-status");

        const gmailUrl = new URL("https://mail.google.com/mail/");
        gmailUrl.searchParams.set("view", "cm");
        gmailUrl.searchParams.set("fs", "1");
        gmailUrl.searchParams.set("to", "sharonaraya19@gmail.com");
        gmailUrl.searchParams.set("su", subject);
        gmailUrl.searchParams.set("body", body);

        status.textContent = "Abriendo Gmail para enviar el mensaje.";
        window.location.assign(gmailUrl);
    });
}