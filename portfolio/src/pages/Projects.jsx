import React, { useEffect } from 'react';

const projectsList = [
  {
    id: 1,
    title: 'CineWish',
    link: 'https://github.com/njsaugat/moviesWishlist',
    description:
      'Cinewish is a one common ground for all your favorite movies. You can add movies to favorites, get movie recommendation, and even set email reminder to watch movies',
  },
  {
    id: 2,
    title: 'GharShar',
    link: 'https://github.com/njsaugat/houseMarket',
    description:
      'GharShar is a real estate app that allows users to either sale or rent their property. The user can list their properties, manage their profile, update the property listing. All basic CRUD operaions are supported',
  },
  {
    id: 3,
    title: '50_Projects',
    link: 'https://github.com/njsaugat/50_Projects__15_Days',
    description:
      'This is the random collection game that allows the users to catch the insect. It is a interesting pass time game developed.',
  },
  // {
  //   id: 4,
  //   title: 'Vanila Projects',
  //   link: 'https://github.com/njsaugat/vanilaProjects',
  // },
];
const Projects = () => {
  useEffect(() => {
    const contents = document.querySelectorAll('.project');
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
  const getRandom = () => Math.floor(Math.random() * 255);
  return (
    <div
      id="projects"
      className=" w-screen min-h-screen lg:h-auto p-10 md:p-20 text-white bg-gradient-to-tr
  from-slate-700 to-slate-900"
    >
      <h1 className="font-bold magic w-full h-auto text-5xl text-transparent drop-shadow-md bg-clip-text    leading-tight md:leading-snug text-clip flex flex-wrap">
        <span className="hidden md:block">Featured&nbsp; </span> Projects
      </h1>

      <div className="projects flex flex-col  items-center justify-center gap-y-5 gap-x-5  ">
        {projectsList.map((project, index) => {
          return (
            // <a
            //   href={project.link}
            //   target="_blank"
            //   key={project.id}
            //   className="rounded-3xl relative flex flex-col items-center shadow-slate-600 shadow-xl hover:shadow-2xl w-full md:w-1/2 lg:w-1/3 "
            // >
            //   {/* <img src={project}/> */}
            //   <div className="w-10/12 overflow-hidden h-72  rounded-3xl my-4">
            //     <img
            //       src="https://picsum.photos/288"
            //       alt=""
            //       srcset=""
            //       className=" rounded-3xl hover:scale-110 object-cover transition-all w-full h-full duration-500 ease-in-out"
            //     />
            //   </div>
            //   <h2 className="text-xl my-3 font-bold">{project.title}</h2>
            // </a>
            <div
              className={`${
                index == 1 ? 'md:flex-row-reverse ' : ''
              }flex flex-col md:flex-row items-center justify-center relative   w-full project`}
            >
              <div className="left w-full lg:w-1/2 md:w-full overflow-hidden h-96  rounded-3xl my-4 hover:shadow-xl hover:shadow-slate-900">
                <img
                  src="https://picsum.photos/1280"
                  alt=""
                  srcset=""
                  className=" rounded-3xl hover:scale-110 object-cover transition-all w-full h-full duration-500 ease-in-out "
                />
              </div>
              <div
                className={`right  md:h-auto -translate-y-1/3 opacity-70 md:opacity-100 md:-translate-x-10 ${
                  index === 1 && 'md:translate-x-10'
                } md:translate-y-0 rounded-3xl  flex flex-col items-center bg-black p-5  shadow-xl  hover:shadow-xl hover:shadow-slate-900 duration-300 w-full lg:w-1/3  `}
              >
                <h2 className="text-xl my-3 font-bold">{project.title}</h2>
                <section className="text-slate-200">
                  {project.description}
                </section>
              </div>
            </div>
          );
        })}
      </div>
      {/* <div
        style={{
          backgroundColor: `rgb(${getRandom()},${getRandom()},${getRandom()})`,
        }}
        className="w-20 h-20"
      >
        {' '}
      </div> */}
      {/* <span className="w-20 h-20 rounded-full right-0 top-0 translate-x-1/2 -translate-y-1/2 bg-sky-300 "></span> */}
    </div>
  );
};

export default Projects;
