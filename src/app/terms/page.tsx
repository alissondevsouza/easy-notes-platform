import { ModeToggle } from '@/app/_components/mode-toggle';
import Logo from '@/assets/logo.svg';
import Image from 'next/image';
import Link from 'next/link';

export default function TermsPage() {
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
                    <div className="text-center mt-6 mb-4">
                        <span className="text-2xl font-bold">
                            Termos de Uso
                        </span>
                    </div>
                    <h2>
                        <span className="text-lg font-semibold">1. Termos</span>
                    </h2>
                    <p className="mt-2">
                        <span>
                            Ao acessar ao site{' '}
                            <span className="font-bold">
                                {' '}
                                Easy Notes Platform
                            </span>
                            , concorda em cumprir estes termos de serviço, todas
                            as leis e regulamentos aplicáveis ​​e concorda que é
                            responsável pelo cumprimento de todas as leis locais
                            aplicáveis. Se você não concordar com algum desses
                            termos, está proibido de usar ou acessar este site.
                            Os materiais contidos neste site são protegidos
                            pelas leis de direitos autorais e marcas comerciais
                            aplicáveis.
                        </span>
                    </p>
                    <h2 className="mt-6">
                        <span className="text-lg font-semibold">
                            2. Uso de Licença
                        </span>
                    </h2>
                    <p className="mt-2">
                        <span>
                            É concedida permissão para baixar temporariamente
                            uma cópia dos materiais (informações ou software) no
                            site{' '}
                            <span className="font-bold">
                                {' '}
                                Easy Notes Platform
                            </span>{' '}
                            , apenas para visualização transitória pessoal e não
                            comercial. Esta é a concessão de uma licença, não
                            uma transferência de título e, sob esta licença,
                            você não pode:
                        </span>
                    </p>
                    <ol className="mt-1 ml-2">
                        <li>
                            <span>
                                <span className="font-semibold"> 1 </span> -
                                modificar ou copiar os materiais;
                            </span>
                        </li>
                        <li>
                            <span>
                                <span className="font-semibold"> 2 </span> -
                                usar os materiais para qualquer finalidade
                                comercial ou para exibição pública comercial ou
                                não comercial;
                            </span>
                        </li>
                        <li>
                            <span>
                                <span className="font-semibold"> 3 </span> -
                                tentar descompilar ou fazer engenharia reversa
                                de qualquer software contido no site{' '}
                                <span className="font-bold">
                                    {' '}
                                    Easy Notes Platform
                                </span>
                                ;
                            </span>
                        </li>
                        <li>
                            <span>
                                <span className="font-semibold"> 4 </span> -
                                remover quaisquer direitos autorais ou outras
                                notações de propriedade dos materiais;
                            </span>
                        </li>
                        <li>
                            <span>
                                <span className="font-semibold"> 5 </span> -
                                transferir os materiais para outra pessoa ou
                                'espelhe' os materiais em qualquer outro
                                servidor.
                            </span>
                        </li>
                    </ol>
                    <p className="mt-1">
                        <span>
                            Esta licença será automaticamente rescindida se você
                            violar alguma dessas restrições e poderá ser
                            rescindida por{' '}
                            <span className="font-bold">
                                {' '}
                                Easy Notes Platform
                            </span>{' '}
                            a qualquer momento. Ao encerrar a visualização
                            desses materiais ou após o término desta licença,
                            você deve apagar todos os materiais baixados em sua
                            posse, seja em formato eletrónico ou impresso.
                        </span>
                    </p>
                    <h2 className="mt-6">
                        <span className="text-lg font-semibold">
                            3. Isenção de responsabilidade
                        </span>
                    </h2>
                    <ol className="mt-2">
                        <li>
                            <span>
                                Os materiais no site da{' '}
                                <span className="font-bold">
                                    {' '}
                                    Easy Notes Platform
                                </span>{' '}
                                são fornecidos 'como estão'.{' '}
                                <span className="font-bold">
                                    {' '}
                                    Easy Notes Platform
                                </span>{' '}
                                não oferece garantias, expressas ou implícitas,
                                e, por este meio, isenta e nega todas as outras
                                garantias, incluindo, sem limitação, garantias
                                implícitas ou condições de comercialização,
                                adequação a um fim específico ou não violação de
                                propriedade intelectual ou outra violação de
                                direitos.
                            </span>
                        </li>
                        <li className="mt-1">
                            <span>
                                Além disso, o Easy Notes Pltform não garante ou
                                faz qualquer representação relativa à precisão,
                                aos resultados prováveis ​​ou à confiabilidade
                                do uso dos materiais em seu site ou de outra
                                forma relacionado a esses materiais ou em sites
                                vinculados a este site.
                            </span>
                        </li>
                    </ol>
                    <h2 className="mt-6">
                        <span className="text-lg font-semibold">
                            4. Limitações
                        </span>
                    </h2>
                    <p className="mt-2">
                        <span>
                            Em nenhum caso o{' '}
                            <span className="font-bold">
                                {' '}
                                Easy Notes Platform
                            </span>{' '}
                            ou seus fornecedores serão responsáveis ​​por
                            quaisquer danos (incluindo, sem limitação, danos por
                            perda de dados ou lucro ou devido a interrupção dos
                            negócios) decorrentes do uso ou da incapacidade de
                            usar os materiais em{' '}
                            <span className="font-bold">
                                {' '}
                                Easy Notes Platform
                            </span>
                            , mesmo que{' '}
                            <span className="font-bold">
                                {' '}
                                Easy Notes Platform
                            </span>{' '}
                            ou um representante autorizado da{' '}
                            <span className="font-bold">
                                {' '}
                                Easy Notes Platform
                            </span>{' '}
                            tenha sido notificado oralmente ou por escrito da
                            possibilidade de tais danos. Como algumas
                            jurisdições não permitem limitações em garantias
                            implícitas, ou limitações de responsabilidade por
                            danos conseqüentes ou incidentais, essas limitações
                            podem não se aplicar a você.
                        </span>
                    </p>
                    <h2 className="mt-6">
                        <span className="text-lg font-semibold">
                            5. Precisão dos materiais
                        </span>
                    </h2>
                    <p className="mt-2">
                        <span>
                            Os materiais exibidos no site da{' '}
                            <span className="font-bold">
                                {' '}
                                Easy Notes Platform
                            </span>{' '}
                            podem incluir erros técnicos, tipográficos ou
                            fotográficos.{' '}
                            <span className="font-bold">
                                {' '}
                                Easy Notes Platform
                            </span>{' '}
                            não garante que qualquer material em seu site seja
                            preciso, completo ou atual.{' '}
                            <span className="font-bold">
                                {' '}
                                Easy Notes Platform
                            </span>{' '}
                            pode fazer alterações nos materiais contidos em seu
                            site a qualquer momento, sem aviso prévio. No
                            entanto,{' '}
                            <span className="font-bold">
                                {' '}
                                Easy Notes Platform
                            </span>{' '}
                            não se compromete a atualizar os materiais.
                        </span>
                    </p>
                    <h2 className="mt-6">
                        <span className="text-lg font-semibold"> 6. Links</span>
                    </h2>
                    <p className="mt-2">
                        <span>
                            O{' '}
                            <span className="font-bold">
                                {' '}
                                Easy Notes Platform
                            </span>{' '}
                            não analisou todos os sites vinculados ao seu site e
                            não é responsável pelo conteúdo de nenhum site
                            vinculado. A inclusão de qualquer link não implica
                            endosso por{' '}
                            <span className="font-bold">
                                {' '}
                                Easy Notes Platform
                            </span>{' '}
                            do site. O uso de qualquer site vinculado é por
                            conta e risco do usuário.
                        </span>
                    </p>
                    <h2 className="mt-6">
                        <span className="text-lg font-semibold">
                            {' '}
                            7. Modificações
                        </span>
                    </h2>
                    <p className="mt-2">
                        <span>
                            O{' '}
                            <span className="font-bold">
                                {' '}
                                Easy Notes Platform
                            </span>{' '}
                            pode revisar estes termos de serviço do site a
                            qualquer momento, sem aviso prévio. Ao usar este
                            site, você concorda em ficar vinculado à versão
                            atual desses termos de serviço.
                        </span>
                    </p>
                    <h2 className="mt-6">
                        <span className="text-lg font-semibold">
                            {' '}
                            8. Lei aplicável
                        </span>
                    </h2>
                    <p className="mb-6 mt-2">
                        <span>
                            Estes termos e condições são regidos e interpretados
                            de acordo com as leis do{' '}
                            <span className="font-bold">
                                {' '}
                                Easy Notes Platform
                            </span>{' '}
                            e você se submete irrevogavelmente à jurisdição
                            exclusiva dos tribunais naquele estado ou
                            localidade.
                        </span>
                    </p>
                </div>
            </section>
        </main>
    );
}
