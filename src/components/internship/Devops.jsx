import React from "react";
const sections = {
  DevOps: [
    {
      title: "Devops",
      description:
        "Crafted by industry veterans, this rigorous program establishes a solid foundation in DevOps principles, CI/CD pipelines, and cloud infrastructure automation. Whether you're a beginner or an IT professional aiming to accelerate your career, this training merges cutting-edge tools with real-world deployment scenarios to empower you with the skills needed to streamline development workflows and enhance system reliability at scale.",
      image: "/Dev-Ops.png",
      modules: [" Coming Soon..."],
      duration: "8–12 Weeks",
    },
  ],
};
const Devops = () => {
  const course = sections.DevOps[0];
  return (
    <div className="mt-30 px-6 flex flex-col gap-8 p-4">
      <div className="flex flex-col md:flex-row gap-6 items-start">
        <div className="md:w-2/3">
          <h2 className="text-2xl md:text-3xl font-medium text-orange-500 mb-4">
            {course.title}
          </h2>
          <p className="text-gray-700 text-sm md:text-base mt-4 leading-relaxed">
            {course.description}
          </p>
        </div>
        <div className="md:w-1/3">
          <img
            src={course.image}
            alt={course.title}
            className="rounded-lg shadow-md w-full hover:scale-[1.02] transition transform duration-300"
          />
        </div>
      </div>

      <div className="flex flex-col md:flex-row items-start relative">
        <div className="w-full md:w-2/5 border p-4 relative z-10">
          <h3 className="text-lg font-semibold text-orange-500 mb-2">
            Training Modules
          </h3>
          <ul className="list pl-5 space-y-1 text-sm text-gray-600">
            {course.modules.map((module, index) => (
              <li key={index}>{module}</li>
            ))}
          </ul>
        </div>

        <div className="hidden md:block w-50 h-1 bg-orange-500 self-center -ml-px mx-2 mt-2"></div>

        <div className="flex items-center mt-4 md:mt-29 lg:mt-0 md:w-1/3">
          <div className="text-sm text-gray-800 p-2 ml-4 md:ml-0">
            <span className="font-semibold">Duration</span>
            <p className="italic mt-2">{course.duration}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Devops;
