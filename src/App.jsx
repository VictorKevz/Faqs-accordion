import React from "react";
import Header from "./components/Header";
import Faq from "./components/Faq";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <div className="wrapper">
    <main className="outer-container">
      <div className="inner-container">
        <Header/>
        <Faq/>
        
      </div>
      <Footer/>
    </main>
    </div>
  );
}

export default App;
