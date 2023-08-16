import { useDispatch } from "react-redux";
import useQueryParameter, { searchQueryParamName } from "../../useQueryParameter";
import { SearchIcon, SearchInput, SearchWrapper, StyledSearchLink } from "./styled";
import { fetchSearchSuccess } from "./searchSlice";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const Search = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const query = useQueryParameter(searchQueryParamName);
    const [inputQuery, setInputQuery] = useState(query || "");

    const onInputChange = ({ target }) => {
        setInputQuery(target.value);
    };

    const onFormSubmit = (event) => {
        event.preventDefault();
        if (inputQuery.trim() !== "") {
            dispatch(fetchSearchSuccess(inputQuery));
            navigate(`/search?query=${inputQuery}`);
        }
    };

    useEffect(() => {
        const handleKeyPress = (event) => {
            if (event.key === "Enter") {
                event.preventDefault();
                onFormSubmit(event);
            }
        };

        window.addEventListener("keydown", handleKeyPress);

        return () => {
            window.removeEventListener("keydown", handleKeyPress);
        };
    }, [inputQuery]);

    return (
        <SearchWrapper onSubmit={onFormSubmit}>
            <SearchInput
                placeholder={`Search by Title or Author`}
                value={inputQuery}
                onChange={onInputChange}
            />
            <StyledSearchLink to={`/search?query=${inputQuery}`}>
                <SearchIcon />
            </StyledSearchLink>
        </SearchWrapper>
    );
};
