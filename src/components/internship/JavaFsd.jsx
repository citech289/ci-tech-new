import React from "react";
const sections = {
  JavaFsd: [
    {
      title: "Java Full Stack Development",
      description:
        "Crafted by industry professionals, this immersive training establishes a strong foundation in Java Full Stack development, covering front-end technologies, back-end frameworks, and database integration. Whether you're a beginner or an aspiring developer, this program merges hands-on coding exercises with real-world projects to equip you with the skills needed to build dynamic, scalable, and high-performance web applications.",
      image: "/Java-FSD.png",
      modules: [
        "Phase 1: GIT/GitLabs",
        "Phase 2: MySQL",
        "Phase 3: MongoDB",
        "Phase 4: Language Fundamentals",
        "Phase 5: Exception Handling & File Handling",
        "Phase 6: File Handling & Multithreading",
        "Phase 7: Multithreading & Collection Framework",
        "Phase 8: Collection Framework",
        "Phase 9: JDBC & Functional Interfaces",
        "Phase 10: Lambda expression, Method references, Streams",
        "Phase 11:Streams & Java 8 Date API",
        "Phase 12:JUnit Testing with Mockito & SOLID principles",
        "Phase 13: Maven & Hibernate",
        "Phase 14: Spring Framework",
        "Phase 15: DevOps",
        "Phase 16: UI-Basics",
        "Phase 17: UI-Frameworks",
        "Phase 18: Project demo & Final Assessment (End to End)",
      ],
      duration: "18–20 Weeks",
    },
  ],
};
const JavaFsd = () => {
  const course = sections.JavaFsd[0];
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
          <ul className="list-disc pl-5 space-y-1 text-sm text-gray-600">
            {course.modules.map((module, index) => (
              <li key={index}>{module}</li>
            ))}
          </ul>
        </div>

        <div className="hidden md:block w-50 h-1 bg-orange-500 self-center -ml-px mx-2 mt-4"></div>

        <div className="flex items-center mt-4 md:mt-70 lg:mt-52 md:w-1/3">
          <div className="text-sm text-gray-800 p-2 ml-4 md:ml-0">
            <span className="font-semibold">Duration</span>
            <p className="italic mt-2">{course.duration}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JavaFsd;
