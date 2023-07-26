import Footer from "../common/Footer";
import CategoryList from "../features/CategoryList";
import HomeServicesBanner from "../features/HomeServicesBanner";
import MainBanner from "../features/MainBanner";
import ProductList from "../features/ProductsList";
import { categories, products } from "../productsData";

const Home = () => {

    return (
        <>
            <MainBanner />
            <HomeServicesBanner />
            <p></p>
            <CategoryList categories={categories} />
            <ProductList products={products} />
            <Footer />
        </>
    );
};

export default Home;