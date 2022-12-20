import React from 'react';
import Blobs from '../components/Blobs';
import Navbar from '../components/Navbar';
import Tagline from '../components/Tagline';
import profile from '../assets/profile.png';
import profile1 from '../assets/profile1.jpg';
import profile2 from '../assets/profile1.jpg';
const Hero = () => {
  return (
    <>
      <div className="absolute z-10 ">
        <Navbar transparent={true} />
      </div>
      <main className="relative hero flex flex-col-reverse justify-center items-center w-screen min-h-screen md:h-auto  overflow-hidden  md:flex-row  bg-gradient-to-l from-slate-700 to-slate-900">
        <div className=" left md:w-3/5 p-10 md:mb-32 md:p-20 mt-32 md:mt-0">
          <Tagline />
          <section className="text-gray-400 lg:w-4/5 description mt-5 text-lg leading-relaxed md:mt-10 ">
            Our goal is to have one common ground for all of your favorite
            movies. This way you can have a clarity on what your favorite movies
            are and what you want to watch.
          </section>
          {/* <Link to="/home">
            <button className="px-5 py-3 my-10 text-black transition-all duration-300 rounded-lg bg-gradient-to-t from-purple-500 to-purple-100 hover:shadow-xl hover:scale-105">
              Explore Now
            </button>
          </Link> */}
        </div>
        <div
          className={` flex items-center justify-center 
        lg:w-2/5 w-full md:w-3/5 md:  transition-all duration-1000 mb-56 md:mb-64  mt-0  `}
        >
          <img
            src={profile1}
            // src={profile}
            // src={profile}
            // src="https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
            className="absolute z-10 object-cover shadow-2xl w-28 h-32 left-1/3 md:left-auto md:w-32 md:h-40 lg:w-36 lg:h-44 rounded-full translate-x-1/4 md:translate-x-1/2 lg:translate-x-1/2 translate-y-full md:translate-y-1/2 lg:translate-y-1/2"
            // className="absolute z-10 object-cover  w-28 h-36 md:w-32 md:h-40 lg:w-36 lg:h-44 rounded-full  left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 "
          />

          <Blobs />
        </div>
      </main>
    </>
  );
};

export default Hero;
