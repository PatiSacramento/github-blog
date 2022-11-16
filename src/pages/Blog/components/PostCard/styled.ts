import styled from "styled-components";

export const PostCardContainer = styled.span` 
    width: 26rem;
    height: 16.25rem;

    background-color: ${props => props.theme['base-post']};
    border-radius: 10px;

    display: flex;
    flex-direction: column;
    padding: 2rem;

`

export const TitleContainer = styled.div` 
    display: flex;
    margin-bottom: 1.25rem;
  

    p:first-child {
        font-weight: 700;
        font-size: 1.25rem;
        line-height: 160%;

        color: ${props => props.theme['base-title']};
    }

    p:last-child {
        font-size: 0.875rem;
        line-height: 160%;

        color: ${props => props.theme['base-span']};
        text-align: right;
    }
`