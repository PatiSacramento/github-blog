import styled from "styled-components";

export const ProfileContainer = styled.div`
    width: 54rem;
    height: 13.25rem;
  
    position: absolute;
    top: 13rem;
    left: calc(50% - 54rem/2);

    background-color: ${props => props.theme['base-profile']};
    box-shadow: 0px 2px 28px rgba(0, 0, 0, 0.2);
    border-radius: 10px;

    display: flex;
    gap: 2rem;


   img { 
        width: 9.25rem;
        height: 9.25rem;

        margin-top: 2rem;
        margin-left: 2.5rem;
        margin-bottom: 2rem;

        border-radius: 8px;
   }
`

export const ProfileInfosContainer = styled.div` 
    display: flex;
    flex-direction: column;
`

export const NameContainer = styled.div` 
    margin-top: 2.5rem;

    p {
        font-weight: 700;
        font-size: 1.5rem;
        line-height: 130%;
        color: ${props => props.theme['base-title']};
    }
`

export const IconsContainer = styled.span`
    height: 1.625rem;
    width: 24.5rem;
   
    
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 0.5rem;
   
`

export const Icons = styled.span` 
    display: flex;
    height: 100%;

    align-items: center;
    gap: 0.5rem;
    
       
`

export const BioText = styled.p` 
    margin-top: 0.5rem;
    margin-bottom: 1.5rem;
`