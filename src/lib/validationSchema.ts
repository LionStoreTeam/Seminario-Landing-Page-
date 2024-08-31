import { z } from "zod";

export const formSchema = z.object({
  nombre: z.string().min(1, "El nombre es obligatorio"),
  celular: z.string().regex(/^\d{10}$/, "Ingresa un número a 10 digítos"),
  correo: z.string().email("El correo debe ser válido"),
});
