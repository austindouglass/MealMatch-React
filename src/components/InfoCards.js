import React from "react";
import Card from "./Card";

function InfoCards() {
  const cards = [
    {
      key: 1,
      title: "Our Food Radar",
      text: "View all the restaurants and fast food places near you in an instant! No more manual searches for all the places close by.",
      src: "https://media4.giphy.com/media/l3V0rsh4fuE5GVcHK/giphy.gif?cid=790b76115a454a2745597e6d9b84158e6408c45a337a22b0&rid=giphy.gif&ct=g",
      alt: "Card contains gif of a radar with blips."
    },
    {
      key: 2,
      title: "So Many Options",
      text: "It's hard choosing the perfect meal. Let us help by viewing all your potential food matches from menus, pictures, reviews, distance, and price.",
      src: "https://media2.giphy.com/media/3oEjHImwTUlfR2wBji/giphy.gif?cid=ecf05e47n5h97d4no4ee4n41goczxfndopz4ji3u6gixdfwz&rid=giphy.gif&ct=g",
      alt: "Card contains gif of cartoon fast food items."
    },
    {
      key: 3,
      title: "Your Meal Match ❤️",
      text: "You find the one! Your meal match is made and it's time to order and get the food of your dreams.",
      src: "https://media1.giphy.com/media/j25Jmye97tgCuXdybj/giphy.gif?cid=790b761136601b0c2af4e53d500c6c467d482ab3e4536646&rid=giphy.gif&ct=g",
      alt: "Card contians gif of a cartoon hungry heart."
    }
  ];
  return (
    <section>
      <div className="card-deck flex-wrap">
        {cards.map(cardItem => (
          <Card 
            key={cardItem.key}
            title={cardItem.title}
            text={cardItem.text}
            src={cardItem.src}
            alt={cardItem.alt}
            button={false}
          />
        ))}
      </div>
    </section>
  );
}

export default InfoCards;