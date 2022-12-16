import React from 'react';

const languages = [1, 2, 3, 4, 5, 6, 7, 8];
const Juggle = () => {
  return (
    <div className="juggle m-10 flex justify-center items-center ">
      {languages.map((language, index) => {
        return (
          <div
            className={`
          ${index}  text-white absolute rotate-box rounded-full juggle-box text-xl  flex items-center justify-center border-2`}
          >
            {language}
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
