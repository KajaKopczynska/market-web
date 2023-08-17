import { useSearchParams } from "react-router-dom";
import { Wrapper, LoadingAnimation } from "./styled";
import { searchQueryParamName } from "../../../useQueryParameter";
import { Container } from "../../Container";
import {SectionTitle} from "../../SectionTitle";

export const Loading = () => {
    const [searchParams] = useSearchParams({ [searchQueryParamName]: "" });
    const query = searchParams.get(searchQueryParamName) || null;

    const content = query ? `Search results for "${query}"` : null;

    return (
        <>
            <Container>
                <Wrapper>
                    <SectionTitle>
                        {/* {content} */}
                        AAAAAAAAAAAAAA
                        </SectionTitle>
                    <LoadingAnimation />
                </Wrapper>
            </Container>
        </>
    );
};