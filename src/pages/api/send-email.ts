import type { APIRoute } from 'astro';
import { Resend } from 'resend';

const resend = new Resend('re_bCBqB4oF_4pbfQw1spoaQaNQcRooaWnw2'); // Reemplaza con tu API Key de Resend

export const post: APIRoute = async ({ request }) => {
  const formData = await request.formData();
  const name = formData.get('name') as string;
  const email = formData.get('email') as string;
  const message = formData.get('message') as string;

  if (!name || !email || !message) {
    return new Response('All fields are required', { status: 400 });
  }

  try {
    // Llamada a la API de Resend para enviar el correo
    await resend.emails.send({
      from: 'contacto@smartcoop.com',  // Tu correo personalizado
      to: 'contacto@smartcoop.com',    // Puedes poner el tuyo aquí
      subject: `Nuevo mensaje de ${name}`,
      text: `Nombre: ${name}\nEmail: ${email}\nMensaje:\n${message}`,
    });

    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (error) {
    console.error(error);
    return new Response('Error sending email', { status: 500 });
  }
};
