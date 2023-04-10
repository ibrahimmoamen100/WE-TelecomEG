import React, { useRef, useState } from "react";
import "./Collapsing.css";
import "../../index.css";
function Collapsing({
  title,
  information1,
  information2,
  information3,
  information4,
}) {
  const myUl = useRef(null);
  const [height, setHeight] = useState(false);
  const handleClick = () => {
    setHeight((el) => !el);
    if (height) {
      myUl.current.style.display = "none";
      myUl.current.style.height = "0";
    } else {
      myUl.current.style.display = "flex";
      myUl.current.style.height = "auto";
    }
  };
  return (
    <div className="subscribe">
      <h6 onClick={handleClick}>{title}</h6>
      <ul ref={myUl}>
        <li>{information1}</li>
        <li>{information2}</li>
        <li>{information3}</li>
        <li>{information4}</li>
      </ul>
    </div>
  );
}

export default Collapsing;
