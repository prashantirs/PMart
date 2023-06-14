import Header from "./Components/Header/Header";
import { Toaster } from "react-hot-toast";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import BestSellers from "./Components/CurratedPicks/BestSellers/BestSellers";
import ShopMen from "./Components/CurratedPicks/ShopMen/ShopMen";
import ShopWomen from "./Components/CurratedPicks/ShopWomen/ShopWomen";
import ShopCasual from "./Components/CurratedPicks/ShopCasual/ShopCasual";
import Home from "./Components/Home/Home";
import Cart from "./Components/Cart/Cart";
import Footer from "./Components/Footer/Footer";

function App() {

  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/bestsellers" element={<BestSellers/>} />
          <Route path="/shopmen" element={<ShopMen/>} />
          <Route path="/shopwomen" element={<ShopWomen/>} />
          <Route path="/shopcasual" element={<ShopCasual/>} />
          <Route path="/cart" element={<Cart/>} />
        </Routes>
        <Footer/>
        <Toaster />
    </Router>
    </>
  );
}

export default App;
