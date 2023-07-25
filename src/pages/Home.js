import Footer from "../common/Footer";
import CategoryList from "../features/CategoryList";
import HomeServicesBanner from "../features/HomeServicesBanner";
import MainBanner from "../features/MainBanner";
import { categories } from "../productsData";

const Home = () => {

    return (
        <>
            <MainBanner />
            <HomeServicesBanner />
            <p></p>
            <CategoryList categories={categories} />
            <Footer />
        </>
    );
};

export default Home;