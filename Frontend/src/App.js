import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CropList from "./components/Croplist";
import Layout from "./components/Layout";
import Disease from "./components/Disease";
import Pesticide from "./components/Pesticide";
import Fertilizer from "./components/Fertilizer";
import NoPage from "./components/NoPage";
import Footer from "./components/Footer";
import StartPage from "./components/startPage";
import AdminLogin from "./components/AdminLogin";
import FarmerLogin from "./components/FarmerLogin";
import FarmerSignup from "./components/FarmerSignup";
import Main from "./components/Main";
import About from "./components/About";

function App() {
  console.log(process.env.REACT_APP_BASEURL);
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<StartPage />} />
            <Route path="adminlogin" element={<AdminLogin />} />
            <Route path="farmersignup" element={<FarmerSignup />} />

            <Route path="farmerlogin" element={<FarmerLogin />} />
            <Route path="home" element={<Main />} />
            <Route path="about" element={<About />} />

            <Route path="croplist" element={<CropList />} />
            <Route path="fertilizers" element={<Fertilizer />} />
            <Route path="diseases" element={<Disease />} />
            <Route path="pesticides" element={<Pesticide />} />
            <Route path="*" element={<NoPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
