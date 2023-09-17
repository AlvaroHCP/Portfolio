import FooterStyled from "./styled";
// import  from 'react-bootstrap/Col'
import { InfoAlvaroRodape } from "../InfoAlvaroRodape";
import { ButtonImageLink } from "../Button/ButtonImageLink";

function Footer() {
    return (
        <FooterStyled>
            <InfoAlvaroRodape />

            <ButtonImageLink
                buttonName={"alvarohpimentel"}
                hRef={"https://www.linkedin.com/in/alvarohpimentel"}
                altName={"LinkedIn Logo"}
                imageSource={"https://img.icons8.com/?size=512&id=13930&format=png"}
            />

            <ButtonImageLink
                buttonName={"AlvaroHCP"}
                hRef={"https://github.com/AlvaroHCP"}
                altName={"GitHub Logo"}
                imageSource={"https://img.icons8.com/?size=512&id=12599&format=png"}
            />

        </FooterStyled>
    )
}

export { Footer }