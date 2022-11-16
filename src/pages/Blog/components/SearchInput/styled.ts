import styled from "styled-components";

export const SearchInputContainer = styled.div`
    width: 54rem;
    
    position: absolute;
    left: calc(50% - 54rem/2);
    top: 33rem;
`

export const Input = styled.input` 
    width: 100%;
    height: 3.125rem;
    padding: 0.75rem 1rem;
    
    background-color: ${props => props.theme['base-input']};

    border: 1px solid ${props => props.theme['base-border']};
    border-radius: 6px;
    
    color: ${props => props.theme['base-label']};
    

    &::placeholder{
        color: ${props => props.theme['base-label']};
    }
`

export const PublicationsContainer = styled.div`
    width: 54rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1.5rem;

    p:first-child {
        font-weight: 700;
        font-size: 1.125rem;
        line-height: 160%;

        color: ${props => props.theme['base-subtitle']}
    }

    p:last-child {
        font-size: 0.875rem;
        line-height: 160%;

        color: ${props => props.theme['base-span']};
    }
`