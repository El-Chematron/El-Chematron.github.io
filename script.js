document.getElementById('btnYes').addEventListener('click', function () {
    // Muestra el poema y las fotos
    document.getElementById('poem').classList.remove('hidden');

    // Dispara la animación de confeti
    confetti({
        particleCount: 150, // Número de partículas
        spread: 70,         // Ángulo de dispersión
        origin: { y: 0.6 }  // Posición de origen (y: 0.6 significa que sale desde abajo)
    });

    // Opcional: Dispara confeti varias veces
    setTimeout(() => confetti(), 500);
    setTimeout(() => confetti(), 1000);
    setTimeout(() => confetti(), 1500);
});

document.getElementById('btnNo').addEventListener('click', function () {
    if (confirm('¿Estás segura de esto?')) {
        alert('Piénsalo de nuevo...');
    } else {
        alert('¡Mejor piénsalo bien!');
    }
});
