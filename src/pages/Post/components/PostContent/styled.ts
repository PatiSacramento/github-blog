import styled from "styled-components";


export const PostContentContainer = styled.div` 
    width: 54rem;
    height: 26rem;
    position: absolute;
    left: calc(50% - 54rem/2);
    top: 23.5rem;

    padding: 2.5rem 2rem;
    
    > p {
        font-weight: 700;
        line-height: 160%;

        color: ${props => props.theme['base-text']};
    }
`