import React from "react";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";

import Home from "./Screens/Home/Home";

const App = () => {
  return (
    <>
      <Navbar />
      <Home />
      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default App;
