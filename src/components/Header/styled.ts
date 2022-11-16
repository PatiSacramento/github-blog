import styled from 'styled-components'


export const HeaderContainer = styled.header` 
    width: 100%;
    height: 18.5rem;
    background-color: ${props => props.theme['base-profile']};

    span { 
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

`

export const Effects = styled.img` 
    margin: 1.875rem 0;
`

export const Logo = styled.img` 
    margin-bottom: 2.875rem 
`