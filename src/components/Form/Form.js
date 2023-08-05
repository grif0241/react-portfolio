// REACT
import React, { useContext, useEffect, useState, useRef } from 'react';

// STYLES
import './form.css';
import { Github, Linkedin, Hash } from 'react-bootstrap-icons';

// CONTEXT
import { DarkModeContext } from '../../context/DarkModeContext';



const Form = () => {

  const { darkMode } = useContext(DarkModeContext);
  const footerIconSize = 50;
  const [message, setMessage] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  const textareaRef = useRef();

  useEffect(() => {
    setEmail("");
    setName("");
    setPhoneNumber("");
    setMessage("");
    textareaRef.current.value = '';
  }, []);

  // input handlers
  const handleMessage = (ev) => {
    setMessage(ev.target.value);
  };

  const handleName = (ev) => {
    setName(ev.target.value);
  };

  const handleEmail = (ev) => {
    setEmail(ev.target.value);
  };

  const handlePhoneNumber = (ev) => {
    setPhoneNumber(ev.target.value);
  };

  return (
    <section id="contact" className="formContainer">
      <div className="row justify-content-center">
        <div className="col col-12">
          <h2 className='containerTitle'>Contact</h2>
          <p>Connect with me through email, GitHub, LinkedIn, or visit my development blog on HashNode to see what I am up to.</p>

          <div className='linksContainer'>

            <a rel="noreferrer" target="_blank" href="https://github.com/grif0241"><p className='screen-reader-text' >Website Link</p>
              <Github color={darkMode ? "ghostwhite" : "#282c34"} size={footerIconSize} />
            </a>

            <a rel="noreferrer" target='_blank' href="https://www.linkedin.com/in/tyler-griffin-a1558b188/" ><p className='screen-reader-text' >LinkedIn Link</p>
              <Linkedin color={darkMode ? "ghostwhite" : "#282c34"} size={footerIconSize} />
            </a>

            <a rel="noreferrer" target="_blank" href="https://tylerg.hashnode.dev/"> <p className='screen-reader-text' >Blog Link</p>
              <Hash color={darkMode ? "ghostwhite" : "#282c34"} size={footerIconSize} />
            </a>

          </div>
        </div>

        <div className=" roundedcontainer form-container p-4 bg-light-shades mb-3">
          <form
            action="https://formspree.io/f/mayvydeo"
            method="POST">
            <fieldset>
              <legend className="screen-reader-text">User Information</legend>

              <div className="row g-4 g-md-5">
                <div className="col col-12 col-md-6">
                  <label htmlFor="name" className="form-label">Name <i className="bi bi-person-circle"></i> <span className="required">*</span></label>
                  <input value={name} onChange={handleName} type="text" className="form-control" name="name" id="name" placeholder="e.g. John Smith" required />
                </div>

                <div className="col col-12 col-md-6">
                  <label htmlFor="email" className="form-label">Email <i className="bi bi-envelope-fill"></i> <span className="required">*</span></label>
                  <input value={email} onChange={handleEmail} type="email" className="form-control" name="_replyto" id="email" placeholder="e.g. johnsmith@mydomain.com" required />
                </div>

                <div className="col col-12 col-md-6">
                  <label htmlFor="phone" className="form-label">Phone</label>
                  <input onChange={handlePhoneNumber} value={phoneNumber} type="tel" className="form-control" name="phone" id="phone" placeholder="e.g. 123 456 7890" />
                </div>

                <div className="col col-12">
                  <label htmlFor="message" className="form-label">Message <i className="bi bi-pen-fill"></i> <span className="required">*</span></label>
                  <textarea ref={textareaRef} type="message" rows="5" cols="33" className="form-control" name="message" id="message" onChange={handleMessage} placeholder="Message" value={message || ""} required> </textarea>
                </div>

                <div className="col col-12 col-md-4">
                  <label htmlFor="submit" className="form-label visually-hidden">Send</label>
                  <input style={{ fontWeight: "bold", fontSize: 20 }} type="submit" className="form-control btn btn-1" value="Send" name="submit" id="submit" placeholder="send" />
                  <p className="mt-2"><span className="required">*</span> <small className='requiredField'>Indicates required field</small></p>
                </div>
              </div>
            </fieldset>
          </form>
        </div>
      </div>
    </section >
  )

}
export default Form;
