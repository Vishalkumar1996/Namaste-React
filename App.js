import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./src/components/Header";
import Body from "./src/components/body";
import Footer from "./src/components/Footer";

const AppLayout = () => {
  return (
    <div className="App">
      <Header />
      <Body />
      <Footer />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

// console.log(heading); //returns an object

root.render(<AppLayout />);
