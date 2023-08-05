import React from 'react';
import { Container } from '../../../common/Container';
import { SectionTitle } from '../../../common/SectionTitle';
import ProductTile from '../ProductTile';
import { ProductListWrapper } from '../styled';

const ProductListByGenre = ({ products, genre }) => {
    const filteredProducts = products.filter(product => product.genre === genre);

    return (
        <>
            <Container>
                <SectionTitle>{genre === "fiction" ? "Fiction Books" : genre === "nonfiction" ? "Nonfiction Books" : "Children's Books"}</SectionTitle>
                <ProductListWrapper>
                    {filteredProducts.map(product => (
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

export default ProductListByGenre;
