$(document).ready(function () {
    (function ($) {
        "use strict";

        $('#contactForm').validate({
            rules: {
                name: { required: true, minlength: 2 },
                subject: { required: true, minlength: 4 },
                email: { required: true, email: true },
                message: { required: true, minlength: 20 }
            },
            messages: {
                name: {
                    required: "Escribe tu nombre.",
                    minlength: "Tu nombre debe tener al menos 2 caracteres."
                },
                subject: {
                    required: "Escribe un asunto.",
                    minlength: "El asunto debe tener al menos 4 caracteres."
                },
                email: {
                    required: "Escribe tu correo.",
                    email: "Escribe un correo válido."
                },
                message: {
                    required: "Escribe tu mensaje.",
                    minlength: "El mensaje debe tener al menos 20 caracteres."
                }
            }
        });
    })(jQuery);
});
