const RestaurantCard = (props) => {
    const {restaurantCarData} = props;
    const {name, cloudinaryImageId, costForTwo, cuisines, avgRating, slaString, locality} = restaurantCarData;
    return (
        <div className="place">
            <a href="/restaurants/waffld-domlur-bangalore-303446" className="place-link">
                <div className="list-item">
                    <div className="item-content">
                        <div className="top-img">
                            <img className="_2tuBw _12_oN" alt={name}
                                src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +cloudinaryImageId}
                                width="100%" height="160"/>
                        </div>
                        <div className="place-name-div">
                            <div className="name">{name}</div>
                            <div className="food-items"
                                title={cuisines}>
                                {cuisines.join(", ")}</div>
                        </div>
                        <div className="info-div">
                            <div className="rating">
                                <span className="icon-star"><i className="fa-solid fa-star"></i></span>
                                <span>{avgRating}</span>
                            </div>
                            <div>•</div>
                            <div>{slaString}</div>
                            <div>•</div>
                            <div className="price">{costForTwo}</div>
                        </div>
                        <div className="offer-div">
                            <span className="icon-offer-filled"><i className="fa fa-map-marker" aria-hidden="true"></i></span>
                            <span className="offer-text">{locality}</span>
                        </div>
                    </div>
                    <div className="quick-view">
                        <span role="button" aria-label="Open" className="view-btn">QUICK VIEW</span>
                    </div>
                </div>
            </a>
        </div>
    )
}

export default RestaurantCard;