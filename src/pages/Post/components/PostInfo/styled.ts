import styled from "styled-components";


export const PostInfoContainer = styled.div` 
    width: 54rem;
    height: 10.5rem;
      
    position: absolute;
    top: 13rem;
    left: calc(50% - 54rem/2);

    background-color: ${props => props.theme['base-profile']};
    box-shadow: 0px 2px 28px rgba(0, 0, 0, 0.2);
    border-radius: 10px;

    display: flex;
    flex-direction: column;
`

export const AnchorsContainer = styled.div` 
    display: flex;
    justify-content: space-between;
    
    margin: 2rem 2rem 1.25rem;
`

export const Title = styled.p` 
    width: 50rem;

    font-weight: 700;
    font-size: 1.5rem;
    line-height: 130%;
    margin-left: 2rem;
    
    color: ${props => props.theme['base-title']};
`

export const IconsContainer = styled.div`
    height: 1.625rem;
    width: 26rem;

    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-left: 2rem;
    margin-top: 0.5rem;

    color: ${props => props.theme['base-span']};
   
`

export const Icons = styled.span` 
    display: flex;
    align-items: center;
    gap: 0.5rem;
    
`

export const Links = styled.div` 
    display: flex;
    align-items: center;
    gap: 0.5rem;

    color: ${props => props.theme['blue']};
    text-transform: uppercase;
    font-weight: 700;
    font-size: 0.75rem;
    line-height: 160%;
`