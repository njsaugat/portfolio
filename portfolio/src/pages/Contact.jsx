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
   from-slate-900 to-slate-900 flex items-center justify-center   gap-x-5 "
    >
      <form className="contact-container w-11/12 md:w-10/12 lg:w-2/5 rounded-lg flex flex-col px-4 py-8 ">
        <h3 className="text-3xl text-center mb-10">Contact</h3>
        <div className="name field flex flex-col mb-20 relative">
          <input type="text" required />
          <label for="name">
            {createWave('Name')}
            {/* Email */}
          </label>
        </div>
        <div className="email field field flex flex-col mb-20 relative">
          <input type="email" required />
          <label for="email">
            {createWave('Email')}
            {/* Email */}
          </label>
        </div>
        <div className="message field field flex flex-col mb-20 relative">
          <textarea
            type="text"
            className="bg-transparent text-white shadow-sm shadow-slate-500"
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
