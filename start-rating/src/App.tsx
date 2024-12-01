import React, { useState } from "react";
import "./App.css";

export const App: React.FC = () => {
  const [starCount, setStarCount] = useState<number>(0);
  return (
    <div className="App">
      <header className="App-header">
        <p>Feedback System </p>
        <div>
          {[...Array(5)].map((_, index) => (
            <span
              style={{
                fontSize: 36,
                cursor: "pointer",
                color: starCount <= index ? "white" : "yellow"
              }}
              className="Star"
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
