import useQueryParameter, { searchQueryParamName } from "../../useQueryParameter";
import { useReplaceQueryParameter } from "../../useReplaceQueryParameter";
import { SearchIcon, SearchInput, SearchWrapper } from "./styled";

export const Search = () => {

    const query = useQueryParameter(searchQueryParamName);
    const replaceQueryParameter = useReplaceQueryParameter();

    const oninputChange = ({ target }) => {
        replaceQueryParameter([
            {
                key: searchQueryParamName,
                value: target.value.trim() !== "" ? target.value : undefined,
            },
        ]);
    };

    return (
        <>
            <SearchWrapper>
                <SearchInput
                    placeholder={`Search by Title, ISBN or Keyword`}
                    value={query || ""}
                    onChange={oninputChange}
                />
                <SearchIcon />
            </SearchWrapper>
        </>
    );
};