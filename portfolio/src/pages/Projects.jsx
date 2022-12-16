import React from 'react';

const projectsList = [
  {
    id: 1,
    title: 'CineWish',
    link: 'https://github.com/njsaugat/moviesWishlist',
  },
  {
    id: 2,
    title: 'GharShar',
    link: 'https://github.com/njsaugat/houseMarket',
  },
  {
    id: 3,
    title: '50_Projects',
    link: 'https://github.com/njsaugat/50_Projects__15_Days',
  },
  {
    id: 4,
    title: 'Vanila Projects',
    link: 'https://github.com/njsaugat/vanilaProjects',
  },
];
const Projects = () => {
  const getRandom = () => Math.floor(Math.random() * 255);
  return (
    <div
      className=" w-screen min-h-screen lg:h-auto p-10 md:p-20 text-white bg-gradient-to-tr
  from-slate-700 to-slate-900"
    >
      <h1 className="font-bold  text-5xl text-transparent drop-shadow-md bg-clip-text bg-gradient-to-t from-blue-50 to-blue-500   leading-tight md:leading-snug">
        Projects
      </h1>

      <div className="projects flex flex-col md:flex-row items-center justify-center gap-y-5 gap-x-5  flex-wrap">
        {projectsList.map((project) => {
          return (
            <a
              href={project.link}
              target="_blank"
              key={project.id}
              className="rounded-3xl relative flex flex-col items-center shadow-slate-600 shadow-xl hover:shadow-2xl w-full md:w-1/2 lg:w-1/3 "
            >
              {/* <img src={project}/> */}
              <div className="w-10/12 overflow-hidden h-72  rounded-3xl my-4">
                <img
                  src="https://picsum.photos/288"
                  alt=""
                  srcset=""
                  className=" rounded-3xl hover:scale-110 object-cover transition-all w-full h-full duration-500 ease-in-out"
                />
              </div>
              <h2 className="text-xl my-3 font-bold">{project.title}</h2>
              {/* <span className="absolute w-20 h-20 rounded-full right-0 top-0 translate-x-1/2 -translate-y-1/2 bg-sky-300 "> */}{' '}
              {/* </span> */}
            </a>
          );
        })}
      </div>
      <div
        style={{
          backgroundColor: `rgb(${getRandom()},${getRandom()},${getRandom()})`,
        }}
        className="w-20 h-20"
      >
        {' '}
      </div>
    </div>
  );
};

export default Projects;
