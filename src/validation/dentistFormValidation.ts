import { z } from "zod";

export const schema = z.object({
    firstName: z.string().nonempty("First name is required"),
    lastName: z.string().nonempty("Last name is required"),
    emailId: z.string().email("Invalid email format"),
    phone: z
    .string()
    .refine((value) => /^\d{10}$/.test(value), {
      message: "Phone number must 10-digits",
    })
    .transform((value) => parseInt(value, 10)),
    speciality: z.string().nonempty("Speciality is required")
  })
  