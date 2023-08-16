import { useDispatch, useSelector } from "react-redux";
import useQueryParameter, { searchQueryParamName } from "../../useQueryParameter";
import { useReplaceQueryParameter } from "../../useReplaceQueryParameter";
import { SearchIcon, SearchInput, SearchWrapper, StyledSearchLink } from "./styled";
import { fetchSearchLoading, fetchSearchSuccess, selectSearchQuery } from "./searchSlice";
import React from "react";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";

export const Search = () => {
    const dispatch = useDispatch();

    const query = useQueryParameter(searchQueryParamName);
    const replaceQueryParameter = useReplaceQueryParameter();

    const onInputChange = ({ target }) => {
        replaceQueryParameter({
            key: searchQueryParamName,
            value: target.value.trim() !== "" ? target.value : undefined,
        });
    };

    const onFormSubmit = (event) => {
        event.preventDefault();
        dispatch(fetchSearchSuccess(query));
    };

    return (
        <>
            <SearchWrapper onSubmit={onFormSubmit}>
                <SearchInput
                    placeholder={`Search by Title or Author`}
                    value={query || ""}
                    onChange={onInputChange}
                />
                <StyledSearchLink to={`/search?query=${query}`}>
                    <SearchIcon />
                </StyledSearchLink>
            </SearchWrapper>
        </>
    );
};