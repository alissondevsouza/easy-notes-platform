'use client';

import { login } from '@/actions/login-actions';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { TLoginSchema, loginSchema } from '@/lib/types';
import { zodResolver } from '@hookform/resolvers/zod';
import { FieldValues, useForm } from 'react-hook-form';

export default function LoginForm() {
    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
        reset,
    } = useForm<TLoginSchema>({
        mode: 'all',
        resolver: zodResolver(loginSchema),
    });

    const onSubmit = async (data: FieldValues) => {
        login(data);
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input {...register('email')} name="email" required type="email" />
            {errors.email && (
                <p className="text-sm text-red-600">{`${errors.email.message}`}</p>
            )}

            <Label htmlFor="password">Senha</Label>
            <Input
                {...register('password')}
                name="password"
                required
                type="password"
            />
            {errors.password && (
                <p className="text-sm text-red-600">{`${errors.password.message}`}</p>
            )}

            <div className="w-full flex flex-col items-center">
                <Button
                    type="submit"
                    className="w-[80%] mt-2"
                    disabled={isSubmitting}
                >
                    Entrar
                </Button>
            </div>
        </form>
    );
}
