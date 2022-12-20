import React from 'react';
// const languages = [1, 2, 3, 4, 5, 6, 7, 8];
const languages = [
  {
    id: 1,
    title: 'Javascript',
    linkImage:
      'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
  },
  {
    id: 2,
    title: 'Typescript',
    linkImage:
      'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg',
  },
  {
    id: 3,
    title: 'React',
    linkImage:
      'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
  },
  {
    id: 4,
    title: 'Node',
    linkImage:
      'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
  },
  {
    id: 5,
    title: 'Express',
    linkImage:
      'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg',
  },
  {
    id: 6,
    title: 'PostgreSQL',
    linkImage:
      'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg',
  },
  {
    id: 7,
    title: 'MySQl',
    linkImage:
      'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg',
  },
  {
    id: 8,
    title: 'MongoDB',
    linkImage:
      'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg',
  },
];
const Juggle = () => {
  return (
    <div className="juggle m-10 flex justify-center items-center ">
      {languages.map((language, index) => {
        return (
          <div
            className={`
          ${index}  text-white absolute rotate-box overflow-hidden border-slate-600 rounded-full juggle-box text-xl  flex items-center justify-center `}
          >
            {/* <img src={language} alt="" srcSet=""  className='w-10 h-10 object-cover'/> */}
            <img
              src={language.linkImage}
              alt="Dev icon"
              className={`${language.id === 5 && ' bg-green-50 '} 
                ${language.id === 7 && ' bg-slate-50 '} 
                w-full   h-full rounded-full object-cover hover:scale-125 transition-all duration-300 cursor-pointer `}
            />
          </div>
        );
      })}
    </div>
  );
  {
    /* <div className="rotate-box"></div>
  <div className="rotate-box"></div>
  <div className="rotate-box"></div>
  <div className="rotate-box"></div> */
  }
  {
    /* <div className="rotate-box"></div> */
  }
};

export default Juggle;
