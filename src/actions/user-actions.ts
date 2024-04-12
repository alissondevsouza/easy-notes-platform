'use server';
import prisma from '@/providers/prisma-provider';
import { FieldValues } from 'react-hook-form';

export const getUserByName = async (user_name: string) => {
    const userNameUpper = user_name.toUpperCase();

    try {
        const user = await prisma.users.findFirst({
            where: {
                name: userNameUpper,
            },
        });
        return user;
    } catch (error) {
        //TODO: Implementar loggin de erro e handler error
        return null;
    }
};

export const getUserByEmail = async (email: string) => {
    try {
        const user = await prisma.users.findFirst({
            where: {
                email,
            },
        });

        return user;
    } catch (error) {
        //TODO: Implementar loggin de erro e handler error
        return null;
    }
};

export const createUser = async (data: FieldValues) => {
    const { name, email, password } = data;

    const nameUpper = name.toUpperCase();

    try {
        const user = await prisma.users.create({
            data: {
                name: nameUpper,
                email,
                password,
            },
        });

        return user;
    } catch (error) {
        //TODO: Implementar loggin de erro e handler error
        return null;
    }
};
