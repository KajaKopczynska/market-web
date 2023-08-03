import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { Container } from "../../common/Container";
import { Details, Image, Information, Label, Price, ProductPageWrapper, Subtitle, Summary, SummaryLabel, SummaryTitle, Title } from "./styled";
import { getProductById } from "./productsSlice";
import ProductButton from "../../common/ProductButton";
import QuantitySelector from "./QuantitySelector";
import { useState } from "react";

export const ProductPage = () => {
    const { id } = useParams();
    const productId = parseInt(id);
    const product = useSelector((state) => getProductById(state, productId));

    const [quantity, setQuantity] = useState(1);
    const handleQuantityChange = (newQuantity) => {
        setQuantity(newQuantity);
    };



    // console.log(product);

    // if (!product) {
    //     return <div>Produkt o podanym ID nie został znaleziony. {id}</div>;
    // }

    return (
        <Container>
            <ProductPageWrapper>
                <Image src={product.image} alt="" />
                <div>
                    <Information>
                        {product.title && <Title>{product.title}</Title>}
                        {product.author && <Subtitle>{product.author}</Subtitle>}
                        <Details>
                            {product.published && (
                                <div>
                                    <Label>Published:</Label>
                                    {product.published}
                                </div>
                            )}
                            {product.pages && (
                                <div>
                                    <Label>Pages:</Label>
                                    {product.pages}
                                </div>
                            )}
                            {product.binding && (
                                <div>
                                    <Label>Binding:</Label>
                                    {product.binding}
                                </div>
                            )}
                        </Details>
                        {product.price && <Price>${product.price}</Price>}
                        <QuantitySelector quantity={quantity} onQuantityChange={handleQuantityChange} />
                        <ProductButton /*onClick={onAddToCart}*/ />
                    </Information>
                </div>
                {product.summary && (
                    <Summary>
                        <SummaryTitle>Summary</SummaryTitle>
                        {product.summary}
                    </Summary>
                )}
            </ProductPageWrapper>
        </Container>
    );
};
