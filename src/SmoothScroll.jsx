import React, { useState, useRef, useLayoutEffect } from "react";

const config = {
  ease: 0.1,
  current: 0,
  previous: 0,
  rounded: 0
};

const SmoothScroll = ({ children }) => {
  const [height, setHeight] = useState(0);
  const app = useRef();
  const scroll = useRef();

  const smooth = () => {
    config.current = window.scrollY || window.pageYOffset;
    config.previous += (config.current - config.previous) * config.ease;
    config.rounded = Math.round(config.previous * 100) / 100;
    scroll.current.style.transform = `matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, -${
      config.rounded
    }, 0, 1)`;
    requestAnimationFrame(() => smooth());
  };

  const measure = () => setHeight(scroll.current.scrollHeight);

  useLayoutEffect(() => {
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, []);

  useLayoutEffect(() => {
    document.body.style.height = `${height}px`;
  }, [height]);

  useLayoutEffect(() => {
    requestAnimationFrame(smooth);
  }, []);

  return (
    <div ref={app} className="app">
      <div ref={scroll}>{children}</div>
    </div>
  );
};

export default SmoothScroll;