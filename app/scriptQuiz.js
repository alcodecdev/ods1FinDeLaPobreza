// ALEJANDRO ASENCIO GURAU
document.addEventListener("DOMContentLoaded", () => {

    const opciones = document.querySelectorAll(".opcion");

    opciones.forEach(opcion => {

        opcion.addEventListener("click", () => {

            const parent = opcion.closest(".accordion-body");
            const feedback = parent.querySelector(".feedback");

            // Reset de opciones dentro de este bloque
            parent.querySelectorAll(".opcion").forEach(o => {
                o.classList.remove("correcta", "incorrecta");
            });

            // Mostrar el feedback correcto
            if (opcion.dataset.correct === "true") {
                opcion.classList.add("correcta");
                feedback.classList.remove("d-none");
                feedback.innerHTML = "<strong>¡Correcto!</strong>";
                feedback.classList.remove("alert-danger");
                feedback.classList.add("alert", "alert-success");
            } else {
                opcion.classList.add("incorrecta");
                feedback.classList.remove("d-none");
                feedback.innerHTML = "<strong>Incorrecto.</strong>";
                feedback.classList.remove("alert-success");
                feedback.classList.add("alert", "alert-danger");
            }
        });

    });

});
