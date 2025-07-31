// src/pages/About.tsx
import React from "react";

const About: React.FC = () => {
  return (
    <section className="main">
      <h1>About Us</h1>
      <div className="card">
        <p>
          This app demonstrates a multi-theme switcher built with React and TypeScript.
          It includes persistent themes, responsive layouts, API integration, and animated transitions.
        </p>
        <p>
          Created as part of an assignment for Hipster Pte. Ltd., the app showcases structure, styling, and UI adaptability across devices.
        </p>
      </div>
    </section>
  );
};

export default About;
