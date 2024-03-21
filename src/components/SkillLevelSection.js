import React from "react";

const SkillLevelSection = () => {
  return (
    <section className=" text-white py-10">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">My Skills</h2>
        <div className="max-w-sm mx-auto lg:max-w-lg">
          <div className="glass overflow-hidden mb-4">
            <div className="p-4">
              <div className="flex justify-between items-center mb-2">
                <h3 className="text-xl font-bold">React.js</h3>
                <span className="text-sm">65%</span>
              </div>
              <div className="skill-level-bar">
                <div
                  className="bg-primary-color h-full rounded-full"
                  style={{ width: "65%" }}
                ></div>
              </div>
            </div>
            <div className="p-4">
              <div className="flex justify-between items-center mb-2">
                <h3 className="text-xl font-bold">JavaScript</h3>
                <span className="text-sm">40%</span>
              </div>
              <div className="skill-level-bar">
                <div
                  className="bg-primary-color h-full rounded-full"
                  style={{ width: "40%" }}
                ></div>
              </div>
            </div>
            <div className="p-4">
              <div className="flex justify-between items-center mb-2">
                <h3 className="text-xl font-bold">Next.js</h3>
                <span className="text-sm">60%</span>
              </div>
              <div className="skill-level-bar">
                <div
                  className="bg-primary-color h-full rounded-full"
                  style={{ width: "60%" }}
                ></div>
              </div>
            </div>
            <div className="p-4">
              <div className="flex justify-between items-center mb-2">
                <h3 className="text-xl font-bold">Tailwind CSS</h3>
                <span className="text-sm">75%</span>
              </div>
              <div className="skill-level-bar">
                <div
                  className="bg-primary-color h-full rounded-full"
                  style={{ width: "75%" }}
                ></div>
              </div>
            </div>
            <div className="p-4">
              <div className="flex justify-between items-center mb-2">
                <h3 className="text-xl font-bold">CSS</h3>
                <span className="text-sm">70%</span>
              </div>
              <div className="skill-level-bar">
                <div
                  className="bg-primary-color h-full rounded-full"
                  style={{ width: "70%" }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillLevelSection;
