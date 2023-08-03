import { ShoppingCart } from "react-feather"
import { AdditionalText, ProductButtonWrapper } from "./styled";

const ProductButton = ({productPage}) => {

    return (
        <ProductButtonWrapper productPage /*onClick={onAddToCart}*/>
            <ShoppingCart />
            <AdditionalText productPage>Add To Cart</AdditionalText>
        </ProductButtonWrapper>
    );
};

export default ProductButton;