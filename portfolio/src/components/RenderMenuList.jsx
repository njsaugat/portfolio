import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
// import { LoggedInContext } from '../App';
// import ShowPortal from './ShowPortal';

const RenderMenuList = ({ icons }) => {
  const [showOptions, setShowOptions] = useState(false);
  //   const { loggedIn } = useContext(LoggedInContext);

  //   if (!loggedIn) {
  //     return (
  //       <div className="flex flex-col text-xl lg:w-full lg:ml-40 lg:flex-row gap-y-10 lg:gap-y-0 lg:gap-x-10 lg:text-lg">
  //         <Link to={'/home'} rel="noreferrer" className="list-none">
  //           {icons && icons[3]} Explore
  //         </Link>
  //         <Link to={'/login'} rel="noreferrer" className="list-none">
  //           {icons && icons[1]} Log In
  //         </Link>
  //         <Link to={'/signup'} rel="noreferrer" className="list-none">
  //           {icons && icons[2]} Sign Up
  //         </Link>
  //       </div>
  //     );
  //   }

  return (
    <>
      <a to={'/home'} rel="noreferrer" className="list-none">
        {icons && icons[0]} Home
      </a>
      <a
        href="#about"
        to={'/movies-wishlist'}
        rel="noreferrer"
        className="list-none"
      >
        {icons && icons[1]} About Me
      </a>
      <a
        href="#projects"
        to={'/movies-wishlist'}
        rel="noreferrer"
        className="list-none"
      >
        {icons && icons[2]} Projects
      </a>

      <a href="#contact" to={'/home'} rel="noreferrer" className="list-none">
        {icons && icons[3]} Contact
      </a>
      {/* <a href="# " rel="noreferrer" className="list-none">
        {icons && icons[1]} About Us
      </a> */}
      {/* <div
        className="list-none cursor-pointer"
        onClick={(e) => {
          setShowOptions(true);
        }}
      >
        {icons && icons[1]} Log Out
      </div> */}
      {/* {showOptions && (
        <ShowPortal
          showOptions={showOptions}
          setShowOptions={setShowOptions}
          message={'Do you want to log out?'}
          logOut={true}
        />
      )} */}
    </>
  );
};

export default RenderMenuList;
