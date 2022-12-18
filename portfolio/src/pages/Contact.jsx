import React from 'react';

function createWave(text) {
  return text.split('').map((letter, index) => {
    return <span style={{ transitionDelay: `${index * 50}ms` }}>{letter}</span>;
  });
  // .join('');
}
const Contact = () => {
  return (
    <div
      className="   w-screen h-screen lg:h-auto p-10 md:p-20 text-white bg-gradient-to-tr
   from-slate-900 to-slate-900 flex items-center justify-center  flex-col  gap-x-5 "
    >
      <h1 className="font-bold self-start magic text-5xl text-transparent drop-shadow-md bg-clip-text bg-gradient-to-t from-blue-50 to-blue-500   leading-tight md:leading-snug">
        Contact
      </h1>
      <form className="contact-container w-11/12 md:w-10/12 lg:w-2/5 rounded-lg flex flex-col px-4 py-8 ">
        <h3 className="text-3xl text-center mb-10">
          Love to hear from you!
          <span className="w-20 h-20 rotate-45 hi5 "> 👋</span>
        </h3>
        <div className="name field flex flex-col mb-20 text-lg relative">
          <input type="text" required />
          <label for="name">
            {createWave('Name')}
            {/* Email */}
          </label>
        </div>
        <div className="email field field flex flex-col mb-20 text-lg relative">
          <input type="email" required />
          <label for="email">
            {createWave('Email')}
            {/* Email */}
          </label>
        </div>
        <div className="message field field flex flex-col mb-20 text-lg  relative">
          <textarea
            type="text"
            className="bg-transparent h-36 resize-none text-white shadow-2xl shadow-slate-900"
            // height="400"
            required
          ></textarea>
          <label for="message">
            {createWave('Message')}
            {/* Password */}
          </label>
        </div>
        <div className="login">
          <button>Login</button>
        </div>
        <div className="footer">
          Don't have an account?
          <a href="#">Register</a>
        </div>
      </form>{' '}
    </div>
  );
};

export default Contact;
