import React from "react";
import CountUp from "react-countup";

const stats = [
  { label: "Years of experience", value: 1 },
  { label: "Projects completed", value: 10 },
  { label: "Technologies mastered", value: 7 },
  { label: "Code commits", value: 100 },
];

const Stats = () => {
  return (
    <section
      className="stats themeChange flex flex-row justify-around space-x-3 space-y-0 
    "
    >
      {stats.map((stat, index) => (
        <div key={index} className="textColor text-center">
          <h3 className="text-3xl font-bold">
            <CountUp start={0} end={stat.value} duration={2.5} />
          </h3>
          <p>{stat.label}</p>
        </div>
      ))}
    </section>
  );
};

export default Stats;
