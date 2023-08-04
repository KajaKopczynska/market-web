import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { Container } from "../../common/Container";
import { Details, Image, Info1, Info2, Label, Price, ProductPageWrapper, Subtitle, Summary, SummaryTitle, Title } from "./styled";
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
                <Info1>
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
                </Info1>
                <Info2>
                    {product.price && <Price>${product.price}</Price>}
                    <QuantitySelector quantity={quantity} onQuantityChange={handleQuantityChange} />
                    <ProductButton productPage /*onClick={onAddToCart}*/ />
                </Info2>
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
