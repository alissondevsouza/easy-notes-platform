'use client';

import { NotificationInfo } from '@/lib/types';

const NOTIFICATION_MESSAGES_ERRORS = {
    ERROR_DEFAULT: {
        title: 'Erro ao criar a conta!',
        description: 'Tente novamente ou contate o administrador da plataforma',
        variant: 'destructive',
    },
    ERROR_USER_NAME: {
        title: 'Erro ao criar a conta!',
        description:
            'Nome de usuário cadastrado! Tente novamente com outro nome',
        variant: 'destructive',
    },
    ERROR_USER_EMAIL: {
        title: 'Erro ao criar a conta!',
        description: 'Email já cadastrado! Tente novamente com outro email',
        variant: 'destructive',
    },
    ERROR_DEFAULT_LOGIN: {
        title: 'Erro ao fazer login',
        description: 'Tente novamente ou contate o administrador da plataforma',
        variant: 'destructive',
    },
    ERROR_CREDENTIALS_LOGIN: {
        title: 'Erro ao fazer login',
        description: 'Email ou senha inválidos! Tente novamente',
        variant: 'destructive',
    },
};

const NOTIFICATION_MESSAGES_SUCCESS = {
    SUCCESS: {
        title: 'Bem vindo!',
        description:
            'Conta criada com sucesso! Faça login para acessar a plataforma!',
        variant: 'default',
    },
    SUCCESS_LOGIN: {
        title: 'Login realizado com sucesso!',
        description: 'Bem vindo a plataforma!',
        variant: 'default',
    },
};

export const errorMessageDefault: NotificationInfo =
    NOTIFICATION_MESSAGES_ERRORS.ERROR_DEFAULT;
export const errorMessageUserName: NotificationInfo =
    NOTIFICATION_MESSAGES_ERRORS.ERROR_USER_NAME;
export const errorMessageUserEmail: NotificationInfo =
    NOTIFICATION_MESSAGES_ERRORS.ERROR_USER_EMAIL;
export const errorMessageCredentials: NotificationInfo =
    NOTIFICATION_MESSAGES_ERRORS.ERROR_CREDENTIALS_LOGIN;
export const errorMessageDefaultLogin: NotificationInfo =
    NOTIFICATION_MESSAGES_ERRORS.ERROR_DEFAULT_LOGIN;

export const successMessage: NotificationInfo =
    NOTIFICATION_MESSAGES_SUCCESS.SUCCESS;
export const successMessageLogin: NotificationInfo =
    NOTIFICATION_MESSAGES_SUCCESS.SUCCESS_LOGIN;
