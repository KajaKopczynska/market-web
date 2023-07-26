import React from 'react';
// import { Link } from "react-router-dom";

import { CategoryLink, Title } from './styled';
import CategoryCard from '../CategoryCard';

const Category = ({ title, imgSrc, link }) => {
    return (
        <CategoryLink to={link}>
            <CategoryCard imgSrc={imgSrc}>
                <div>
                    <Title>{title}</Title>
                </div>
            </CategoryCard>
        </CategoryLink>
    );
};

export default Category;