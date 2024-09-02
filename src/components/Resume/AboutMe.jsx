// src/components/AboutMe.jsx

import React from "react";

function AboutMe({ data }) {
  return (
    <div className="font scrollbar text-2xl">
      <p>{data.text}</p>
    </div>
  );
}

export default AboutMe;
