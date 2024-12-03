import React, { useState } from "react";
import "./App.css";

export const App: React.FC = () => {
  const [starCount, setStarCount] = useState<number>(0);
  const [avgRating, setAvgRating] = useState<number>(3.3);
  const parts = avgRating.toString().split(".");
  // const yellowWidth = 35;
  function getYellowWidth(index: number) {
    const integerPart = parseInt(parts[0], 10); // Integer part (3)
    const fractionalPart = parseInt(parts[1], 10);
    if (index < integerPart) return 100;
    else if (index === integerPart) return fractionalPart * 10;
    else return 0;
  }
  return (
    <div className="App">
      <header className="App-header">
        <p>Feedback System </p>
        <div>
          {[...Array(5)].map((_, index) => (
            <span
              style={{
                fontSize: 136,
                cursor: "pointer",
                // color: starCount <= index ? "white" : "yellow",
                // color: "linear-gradient(to right, green 70%, white 30%)"
                background: `linear-gradient(to right, yellow ${getYellowWidth(
                  index
                )}%, white 0%)`,
                WebkitBackgroundClip: "text",
                color: "transparent"
              }}
              // className="Star"
              onClick={() => setStarCount(index + 1)}
              key={index}
            >
              &#9733;
            </span>
          ))}
        </div>
        <div>
          {[...Array(5)].map((_, index) => (
            <span
              style={{
                fontSize: 136,
                cursor: "pointer",
                color: starCount <= index ? "white" : "yellow"
              }}
              // className="Star"
              onClick={() => setStarCount(index + 1)}
              key={index}
            >
              &#9733;
            </span>
          ))}
          <p>{starCount} Stars</p>
        </div>
      </header>
    </div>
  );
};
