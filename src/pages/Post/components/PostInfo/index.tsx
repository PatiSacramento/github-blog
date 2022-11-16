import { AnchorsContainer, Icons, IconsContainer, Links, PostInfoContainer, Title } from "./styled"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faCalendarDay, faComment, faChevronLeft, faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons"




export const PostInfo = () => {
    return (
        <PostInfoContainer>
            <AnchorsContainer>
                <Links>
                    <FontAwesomeIcon icon={faChevronLeft} />
                    <a>Voltar</a>
                </Links>

                <Links>
                    <a>Github</a>
                    <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                </Links>
            </AnchorsContainer>

            <Title>
                JavaScript data types and data structures
            </Title>
            <IconsContainer>
                <Icons>
                    <FontAwesomeIcon icon={faGithub} size="lg" />
                    <span>cameronwll</span>
                </Icons>
                <Icons>
                    <FontAwesomeIcon icon={faCalendarDay} size="lg" />
                    <span>Há 1 dia</span>
                </Icons>
                <Icons>
                    <FontAwesomeIcon icon={faComment} size="lg" />
                    <span>5 comentários</span>
                </Icons>
            </IconsContainer>

        </PostInfoContainer>
    )
}