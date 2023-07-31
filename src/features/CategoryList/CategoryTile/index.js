import React from 'react';
// import { Link } from "react-router-dom";

import { CategoryLink, Image, TextWrapper, TileWrapper, Title } from './styled';
import CategoryCard from '../CategoryCard';

const CategoryTile = ({ title, imgSrc, link }) => {
    return (
        <TileWrapper to={link}>
            <Image
                src={imgSrc}
                alt=""
            />
            <TextWrapper>
                    <Title>{title}</Title>
            </TextWrapper>
        </TileWrapper>
    );
};

export default CategoryTile;