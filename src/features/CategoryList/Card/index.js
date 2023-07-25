import React from 'react'
import { CardWrapper, Image } from './styled';

const Card = ({ imgSrc, children }) => {

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

export default Card;