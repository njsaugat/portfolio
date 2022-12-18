import React, { useEffect, useState } from 'react';

const relativeImageSize = 450;
const sideProjects = Array.from({ length: 10 }, (_, i) => i + 1);
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
const showMoreIcon = <FontAwesomeIcon icon={faAngleDown} beat />;
const SideProjects = () => {
  const [windowSize, setWindowSize] = useState(window.innerWidth);
  const [showItems, setShowItems] = useState(0);
  const [showMore, setShowMore] = useState(false);
  useEffect(() => {
    function handleWindowResize() {
      setWindowSize(window.innerWidth);
      setShowMore(false);
      setShowItems(Math.ceil(windowSize / relativeImageSize));
    }
    handleWindowResize();
    // console.log(windowSize);
    window.addEventListener('resize', handleWindowResize);

    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, [windowSize]);
  return (
    <div
      className=" w-screen h-auto p-10 md:p-20 text-white bg-gradient-to-tr
  from-slate-700 to-slate-900"
    >
      <h1 className="font-bold  magic text-5xl text-transparent drop-shadow-md bg-clip-text bg-gradient-to-t from-blue-50 to-blue-500   leading-tight md:leading-snug">
        Side Projects
      </h1>

      <div className="flex flex-col items-center justify-center ">
        <div className="flex  flex-wrap items-center justify-center w-screen gap-5 px-10 mt-2 ">
          {sideProjects.map((sideProject, index) => {
            return (
              index < showItems && (
                <>
                  <div className="relative overflow-hidden  rounded-xl w-72 h-72 side-project hover:-translate-y-1.5 transition-all duration-300 hover:shadow-xl hover:shadow-slate-900">
                    <img
                      src="https://picsum.photos/1280"
                      className="object-cover w-full h-full rounded-xl hover:scale-110  transition-all  duration-500 ease-in-out "
                      alt=""
                      srcSet=""
                    />
                    <div className="flex items-center justify-center details ">
                      <div className="flex flex-col items-start justify-center left">
                        <span className="mb-3 font-bold tracking-wider name">
                          {sideProject}
                        </span>
                        <span className="likes"></span>
                      </div>
                      <div className="right">{index}</div>
                    </div>
                  </div>
                </>
              )
            );
          })}
        </div>
        <div
          className={` w-full cursor-pointer flex justify-center items-center h-14 hover:bg-slate-700 mt-5 `}
          onClick={(e) => {
            showMore
              ? setShowItems(Math.ceil(windowSize / relativeImageSize))
              : setShowItems(sideProjects.length);

            showMore ? setShowMore(false) : setShowMore(true);
          }}
        >
          <div
            className={` flex items-center justify-center w-10 h-10 rounded-full shadow-2xl show-more bg-gradient-to-t from-slate-400 to-slate-600`}
          >
            <span className={`${showMore ? 'rotate-180 ' : 'rotate-0 '}`}>
              {showMoreIcon}
            </span>
            {/* {showMore ? 'Show Less' : 'Show More'} */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideProjects;
