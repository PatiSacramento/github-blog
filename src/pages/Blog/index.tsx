import { Header } from "../../components/Header"
import { PostCard } from "./components/PostCard"
import { Profile } from "./components/Profile"
import { SearchInput } from "./components/SearchInput"
import { BlogContainer, PostCardListContainer } from "./styled"



export const Blog = () => { 
    return(
        <BlogContainer>
            <Header />
            <Profile />
            <SearchInput />
            
            <PostCardListContainer>
                <PostCard />
                <PostCard />
                <PostCard />
                <PostCard />
            </PostCardListContainer>
            
        </BlogContainer>
        
    )
}