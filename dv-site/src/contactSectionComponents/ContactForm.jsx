import { useState } from "react";
import "./ContactForm.css";

export default function ContactForm() {
  const [name, setName] = useState("Your name");
  const [email, setEmail] = useState("Your email");
  const [message, setMessage] = useState("Message");

  return (
    <div className="input-container">
      <div className="form-group">
        <form>
          <label className="form-label" htmlFor="name">
            <input
              className="form-input"
              type="text"
              id="name"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            ></input>
          </label>
        </form>
      </div>
      <div className="form-group">
        <form>
          <label className="form-label" htmlFor="email">
            <input
              className="form-input"
              type="text"
              id="email"
              email="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            ></input>
          </label>
        </form>
      </div>
      <div className="form-group">
        <form>
          <label className="form-label" htmlFor="message">
            <textarea
              className="form-textarea"
              type="text"
              id="message"
              message="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>
          </label>
          <button className="form-button" type="submit">
            Send
          </button>
        </form>
      </div>
    </div>
  );
}
