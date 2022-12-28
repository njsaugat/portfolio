import React, { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
const githubIcon = <FontAwesomeIcon icon={faGithub} size="1x" />;

const shareIcon = <FontAwesomeIcon icon={faArrowUpRightFromSquare} />;

const projectsList = [
  {
    id: 1,
    title: 'CineWish',
    link: 'https://cine-wish.onrender.com/',
    githubLink: 'https://github.com/njsaugat/moviesWishlist',
    description:
      'Cinewish is a one common ground for all your favorite movies. You can add movies to favorites, get movie recommendation, and even set email reminder to watch movies.',
    imageLink:
      'https://camo.githubusercontent.com/732944abb68a190a8bdc52d147b43fe299bc9c1a18ce00bedc00c635938457ac/68747470733a2f2f6c68352e676f6f676c6575736572636f6e74656e742e636f6d2f39546562537065416d66626b425f4a66564b6b6a565750733547636f2d69744b6c386c2d556c4a4d646a3576485641482d536e43416e5848377051784c414f64655759645f536e7a5073526b6d4a6131766b554c51735035696e67613235675748692d6f73375463442d58573349717531472d594b463744334966526b6a4c6d567a596a7949445348656a30675842596456726342716c446b633475444868696c4c546b6348724b77716e533438462d4d66546269356963423541474177',
  },
  {
    id: 2,
    title: 'GharShar',
    link: 'https://github.com/njsaugat/houseMarket',
    githubLink: 'https://github.com/njsaugat/houseMarket',
    description:
      'GharShar is a real estate app that allows users to either sale or rent their property. The user can list their properties, manage their profile, update the property listing. All basic CRUD operaions are supported',
    imageLink:
      'https://camo.githubusercontent.com/d0bb7c5f2bfa0a1b052954e3a24b28d1a8cf0aca25febc84ca7be22a45d365c8/68747470733a2f2f6c68362e676f6f676c6575736572636f6e74656e742e636f6d2f514d78494c3547715f6b545f7a6871464a7369425a6a3238565f74534975504e754b58626857646f2d7336486f446849615750646b4b516344665763707877496930583669545351646c4568356277396a445670794c7649397667442d67624638316f4a4d716954694d442d4f674f764b435f7561484433632d43396c61314f486779526a7173494c4a635a6e444e466246613054796f67594852594375676f4c735730777455526f66785f3070436d4e68517853596d4c5a776b594651',
  },
  {
    id: 3,
    title: 'Github Finder',
    link: 'https://gleeful-flan-42f34b.netlify.app/',
    githubLink: 'https://github.com/njsaugat/githubStats',
    description:
      'Find the github stats of anyone throughout github: see what their favorite language, most forked repos, and most starred repos are.',
    imageLink:
      'https://camo.githubusercontent.com/f7d338917026ef4f8474ad71e746919d522136668fababe660879ad2095933cd/68747470733a2f2f6c68342e676f6f676c6575736572636f6e74656e742e636f6d2f785459517879374d73655042656259794d444d4d526e6f5173384e76434742566672564e2d6b76794147616b444f45555977653178594448514a4b464c6c305f6b4566716377377575594b784e6a46304b56706379563638576c4934796c53446b4c482d6f714b726a594f31686857502d5a766d585a6e7079435658312d484e3635396f357a456553594c4c4e6d503977506651646d5375707a39454f48722d2d6a585a395f64674d6e754e6b534c775453633048704551346152464d51',
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
              <a
                href={project.link}
                target="_blank"
                className="left w-full lg:w-1/2 md:w-full overflow-hidden h-96  rounded-3xl my-4 hover:shadow-xl hover:shadow-slate-900"
              >
                <img
                  // src="https://picsum.photos/1280"
                  src={project.imageLink}
                  alt=""
                  srcSet=""
                  className=" rounded-3xl hover:scale-110 object-cover   object-right lg:object-cover transition-all w-full h-full duration-500 ease-in-out "
                />
              </a>
              <div
                className={`right  md:h-auto -translate-y-1/3 opacity-70 md:opacity-100 md:-translate-x-10 ${
                  index === 1 && 'md:translate-x-10'
                } md:translate-y-0 rounded-3xl  flex flex-col items-center bg-black p-5  shadow-xl  hover:shadow-xl hover:shadow-slate-900 duration-300 w-full lg:w-1/3  `}
              >
                <h2 className="text-xl my-3 font-bold">{project.title}</h2>
                <section className="text-slate-200">
                  {project.description}
                </section>
                <div className="flex items-start justify-evenly w-full">
                  <a
                    href={project.link}
                    target="_blank"
                    className="self-start mt-4 text-xl  animate-none hover:animate-pulse"
                  >
                    {shareIcon}{' '}
                  </a>
                  <a
                    href={project.link}
                    target="_blank"
                    className="self-start mt-4 text-xl  animate-none hover:animate-pulse"
                  >
                    {githubIcon}{' '}
                  </a>
                </div>
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
