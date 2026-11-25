import { useState } from "react";
import heroImg from "./assets/jollof-hero.png";
import fufuImg from "./assets/fufu-hero.png";
import soupImg from "./assets/soup-hero.png";

export default function App() {
  const [formData, setFormData] = useState({
    name: "",
    people: "",
    date: "2026-11-23T20:00",
    message: "",
  });
  const [statusMessage, setStatusMessage] = useState("");

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setStatusMessage("Sending...");

    try {
      const response = await fetch("http://localhost:3000/api/reservations", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Failed to send message");
      }

      setStatusMessage(data.message);
      setFormData({ name: "", people: "", date: "2026-11-23T20:00", message: "" });
    } catch {
      setStatusMessage("Could not reach Express on port 3000.");
    }
  }

  return (
    <div style={{ fontFamily: '"Times New Roman", Georgia, Serif' }}>
      <style>{`
        h1, h2, h3, h4, h5, h6 {
          font-family: "Playfair Display", Georgia, Serif;
          letter-spacing: 5px;
        }
      `}</style>

      {/* Navbar */}
      <div className="w3-top">
        <div className="w3-bar w3-white w3-padding w3-card" style={{ letterSpacing: "4px" }}>
          <a href="#home" className="w3-bar-item w3-button w3-text-black">Surprise's Kitchen</a>
          <div className="w3-right w3-hide-small">
            <a href="#about" className="w3-bar-item w3-button w3-text-black">About</a>
            <a href="#menu" className="w3-bar-item w3-button w3-text-black">Menu</a>
            <a href="#contact" className="w3-bar-item w3-button w3-text-black">Contact</a>
          </div>
        </div>
      </div>

      {/* Header */}
      <header
        className="w3-display-container w3-content w3-wide"
        style={{ maxWidth: "1600px", minWidth: "500px" }}
        id="home"
      >
        <img
  className="w3-image"
  src={heroImg}
  alt="Screenshot jollof rice"
  width="1600"
  height="800"
/>
        <div className="w3-display-bottomleft w3-padding-large w3-opacity">
          <h1 className="w3-xxlarge w3-text-white">Taste The Difference Experence The Love</h1>
        </div>
      </header>

      {/* Page content */}
      <div className="w3-content" style={{ maxWidth: "1100px" }}>
        {/* About Section */}
        <div className="w3-row w3-padding-64" id="about">
          <div className="w3-col m6 w3-padding-large w3-hide-small">
            <img
  src={fufuImg}
  className="w3-round w3-image w3-opacity-min"
  alt="Fufu"
  width="600"
  height="750"
/>
          </div>

          <div className="w3-col m6 w3-padding-large w3-text-orange">
            <h1 className="w3-center w3-text-black">About Surprise's Kitchen</h1>
            <br />
            <h5 className="w3-center w3-text-black">Tradition African . Liberian . Intercontinental Cuisine since 2020</h5>
            <p className="w3-large w3-text-black">
             Surprise's Kitchen was Founded in London, United Kingdom, by Ms. Surprise Walker, 
              our catering business was established out of a deep passion for cooking, 
              hospitality, and bringing people together through great food. <span className="w3-tag w3-light-grey">seasonal</span> ingredients.
            </p>
            <p className="w3-large w3-text-black">
              Our mission is to bring people together through delicious food, 
              unforgettable flavours, and memorable dining experiences.
            </p>
          </div>
        </div>

        <hr />

        {/* Menu Section */}
        <div className="w3-row w3-padding-64" id="menu">
          <div className="w3-col l6 w3-padding-large w3-text-black">
            <h1 className="w3-center w3-text-black">Our Menu</h1>
            <br />
            <h4>Cassava Leaves and Rice</h4>
            <p className="w3-text-black">Cassava Leaf Soup is a popular traditional Liberian and West African dish made from finely ground or pounded cassava leaves. It is slowly cooked with palm oil, meat, fish and African spices to create a rich, savoury and nutritious soup</p>
            <br />

            <h4>Fufu and Soup</h4>
            <p className="w3-text-black">A traditional West African staple made from fermented cassava roots, cooked into a smooth, soft and stretchy dough. Traditionally served with a variety of African soups and stews.</p>
            <br />

            <h4>Palm Butter Soup</h4>
            <p className="w3-text-black">Palm Butter Soup is a traditional Liberian and West African soup made from palm fruit extract (palm pulp). It is slowly cooked with meat, fish, seafood and traditional spices to create a rich, thick and flavourful soup.</p>
            <br />

            <h4>Bitterball Torborgee</h4>
            <p className="w3-text-black">Bitterball Torborgee (Torborgee Soup) is a traditional Liberian delicacy made from bitterball, a naturally bitter African vegetable. It is cooked with palm oil, meat, fish and traditional Liberian spices to produce a distinctive bitter, spicy and savoury flavour.</p>
            <br />

            <h4>Potato Greens</h4>
            <p className="w3-text-black">Potato Greens Soup is a traditional Liberian dish made from the fresh green leaves of sweet potato plants. The leaves are finely chopped or pounded and cooked with palm oil, meat, fish and traditional African spices to create a rich, delicious and flavourful soup.</p>
          </div>

          <div className="w3-col l6 w3-padding-large">
           <img
  src={soupImg}
  className="w3-round w3-image w3-opacity-min"
  alt="Soup"
  style={{ width: "100%" }}
/>
          </div>
        </div>

        <hr />

        {/* Contact Section */}
        <div className="w3-container w3-padding-64" id="contact">
          <h1>Contact</h1>
          <br />
          <p className="w3-text-black">
            We offer full-service catering for any event, large or small. Do not hesitate to contact us.
          </p>
          <p className="w3-text-red w3-large">
            <b>Surprise's Kitchen, Oxford Street, Central London, UK</b>
          </p>
          <p className="w3-text-black">
            You can also contact us by phone +447506951549 or email surprisekitchen@gmail.com, or send a message here:
          </p>

          <form onSubmit={handleSubmit}>
            <p className="w3-text-black">
              <input
                className="w3-input w3-padding-16 w3-text-black"
                type="text"
                placeholder="Name"
                required
                name="name"
                value={formData.name}
                onChange={handleChange}
              />
            </p>
            <p className="w3-text-black">
              <input
                className="w3-input w3-padding-16"
                type="number"
                placeholder="How many people"
                required
                name="people"
                value={formData.people}
                onChange={handleChange}
              />
            </p>
            <p>
              <input
                className="w3-input w3-padding-16"
                type="datetime-local"
                required
                name="date"
                value={formData.date}
                onChange={handleChange}
              />
            </p>
            <p>
              <input
                className="w3-input w3-padding-16 w3-text-black"
                type="text"
                placeholder="Message \ Special requirements"
                required
                name="message"
                value={formData.message}
                onChange={handleChange}
              />
            </p>
            <p>
              <button className="w3-button w3-red w3-section" type="submit">
                SEND MESSAGE
              </button>
            </p>
            {statusMessage && <p>{statusMessage}</p>}
          </form>
        </div>
      </div>

      {/* Footer */}
      <footer className="w3-center w3-light-grey w3-padding-32">
        <p>
          Created by Eddie Numah Walker A.K.A Software Doctor{" "}
          <a
            href="https://github.com/eddienumahwalker-lang "
            title="Software Doctor"
            target="_blank"
            rel="noreferrer"
            className="w3-hover-text-red"
          >
            w3.css
          </a>
        </p>
      </footer>
    </div>
  );
}