import RestaurantCard from "./RestaurantCard";
import restaurantData from "../utils/mock-data";
import { useState } from "react";

const MainRestaurantList = () => {
    const [topRatedResto, settopRatedResto] = useState(restaurantData);
    
    return (
        <main className="main-container">
            <section className="restaurants">
                <div className="container">
                    <div className="item-bar">
                        <div className="number">{topRatedResto.length} restaurants</div>
                        <div className="filters">
                            <div className="relevance"><button onClick={()=>{
                                const filteredData = topRatedResto.filter((res)=> res.avgRating > 4);
                                settopRatedResto(filteredData);
                            }}>Top Rated</button></div>
                        </div>
                    </div>
                    {/* restaurant-list */}
                    <div className="restaurant-list">
                        {
                            topRatedResto.map(data => <RestaurantCard key={data.id} restaurantCarData={data}/> )
                        }
                    </div>
                </div>
            </section>
        </main>
    )
}
 export default MainRestaurantList;