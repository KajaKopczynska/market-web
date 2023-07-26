import React from 'react'
import { CardWrapper, Image } from './styled';

const CategoryCard = ({ imgSrc, children }) => {

    return (
            <CardWrapper>
                <Image
                    src={imgSrc}
                    alt=""
                />
                {children}
            </CardWrapper>
    );
};

export default CategoryCard;