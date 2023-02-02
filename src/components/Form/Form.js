import React, { useContext } from 'react';
import './form.css';
import { DarkModeProvider, DarkModeContext } from '../../context/DarkModeContext';
import { Github, Linkedin, Hash } from 'react-bootstrap-icons';



const Form = () => {

  const { darkMode, toggleDarkMode } = useContext(DarkModeContext);
  const footerIconSize = 50;

  return (
    <section id="contact" class="formContainer">
      <div class="row justify-content-center">
        <div class="col col-12">
          <h2 className='containerTitle'>Contact</h2>
          <p>Connect with me through email, GitHub, LinkedIn, or visit my development blog on HashNode to see what I am up to.</p>

          <div className='linksContainer'>

            <a target="_blank" href="https://github.com/grif0241">
              <Github color={darkMode ? "ghostwhite" : "#282c34"} size={footerIconSize} />
            </a>

            <a target='_blank' href="https://www.linkedin.com/in/tyler-griffin-a1558b188/" >
              <Linkedin color={darkMode ? "ghostwhite" : "#282c34"} size={footerIconSize} />
            </a>

            <a target="_blank" href="https://tylerg.hashnode.dev/">
              <Hash color={darkMode ? "ghostwhite" : "#282c34"} size={footerIconSize} />
            </a>


          </div>
        </div>

        <div class=" roundedcontainer form-container p-4 bg-light-shades mb-3">
          <form
            action="https://formspree.io/f/mayvydeo"
            method="POST">
            <fieldset>
              <legend class="screen-reader-text">User Information</legend>

              <div class="row g-4 g-md-5">
                <div class="col col-12 col-md-6">
                  <label for="name" class="form-label">Name <i class="bi bi-person-circle"></i> <span class="required">*</span></label>
                  <input type="text" class="form-control" name="name" id="name" placeholder="e.g. John Smith" required />
                </div>

                <div class="col col-12 col-md-6">
                  <label for="email" class="form-label">Email <i class="bi bi-envelope-fill"></i> <span class="required">*</span></label>
                  <input type="email" class="form-control" name="_replyto" id="email" placeholder="e.g. johnsmith@mydomain.com" required />
                </div>

                <div class="col col-12 col-md-6">
                  <label for="phone" class="form-label">Phone</label>
                  <input type="tel" class="form-control" name="phone" id="phone" placeholder="e.g. 123 456 7890" />
                </div>

                <div class="col col-12">
                  <label for="message" class="form-label">Message <i class="bi bi-pen-fill"></i> <span class="required">*</span></label>
                  <textarea type="message" rows="5" cols="33" class="form-control" name="message" id="message" placeholder="Message" required> </textarea>
                </div>

                <div class="col col-12 col-md-4">
                  <label for="submit" class="form-label visually-hidden">Send</label>
                  <input style={{ fontWeight: "bold", fontSize: 20 }} type="submit" class="form-control btn btn-1" value="Send" name="submit" id="submit" placeholder="send" />
                  <p class="mt-2"><span class="required">*</span> <small>Indicates required field</small></p>
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
