import { ModeToggle } from '@/app/_components/mode-toggle';
import Logo from '@/assets/logo.svg';
import Image from 'next/image';
import Link from 'next/link';

export default function PrivacyPage() {
    return (
        <main className="flex flex-col min-h-[100dvh]">
            <header className="px-4 lg:px-8 h-16 flex items-center mx-10 mt-2 mb-1 p-9">
                <Link className="flex items-center justify-center" href="/">
                    <Image
                        src={Logo}
                        alt="logo ENP - Easy Notes Platform"
                        width={150}
                        height={150}
                    />
                </Link>
                <nav className="flex justify-center items-center ml-auto gap-4 sm:gap-6">
                    <Link
                        className="text-sm font-medium hover:underline underline-offset-4"
                        href="/login"
                    >
                        Entrar
                    </Link>
                    <Link
                        className="text-sm font-medium hover:underline underline-offset-4"
                        href="/cadastro"
                    >
                        Cadastrar
                    </Link>
                    <ModeToggle />
                </nav>
            </header>
            <section className="w-full border-t">
                <div className="w-[80%] m-auto">
                    <div className="text-center mt-6 mb-6">
                        <span className="text-2xl font-bold">
                            Política de Privacidade
                        </span>
                    </div>
                    <p className="mt-6">
                        <span>
                            A sua privacidade é importante para nós. É política
                            do{' '}
                            <span className="font-bold">
                                {' '}
                                Easy Notes Platform
                            </span>{' '}
                            respeitar a sua privacidade em relação a qualquer
                            informação sua que possamos coletar no site
                            <span className="font-bold">
                                {' '}
                                Easy Notes Platform
                            </span>
                            , e outros sites que possuímos e operamos.
                        </span>
                    </p>
                    <p className="mt-2">
                        <span>
                            Solicitamos informações pessoais apenas quando
                            realmente precisamos delas para lhe fornecer um
                            serviço. Fazemo-lo por meios justos e legais, com o
                            seu conhecimento e consentimento. Também informamos
                            por que estamos coletando e como será usado.
                        </span>
                    </p>
                    <p className="mt-2">
                        <span>
                            Apenas retemos as informações coletadas pelo tempo
                            necessário para fornecer o serviço solicitado.
                            Quando armazenamos dados, protegemos dentro de meios
                            comercialmente aceitáveis ​​para evitar perdas e
                            roubos, bem como acesso, divulgação, cópia, uso ou
                            modificação não autorizados.
                        </span>
                    </p>
                    <div className="mt-6 text-center">
                        <span className="text-lg font-semibold">
                            Não compartilhamos informações de identificação
                            pessoal publicamente ou com terceiros, exceto quando
                            exigido por lei
                        </span>
                    </div>
                    <p className="mt-2">
                        <span>
                            O nosso site pode ter links para sites externos que
                            não são operados por nós. Esteja ciente de que não
                            temos controle sobre o conteúdo e práticas desses
                            sites e não podemos aceitar responsabilidade por
                            suas respectivas políticas de privacidade.
                        </span>
                    </p>
                    <div className="mt-6 text-center">
                        <span className="text-lg font-semibold">
                            Você é livre para recusar a nossa solicitação de
                            informações pessoais, entendendo que talvez não
                            possamos fornecer alguns dos serviços desejados
                        </span>
                    </div>
                    <p className="mt-2">
                        <span>
                            O uso continuado de nosso site será considerado como
                            aceitação de nossas práticas em torno de privacidade
                            e informações pessoais. Se você tiver alguma dúvida
                            sobre como lidamos com dados do usuário e
                            informações pessoais, entre em contacto connosco.
                        </span>
                    </p>
                    <p className="mt-2">
                        <span>
                            <ul>
                                <li className="mt-2">
                                    <span>
                                        O serviço Google AdSense que usamos para
                                        veicular publicidade usa um cookie
                                        DoubleClick para veicular anúncios mais
                                        relevantes em toda a Web e limitar o
                                        número de vezes que um determinado
                                        anúncio é exibido para você.
                                    </span>
                                </li>
                                <li className="mt-2">
                                    <span>
                                        Para mais informações sobre o Google
                                        AdSense, consulte as FAQs oficiais sobre
                                        privacidade do Google AdSense.
                                    </span>
                                </li>
                                <li className="mt-2">
                                    <span>
                                        Utilizamos anúncios para compensar os
                                        custos de funcionamento deste site e
                                        fornecer financiamento para futuros
                                        desenvolvimentos. Os cookies de
                                        publicidade comportamental usados ​​por
                                        este site foram projetados para garantir
                                        que você forneça os anúncios mais
                                        relevantes sempre que possível,
                                        rastreando anonimamente seus interesses
                                        e apresentando coisas semelhantes que
                                        possam ser do seu interesse.
                                    </span>
                                </li>
                                <li className="mt-2">
                                    <span>
                                        Vários parceiros anunciam em nosso nome
                                        e os cookies de rastreamento de
                                        afiliados simplesmente nos permitem ver
                                        se nossos clientes acessaram o site
                                        através de um dos sites de nossos
                                        parceiros, para que possamos creditá-los
                                        adequadamente e, quando aplicável,
                                        permitir que nossos parceiros afiliados
                                        ofereçam qualquer promoção que pode
                                        fornecê-lo para fazer uma compra.
                                    </span>
                                </li>
                            </ul>
                        </span>
                    </p>
                    <div className="mt-6 text-center">
                        <span className="text-lg font-semibold">
                            Compromisso do Usuário
                        </span>
                    </div>
                    <p className="mt-2">
                        <span>
                            O usuário se compromete a fazer uso adequado dos
                            conteúdos e da informação que o{' '}
                            <span className="font-bold">
                                {' '}
                                Easy Notes Platform
                            </span>{' '}
                            oferece no site e com caráter enunciativo, mas não
                            limitativo:
                        </span>
                    </p>
                    <ul className="mt-2">
                        <li>
                            <span>
                                <span className="font-bold">A</span> - Não se
                                envolver em atividades que sejam ilegais ou
                                contrárias à boa fé a à ordem pública;
                            </span>
                        </li>
                        <li>
                            <span>
                                <span className="font-bold">B</span> - Não
                                difundir propaganda ou conteúdo de natureza
                                racista, xenofóbica,
                            </span>
                            <span>
                                <a
                                    href="https://kiwibet.br.com"
                                    className="text-inherit no-underline"
                                >
                                    kiwibet
                                </a>
                            </span>
                            <span>
                                ou azar, qualquer tipo de pornografia ilegal, de
                                apologia ao terrorismo ou contra os direitos
                                humanos;
                            </span>
                        </li>
                        <li>
                            <span>
                                {' '}
                                <span className="font-bold">C</span> - Não
                                causar danos aos sistemas físicos (hardwares) e
                                lógicos (softwares) do{' '}
                                <span className="font-bold">
                                    {' '}
                                    Easy Notes Platform
                                </span>
                                , de seus fornecedores ou terceiros, para
                                introduzir ou disseminar vírus informáticos ou
                                quaisquer outros sistemas de hardware ou
                                software que sejam capazes de causar danos
                                anteriormente mencionados.
                            </span>
                        </li>
                    </ul>
                    <div className="mt-6 text-center">
                        <span className="text-lg font-semibold">
                            Mais informações
                        </span>
                    </div>
                    <p className="mt-2">
                        <span>
                            Esperemos que esteja esclarecido e, como mencionado
                            anteriormente, se houver algo que você não tem
                            certeza se precisa ou não, geralmente é mais seguro
                            deixar os cookies ativados, caso interaja com um dos
                            recursos que você usa em nosso site.
                        </span>
                    </p>
                    <div className="mt-6 text-center mb-8">
                        <span className="text-lg font-semibold">
                            Esta política é efetiva a partir de&nbsp;27 March
                            2024 22:58
                        </span>
                    </div>
                </div>
            </section>
        </main>
    );
}
