import React from "react";
import PropTypes from "prop-types";

function Food({ name ,picture, rating}) {
return (
    <div>
    <h2>I like {name}!</h2>
    <h4>rating: {rating}/5.0</h4>
    <img src={picture} alt={name} />
    </div>
  );
}

function renderFood(dish){
  return <Food name={dish.name} picture={dish.image} />;
}

const foodILike = [
  {
    id: 1,
    name: "Kimchi",
    image:
      "https://www.maangchi.com/wp-content/uploads/2014/06/whole-cabbage-kimchi.jpg",
    rating: 5
  },
  {
    id: 2,
    name: "Steak",
    image:
      "https://www.thespruceeats.com/thmb/hl4lkmdLO7tj1eDCsGbakfk97Co=/3088x2055/filters:fill(auto,1)/marinated-top-round-steak-3060302-hero-02-ed071d5d7e584bea82857112aa734a94.jpg",
    rating: 4.9
  },
  {
    id: 3,
    name: "Croissant",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcKAxPGQ8mOPnE_LwLiMNhtD4x_y9q9Dm9uQ&usqp=CAU",
      rating: 4.8
  },
]

Food.propTypes = {
  name: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired
};

function App() {
  return (
    <div>
      {foodILike.map(dish => <Food key={dish.id} name={dish.name} picture={dish.image} rating={dish.rating} />)}
      {/* {foodILike.map(renderFood)} */}
    </div>
  );
};

export default App;
