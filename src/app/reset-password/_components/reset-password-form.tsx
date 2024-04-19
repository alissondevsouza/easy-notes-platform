'use client';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { TResetPasswordSchema, resetPasswordSchema } from '@/lib/types';
import { zodResolver } from '@hookform/resolvers/zod';
import { FieldValues, useForm } from 'react-hook-form';

export default function ResetPasswordForm() {
    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
        reset,
    } = useForm<TResetPasswordSchema>({
        mode: 'all',
        resolver: zodResolver(resetPasswordSchema),
    });

    const onSubmit = async (Formdata: FieldValues) => {
        console.log(Formdata);
        reset();
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-2 w-full">
            <Label htmlFor="email">Email</Label>
            <Input
                {...register('email')}
                id="email"
                name="email"
                type="email"
                className="w-full mt-2"
            />
            {errors.email && (
                <p className="text-sm text-red-600">{`${errors.email.message}`}</p>
            )}
            <div className="flex flex-col items-center">
                <Button
                    type="submit"
                    className="w-[60%] mt-3"
                    disabled={isSubmitting}
                >
                    Recuperar Senha
                </Button>
            </div>
        </form>
    );
}
