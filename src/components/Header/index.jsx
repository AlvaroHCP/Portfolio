import { HeaderStyled } from './styled'
import { Grid } from '@mui/material'
import { ButtonImageRoutes } from '../Button/ButtonImageRoutes';

function Header() {

    const toggleMode = () => {
        alert("Changing Mode!")
        // setMode(mode === 'dark' ? 'light' : 'dark');
    };

    return (
        <>
            <HeaderStyled>
                {/* <Grid container
                    justifyContent={"space-between"}
                >
                    <Grid
                        textAlign={"center"}
                        xs={3}
                    >
                        <p>Início</p>
                    </Grid>
                    <Grid
                        textAlign={"center"}
                        xs={3}
                    >
                        <p>Sobre Mim</p>
                    </Grid>
                </Grid> */}



                <Grid container
                    width={'85%'}
                    justifyItems={"center"}
                    display={'grid'}
                    gap={1}
                    gridTemplateColumns={{
                        xs: 'repeat(3, 1fr)',
                    }}
                >
                    <ButtonImageRoutes
                        imageSource={"https://img.icons8.com/?size=512&id=14096&format=png"}
                        altName={"Icone Home"}
                        route={"/"}
                        buttonName={"Início"}
                    />

                    <ButtonImageRoutes
                        imageSource={"https://img.icons8.com/?size=512&id=23400&format=png"}
                        altName={"Icone Pessoa"}
                        route={"/sobre"}
                        buttonName={"Sobre Mim"}
                    />

                    <ButtonImageRoutes
                        imageSource={"https://img.icons8.com/?size=512&id=9emOgiekluvM&format=png"}
                        altName={"Icone Projetos"}
                        route={"/projetos"}
                        buttonName={"Meus Projetos"}
                    />
                </Grid>

                <button onClick={toggleMode}>
                    <img
                        src="https://img.icons8.com/?size=512&id=AzYziyKyf28h&format=png"
                        alt="Dark Mode" />
                </button>

            </HeaderStyled >
        </>
    )
}

export { Header }