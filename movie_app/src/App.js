

function Food({ name ,picture}) {
return (
    <div>
    <h2>I like {name}!</h2>
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
      "https://www.maangchi.com/wp-content/uploads/2014/06/whole-cabbage-kimchi.jpg"
  },
  {
    id: 2,
    name: "Steak",
    image:
      "https://www.thespruceeats.com/thmb/hl4lkmdLO7tj1eDCsGbakfk97Co=/3088x2055/filters:fill(auto,1)/marinated-top-round-steak-3060302-hero-02-ed071d5d7e584bea82857112aa734a94.jpg"
  },
  {
    id: 3,
    name: "Croissant",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcKAxPGQ8mOPnE_LwLiMNhtD4x_y9q9Dm9uQ&usqp=CAU"
  },
]

function App() {
  return (
    <div>
      {foodILike.map(dish => <Food key={dish.id} name={dish.name} picture={dish.image} />)}
      {/* {foodILike.map(renderFood)} */}
    </div>
  );
};

export default App;
