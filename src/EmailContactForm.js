
import React, { useRef, useForm } from 'react';
import emailjs from '@emailjs/browser';

export default function EmailContactForm() {
    const form = useRef();
    // const [email, setEmail] = useState("");
    // const [text, setText] = useState("");
    // const [message, setMessage] = useState("");
    const handleClick= () => {
      form.current.reset();
    }
    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_ly80jqp', 'popcorn_contact_form', form.current, 'RiEI1EOsNc4mqjUDi')
        .then((result) => {
            console.log('Your Message was sent!');
        }, (error) => {
            console.log('Error unsuccesful');
        });
    };
    // function handleSubmit(e){
    //   e.preventDefault();
    //   console.log(email, text, message);

    //   setEmail('');
    //   setText('');
    //   setMessage('');


    // }
  return (
    <form ref={form} onSubmit={sendEmail}>
        <label>Name</label>
        <input type ="text" name="user_name"  />
        <label>Email</label>
        <input type="email" name="user_email" />
        <label>Message</label>
        <textarea name="message" />
         <button type="submit" value="send">Submit</button>
         <button type="submit" onClick={handleClick}>Clear Form</button>
    </form>
  );
};
