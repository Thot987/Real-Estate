import { useContext } from "react";
import { ReservationContext } from "../context/ReservationContext";

function useReservations() {
  const { reservations, addReservation } = useContext(ReservationContext);

  const createReservation = (reservation) => {
    addReservation(reservation);
  };

  return { reservations, createReservation };
}

export default useReservations;
