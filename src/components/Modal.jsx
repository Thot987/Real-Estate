import React, { useState, useEffect } from "react";
import useReservations from "../hooks/useReservations.jsx";
import "./Modal.css";

function Modal({ title, location, price, onClose }) {
  const { createReservation } = useReservations();
  const [date, setDate] = useState("");
  const [nights, setNights] = useState(1);
  const [showMessage, setShowMessage] = useState(false);

  const handleReserve = () => {
    createReservation({ title, location, price, date, nights });
    setShowMessage(true);
    setTimeout(() => {
      setShowMessage(false);
      onClose();
    }, 3000);
  };

  useEffect(() => {
    if (showMessage) {
      alert(`Reservación confirmada para ${title} el ${date} para ${nights} noches.`);
    }
  }, [showMessage]);

  return (
    <div className="modal-backdrop">
      <div className="modal">
        <h2>Reservar {title}</h2>
        <label>
          Fecha:
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </label>
        <label>
          Número de Noches:
          <input
            type="number"
            min="1"
            value={nights}
            onChange={(e) => setNights(e.target.value)}
          />
        </label>
        <button onClick={handleReserve}>Confirmar Reservación</button>
        <button onClick={onClose} className="cancel">
          Cancelar
        </button>
      </div>
    </div>
  );
}

export default Modal;
