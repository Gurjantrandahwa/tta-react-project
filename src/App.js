import './App.css';
import Homepage from "./Pages/Homepage";
import Header from "./Components/Header/Header";
import React from "react";
import Footer from "./Components/Footer/Footer";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import ContactUs from "./Pages/ContactUs";
import AboutUs from "./Pages/AboutUs";


function App() {
    return <BrowserRouter>
        <Header/>

        <Routes>
            <Route path={"/"} element={<Homepage/>}/>
            <Route path={"/contactUs"} element={<ContactUs/>}/>
            <Route path={"/aboutUs"} element={<AboutUs/>}/>
        </Routes>

        <Footer/>
    </BrowserRouter>
}

export default App;
