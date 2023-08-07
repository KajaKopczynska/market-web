import Header from "./common/Header";
import Home from "./pages/Home";
import { Route, Routes } from 'react-router-dom';
import { CreateAccount } from "./features/user/CreateAccound";
import { Login } from "./features/user/Login";
import { LoginRecover } from "./features/user/LoginRecover";
import Footer from "./common/Footer";
import { ProductPage } from "./pages/ProductPage";
import ProductListByGenre from "./features/ProductsList/ProductListByGenre";
import { products } from "./productsData";
import ProductListByType from "./features/ProductsList/ProductListByType";

function App() {

  return (
    <>
      <Header />
      <Routes>
        <Route path="/register" element={<CreateAccount />} />
        <Route path="/login-recover" element={<LoginRecover />}/>
        <Route path="/login" element={<Login />} />
        <Route path="/books-fiction" element={<ProductListByGenre products={products} genre="fiction" />} />
        <Route path="/books-nonfiction" element={<ProductListByGenre products={products} genre="nonfiction" />} />
        <Route path="/books-childrens" element={<ProductListByGenre products={products} genre="childrens" />} />
        <Route path="/books" element={<ProductListByType products={products} type="book" />} />
        <Route path="/audiobooks" element={<ProductListByType products={products} type="audiobook" />} />
        <Route path="/music" element={<h1>Cooming Soon</h1>} />
        <Route path="/games" element={<h1>Cooming Soon</h1>} />
        <Route path="/products/:id" element={<ProductPage />} />
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
