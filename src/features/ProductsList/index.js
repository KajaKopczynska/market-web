import React/*, { useContext }*/ from 'react'
import { Container } from '../../common/Container';
import { SectionTitle } from '../../common/SectionTitle';
import { ProductListWrapper } from './styled';
import ProductTile from './ProductTile';
// import { CartContext } from "@/App"

const ProductList = ({ products }) => {
    // const { cart } = useContext(CartContext)

    return (
        <>
            <Container>
                <SectionTitle>Best Selling Books</SectionTitle>
                <ProductListWrapper>
                    {products.map(product => (
                        <ProductTile
                            key={product.id}
                            imgSrc={product.image}
                            title={product.title}
                            author={product.author}
                            price={product.price}
                            link={`/products/${product.id}`}
                        // onAddToCart={() => onAddToCart(product)}
                        // isInCart={cart.products.some(p => p.id === product.id)}
                        />
                    ))}
                </ProductListWrapper>
            </Container>
        </>
    );
};

export default ProductList;