import React, { useEffect } from 'react';
import Juggle from '../components/Juggle';

const About = () => {
  useEffect(() => {
    const contents = document.querySelectorAll('.content');
    console.log(contents);
    function showBox() {
      const triggerBottom = (window.innerHeight / 5) * 4; //we are setting the trigger point; as we enter here event should fire up
      contents.forEach((content) => {
        const boxTop = content.getBoundingClientRect().top;
        if (boxTop < triggerBottom) {
          content.classList.add('show');
        }
      });
    }
    window.addEventListener('scroll', showBox);
    return () => window.removeEventListener('scroll', showBox);
  });
  return (
    <div
      id="about"
      className="   w-screen h-screen lg:h-auto p-10 md:p-20 text-white bg-gradient-to-tr
     from-slate-900 to-slate-900   gap-x-5 "
    >
      <h1 className="font-bold magic text-5xl text-transparent drop-shadow-md bg-clip-text bg-gradient-to-t from-slate-50 to-slate-400   leading-tight md:leading-snug">
        About Me
      </h1>
      <section className=" w-full flex flex-col-reverse lg:justify-between gap-x-4 lg:flex-row ">
        <div className="left-details content w-full lg:w-1/2 pr-5 leading-8  text-lg my-10 mt-20">
          {/* use text higlighting in this part of code */}I was introduced to
          programming in grade 6. I used programming to implement mathematical
          functions. I was mesmerized by the idea of writing program once and
          passing values to the programs so that I could check my Maths'
          answers. From then on I have been going on.
        </div>
        <div className=" content w-full flex justify-center items-center lg:w-1/2">
          <Juggle />
        </div>
      </section>
    </div>
  );
};

export default About;
