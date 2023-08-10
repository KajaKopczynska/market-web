import { Container } from "../../common/Container";
import { SectionTitle } from "../../common/SectionTitle";
import { CenteredContainer, SectionSubtitle, StyledToolsIcon } from "./styled";

const UnderConstruction = () => {
    return (
        <Container>
            <SectionTitle>
                Comming Soon!
            </SectionTitle>
            <SectionSubtitle>
                Site Under Construction
            </SectionSubtitle>
            <CenteredContainer>
                <StyledToolsIcon />
            </CenteredContainer>
        </Container>
    );
};

export default UnderConstruction;