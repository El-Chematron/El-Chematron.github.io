document.getElementById('btnYes').addEventListener('click', function() {
    document.getElementById('poem').classList.remove('hidden');
    document.getElementById('fireworks').classList.remove('hidden');
});

document.getElementById('btnNo').addEventListener('click', function() {
    if (confirm('¿Estás segura de esto?')) {
        alert('Piénsalo de nuevo...');
    } else {
        alert('¡Mejor piénsalo bien!');
    }
});