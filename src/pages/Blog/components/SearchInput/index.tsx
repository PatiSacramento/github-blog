import { Input, PublicationsContainer, SearchInputContainer } from "./styled"






export const SearchInput = () => {
    return (
        <SearchInputContainer>
            <PublicationsContainer>
                <p>Publicações </p>
                <p>6 publicações</p>
            </PublicationsContainer>
            
            <Input placeholder="Buscar conteúdo"/>
        </SearchInputContainer>
    )
}