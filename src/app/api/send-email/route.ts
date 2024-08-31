import { NextResponse } from "next/server";
import axios from "axios";

export async function POST(request: Request) {
  try {
    const { nombre, celular, correo } = await request.json();

    // Envía la solicitud a la API de Resend
    await axios.post(
      "https://api.resend.com/emails",
      {
        from: "lionstoretechnology@lionstoretechnology.com", // Cambia esto por tu dirección de correo
        to: correo,
        subject: "Gracias por Contactarnos",
        text: `Hola ${nombre},\n\nGracias por registrarte. Aquí están los detalles que has proporcionado:\nCelular: ${celular}\nCorreo: ${correo}\n\nSaludos,\nTu Empresa`,
      },
      {
        headers: {
          Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
          "Content-Type": "application/json",
        },
      }
    );

    return NextResponse.json({ message: "Correo enviado con éxito" });
  } catch (error) {
    console.error("Error enviando el correo:", error);
    return NextResponse.json(
      { message: "Error al enviar el correo" },
      { status: 500 }
    );
  }
}
