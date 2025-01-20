import React from "react";
import "./Contact.css";

function Contact() {
  return (
    <div className="contact">
      <h1>Contacto</h1>
      <form>
        <label>
          Nombre:
          <input type="text" name="name" required />
        </label>
        <label>
          Correo Electrónico:
          <input type="email" name="email" required />
        </label>
        <label>
          Mensaje:
          <textarea name="message" rows="4" required></textarea>
        </label>
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
}

export default Contact;