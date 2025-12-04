document.addEventListener('DOMContentLoaded', () => {

    const titulo = document.getElementById('tituloAnimado');
    if (!titulo) return;

    const intervalo = 700;

    // Estado inicial: texto rojo, fondo transparente
    titulo.classList.add("text-danger");
    titulo.classList.remove("text-white", "bg-danger");

    setInterval(() => {

        if (titulo.classList.contains("text-danger")) {
            // Cambiar a blanco con fondo rojo
            titulo.classList.remove("text-danger");
            titulo.classList.add("text-white", "bg-danger");
        } else {
            // Cambiar a rojo sin fondo
            titulo.classList.remove("text-white", "bg-danger");
            titulo.classList.add("text-danger");
        }

    }, intervalo);

});
