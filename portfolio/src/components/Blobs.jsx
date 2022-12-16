import React from 'react';
import KUTE from 'kute.js';
const Blobs = () => {
  const BlobOnly = () => {
    return (
      <div className="blob h-full w-full  md:w-7/12 lg:w-1/2  md:-translate-y-20 lg:-translate-y-32 ">
        <svg
          viewBox="0 0 800 500 "
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          // width="100%"
          // height="100%"
          id="blobSvg"
        >
          <g transform="translate(166.0041275024414, -3.7677879333496094)">
            <defs>
              <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop
                  offset="0%"
                  style={{ stopColor: 'rgb(254, 0, 242)' }}
                ></stop>
                <stop
                  offset="100%"
                  style={{ stopColor: 'rgb(251, 2, 69)' }}
                ></stop>
              </linearGradient>
            </defs>
            <path className="blob" fill="url(#gradient)">
              <animate
                attributeName="d"
                dur={'10000ms'}
                repeatCount="indefinite"
                values="M414,318.5Q414,387,348,408Q282,429,209.5,437.5Q137,446,112,377.5Q87,309,95,252.5Q103,196,115,117Q127,38,202,67Q277,96,329.5,117.5Q382,139,398,194.5Q414,250,414,318.5Z;
            
            M392,302Q375,354,326.5,382Q278,410,202.5,436.5Q127,463,113.5,384Q100,305,75.5,241.5Q51,178,90,109.5Q129,41,209.5,33Q290,25,341.5,77.5Q393,130,401,190Q409,250,392,302Z;

            M442.5,315Q404,380,342.5,402Q281,424,216,423Q151,422,90,376.5Q29,331,56,260Q83,189,115,130.5Q147,72,215.5,65Q284,58,330,101Q376,144,428.5,197Q481,250,442.5,315Z;
            M405,301.5Q372,353,330.5,411Q289,469,212,459.5Q135,450,120.5,376Q106,302,105.5,249.5Q105,197,132,144.5Q159,92,225.5,52Q292,12,341.5,72Q391,132,414.5,191Q438,250,405,301.5Z;
            M406,300.5Q370,351,328,403.5Q286,456,222.5,432Q159,408,115,361.5Q71,315,79.5,253Q88,191,114,125Q140,59,216.5,32.5Q293,6,341.5,69.5Q390,133,416,191.5Q442,250,406,300.5Z;
            M414,318.5Q414,387,348,408Q282,429,209.5,437.5Q137,446,112,377.5Q87,309,95,252.5Q103,196,115,117Q127,38,202,67Q277,96,329.5,117.5Q382,139,398,194.5Q414,250,414,318.5Z;
            "
              ></animate>
            </path>
          </g>
        </svg>
      </div>
    );
  };

  return (
    // <>
    //   <div className="spacer layer2 flip rotate-180"></div>

    //   <section className="pink">
    //     <div className="blob-content">
    //       <h1>Nice Curves!</h1>
    //       <p>
    //         A website is like a road. The more curves it has the more
    //         interesting it is.
    //       </p>
    //     </div>

    //     <svg
    //       className="blob-motion"
    //       id="visual"
    //       viewBox="0 0 960 540"
    //       width="960"
    //       height="540"
    //       xmlns="http://www.w3.org/2000/svg"
    //       xmlns:xlink="http://www.w3.org/1999/xlink"
    //       version="1.1"
    //     >
    //       <g transform="translate(450.7256843113689 283.4942824330989)">
    //         <path
    //           id="blob1"
    //           d="M148.7 -134.9C193.7 -103.7 231.9 -51.9 232.4 0.6C233 53 196.1 106.1 151.1 128.6C106.1 151.1 53 143 -4.4 147.4C-61.8 151.8 -123.5 168.5 -151.2 146C-178.8 123.5 -172.4 61.8 -172.8 -0.4C-173.1 -62.5 -180.3 -124.9 -152.6 -156.1C-124.9 -187.3 -62.5 -187.1 -5.3 -181.8C51.9 -176.5 103.7 -166 148.7 -134.9"
    //           fill="#BB004B"
    //         ></path>
    //       </g>
    //       <g
    //         transform="translate(509.54377535978017 281.49390864595887)"
    //         style={{ visibility: 'hidden' }}
    //       >
    //         <path
    //           id="blob2"
    //           d="M115.4 -137.9C137.9 -92.9 136.4 -46.4 133.6 -2.8C130.8 40.8 126.6 81.6 104.1 118.4C81.6 155.2 40.8 188.1 -8.4 196.5C-57.5 204.8 -115 188.7 -151 151.9C-187 115 -201.5 57.5 -190.8 10.7C-180.1 -36.1 -144.1 -72.1 -108.1 -117.1C-72.1 -162.1 -36.1 -216.1 5.2 -221.2C46.4 -226.4 92.9 -182.9 115.4 -137.9"
    //           fill="#BB004B"
    //         ></path>
    //       </g>
    //     </svg>
    //   </section>

    //   <div className="spacer layer2"></div>
    // </>
    // <div className="parentblobs relative w-screen h-screen ">
    //   <div className="blob">
    //     <svg
    //       xmlnsXlink="http://www.w3.org/1999/xlink"
    //       version="1.1"
    //       xmlns="http://www.w3.org/2000/svg"
    //       viewBox="0 0 310 350"
    //     >
    //       <path d="M156.4,339.5c31.8-2.5,59.4-26.8,80.2-48.5c28.3-29.5,40.5-47,56.1-85.1c14-34.3,20.7-75.6,2.3-111  c-18.1-34.8-55.7-58-90.4-72.3c-11.7-4.8-24.1-8.8-36.8-11.5l-0.9-0.9l-0.6,0.6c-27.7-5.8-56.6-6-82.4,3c-38.8,13.6-64,48.8-66.8,90.3c-3,43.9,17.8,88.3,33.7,128.8c5.3,13.5,10.4,27.1,14.9,40.9C77.5,309.9,111,343,156.4,339.5z" />
    //     </svg>
    //   </div>
    // </div>
    <div className="background-blob self-center  h-full w-full ">
      <BlobOnly />
      <BlobOnly />
    </div>
  );
};

export default Blobs;
