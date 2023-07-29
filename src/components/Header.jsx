import { BackgroundHeader, HeaderContainer } from "../styles";
import Logo from "../nyatri_logo.png"

const Header = () => (
    <BackgroundHeader>
        <HeaderContainer>
            <img src={Logo} style={{height: '50px'}}></img>
            NYATRI 
        </HeaderContainer>
    </BackgroundHeader>
)

export default Header;

