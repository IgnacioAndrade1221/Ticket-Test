<script>
    // Seleccionamos el textarea y agregamos un evento para ajustar la altura automáticamente
    const textarea = document.querySelector('textarea');

    textarea.addEventListener('input', function() {
        this.style.height = 'auto'; // Resetea la altura
        this.style.height = (this.scrollHeight) + 'px'; // Ajusta la altura al contenido
    });
</script>
