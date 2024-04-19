import ChangePasswordForm from './_components/change-password-form';
import ResetPasswordForm from './_components/reset-password-form';

interface ResetPasswordPageProps {
    searchParams: { [key: string]: string | string[] | undefined };
}

export default function ResetPasswordPage({
    searchParams,
}: ResetPasswordPageProps) {
    if (searchParams.token) {
        return (
            <main className="flex min-h-screen flex-row items-center justify-center">
                <div className="w-[45%] h-96 rounded-md backdrop-blur-sm bg-white/10 border text-card-foreground shadow flex flex-col justify-center items-center p-6">
                    <div className="flex justify-center flex-col items-center space-y-2">
                        <h2 className="text-2xl font-bold">Recuperar Senha</h2>
                        <p className="text-gray-500 dark:text-gray-400">
                            Insira sua nova senha
                        </p>
                    </div>

                    <div className="w-[75%] flex justify-center flex-col items-center space-y-2 mt-5">
                        <ChangePasswordForm
                            resetPasswordToken={searchParams.token as string}
                        />
                    </div>
                </div>
            </main>
        );
    } else {
        return (
            <main className="flex min-h-screen flex-row items-center justify-center">
                <div className="w-[45%] h-80 rounded-md backdrop-blur-sm bg-white/10 border text-card-foreground shadow flex flex-col justify-center items-center p-6">
                    <div className="flex justify-center flex-col items-center space-y-2">
                        <h2 className="text-2xl font-bold">Recuperar Senha</h2>
                        <p className="text-gray-500 dark:text-gray-400">
                            Digite seu email
                        </p>
                    </div>

                    <div className="w-[75%] flex justify-center flex-col items-center space-y-2 mt-5">
                        <ResetPasswordForm />
                    </div>
                </div>
            </main>
        );
    }
}
