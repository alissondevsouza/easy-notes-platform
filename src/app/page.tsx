import { ModeToggle } from "./_components/mode-toggle"
import Image from "next/image";
import Link from "next/link";
import Logo from "@/assets/logo.svg"
import Principal from "@/assets/principal.jpg"
import { GoArrowRight } from "react-icons/go";

export default function Home() {
  return (
    <main className="flex flex-col min-h-[100dvh]">
      <header className="px-4 lg:px-8 h-16 flex items-center mx-10 mt-2 mb-1 p-9">
        <Link className="flex items-center justify-center" href="#">
          <Image 
            src={Logo}
            alt="logo ENP - Easy Notes Platform" 
            width={150}
            height={150} 
          />
        </Link>
        <nav className="flex justify-center items-center ml-auto gap-4 sm:gap-6">
            <Link className="text-sm font-medium hover:underline underline-offset-4" href="/login">
              Entrar
            </Link>
            <Link className="text-sm font-medium hover:underline underline-offset-4" href="/cadastro">
              Cadastrar
            </Link>
            <ModeToggle />
        </nav>
      </header>
      <section className="flex-1">
        <div className="w-ful flex justify-center items-center h-auto border-t">
          <div className="container space-y-10 px-4 md:px-6 mt-24">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800">
                  BEM VINDO AO EASY NOTES PLATFORM
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Bloco de Anotações Online</h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Seja você um estudante, profissional ou entusiasta criativo, a <span className="text-white">ESAY 
                  NOTES PLATFORM</span> está aqui para simplificar a forma como você captura suas ideias, pensamentos e 
                  inspirações.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-4xl items-start gap-6 sm:max-w-2xl md:max-w-4xl lg:max-w-5xl lg:grid-cols-2 lg:gap-12">
              <div className="mx-auto flex w-full items-center justify-center p-4 sm:p-8">
                <Image
                  className="rounded-lg shadow-lg"
                  src={Principal}
                  width={500}
                  height={500}
                  alt="Placeholder"
                />
              </div>
              <div className="flex flex-col items-start space-y-4">
                <div className="grid gap-1">
                  <h3 className="text-lg font-bold">Capture suas ideias de maneira simples e rápida</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Escreva suas notas diretamente no aplicativo ou, se preferir, grave-as por áudio. 
                  </p>
                </div>
                <div className="grid gap-1">
                  <h3 className="text-lg font-bold">Acesse suas notas em qualquer lugar</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Diga adeus às preocupações com a perda de notas importantes. Com a NotaFácil, suas notas são armazenadas com 
                    segurança na nuvem e associadas ao seu login exclusivo.
                  </p>
                </div>
                <div className="grid gap-1">
                  <h3 className="text-lg font-bold">Privacidade e segurança em primeiro lugar</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Utilizamos as mais recentes tecnologias de criptografia para garantir que suas notas estejam sempre protegidas 
                    contra acessos não autorizados.
                  </p>
                </div>
                <div className="grid gap-1">
                  <h3 className="text-lg font-bold">Experimente a NotaFácil hoje mesmo</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Junte-se a milhares de usuários satisfeitos que confiam na NotaFácil para simplificar suas vidas. Experimente nossa 
                    aplicação hoje mesmo e descubra como capturar, salvar e acessar suas notas pode ser mais fácil do que nunca.
                  </p>
                </div>
              </div>
            </div>
            <div className="flex justify-center items-center">
              <Link
                className="inline-flex h-10 items-center justify-center rounded-md bg-gray-900 px-8 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                href="/portal"
              >
                Escreva Suas Notas Agora <GoArrowRight className="ml-2" />
              </Link>
            </div>
          </div>
        </div>
      </section>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-gray-500 dark:text-gray-400">© 2024 | Todos Direitos Reservados.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Termos de Uso
          </Link>
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Privacidade
          </Link>
        </nav>
      </footer>
    </main>
  )
}
