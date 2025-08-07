// chat-secreto.js
document.addEventListener('keydown', function(event) {
  // Verifica si se presionaron Ctrl + Alt + M (código de tecla 77 es 'M')
  if (event.ctrlKey && event.altKey && event.keyCode === 77) {
    const chat = document.getElementById('chat');
    chat.style.display = chat.style.display === 'none' ? 'block' : 'none'; // Alternar visibilidad
    event.preventDefault(); // Evita que el navegador haga algo extraño
  }
});

// Opcional: Asegúrate de que el chat esté oculto al inicio
document.getElementById('chat').style.display = 'none';
