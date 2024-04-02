import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"
import Logo from "@/assets/logo.svg"
import SignUp from "@/assets/SignUp.jpg"
import { GoArrowLeft } from "react-icons/go";

export default function SignUpPage() {

  return (
    <main className="flex min-h-screen flex-row items-center justify-center">
        <div className="w-full relative h-[38rem] max-w-md backdrop-blur-sm bg-white/10 rounded-l-xl border text-card-foreground shadow flex flex-col justify-center items-center p-6">
            <div className="absolute -z-10 w-full h-full flex justify-center items-center blur-sm">
                <Image
                    className="rounded-l-xl h-[37.5rem] w-[98.5%] object-cover"
                    src={SignUp}
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
                <span className="font-bold text-2xl"> Crie Sua Conta</span>
                <span className="font-bold text-2xl"> É Gratis !</span>
                <p className="mt-8 text-center">Gerencie e Consulte sua anotações de onde estiver</p>
            </div>
        </div>

        <div className="h-[38rem] p-8 w-full max-w-md rounded-r-xl border text-card-foreground shadow backdrop-blur-sm bg-white/5">
            <div className=" h-full flex justify-center flex-col">
                <div className="flex justify-center flex-col items-center">
                    <h1 className="text-2xl font-bold mb-2">
                        Cadastrar
                    </h1>
                    <p className="text-gray-500 dark:text-gray-400 mb-6">
                        Digite seus dados para criar conta
                    </p>
                </div>

                <form className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium mb-1" htmlFor="name">
                            Nome
                        </label>
                        <Input id="name" name="name" type="text" />
                    </div>
                    <div>
                        <label className="block text-sm font-medium mb-1" htmlFor="email">
                            Email
                        </label>
                        <Input id="email" name="email" type="email" />
                    </div>
                    <div>
                        <label className="block text-sm font-medium mb-1" htmlFor="password">
                            Senha
                        </label>
                        <Input id="password" name="password"  type="password" />
                    </div>

                    <Button type="submit" className="w-full">Criar Conta</Button>
                </form>

                <div className="mt-6 text-center">
                    <p className="text-sm">
                        Já possui conta?
                    </p>

                    <Link href={'/login'}>
                        <Button className="w-auto mt-2">Entre com sua Conta</Button>
                    </Link>
                </div>
            </div>
        </div>
    </main>
  )
}