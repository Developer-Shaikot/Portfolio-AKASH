import React from 'react';
import { useForm } from 'react-hook-form';
import './Contact.css'
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import { Button } from 'react-bootstrap';
import emailjs from 'emailjs-com';

function sendEmail(e) {
  e.preventDefault();
  
  emailjs
    .sendForm(
      'service_v5ni6z5',
      'template_spc2biu',
      e.target,
      'user_TpBUy7RsSSgpMBhe9k7K0'
    )
    .then(
      function (response) {
        //console.log("SUCCESS. status=%d, text=%s", response.status, response.text);
        alert('Email sent successfully!');
      },
      function (error) {
        //console.log("FAILED", error);
        alert('FAILED!' + error);
      }
    );
  e.target.reset();
}
const Contact = () => {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);
    return(
      <div className="contact text-light ml-5 ">
          <Header></Header>
          <h3 className="pra ml-5 mr-5"> Contact with <span className="name" >Akash</span></h3>
        <form style={{marginLeft: '20%'}} id="contact-form" onSubmit={sendEmail}>
          <div  className="form-group">
              <label className="db">Name</label>
              <input  {...register("name", { required: true })}  name='to_name' type="text" className="form-control" id="name" />
              {errors.name && <span className="error">Name is required</span>}
          </div>
          <div className="form-group">
              <label className="db">Email address</label>
              <input  {...register("email", { required: true })} name='from_email' type="email" className="form-control" id="email"/>
              {errors.email && <span className="error">Email is required</span>}
          </div>
          <div className="form-group">
              <label className="db">Message</label>
              <textarea  {...register("message", { required: true })} className="form-control" name='message' rows="5" id="message"  />
              {errors.message && <span className="error">Message is required</span>}
          </div>
          <Button  type="submit" variant="outline-info" size="lg mt-3 mb-2" className="db" > Send</Button>
        </form>
        <Footer></Footer>
      </div>
    );
  };

export default Contact;

