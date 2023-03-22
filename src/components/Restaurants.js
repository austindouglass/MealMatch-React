import React from "react";
import Card from "./Card";
import restaurantData from "../restaurantData";

export default function Restaurants() {    
    let key = 0;
    return (
        <section className="restaurants">
            <h1>An Example of 🍔MealMatch Options!</h1>
            <div className="card-deck flex-wrap">
                {restaurantData["businesses"].map(cardItem => (
                    <Card
                        key={key += 1}
                        title={cardItem.name}
                        text={  "Ratings: " + cardItem.rating.toString() + "/5 ⭐\nPrice: " + cardItem.price.replaceAll('$', '💲') + 
                                "\nPhone Number: " + cardItem.display_phone + "\nAddress: " + cardItem.location.display_address.join(' ') }
                        src={cardItem.image_url}
                        alt={cardItem.alias}
                        button={true}
                        link={cardItem.url}
                    />
                ))}
            </div>
        </section>
    );
}