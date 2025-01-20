import React from "react";
import PropertyCard from "../components/PropertyCard.jsx";
import "./Home.css";

const properties = [
    {
      id: 1,
      title: "Polanco",
      location: "Ciudad de México",
      price: "$2000/noche",
      image: "https://github.com/Thot987/Real-Estate/blob/main/images/Casa1.png",
    },
    {
      id: 2,
      title: "Cumbres",
      location: "Monterrey, Nuevo León",
      price: "$2500/noche",
      image: "https://github.com/Thot987/Real-Estate/blob/main/images/Casa2.png",
    },
    {
      id: 3,
      title: "Lomas del Valle",
      location: "Guadalajara Jalisco",
      price: "$800/noche",
      image: "https://github.com/Thot987/Real-Estate/blob/main/images/Casa3.png",
    },
  
    {
      id: 4,
      title: "Centro",
      location: "Querétao, Querétaro",
      price: "$1200/noche",
      image: "https://github.com/Thot987/Real-Estate/blob/main/images/Casa4.png",
    },
  
    {
      id: 5,
      title: "Campestre",
      location: "Mérida Yucatán",
      price: "$500/noche",
      image: "https://github.com/Thot987/Real-Estate/blob/main/images/Casa5.png",
    },
  
    {
      id: 6,
      title: "San Patricio",
      location: "Saltillo, Coahuila",
      price: "$1500/noche",
      image: "https://github.com/Thot987/Real-Estate/blob/main/images/Casa6.png",
    },
  
    {
      id: 7,
      title: "El Molino",
      location: "León, Guanajuato",
      price: "$900/noche",
      image: "https://github.com/Thot987/Real-Estate/blob/main/images/Casa7.png",
    },
  
    {
      id: 8,
      title: "Calzada del Bosque",
      location: "Chihuahua, Chihuahua",
      price: "$800/noche",
      image: "https://github.com/Thot987/Real-Estate/blob/main/images/Casa8.png",
    },
  
    {
      id: 9,
      title: "Conquistadores",
      location: "Hermosillo, Sonora",
      price: "$800/noche",
      image: "https://github.com/Thot987/Real-Estate/blob/main/images/Casa9.png",
    },
  
    {
      id: 10,
      title: "Playacar",
      location: "Cancún, Quintana Roo",
      price: "$600/noche",
      image: "https://github.com/Thot987/Real-Estate/blob/main/images/Casa10.png",
    },

];

function Home() {
  return (
    <div>
      <h1>Propiedades Disponibles</h1>
      <div className="property-list">
        {properties.map((property) => (
          <PropertyCard key={property.id} {...property} />
        ))}
      </div>
    </div>
  );
}

export default Home;
