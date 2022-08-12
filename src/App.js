
import * as React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Header from './Components/Header/Header';
import Homepage from "./Pages/Home/Homepage";
import Slider from "./Components/SliderHome/slider";
import CollectionSlider from "./Components/Collection.slider/Collection.slider";
import './App.css';

function App() {
  return (
    <div>
      <Header/>
    <div className="App">
      <Routes>
      {/* <Route path='/' element={<Header />}> */}
        <Route path="/"  element={<Homepage/>}/>
        <Route path="/header" element={<Header/>}/>
        <Route path="/slider1" element={<Slider/>}/>
        <Route path="/slider2" element={<CollectionSlider/>}/>
        {/* </Route> */}
      </Routes>
      </div>
    </div>
  );
}

export default App;
