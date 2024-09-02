import React from "react";

function Skills({ data }) {
  return (
    <div className="scrollbar font grid grid-cols-1 gap-8 md:grid-cols-2">
      {data.map((skill) => (
        <div
          key={skill.id}
          className="card flex flex-col items-center rounded-lg p-6 shadow-lg transition-shadow hover:shadow-xl md:flex-row"
        >
          <img
            src={skill.image}
            alt={skill.skill}
            className="animate-spin-slow mb-4 h-24 w-24 rounded-full object-cover md:mb-0 md:mr-6"
          />
          <div className="content text-center md:text-left">
            <h4 className="title mb-2 text-2xl font-bold">{skill.skill}</h4>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Skills;
