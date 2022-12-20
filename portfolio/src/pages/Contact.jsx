import React from 'react';
import { useRef } from 'react';
import emailjs from '@emailjs/browser';

function createWave(text) {
  return text.split('').map((letter, index) => {
    return <span style={{ transitionDelay: `${index * 50}ms` }}>{letter}</span>;
  });
  // .join('');
}

function validateEmail(mail) {
  // if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail)) {
  if (mail.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)) {
    return true;
  }
  return false;
}
function validateMessage(message) {
  return message.length > 0 ? true : false;
}
const Contact = () => {
  const name = useRef(null);
  const email = useRef(null);
  const message = useRef(null);
  const form = useRef();

  const sendEmail = (e) => {
    if (
      validateMessage(name.current.value) &&
      validateEmail(email.current.value) &&
      validateMessage(message.current.value)
    ) {
      e.preventDefault();

      emailjs
        .sendForm(
          'service_pfwp3ib',
          'template_a88di2e',
          form.current,
          'LYmtCpR1FopI7Jd2S'
        )
        .then(
          (result) => {
            console.log(result.text);
            console.log('message sent');
            e.target.reset();
          },
          (error) => {
            console.log(error.text);
          }
        );
    }
  };

  return (
    <div
      id="contact"
      className="   w-screen h-screen lg:h-auto p-10 md:p-20 text-white bg-gradient-to-tr
   from-slate-900 to-slate-900 flex items-center justify-center  flex-col  gap-x-5 "
    >
      <h1 className="font-bold self-start magic text-5xl text-transparent drop-shadow-md bg-clip-text bg-gradient-to-t from-blue-50 to-blue-500   leading-tight md:leading-snug">
        Contact
      </h1>
      <form
        className="contact-container w-11/12 md:w-10/12 lg:w-2/5 rounded-lg flex flex-col px-4 py-8 "
        ref={form}
        onSubmit={sendEmail}
      >
        <h3 className="text-3xl text-center mb-10">
          Love to hear from you!
          <span className="w-20 h-20 rotate-45 hi5 "> 👋</span>
        </h3>
        <div className="name field flex flex-col mb-20 text-lg relative">
          <input type="text" required ref={name} name="user_name" />
          <label for="name">
            {createWave('Name')}
            {/* Email */}
          </label>
        </div>
        <div className="email field field flex flex-col mb-20 text-lg relative">
          <input type="email" required ref={email} name="user_email" />
          <label for="email">
            {createWave('Email')}
            {/* Email */}
          </label>
        </div>
        <div className="message field field flex flex-col mb-10 text-lg  relative">
          <textarea
            type="text"
            ref={message}
            name="message"
            className="bg-transparent h-36 resize-none text-white shadow-2xl shadow-slate-900"
            // height="400"
            required
          ></textarea>
          <label for="message">
            {createWave('Message')}
            {/* Password */}
          </label>
        </div>
        {/* <input
          type="submit"
          value="Submit"
          className="submit-form border-2 px-5 py-3 my-5  w-36  cursor-pointer submit-form hover:shadow-xl hover:scale-105  transition-all  rounded-full "
        /> */}
        <div className="flex items-center   justify-center ">
          <div className=" px-5 py-3 my-5  w-36  cursor-pointer submit-form hover:shadow-xl hover:scale-105  transition-all  rounded-full ">
            <button className=" text-black w-full outline-0 " type="submit">
              Submit
            </button>
          </div>
        </div>
      </form>{' '}
    </div>
  );
  // return (
  //   <form
  //     ref={form}
  //     onSubmit={sendEmail}
  //     className="bg-black text-white flex flex-col "
  //   >
  //     <label>Name</label>
  //     <input
  //       type="text"
  //       name="user_name"
  //       className=" bg-transparent border-b-white border-b-2"
  //     />
  //     <label>Email</label>
  //     <input
  //       type="email"
  //       name="user_email"
  //       className=" bg-transparent border-b-white border-b-2"
  //     />
  //     <label>Message</label>
  //     <textarea
  //       name="message"
  //       className=" bg-transparent border-b-white border-b-2"
  //     />
  //     <input type="submit" value="Send" />
  //   </form>
  // );
};

export default Contact;
