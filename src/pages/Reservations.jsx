import React, { useContext } from "react";
import { ReservationContext } from "../context/ReservationContext.jsx";
import "./Reservations.css";

function Reservations() {
  const { reservations } = useContext(ReservationContext);

  return (
    <div className="reservations">
      <h1>Tus reservaciones</h1>
      {reservations.length === 0 ? (
        <p>Aún no tienes reservaciones.</p>
      ) : (
        <ul>
          {reservations.map((res, index) => (
            <li key={index}>
              <h2>{res.title}</h2>
              <p>Lugar: {res.location}</p>
              <p>Precio: {res.price}</p>
              <p>Fecha: {res.date}</p>
              <p>Número de Noches: {res.nights}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Reservations;