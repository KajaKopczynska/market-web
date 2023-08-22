import React from 'react'
// import { Link } from "react-router-dom"
import { ShoppingCart, Search, Check } from "react-feather"
// import clsx from "clsx"
import { AdditionalText, ButtonsWrapper, Image, Informations, Price, ProductLink, Subtitle, TextWrapper, TileWrapper, Title } from './styled';
import ProductButton from '../../../common/ProductButton';
import HeartButton from '../../../common/HeartButton';


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
                <ButtonsWrapper>
                    {/* {isInCart ? (
						<Link to="/cart">
							<ProductButton>
								<Check />
							</ProductButton>
						</Link>
					):(  */}
                    <ProductButton /*onClick={onAddToCart}*/ />
                    <HeartButton />
                </ButtonsWrapper>

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