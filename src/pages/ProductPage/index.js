import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { Container } from "../../common/Container";
import { Title } from "./styled";
import { getProductById } from "./productsSlice";

export const ProductPage = () => {
    const { id } = useParams();
    const product = useSelector((state) => getProductById(state, id));
    console.log(product);

    if (!product) {
        return <div>Produkt o podanym ID nie został znaleziony. {id}</div>;
    }

    return (
        <Container>
            <Title>{product.title}</Title>
            <p>{product.author}</p>
            <p>{product.price}</p>
        </Container>
    );
};
