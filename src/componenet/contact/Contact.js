import React from 'react';
import style from "./Contact.module.css"

const Contact = () => {
  return (
    <div className={style.Contact}>
    <div className={style.contactuscontainer}>
      <h2>Contact Us</h2>
      <form className={style.contactform}>
        <input type="text" placeholder="Your Name" />
        <input type="email" placeholder="Your Email" />
        <textarea placeholder="Your Message"></textarea>
        <button type="submit">Submit</button>
      </form>
    </div>
    </div>
  );
};

export default Contact;
