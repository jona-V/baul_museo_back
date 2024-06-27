import { z } from "zod";

export const registerSchema = z.object({
  username: z.string({
    required_error: "Nombre requerido",
  }),
  email: z
    .string({
      required_error: "Email requerido",
    })
    .email({
      message: "Email no es valido",
    }),
  password: z
    .string({
      required_error: "Contraseña requerida",
    })
    .min(6, {
      message: "Contraseña debe tener almenos 6 caracteres",
    }),
});

export const loginSchema = z.object({
  email: z
    .string({
      required_error: "Correo requerido",
    })
    .email({
      message: "Correo no es valido",
    }),
  password: z
    .string({
      required_error: "Contraseña requerida",
    })
    .min(6, {
      message: "Contraseña debe tener sus 6 caracteres",
    }),
});

export const contactSchema = z.object({
  username: z.string({
    required_error: "Nombre requerido",
  }),
  email: z
    .string({
      required_error: "Email requerido",
    })
    .email({
      message: "Email no es valido",
    }),
  phone: z
    .string({
      required_error: "Teléfono requerido",
    })
    .min(10, {
      message: "Teléfono debe tener almenos 10 caracteres",
    }),
  message: z
    .string({
      required_error: "Mensaje requerido",
    }),
});