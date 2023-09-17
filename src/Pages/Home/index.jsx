import { Header } from '../../components/Header'
import { Footer } from '../../components/Footer'
import { HomeStyled } from './styled'

function Home() {
    return (
        <div>
            <Header />

            <HomeStyled>
                {/* <ButtonImageRoutes /> */}

                <h2>Alvaro Henrique C Pimentel:</h2>
                <p>
                    Full-Stack Dev, Programador, e Físico Quântico Experimental.
                </p>

                <h2>Algumas qualidades:</h2>
                <p>
                    <ul>
                        <li>Programação,</li>
                        <li>Física,</li>
                        <li>Estatística,</li>
                        <li>Auto-gestão,</li>
                        <li>Determinação</li>
                    </ul>
                </p>
                <h2>Algumas Experiências:</h2>
                <p>
                    Participei de projetos de elaboração de protocolos experimentais de comunicação
                    utilizando técnicas de mecânica quântica e desenvolvi vários sistemas de captação de dados, assim como de análise de dados.
                </p>

            </HomeStyled>

            <Footer />
        </div>
    )
}

export { Home }