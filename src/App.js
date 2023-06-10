import React, { useEffect, useRef, useState } from "react";
import Login from "./components/Login";
import Register from "./components/Register";
import "./styles.scss";

export default function App() {
  const [isLogginActive, setISLogginActive] = useState(true);
  const containerRef = useRef(null);
  const rightSideRef = useRef(null);
  const current = isLogginActive ? "Sign up" : "Login";

  useEffect(() => {
    rightSideRef.current.classList.add("right");
  }, []);

  const handleClick = () => {
    if (isLogginActive) {
      rightSideRef.current.classList.remove("right");
      rightSideRef.current.classList.add("left");
    } else {
      rightSideRef.current.classList.remove("left");
      rightSideRef.current.classList.add("right");
    }
    setISLogginActive(!isLogginActive);
    console.log("hello");
  };
  return (
    <div className="AppContainer">
      <div className="Header">Subscibe to My Channel</div>
      <div className="App">
        <div className="login">
          <div className="container" containerRef={containerRef}>
            {isLogginActive ? (
              <Login containerRef={containerRef} />
            ) : (
              <Register containerRef={containerRef} />
            )}
          </div>
          <RightSide
            text={current}
            containerRef={rightSideRef}
            onClick={handleClick}
          />
        </div>
      </div>
    </div>
  );
}

const RightSide = ({ text, containerRef, onClick }) => {
  return (
    <div className="right-side" ref={containerRef} onClick={onClick}>
      <div>
        <div className="text">{text}</div>
      </div>
    </div>
  );
};
