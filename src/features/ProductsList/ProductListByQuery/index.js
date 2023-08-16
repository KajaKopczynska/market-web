import React from 'react';
import { Container } from '../../../common/Container';
import { SectionTitle } from '../../../common/SectionTitle';
import ProductTile from '../ProductTile';
import { ProductListWrapper } from '../styled';
import { useSearchParams } from 'react-router-dom';

const ProductListByQuery = ({ products }) => {
    const [searchParams] = useSearchParams();
    const query = searchParams.get('query') || '';

    const filteredProducts = products.filter(product =>
        product.title.toLowerCase().includes(query.toLowerCase()) ||
        product.author.toLowerCase().includes(query.toLowerCase())
    );

    return (
        <>
            {filteredProducts.length === 0 ? (
                <SectionTitle>Sorry, there are no results for "{query}" 😞</SectionTitle>
            ) : (
                <Container>
                    <SectionTitle>Search Results for "{query}"</SectionTitle>
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
            )}
        </>
    );
};

export default ProductListByQuery;
