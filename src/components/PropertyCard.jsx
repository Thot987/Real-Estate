import React, { useState } from "react";
import Modal from "./Modal.jsx";
import useModal from "../hooks/useModal.jsx";
import "./PropertyCard.css";


function PropertyCard({ title, location, price, image }) {
    const { isOpen, openModal, closeModal } = useModal();
  
    return (
      <div className="property-card">
        <img src={image} alt={title} />
        <div className="property-info">
          <h2>{title}</h2>
          <p>{location}</p>
          <p>{price}</p>
          <button onClick={openModal}>Reservar</button>
        </div>
        {isOpen && (
          <Modal
            title={title}
            location={location}
            price={price}
            onClose={closeModal}
          />
        )}
      </div>
    );
  }
  
  export default PropertyCard;