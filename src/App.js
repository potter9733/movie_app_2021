import React from "react";
import PropTypes from "prop-types"; 

const foodILike = [
  {
    id:1,
    name:"kimchi",
    image:"https://ucarecdn.com/c1b36cd7-ebeb-469b-bf95-4120c9cd8dc4/-/scale_crop/1280x1280/center/-/quality/normal/-/format/jpeg/kimchi.jpg",
    rating: 5.0
  }, 
  {
    id:2,
    name:"samgyopsal",
    image:"https://t1.daumcdn.net/cfile/tistory/9942B3395A3501C304",
    rating: 4.5
  }, 
  {
    id:3,
    name:"bibimbap",
    image:"https://recipetineats.com/wp-content/uploads/2019/05/Bibimbap_3.jpg",
    rating: 3.9
  }, 
  {
    id:4,
    name:"doncasu",
    image:"https://s3-media3.fl.yelpcdn.com/bphoto/7F9eTTQ_yxaWIRytAu5feA/ls.jpg",
    rating: 4.2
  }, 
  {
    id:5,
    name:"kimbap",
    image:"https://mykoreankitchen.com/wp-content/uploads/2006/10/3.-Korean-Kimbap-500x375.jpg",
    rating: 4.1
  }
];

function Food({name, picture, rating}) {
  return <div>
    <h2>I like {name}</h2>
    <h4>{rating}/5.0</h4>
    <img src={picture} alt={name} />
  </div>;
}

Food.propTypes = {
  name: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired
}

function App() {
  return (
    <div>
      {foodILike.map(dish => (
        <Food key={dish.id} name={dish.name} picture={dish.image} rating={dish.rating}/>
      ))}
    </div>
  );
}

export default App;
