import React, { useState, useCallback, useEffect, useRef } from "react";
import { useSpring, animated } from "react-spring";

import * as css from "./App.module.css";
import Button from "./Button/Button";

const App: React.FC = () => {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);

  const handleClick = useCallback(() => {
    setX(Math.random() * 1000);
    setY(Math.random() * 1000);
  }, [setX, setY]);

  const xSpring = useSpring({ x: x });
  const ySpring = useSpring({ y: y });

  return (
    <div className={css.app}>
      <animated.div
        style={{
          position: "absolute",
          left: xSpring.x,
          top: ySpring.y
        }}
      >
        I will fade in
      </animated.div>
      <Button variant="big" primary onClick={handleClick}>
        Hello, I am primary
      </Button>
    </div>
  );
};

export default App;
