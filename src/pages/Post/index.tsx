import { Header } from "../../components/Header"
import { PostContent } from "./components/PostContent"
import { PostInfo } from "./components/PostInfo"
import { PostContainer } from "./styled"






export const Post = () => {
    return(
        <PostContainer>
            <Header />
            <PostInfo />
            <PostContent />
        </PostContainer>
    )
}