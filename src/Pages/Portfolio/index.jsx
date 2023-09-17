import { Header } from '../../components/Header'
import { Footer } from '../../components/Footer'
import { HomeStyled } from './styled'

export function Portfolio() {
    return (
        <>
            <Header></Header>

            <HomeStyled>

                <h2>
                    Projetos desenvolvidos:
                </h2>
                <ul>
                    <li>
                        Sistema de análise de dados, plot de dados adquiridos, ajuste de curvas estatísticas, análise
                        de erros e investigação de padrões matemáticos nos dados lidos - Desenvolvido em Mathematica
                        (C++ / Java)
                    </li>
                    <li>
                        Sistema de aquisição de dados experimentais de lasers para calibração e medidas - Desenvolvido
                        em LabView
                    </li>
                    <li>
                        Sistemas de análise de dados utilizando biblioteca Pandas, e computação
                        quântica utilizando a biblioteca QisKit - Desenvolvido em Python
                    </li>
                    <li>
                        Software de identificação de padrões de imagens em escala de cinza, e criação de imagens
                        para aplicação a sistemas de laser - Desenvolvido em ImageJ
                    </li>
                    <li>
                        Variados sistemas de propósitos multifuncionais como leitura e escrita de arquivos
                        de dados experimentais, simulações matemáticas de Monte-Carlo, Runge-Kuhta, etc.
                        - Desenvolvido em C
                    </li>
                </ul>


            </HomeStyled>

            <Footer></Footer>
        </>
    )
}