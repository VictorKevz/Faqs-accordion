import React, { useState } from "react";
import Data from "../Data";
import "./css/faq.css";

function Faq() {
  const [openId, setOpenId] = useState(Data[0]?.id || null);

  function handleClick(id) {
    setOpenId((prevOpenId) => (prevOpenId === id ? null : id));
  }

  return (
    <>
      {Data.map((obj) => {
        const isOpen = openId === obj.id;
        return (
          <section
            key={obj.id}
            className="faq-container"
            onClick={() => handleClick(obj.id)}
          >
            <div className="title-icon-container">
              <p className="title">{obj.title}</p>
              <div>
                <img
                  src={isOpen ? obj.icons[1] : obj.icons[0]}
                  alt="icon plus/minus"
                />
              </div>
            </div>
            {isOpen && (
                <p className="description">{obj.description}</p>
              
            )}
          </section>
        );
      })}
    </>
  );
}

export default Faq;
