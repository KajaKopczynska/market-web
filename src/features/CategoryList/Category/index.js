import React from 'react';
// import { Link } from "react-router-dom";
import Card from "../Card";
import { CategoryLink, Title } from './styled';

const Category = ({ title, imgSrc, link }) => {
    return (
        <CategoryLink to={link}>
            <Card imgSrc={imgSrc}>
                <div>
                    <Title>{title}</Title>
                </div>
            </Card>
        </CategoryLink>
    );
};

export default Category;