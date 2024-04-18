'use server';

import { signIn } from '@/auth';
import { redirect } from 'next/navigation';
import { FieldValues } from 'react-hook-form';

export const login = async (dataform: FieldValues) => {
    const { email, password } = dataform;

    await signIn('credentials', {
        email,
        password,
        redirect: false,
    });

    redirect('/dashboard');
};
