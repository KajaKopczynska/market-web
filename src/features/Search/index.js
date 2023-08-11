import { useDispatch, useSelector } from "react-redux";
import useQueryParameter, { searchQueryParamName } from "../../useQueryParameter";
import { useReplaceQueryParameter } from "../../useReplaceQueryParameter";
import { SearchIcon, SearchInput, SearchWrapper } from "./styled";
import { fetchSearchLoading, selectSearchQuery } from "./searchSlice";
import React from "react";

export const Search = () => {
    const dispatch = useDispatch();
    const query = useSelector(selectSearchQuery);
    const replaceQueryParameter = useReplaceQueryParameter();

    const onInputChange = (event) => {
        const newQuery = event.target.value.trim() !== "" ? event.target.value : "";
        replaceQueryParameter({ value: newQuery });
        dispatch(fetchSearchLoading({ query: newQuery || undefined })); // Zachowaj dotychczasową logikę, ale przekaż `undefined` tylko wtedy, gdy `newQuery` jest pusty
    };

    React.useEffect(() => {
        if (query) {
            dispatch(fetchSearchLoading({ query }));
        }
    }, [query, dispatch]);

    return (
        <>
            <SearchWrapper>
                <SearchInput
                    placeholder={`Search by Title or Author`}
                    value={query || ""}
                    onChange={onInputChange}
                />
                <SearchIcon />
            </SearchWrapper>
        </>
    );
};