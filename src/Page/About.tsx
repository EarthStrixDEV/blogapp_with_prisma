import React from "react";

function About() {
  return (
    <div>
      <div className="flex flex-col justify-center w-full h-screen px-4 py-16 bg-background">
        <h1 className="text-4xl font-bold text-center mb-8 text-text">About</h1>
        <p className="text-lg text-text text-center">
          I just created Blog App cause I really want to learn JavaScript ORM (Prisma)
        </p>
        <div className="grid grid-cols-2 gap-4 mt-8 px-22">
          <div className="px-56 py-20 text-lg">
            <h3 className="text-2xl font-bold mb-4 text-text">Vision</h3>
            <p className="text-white">Our vision is to empower people from all walks of life to learn to code and build their own applications</p>
          </div>
          <div className="px-56 py-20 text-lg">
            <h3 className="text-2xl font-bold mb-4 text-text">Commitment</h3>
            <p className="text-white">Our commitment is to foster a supportive and inclusive community of learners where everyone feels welcome and encouraged to succeed</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
