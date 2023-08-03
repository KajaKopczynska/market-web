import { ShoppingCart } from "react-feather"
import { AdditionalText, ProductButtonWrapper } from "./styled";

const ProductButton = () => {

    return (
        <ProductButtonWrapper /*onClick={onAddToCart}*/>
            <ShoppingCart />
            <AdditionalText>Add To Cart</AdditionalText>
        </ProductButtonWrapper>
    );
};

export default ProductButton;