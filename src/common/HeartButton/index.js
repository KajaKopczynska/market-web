import { useState } from "react";
import { ProductButtonWrapper, StyledClipboardIcon, StyledClipboardIconHover } from "./styled";

const HeartButton = ({ productPage }) => {
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    return (
        <ProductButtonWrapper productPage={productPage} /*onClick={onAddToCart}*/>
            <StyledClipboardIcon
                className={isHovered ? "hovered" : ""}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
            />
            <StyledClipboardIconHover
                className={isHovered ? "" : "hovered"}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
            />
        </ProductButtonWrapper>
    );
};

export default HeartButton;