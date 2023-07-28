import React from 'react'
// import { Link } from "react-router-dom"
import { ShoppingCart, Search, Check } from "react-feather"
// import clsx from "clsx"

import Card from "../../CategoryList/CategoryCard"; /*component to move*/
import { AdditionalText, Image, Informations, Price, ProductButton, ProductLink, Subtitle, TextWrapper, TileWrapper, Title } from './styled';
import ProductCard from '../ProductCard';

const ProductTile = ({ link, imgSrc, price, title, author/*, onAddToCart, isInCart*/ }) => {
    return (
        <TileWrapper to={link}>
            <Image
                src={imgSrc}
                alt=""
            />
            <TextWrapper>
                <Informations>
                    <Title>{title}</Title>
                    <Subtitle>{author}</Subtitle>
                    <Price>${price}</Price>
                </Informations>
                {/* {isInCart ? (
						<Link to="/cart">
							<ProductButton>
								<Check />
							</ProductButton>
						</Link>
					):(  */}
                <ProductButton /*onClick={onAddToCart}*/>
                    <ShoppingCart />
                    <AdditionalText>Add To Basket</AdditionalText>
                </ProductButton>
                {/* )} */}
            </TextWrapper>

        </TileWrapper>
    );
};

// function ProductButton({ children, className, ...props }) {
// 	return (
// 		<button className={`m-6 bg-white w-12 h-12 flex justify-center items-center rounded-full transition-all duration-300 ease-out hover:(px-14) focus:outline-none ${className}`} {...props}>
// 			{children}
// 		</button>
// 	);
// };

export default ProductTile;