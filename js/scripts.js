(function () {
  if (typeof emailjs !== "undefined") {
    emailjs.init("olY4iy91a-lquNPnK");
  }
})();

document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector(".contact-me-form");
  if (!form) return;

  const submitButton = form.querySelector('button[type="submit"]');
  const status = form.querySelector(".form-status");
  const messages = {
    en: {
      sending: "Sending…",
      sent: "Your message was sent successfully.",
      failed: "Sorry, your message could not be sent. Please try again.",
      send: "Send 📩"
    },
    es: {
      sending: "Enviando…",
      sent: "Tu mensaje se ha enviado correctamente.",
      failed: "No se pudo enviar el mensaje. Inténtalo de nuevo.",
      send: "Enviar 📩"
    }
  };

  form.addEventListener("submit", async function (event) {
    event.preventDefault();
    const copy = messages[document.documentElement.lang] || messages.en;
    submitButton.disabled = true;
    submitButton.textContent = copy.sending;
    status.textContent = "";

    try {
      if (typeof emailjs === "undefined") {
        throw new Error("Email service is unavailable");
      }
      await emailjs.sendForm("service_5ynz1x3", "template_rblycyj", form);
      status.textContent = copy.sent;
      form.reset();
    } catch {
      status.textContent = copy.failed;
    } finally {
      submitButton.disabled = false;
      submitButton.textContent = copy.send;
    }
  });
});
