import { ButtonStyled } from "./styled";
import { Link } from '@mui/material'

function ButtonImageLink({ imageSource, altName, hRef, buttonName }) {
    return (
        <ButtonStyled>

            <img src={imageSource} alt={altName} />
            <Link href={hRef} >{buttonName}</Link>

        </ButtonStyled>
    )
}

export { ButtonImageLink }