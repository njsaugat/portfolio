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
      className="   w-screen h-auto p-10 md:p-20 text-white bg-gradient-to-tr
     from-slate-900 to-slate-900   gap-x-5 "
    >
      <h1 className="font-bold magic text-5xl text-transparent drop-shadow-md bg-clip-text bg-gradient-to-t from-slate-50 to-slate-400   leading-tight md:leading-snug">
        About Me
      </h1>
      <section className=" w-full flex flex-col-reverse lg:justify-between gap-x-4 lg:flex-row text-justify ">
        <div className="left-details content w-full lg:w-1/2 pr-5 leading-8  text-lg my-10 mt-20">
          {/* use text higlighting in this part of code */}
          <p>
            I was introduced to programming (QBASIC) in grade 6 (2012).
            Initially, I struggled alot with what I was asked for: use
            programming to implement mathematical equations and calculate area
            and perimeters. But, I was mesmerized by the idea of writing program
            once and passing values to the programs so that I could check my
            Maths' answers from something{' '}
            <span className="font-bold italic magic">I built</span>.
          </p>
          <br />
          <p>
            So, I kept doing it and finding answers to my Maths' questions
            without flipping the book's pages but instead by running the
            programs. From maths' functions to printing patterns to solving
            fibonnacci series, I have come a long way with programming. Finally
            now, as years have passed by I have come out off the maths' book to
            &nbsp;
            <span className="font-bold italic magic">
              solve real world problems .
            </span>
          </p>
        </div>
        <div className=" content w-full flex justify-center items-center lg:w-1/2">
          <Juggle />
        </div>
      </section>
    </div>
  );
};

export default About;
