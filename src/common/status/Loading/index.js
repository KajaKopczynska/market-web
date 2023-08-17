import { useSearchParams } from "react-router-dom";
import { Wrapper, LoadingAnimation } from "./styled";
import { searchQueryParamName } from "../../../useQueryParameter";
import { Container } from "../../Container";
import { SectionTitle } from "../../SectionTitle";

export const Loading = () => {
    const [searchParams] = useSearchParams({ [searchQueryParamName]: "" });
    const query = searchParams.get(searchQueryParamName) || null;

    const content = query ? `Search Results for "${query}"` : null;

    return (
        <>
            <Container>
                <Wrapper>
                    <SectionTitle>
                        {content}
                    </SectionTitle>
                    <LoadingAnimation />
                </Wrapper>
            </Container>
        </>
    );
};