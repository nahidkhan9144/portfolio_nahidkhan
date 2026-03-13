import React from "react";

export default function page() {
  return (
    <div className="min-h-screen py-20 px-4 text-white">

      {/* Heading */}
      <h2 className="text-center text-4xl font-bold mb-4">About Me</h2>

      {/* Description */}
      <p className="max-w-3xl mx-auto text-xl text-center text-gray-200 leading-relaxed">
        Web and Mobile Developer with 3+ years of experience, skilled in PHP,
        Laravel, React.js, AngularJS, HTML5, CSS3, and JavaScript. Experienced in
        building responsive applications, integrating RESTful APIs, and
        delivering clean, maintainable code. Adaptable, proactive, and committed
        to creating scalable and user-focused solutions.
      </p>

      {/* Divider */}
      <hr className="max-w-4xl mx-auto my-12 border-gray-600" />

      {/* Experience */}
      {/* <section className="max-w-4xl mx-auto mb-14"> */}
      <div className="bg-black/60 backdrop-blur-md rounded-md p-2 border mb-4 border-white/10">
        <h3 className="text-center text-2xl font-bold text-blue-400 mb-2">
          Experience
        </h3>
      </div>
      <section className='pl-5 pr-5 pt-1 pb-1 rounded text-left inset-0 backdrop-blur-xs flex justify-around'>
        <fieldset>
          <p className="text-xl font-bold">TATA Consultancy Services</p>
          <p className="mt-1">System Engineer</p>
          <p className="text-gray-300">Mumbai, India</p>
          <p className="text-gray-400">Jan 2026 – Present</p>
        </fieldset>
        <fieldset>
          <p className="text-xl font-bold">Tickle Right Eduventures</p>
          <p className="mt-1">Junior Software Developer</p>
          <p className="text-gray-300">Mumbai, India</p>
          <p className="text-gray-400">Apr 2023 – Jan 2026</p>
        </fieldset>
      </section>

      <div className="bg-black/60 backdrop-blur-md rounded-md p-2 border mb-4 border-white/10 mt-6">
        <h3 className="text-center text-2xl font-bold text-blue-400 mb-2">
          Education
        </h3>
      </div>
       <section className='pl-5 pr-5 pt-1 pb-1 rounded text-left inset-0 backdrop-blur-xs flex justify-around'>
        <fieldset>
          <p className="text-xl font-bold">Bachelor of Science – Information Technology</p>
          <p className="mt-1">University Of Mumbai</p>
          <p className="text-gray-300">Mumbai, India</p>
          <p className="text-gray-400">Jun 2020 – Apr 2023</p>
        </fieldset>
        <fieldset>
          <p className="text-xl font-bold">HSC</p>
          <p className="mt-1">Maharashtra Board</p>
          <p className="text-gray-300">Mumbai, India</p>
          <p className="text-gray-400">Feb 2020</p>
        </fieldset>
      </section>

      {/* <section className="max-w-4xl mx-auto">
        <h3 className="text-center text-2xl font-bold text-blue-400 mb-6">
          Education
        </h3>

        <div className="bg-black/60 backdrop-blur-md rounded-xl p-6 border border-white/10">
          <p className="text-xl font-bold">
            Bachelor of Science – Information Technology
          </p>
          <p className="text-gray-300">University of Mumbai</p>
          <p className="text-gray-400">2020 – 2023 | 7.67 CGPA</p>
        </div>
      </section> */}

    </div>
  );
}
