import React from "react";

function Education({ data }) {
  return (
    <div className="font scrollbar grid grid-cols-1 gap-8 md:grid-cols-2">
      {data.map((item) => (
        <div
          key={item.id}
          className="card flex flex-col items-center rounded-lg p-6 shadow-lg transition-shadow hover:shadow-xl md:flex-row"
        >
          <div className="content text-center md:text-left">
            <h4 className="title mb-2 text-2xl font-bold">{item.degree}</h4>
            <span className="date mb-2 block text-gray-400">{item.date}</span>
            <p className="institution mb-1 text-lg font-semibold">
              {item.institution}
            </p>
            {item.grade && (
              <p className="text-xl text-teal-600 dark:text-teal-200 ">
                {item.grade}
              </p>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Education;
