import { z } from "zod"

export const Schema= z.object({
  username: z
    .string()
    .nonempty("Username should not be empty")
    .min(5, "Username should be upper than 5 character"),
  password: z
    .string()
    .nonempty("Password should not be empty")
    .min(8, "Password should be upper than 8 character")
})
export const SignUpSchema= z.object({
  username: z
    .string()
    .nonempty("Username should not be empty")
    .min(5, "Username should be upper than 5 character"),
  password: z
    .string()
    .nonempty("Password should not be empty")
    .min(8, "Password should be upper than 8 character"),
  email: z
    .string()
    .nonempty("Email should not be empty")
    .refine(
      (value) => /\S+@\S+\.\S+/.test(value), "Enter truth format of email"
    )
})

export type SchemaType= z.infer<typeof Schema>
export type SignUpSchemaType= z.infer<typeof SignUpSchema>