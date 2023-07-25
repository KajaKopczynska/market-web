import Header from "./common/Header";
import Home from "./pages/Home";
import { Route, Routes } from 'react-router-dom';
import { CreateAccount } from "./features/user/CreateAccound";
import { Login } from "./features/user/Login";
import { LoginRecover } from "./features/user/LoginRecover";

function App() {

  return (
    <>
      <Header />
      <Routes>
        <Route path="/register" element={<CreateAccount />} />
        <Route path="/login-recover" element={<LoginRecover />}/>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
