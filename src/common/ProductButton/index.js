import { ShoppingCart } from "react-feather"
import { AdditionalText, ProductButtonWrapper } from "./styled";

const ProductButton = ({ productPage }) => {

    return (
        <ProductButtonWrapper productPage={productPage} /*onClick={onAddToCart}*/>
        <ShoppingCart />
        <AdditionalText productPage={productPage}>Add To Cart</AdditionalText>
      </ProductButtonWrapper>
    );
};

export default ProductButton;