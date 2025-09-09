
"use client";
import React, { useEffect } from 'react';
import { TypingAnimation } from "@/components/magicui/typing-animation";
import { WordRotate } from "@/components/magicui/word-rotate";
import {
  ScrollVelocityContainer,
  ScrollVelocityRow,
} from "@/components/magicui/scroll-based-velocity";
// import Image from 'next/image'
import { PixelImage } from "@/components/magicui/pixel-image";

declare global {
  interface Window {
    AOS?: {
      init: () => void;
      [key: string]: any;
    };
  }
}

function Page() {

  const SKILLS_ROW_A = [
    "PHP",
    "Laravel",
    "AngularJS",
    "React.js",
    "Flutter",
    "Dart",
    "JavaScript",
    "jQuery",
    "AJAX",
    "API Integration",
  ];

  const SKILLS_ROW_B = [
    "HTML",
    "CSS",
    "Bootstrap",
    "Tailwind CSS",
    "Streamlit",
    "Hugging Face",
    "Ollama"
  ];
  const [mounted, setMounted] = React.useState(false);
  useEffect(() => {
    setMounted(true);
    if (window.AOS) window.AOS.init();
  }, []);
  return (
    <>
      <div className=' mt-10 pt-10'>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 min-h-screen 100-vh">
          <div  {...(mounted ? {'data-aos': "fade-up "} : {})} className="flex flex-col justify-center items-start px-6">
            <h1 className="pt-4 text-center text-5xl md:text-6xl lg:text-8xl font-bold">
              <TypingAnimation>Hey! This is Nahid Khan 🙋‍♀️</TypingAnimation>
            </h1>

            <p className='text-left pl-4 font-semibold'>● I am a Full Stack Web Developer</p>
            <p className='text-left pl-4 font-semibold'>● I have experience in PHP, Laravel, AngularJS, React.js, Flutter, Dart, JavaScript, Bootstrap, Tailwind CSS, jQuery, AJAX, and API Integration.</p>
            <p className="text-left pl-4 font-semibold">
              ● I also worked on AI-based projects using Python, where I built
              interactive dashboards with Streamlit, integrated Hugging Face models, and
              explored Ollama for running models locally.
            </p>
            <p className="text-left pl-4 font-semibold">
              ● I also have a strong command of HTML, CSS, and JavaScript, enabling me to build dynamic, responsive, and visually appealing applications.
              I am a fast learner and highly adaptable, capable of quickly understanding project requirements and contributing effectively from day one.

              Currently, I am seeking exciting opportunities in software development where I can leverage my skills and contribute to impactful projects.
            </p>
            {/* <p className="text-center mt-6 text-lg text-gray-700">
              I have hands-on experience working with these technologies, with{" "}
              <span className="font-bold text-sky-600">strong expertise in PHP</span>{" "}
              and <span className="font-bold text-sky-600">AngularJS</span>.
            </p> */}

          </div>

          <div className="flex justify-center items-center mt-5">
            <PixelImage src="/images/profile.jpg" grid="8x8" />
          </div>
        </div>

        {/* <WordRotate words={["Word", "Rotate"]} /> */}

      </div>
      <main className='flex flex-col items-center justify-center min-h-screen'>
        <h1 className='mb-5 text-4xl'><b>Skills</b></h1>
        <ScrollVelocityContainer className="w-full">
          <ScrollVelocityRow baseVelocity={6} direction={1} className="py-4">
            {SKILLS_ROW_A.map((skill, idx) => (
              <h1
                key={idx}
                className="mx-4 inline-block whitespace-nowrap rounded-xl border border-sky-200 px-6 py-3 text-lg font-medium shadow-sm bg-white/10 backdrop-blur-sm"
              >
                {skill}
              </h1>
            ))}
          </ScrollVelocityRow>
          <ScrollVelocityRow baseVelocity={6} direction={-1} className="py-4">
            {SKILLS_ROW_B.map((skill, idx) => (
              <h1
                key={idx}
                className="mx-4 inline-block whitespace-nowrap rounded-xl border border-sky-200 px-6 py-3 text-lg font-medium shadow-sm bg-white/10 backdrop-blur-sm"
              >
                {skill}
              </h1>
            ))}
          </ScrollVelocityRow>
        </ScrollVelocityContainer>
        {/* <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
            <h1 className='p-4 rounded-xl border border-sky-200'>PHP</h1>
            <h1 className='p-4 rounded-xl border border-sky-200'>Laravel</h1>
            <h1 className='p-4 rounded-xl border border-sky-200'>AngularJS</h1>
            <h1 className='p-4 rounded-xl border border-sky-200'>React.js</h1>
            <h1 className='p-4 rounded-xl border border-sky-200'>Flutter</h1>
            <h1 className='p-4 rounded-xl border border-sky-200'>Dart</h1>
            <h1 className='p-4 rounded-xl border border-sky-200'>JavaScript</h1>
            <h1 className='p-4 rounded-xl border border-sky-200'>HTML</h1>
            <h1 className='p-4 rounded-xl border border-sky-200'>CSS</h1>
            <h1 className='p-4 rounded-xl border border-sky-200'>Bootstrap</h1>
            <h1 className='p-4 rounded-xl border border-sky-200'>Tailwind CSS</h1>
            <h1 className='p-4 rounded-xl border border-sky-200'>jQuery</h1>
            <h1 className='p-4 rounded-xl border border-sky-200'>AJAX</h1>
            <h1 className='p-4 rounded-xl border border-sky-200'>API Integration</h1>
          </div> */}
      </main>
    </>
  );
}

export default Page