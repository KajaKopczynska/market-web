import React, { useEffect } from 'react'
import { Container } from '../../common/Container';
import { SectionTitle } from '../../common/SectionTitle';
import { ProductListWrapper } from './styled';
import ProductTile from './ProductTile';
import { productsLoading, selectStatus } from '../../pages/ProductPage/productsSlice';
import { useDispatch, useSelector } from 'react-redux';
import {Loading} from "../../common/status/Loading";
import { Error } from '../../common/status/Error';

const ProductList = ({ products }) => {

    const dispatch = useDispatch();

    const bestProducts = products.filter((product) => product.extra === "Best Selling Books");
    const popularProducts = products.filter((product) => product.extra === "What Everyone's Talking About");

    const stateOfLoading = useSelector(selectStatus);

    useEffect(() => {
        dispatch(productsLoading());
    }, [dispatch]);

    return (
        <>
            {stateOfLoading === "loading" ? (
                <Loading />
            ) : stateOfLoading === "error" ? (
                <Error />
            ) : (
                <Container>
                    <SectionTitle>Best Selling Books</SectionTitle>
                    <ProductListWrapper>
                        {bestProducts.map(product => (
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
                    <SectionTitle>What Everyone's Talking About</SectionTitle>
                    <ProductListWrapper>
                        {popularProducts.map(product => (
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
            )}
        </>
    );
};

export default ProductList;