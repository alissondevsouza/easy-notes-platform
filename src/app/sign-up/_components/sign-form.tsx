'use client'

import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { useToast } from "@/components/ui/use-toast"
import { TSignUpSchema, signUpSchema } from "@/lib/type"
import { NotificationInfo } from "@/lib/type"
import signUpService from "../service/sign-up-service"
import { FieldValues, useForm } from "react-hook-form"
import { zodResolver } from '@hookform/resolvers/zod'
import { useRouter } from "next/navigation"

export default function SignUpForm() {

    const { toast } = useToast()  
    
    const router = useRouter()

    const { register, handleSubmit, formState: { errors, isSubmitting }, reset } = useForm<TSignUpSchema>({
        mode: 'all',
        resolver: zodResolver(signUpSchema)
    })

    const NOTIFICATION_MESSAGES = {
        ERROR: {
            title: 'Erro ao criar a conta!',
            description: 'Tente novamente ou contate o administrador da plataforma',
            variant: 'destructive'
        },
        SUCCESS: {
            title: 'Bem vindo!',
            description: 'Conta criada com sucesso! Faça login para acessar a plataforma',
            variant: 'default'
        }
    };

    const errorMessage: NotificationInfo = NOTIFICATION_MESSAGES.ERROR;
    const successMessage: NotificationInfo = NOTIFICATION_MESSAGES.SUCCESS;

    const showNotification = (notificationInfo:NotificationInfo) => {
        toast(notificationInfo);
    };

    const onSubmit = async (dataForm: FieldValues) => {

        const createAccountResult = await signUpService.createAccount(dataForm)

        if (!createAccountResult) {
            showNotification(errorMessage)
            reset()
            return
        }

        showNotification(successMessage)

        router.push('/login')
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