function mostrarAlerta(mensaje) {
  alert(mensaje);
}

function enviarFormulario(event) {
  event.preventDefault(); // Evita que el formulario se envíe de forma predeterminada

  const form = event.target;
  const formData = new FormData(form);

  fetch('/enviar-correo', {
    method: 'POST',
    body: formData,
  })
    .then(response => response.text())
    .then(data => {
      mostrarAlerta(data); // Muestra la alerta con el mensaje del servidor
      form.reset(); // Reinicia el formulario
    })
    .catch(error => {
      console.error('Error:', error);
      mostrarAlerta('Ocurrió un error al enviar el formulario. Intente otra vez.');
    });

  return false; // Evita que el formulario se envíe después de manejar la respuesta
}