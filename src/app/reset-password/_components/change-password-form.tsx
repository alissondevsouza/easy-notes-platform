'use client';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { TChangePasswordSchema, changePasswordSchema } from '@/lib/types';
import { zodResolver } from '@hookform/resolvers/zod';
import { FieldValues, useForm } from 'react-hook-form';

interface ChangePasswordFormProps {
    resetPasswordToken: string;
}

export default function ChangePasswordForm({
    resetPasswordToken,
}: ChangePasswordFormProps) {
    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
        reset,
    } = useForm<TChangePasswordSchema>({
        mode: 'all',
        resolver: zodResolver(changePasswordSchema),
    });

    const onSubmit = async (Formdata: FieldValues) => {
        console.log(Formdata);
        reset();
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-2 w-full">
            <Label htmlFor="password">Senha</Label>
            <Input
                {...register('password')}
                id="password"
                name="password"
                type="password"
            />
            {errors.password && (
                <p className="text-sm text-red-600">{`${errors.password.message}`}</p>
            )}

            <Label htmlFor="password">Confirmar Senha</Label>
            <Input
                {...register('confirmPassword')}
                id="password"
                name="confirmPassword"
                type="password"
            />
            {errors.confirmPassword && (
                <p className="text-sm text-red-600">{`${errors.confirmPassword.message}`}</p>
            )}
            <div className="w-full flex flex-col items-center">
                <Button
                    type="submit"
                    className="w-[80%] mt-4"
                    disabled={isSubmitting}
                >
                    Confirmar Senha
                </Button>
            </div>
        </form>
    );
}
