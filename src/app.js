import React from "react";
import ReactDOM from "react-dom/client";
import Header from "../src/components/Header";
import MainRestaurantList from "./components/MainRestaurantList";

const MainBlock = () => {
    return (
    <div>
        <div className="main-container">
            {/* Header */}
            <Header/>
            <MainRestaurantList/>
        </div>
    </div>
    )
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<MainBlock/>);
