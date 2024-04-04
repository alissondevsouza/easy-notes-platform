import { z } from 'zod'

export const signUpSchema = z.object({
    name: z.string().min(3 ,'O nome deve ter no mínimo 3 caracteres'),
    email: z.string().email('Email inválido'),
    password: z.string().min(6, 'A senha deve ter no mínimo 6 caracteres'),
    confirmPassword: z.string().min(6, 'A senha deve ter no mínimo 6 caracteres'),
}).refine((fields) => fields.password === fields.confirmPassword, {
    message: 'As senhas devem ser iguais',
    path: ['confirmPassword'],
}).transform((fields) => ({
    name: fields.name.toUpperCase(),
    email: fields.email,
    password: fields.password,
    confirmPassword: fields.confirmPassword
}))

export type TSignUpSchema = z.infer<typeof signUpSchema>

export const loginSchema = z.object({
    email: z.string().email('Email inválido'),
    password: z.string().min(6, 'A senha deve ter no mínimo 6 caracteres')
})

export type TLoginSchema = z.infer<typeof loginSchema>

export interface NotificationInfo {
    title: string;
    description: string
}