import React, { useEffect, useRef, useContext } from "react";
import classes from "./Canvas.module.css";
import CoordContext from "../../../store/coord-context";
function Canvas(props) {
  const ctx = useContext(CoordContext);
  const {
    width,
    height,
    flakescount,
    speed,
    condition,
    className,
    style,
    theme,
  } = props;

  const canvasRef = useRef();

  useEffect(() => {
    const context = canvasRef.current.getContext("2d");

    const flakes = [];

    function drawFlakes() {
      for (let i = 0; i < flakescount; i++) {
        flakes.push({
          x: Math.random() * width,
          y: Math.random() * height,
          r: Math.random() * (width * 0.01) + 0.05,
          d: Math.random() + 1,
        });
      }
      context.clearRect(0, 0, width, height);

      context.beginPath();
      for (let i = 0; i < flakescount; i++) {
        const flake = flakes[i];

        //Snow
        function snowDraw() {
          context.moveTo(flake.x, flake.y);

          context.fillStyle = "#fff";
          context.strokeStyle = "#666";
          context.stroke();
          context.arc(flake.x, flake.y, flake.r, 0, Math.PI * 2, true);
        }
        //Rain
        function rainDraw() {
          context.moveTo(flake.x, flake.y);
          context.fillStyle = "#48c0eb";
          context.ellipse(flake.x, flake.y, flake.r, 10, 19, 10, 38.5, true);
        }
        function dustDraw() {
          context.moveTo(flake.x, flake.y);
          context.fillStyle = ctx.theme === "night" ? "#fff" : "#111";

          context.arc(flake.x, flake.y, 1.5, 0, Math.PI * 2, true);
        }
        function clearNight() {
          context.moveTo(flake.x, flake.y);
          context.fillStyle = "#fff";
          context.globalAlpha = Math.random();

          context.arc(flake.x, flake.y, flake.r * 0.5, 0, Math.PI * 2, true);
        }
        function emptyDraw() {}
        if (condition === "snow") {
          snowDraw();
          moveFlakes();
        }
        if (condition === "shower rain" || condition === "rain") {
          rainDraw();
          moveFlakes();
        }
        if (condition === "mist") {
          dustDraw();
          moveFlakes();
        }
        if (condition === "clear sky" || condition === "thunderstorm") {
          emptyDraw();
        }
        if (condition === "clear sky" && theme === "night") {
          setInterval(clearNight(), 1000);
        }
      }

      function sunnyDraw() {
        context.moveTo(500, 150);
        context.fillStyle = "#ff6a00";
        context.strokeStyle = "#ffe100";
        context.arc(500, 150, 100, 0, Math.PI * 2, true);
        context.lineTo(700, 170);
      }
      if (condition === "sunny") {
        sunnyDraw();
      }

      //Cloud
      for (let i = 0; i < flakescount; i++) {
        const flake = flakes[i];
        function cloudDraw(y) {
          const gradient = context.createLinearGradient(0, 0, 1000, y);
          gradient.addColorStop(0, "#888999");
          gradient.addColorStop(0.4, "#fffeee");
          gradient.addColorStop(0.6, "#989999");
          gradient.addColorStop(0.8, "#fffeff");
          gradient.addColorStop(0.9, "#888999");
          context.fillStyle = gradient;

          context.arc(flake.x, y, 60, Math.PI * 0.5, Math.PI * 1.5);
          context.arc(flake.x + 70, y - 60, 70, Math.PI * 1, Math.PI * 1.85);
          context.arc(
            flake.x + 152,
            y - 45,
            50,
            Math.PI * 1.37,
            Math.PI * 1.91
          );
          context.arc(flake.x + 200, y, 60, Math.PI * 1.5, Math.PI * 0.5);
        }

        if (
          condition === "few clouds" ||
          condition === "scattered clouds" ||
          condition === "broken clouds"
        ) {
          cloudDraw(150);
          moveFlakes();
        }
      }

      context.fill();
    }

    let angle = 0;

    function moveFlakes() {
      angle += 0.05;
      for (let i = 0; i < flakescount; i++) {
        const flake = flakes[i];

        flake.y += Math.pow(flake.d, 2) + 50;
        flake.x += Math.sin(angle) * 2;

        if (flake.y > height) {
          flakes[i] = {
            x: Math.random() * width,
            y: 0,
            r: flake.r,
            d: flake.d,
          };
        }
      }
    }

    const clock = setInterval(drawFlakes, 100 - speed);
    return () => {
      clearInterval(clock);
    };
  }, [condition, ctx.theme]);

  return (
    <canvas
      ref={canvasRef}
      width={width}
      height={height}
      flakescount={flakescount}
      speed={speed}
      // radius={radius}
      condition={condition}
      className={`${classes.snow} ${className}`}
      theme={theme}
      style={style}
    ></canvas>
  );
}

export default Canvas;
