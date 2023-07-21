import Footer from "../common/Footer";
import HomeServicesBanner from "../features/HomeServicesBanner";
import MainBanner from "../features/MainBanner";
import { CreateAccount } from "../features/user/CreateAccound";

const Home = () => {

    return (
        <>
            <MainBanner />
            <HomeServicesBanner />
            <p></p>
            <CreateAccount />

            <Footer />
        </>
    );
};

export default Home;