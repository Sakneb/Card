import React from "react";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Page from "./components/Page";

function App() {
  return (
    <div className="container">
      <Header />
      <Page />
      <Footer />
    </div>
  );
}

export default App;
