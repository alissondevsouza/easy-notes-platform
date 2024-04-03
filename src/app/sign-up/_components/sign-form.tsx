'use client'

import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { FieldValues, useForm } from "react-hook-form"
import { TSignUpSchema, signUpSchema } from "@/lib/type"
import { zodResolver } from '@hookform/resolvers/zod'

export default function SignUpForm() {

    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
        reset
    } = useForm<TSignUpSchema>({
        mode: 'all',
        resolver: zodResolver(signUpSchema)
    })

    const onSubmit = async (data: FieldValues) => {

        await new Promise((resolver) => setTimeout(resolver, 2000));
        console.log(data)
        reset()
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-2">
            <Label 
                htmlFor="name"
            >
                Nome
            </Label>
            <Input
                {...register('name')} 
                id="name" 
                name="name" 
                type="text" 
            />
            {errors.name && <p className="text-sm text-red-600">{`${errors.name.message}`}</p>}

            <Label 
                htmlFor="email"
            >
                Email
            </Label>
            <Input 
                {...register('email')}
                id="email" 
                name="email" 
                type="email" 
            />
            {errors.email && <p className="text-sm text-red-600">{`${errors.email.message}`}</p>}

            <Label 
                htmlFor="password"
            >
                Senha
            </Label>
            <Input 
                {...register('password')}
                id="password" 
                name="password"  
                type="password" 
            />
            {errors.password && <p className="text-sm text-red-600">{`${errors.password.message}`}</p>}

            <Label 
                htmlFor="password"
            >
                Confirmar Senha
            </Label>
            <Input 
                {...register('confirmPassword')}
                id="password" 
                name="confirmPassword"  
                type="password" 
            />
            {errors.confirmPassword && <p className="text-sm text-red-600">{`${errors.confirmPassword.message}`}</p>}

            <div className="flex flex-col items-center p-2">
                <Button 
                    type="submit" 
                    className="w-[80%]"
                    disabled={isSubmitting}
                >
                    Criar Conta
                </Button>
            </div>
        </form>
    )
}