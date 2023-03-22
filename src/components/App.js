import React from "react";
import Header from "./Header";
import Jumbotron from "./Jumbotron";
import InfoCards from "./InfoCards";
import Restaurants from "./Restaurants";
import Footer from "./Footer";

function App() {
    return (
        <div>
            <Header />
            <Jumbotron />
            <InfoCards />
            <Restaurants />
            <Footer />
        </div>
    );
}

export default App;