import React from 'react';
import { Link } from "react-router-dom";
import Card from "../Card";
import { Title } from './styled';

const Category = ({ title, imgSrc, link }) => {
    return (
        <Link to={link}>
            <Card
                imgSrc={imgSrc}
            >
                <div>
                    <Title>{title}</Title>
                </div>
            </Card>
        </Link>
    );
};

export default Category;