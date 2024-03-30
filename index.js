
const express = require('express');
const { Resend } = require('resend');
const cors = require('cors'); // Importa el middleware de CORS
const app = express();
const resend = new Resend('re_Fp5ZZciF_P9XX2tat9WqLt8UdVAiepW1p');

// Usa el middleware de CORS
app.use(cors());

app.use(express.urlencoded({ extended: true }));
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

app.post('/enviar-correo', async (req, res) => {
  const { introducir_nombre, introducir_email, introducir_telefono, introducir_asunto, introducir_mensaje } = req.body;

  try {
    const { data, error } = await resend.emails.send({
      from: 'DQYASOCIADOS WEB <onboarding@resend.dev>',
      to: 'danielwfq@gmail.com',
      subject: 'FORMULARIO WEB',
      html: `<p>Nombre: ${introducir_nombre}</p><p>Email: ${introducir_email}</p><p>Teléfono: ${introducir_telefono}</p><p>Asunto: ${introducir_asunto}</p><p>Mensaje: ${introducir_mensaje}</p>`,
    });

    if (error) {
      console.error({ error });
      res.status(500).send('Hubo un error al enviar el correo.');
    } else {
      console.log({ data });
      res.status(200).send('El correo se envió correctamente.');
    }
  } catch (err) {
    console.error(err);
    res.status(500).send('Hubo un error en el servidor.');
  }
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor Express escuchando en el puerto ${PORT}`);
});

