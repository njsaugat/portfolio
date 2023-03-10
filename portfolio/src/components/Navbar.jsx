import React, { useEffect, useRef } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBars,
  faCoins,
  faHouse,
  faListCheck,
  faMagnifyingGlass,
  faUser,
  faXmark,
} from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import { createPortal } from 'react-dom';
// import Banner from './Banner';
import RenderMenuList from './RenderMenuList';
import { useNavigate } from 'react-router-dom';

const menuIcon = <FontAwesomeIcon icon={faBars} />;
const crossIcon = <FontAwesomeIcon icon={faXmark} />;

const homeIcon = <FontAwesomeIcon icon={faHouse} />;
const aboutUsIcon = <FontAwesomeIcon icon={faUser} />;
const featuresIcon = <FontAwesomeIcon icon={faListCheck} />;
const solutionIcon = <FontAwesomeIcon icon={faCoins} />;
const searchIcon = <FontAwesomeIcon icon={faMagnifyingGlass} />;

const portal = document.getElementById('portal');
const menuIcons = [homeIcon, aboutUsIcon, featuresIcon, solutionIcon];
const Navbar = ({ transparent }) => {
  const inputRef = useRef(null);
  // const navigate = useNavigate();
  const [showMenu, setShowMenu] = useState(false);
  const [windowSize, setWindowSize] = useState(window.innerWidth);
  const ShowPortal = () => {
    useEffect(() => {
      function handleWindowResize() {
        setWindowSize(window.innerWidth);
        if (windowSize >= 850) {
          setShowMenu(false);
        }
      }

      window.addEventListener('resize', handleWindowResize);

      return () => {
        window.removeEventListener('resize', handleWindowResize);
      };
    }, []);
    return createPortal(
      <div
        className={`fixed navs top-0 left-0  z-100 bg-gradient-to-b from-slate-900 to-slate-700  bg-opacity-95 overflow-y-hidden
      w-screen h-screen text-white  transition-all ease-in-out delay-400 inset-0 z-10`}
      >
        <div className="absolute flex justify-between w-11/12 h-screen p-10 text-2xl transition-all z-100 ">
          <div className="flex flex-col gap-10 lists">
            <RenderMenuList icons={menuIcons} />
          </div>
          <span
            onClick={() => {
              setShowMenu(false);
              portal.classList.remove('active');
            }}
            className="flex items-center justify-center w-10 h-10 p-2 text-red-500 transition-all duration-300 rounded-full cursor-pointer bg-gradient-to-b from-slate-700 to-transparent hover:shadow-xl hover:rotate-90"
          >
            {crossIcon}
          </span>
        </div>
      </div>,
      document.getElementById('portal')
    );
  };
  return (
    <nav
      className={`${
        transparent === true
          ? ''
          : 'bg-gradient-to-r from-slate-700 to-slate-900'
      } flex  font-Poppins items-center space-x-2  text-white w-screen gap-10 md:gap-32 lg:gap-1  navbar h-20 `}
    >
      {/* <div className="px-10 md:px-20">
        <Banner />
      </div> */}

      {showMenu && <ShowPortal />}
      <ul
        className={`hidden absolute -right-1/4 lg:-translate-x-40 lg:flex lg:gap-10  md:w-11/12 lg:w-4/6  text-lg items-center my-0 `}
      >
        <RenderMenuList />
      </ul>

      <div
        // className="absolute p-2 text-3xl transition-all duration-300 rounded-lg cursor-pointer lg:hidden right-4 md:right-10 hover:rotate-180 hover:origin-center "
        className="absolute flex items-center p-2 rounded-lg right-4 md:right-10"
      >
        <div
          className="text-3xl transition-all duration-300 cursor-pointer hover:rotate-180 hover:origin-center lg:hidden"
          onClick={() => {
            setShowMenu(true);
            portal.classList.add('active');
          }}
        >
          <span className="h-full transition-all duration-300 hover:rotate-180 ">
            {menuIcon}
          </span>
        </div>

        {/* {menuIcon} */}
      </div>
    </nav>
  );
};

export default Navbar;
