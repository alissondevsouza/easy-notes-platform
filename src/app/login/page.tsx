import { CardHeader, CardContent, Card } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"
import Logo from "@/assets/logo.svg"
import Principal from "@/assets/principal.jpg"
import { GoArrowLeft } from "react-icons/go";

export default function LoginPage() {

    return (
        <main className="flex min-h-screen flex-row items-center justify-center">
            <div className="w-full relative h-[38rem] max-w-md backdrop-blur-sm bg-white/10 rounded-l-xl border text-card-foreground shadow flex flex-col justify-center items-center p-6">
                <div className="absolute -z-10 w-full h-full flex justify-center items-center blur-sm">
                    <Image
                        className="rounded-l-xl h-[37.5rem] w-[98.5%] object-cover"
                        src={Principal}
                        alt="background image"
                        height={500}
                        width={500}
                    />
                </div>
                <div className="w-full text-left">
                    <Link href={'/'}>
                        <div className="flex flex-row gap-1">
                            <GoArrowLeft className="text-2xl font-bold" />
                            <span className="font-bold">Voltar</span>
                        </div>
                    </Link>
                </div>
                <div className="flex flex-col justify-end items-center h-[50%]">
                    <Image 
                        src={Logo}
                        alt="logo ENP - Easy Notes Platform" 
                        width={250}
                        height={250} 
                    />
                </div>
                <div className="flex flex-col justify-end items-center h-[50%]">
                    <span className="font-bold text-2xl"> Ainda não tem um conta?</span>

                    <p className="mt-8 text-center">Registre-se grátis e tenha acesso a todas funcionalidades da plataforma!</p>
                </div>

            </div>

            <Card className="flex justify-center items-center flex-col w-full h-[38rem] max-w-md backdrop-blur-sm bg-white/5">
                <CardHeader className="flex justify-center items-center space-y-2">
                    <h2 className="text-2xl font-bold">
                        Entrar
                    </h2>
                    <p className="text-gray-500 dark:text-gray-400">
                        Digite seus dados de acesso
                    </p>
                </CardHeader>
                
                <CardContent>
                    <form className="space-y-4">
                        <div className="space-y-2">
                            <Label htmlFor="email">Email</Label>
                            <Input name="email" required type="email" />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="password">Senha</Label>
                            <Input name="password" required type="password" />
                        </div>
                        <Button type="submit" className="w-full">Entrar</Button>
                    </form>

                    <div className="space-y-4 mt-4">
                        <div className="w-full flex justify-center items-center">
                            <Link href={'/recuperar-senha'}>
                                <span className="text-sm">Recuperar Senha</span>
                            </Link>
                        </div>
                        <div className="flex justify-center">
                            <Button className="w-full border m-1" variant="ghost">
                                Entrar com magic link
                            </Button>
                                
                            <Button className="w-full border m-1" variant="ghost">
                                Entrar com Google
                            </Button>
                        </div>

                        <div className="flex justify-center flex-col items-center">
                            <p className="text-sm"> 
                                Novo na Easy Notes Platform?
                            </p>

                            <Link href={'/cadastro'}>
                                <Button className="w-full mt-2"> Crie sua Conta Grátis</Button>
                            </Link>
                        </div>
                    </div>
                </CardContent>
            </Card>
        </main>
    )
}