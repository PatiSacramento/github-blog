import styled from "styled-components";


export const BlogContainer = styled.div`
    width: 100%;
    height: 109rem;

    position: relative;

    display: flex;
    flex-direction: column;
`

export const PostCardListContainer = styled.div` 
    position: absolute;
    top: 40rem;
    left:calc(50% - 26rem/2 - 14rem);
    
    
    display: grid;
    grid-template-columns: repeat(2, 1fr);

    width: 26rem;
    column-gap: 1.625rem;
    row-gap: 2rem;

    margin-top: 3rem;
`