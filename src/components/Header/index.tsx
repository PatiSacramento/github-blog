import { Effects, HeaderContainer, Logo } from "./styled"
import effectLeft from '../../assets/effect-left.svg'
import effectRight from '../../assets/effect-right.svg'
import logo from '../../assets/Logo.png'



export const Header = () => {
    return (
        <HeaderContainer>
            <span>
                <Effects src={effectLeft} />
                <Logo src={logo} />
                <Effects src={effectRight} />
            </span>
            
        </HeaderContainer>
    )
}