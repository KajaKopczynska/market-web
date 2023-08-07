import React from 'react';
import { Container } from '../../../common/Container';
import { SectionTitle } from '../../../common/SectionTitle';
import ProductTile from '../ProductTile';
import { ProductListWrapper } from '../styled';

const ProductListByType = ({ products, type }) => {
    const filteredProductsType = products.filter(product => product.type === type);

    return (
        <>
            <Container>
                <SectionTitle type>{type === "book" ? "Books" : type === "audiobook" ? "Audiobooks" : type === "music" ? "Music" : "Games"}</SectionTitle>
                <ProductListWrapper>
                    {filteredProductsType.map(product => (
                        <ProductTile
                            key={product.id}
                            imgSrc={product.image}
                            title={product.title}
                            author={product.author}
                            price={product.price}
                            link={`/products/${product.id}`}
                        />
                    ))}
                </ProductListWrapper>
            </Container>
        </>
    );
};

export default ProductListByType;