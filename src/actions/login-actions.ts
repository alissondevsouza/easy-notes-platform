'use server';

import { signIn } from '@/auth';
import { AuthError } from 'next-auth';
import { redirect } from 'next/navigation';
import { FieldValues } from 'react-hook-form';

export const loginCredentials = async (dataform: FieldValues) => {
    const { email, password } = dataform;

    try {
        await signIn('credentials', {
            email,
            password,
            redirect: false,
        });
    } catch (error) {
        return {
            error: (error as AuthError).type,
        };
    }

    redirect('/dashboard');
};
