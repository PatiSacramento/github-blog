import { IconsContainer, Icons, NameContainer, ProfileContainer, ProfileInfosContainer, BioText } from "./styled"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faBuilding, faUser } from "@fortawesome/free-solid-svg-icons"



export const Profile = () => {
    return (
        <ProfileContainer>
            <img src="http://github.com/PatiSacramento.png" />

            <ProfileInfosContainer>
                <NameContainer>
                    <p>Cameron Williamson</p>
                </NameContainer>

                <BioText>Tristique volutpat pulvinar vel massa, pellentesque egestas. Eu viverra massa quam dignissim aenean malesuada suscipit. Nunc, volutpat pulvinar vel mass.</BioText>

                <IconsContainer>
                    <Icons>
                        <FontAwesomeIcon icon={faGithub} size="lg" />
                        <span>cameronwll</span>
                    </Icons>
                    <Icons>
                        <FontAwesomeIcon icon={faBuilding} size="lg" />
                        <span>Rocketseat</span>
                    </Icons>
                    <Icons>
                        <FontAwesomeIcon icon={faUser} size="lg" />
                        <span>32 seguidores</span>
                    </Icons>
                </IconsContainer>

            </ProfileInfosContainer>
        </ProfileContainer>
    )
}