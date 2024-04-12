'use client';

import {
    createUser,
    getUserByEmail,
    getUserByName,
} from '@/actions/user-actions';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useToast } from '@/components/ui/use-toast';
import {
    errorMessageDefault,
    errorMessageUserEmail,
    errorMessageUserName,
    successMessage,
} from '@/lib/errors';
import { NotificationInfo, TSignUpSchema, signUpSchema } from '@/lib/types';
import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter } from 'next/navigation';
import { FieldValues, useForm } from 'react-hook-form';

export default function SignUpForm() {
    const router = useRouter();

    const { toast } = useToast();

    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
        reset,
    } = useForm<TSignUpSchema>({
        mode: 'all',
        resolver: zodResolver(signUpSchema),
    });

    const showNotification = (notificationInfo: NotificationInfo) => {
        toast(notificationInfo);
    };

    const onSubmit = async (dataForm: FieldValues) => {
        const { name, email } = dataForm;

        const userNameExists = await getUserByName(name);

        if (userNameExists) {
            showNotification(errorMessageUserName);
            return;
        }

        const userEmailExists = await getUserByEmail(email);

        if (userEmailExists) {
            showNotification(errorMessageUserEmail);
            return;
        }

        const response = await createUser(dataForm);

        if (!response) {
            showNotification(errorMessageDefault);
            return;
        }

        showNotification(successMessage);

        router.push('/login');
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-2">
            <Label htmlFor="name">Nome</Label>
            <Input {...register('name')} id="name" name="name" type="text" />
            {errors.name && (
                <p className="text-sm text-red-600">{`${errors.name.message}`}</p>
            )}

            <Label htmlFor="email">Email</Label>
            <Input
                {...register('email')}
                id="email"
                name="email"
                type="email"
            />
            {errors.email && (
                <p className="text-sm text-red-600">{`${errors.email.message}`}</p>
            )}

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
    );
}
