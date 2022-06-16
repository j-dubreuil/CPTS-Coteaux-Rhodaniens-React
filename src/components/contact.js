import React from 'react'

import PropTypes from 'prop-types'

import './contact.css'

const Contact = (props) => {
  return (
    <div id="contact" className={`contact-contact ${props.rootClassName} `}>
      <h2 className="contact-text section-Heading">{props.heading}</h2>
      <div className="contact-content-container">
        <div className="contact-form-container">
          <span className="contact-heading bigCard-Heading">
            {props.Heading}
          </span>
          <input
            type="text"
            required="true"
            placeholder={props.Nom_placeholder}
            className="contact-nom input"
          />
          <input
            type="text"
            required="true"
            placeholder={props.Email_placeholder}
            className="contact-email input"
          />
          <textarea
            placeholder={props.Message_placeholder}
            className="contact-message textarea"
          ></textarea>
          <button type="submit" className="contact-cta-btn anchor button">
            {props.Cta - btn}
          </button>
        </div>
        <div className="contact-locations-container">
          <div className="contact-location-1">
            <span className="contact-heading1">{props.Heading1}</span>
            <div className="contact-adresse">
              <svg viewBox="0 0 1024 1024" className="contact-icon">
                <path
                  d="M512 0c-176.732 0-320 143.268-320 320 0 320 320 704 320 704s320-384 320-704c0-176.732-143.27-320-320-320zM512 512c-106.040 0-192-85.96-192-192s85.96-192 192-192 192 85.96 192 192-85.96 192-192 192z"
                  className=""
                ></path>
              </svg>
              <span className="section-Text">{props.text}</span>
            </div>
            <div className="contact-email1">
              <svg viewBox="0 0 1024 1024" className="contact-icon2">
                <path
                  d="M854 342v-86l-342 214-342-214v86l342 212zM854 170q34 0 59 26t25 60v512q0 34-25 60t-59 26h-684q-34 0-59-26t-25-60v-512q0-34 25-60t59-26h684z"
                  className=""
                ></path>
              </svg>
              <a
                href="mailto:cptscoteauxrhodaniens@gmail.com?subject=Contact site web"
                className="contact-link section-Text"
              >
                {props.text1}
              </a>
            </div>
            <div className="contact-phone">
              <svg
                viewBox="0 0 804.5714285714286 1024"
                className="contact-icon4"
              >
                <path
                  d="M804.571 708.571c0 20.571-9.143 60.571-17.714 79.429-12 28-44 46.286-69.714 60.571-33.714 18.286-68 29.143-106.286 29.143-53.143 0-101.143-21.714-149.714-39.429-34.857-12.571-68.571-28-100-47.429-97.143-60-214.286-177.143-274.286-274.286-19.429-31.429-34.857-65.143-47.429-100-17.714-48.571-39.429-96.571-39.429-149.714 0-38.286 10.857-72.571 29.143-106.286 14.286-25.714 32.571-57.714 60.571-69.714 18.857-8.571 58.857-17.714 79.429-17.714 4 0 8 0 12 1.714 12 4 24.571 32 30.286 43.429 18.286 32.571 36 65.714 54.857 97.714 9.143 14.857 26.286 33.143 26.286 50.857 0 34.857-103.429 85.714-103.429 116.571 0 15.429 14.286 35.429 22.286 49.143 57.714 104 129.714 176 233.714 233.714 13.714 8 33.714 22.286 49.143 22.286 30.857 0 81.714-103.429 116.571-103.429 17.714 0 36 17.143 50.857 26.286 32 18.857 65.143 36.571 97.714 54.857 11.429 5.714 39.429 18.286 43.429 30.286 1.714 4 1.714 8 1.714 12z"
                  className=""
                ></path>
              </svg>
              <span className="section-Text">
                <span className="">04 05 06 07 08</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

Contact.defaultProps = {
  Heading1: 'Rhône',
  text: '69700',
  text1: 'cptscoteauxrhodaniens@gmail.com',
  Message_placeholder: 'Votre message...',
  Heading: 'Envoyez-nous un message :',
  heading: '- Nous contacter -',
  Nom_placeholder: 'Nom Prénom',
  'Cta-btn': 'ENVOYER',
  Email_placeholder: 'E-mail',
  rootClassName: '',
}

Contact.propTypes = {
  Heading1: PropTypes.string,
  text: PropTypes.string,
  text1: PropTypes.string,
  Message_placeholder: PropTypes.string,
  Heading: PropTypes.string,
  heading: PropTypes.string,
  Nom_placeholder: PropTypes.string,
  'Cta-btn': PropTypes.string,
  Email_placeholder: PropTypes.string,
  rootClassName: PropTypes.string,
}

export default Contact
