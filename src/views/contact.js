import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import './contact.css'

const Contact = (props) => {
  return (
    <div className="contact-container">
      <Helmet>
        <title>Contact - CPTS des Coteaux Rhodaniens</title>
        <meta
          name="description"
          content="CPTS des coteaux rhodaniens copamo givors grigny mornant beauvallon chabaniere msp sante medecin medecins kine psy infirmiere ide "
        />
        <meta
          property="og:title"
          content="Contact - CPTS des Coteaux Rhodaniens"
        />
        <meta
          property="og:description"
          content="CPTS des coteaux rhodaniens copamo givors grigny mornant beauvallon chabaniere msp sante medecin medecins kine psy infirmiere ide "
        />
        <meta
          property="og:image"
          content="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/6e2de50e-6b14-40d9-8149-f002baacf575/50d5168f-87d9-4542-ae39-c770c95f97de?org_if_sml=1"
        />
      </Helmet>
      <div data-role="Header" className="contact-navbar-container">
        <div className="contact-navbar">
          <div className="contact-left-side">
            <Link to="/" className="contact-navlink">
              <img
                alt="image"
                src="/playground_assets/logo_cpts_miniweb1-200w.png"
                className="contact-image"
              />
            </Link>
            <div data-type="BurgerMenu" className="contact-burger-menu">
              <svg viewBox="0 0 1024 1024" className="contact-icon">
                <path d="M128 256h768v86h-768v-86zM128 554v-84h768v84h-768zM128 768v-86h768v86h-768z"></path>
              </svg>
            </div>
            <div className="contact-links-container">
              <Link to="/c-p-t-s" className="contact-link-c-p-t-s anchor">
                La CPTS
              </Link>
              <Link to="/missions" className="contact-link-missions anchor">
                Missions de Santé
              </Link>
              <span className="contact-link-projets anchor">Projets</span>
              <Link to="/actus" className="contact-link-actus anchor">
                Actualités
              </Link>
              <Link to="/professionnels" className="contact-link-p-s anchor">
                Professionnels de Santé
              </Link>
            </div>
          </div>
          <div className="contact-right-side">
            <a href="#contact" className="contact-link-contact anchor">
              Contact
            </a>
            <button className="contact-cta-btn anchor button">Accès PS</button>
          </div>
          <div data-type="MobileMenu" className="contact-mobile-menu">
            <div className="contact-container1">
              <img
                alt="image"
                src="https://play.teleporthq.io/static/svg/default-img.svg"
                className="contact-image1"
              />
              <div data-type="CloseMobileMenu" className="contact-close-menu">
                <svg viewBox="0 0 1024 1024" className="contact-icon02">
                  <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                </svg>
              </div>
            </div>
            <div className="contact-links-container1">
              <Link to="/" className="contact-link-accueil anchor">
                <span>Accueil</span>
              </Link>
              <Link to="/c-p-t-s" className="contact-link-c-p-t-s1 anchor">
                <span className="contact-text01">
                  La
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <span className="contact-text02">CPTS</span>
              </Link>
              <Link to="/missions" className="contact-link-missions1 anchor">
                Missions
              </Link>
              <Link to="/projets" className="contact-link-projets1 anchor">
                <span>Projets</span>
              </Link>
              <Link to="/actus" className="contact-link-actus1 anchor">
                <span>Actus</span>
              </Link>
              <Link to="/professionnels" className="contact-link-p-s1 anchor">
                <span>Professionnels</span>
              </Link>
              <a href="#contact" className="contact-link-contact1 anchor">
                <span>Contact</span>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div id="contact" className="contact-contact">
        <h2 className="contact-text07 section-Heading">- Nous contacter -</h2>
        <div className="contact-content-container">
          <div className="contact-form-container">
            <span className="contact-heading bigCard-Heading">
              Envoyez-nous un message :
            </span>
            <input
              type="text"
              required="true"
              placeholder="Nom Prénom"
              className="contact-nom input"
            />
            <input
              type="text"
              required="true"
              placeholder="E-mail"
              className="contact-email input"
            />
            <textarea
              placeholder="Votre message..."
              className="contact-message textarea"
            ></textarea>
            <button type="submit" className="contact-cta-btn1 anchor button">
              ENVOYER
            </button>
          </div>
          <div className="contact-locations-container">
            <div className="contact-location-1">
              <span className="contact-heading1">Givors - Mornant, Rhône</span>
              <div className="contact-adresse">
                <svg viewBox="0 0 1024 1024" className="contact-icon04">
                  <path d="M512 0c-176.732 0-320 143.268-320 320 0 320 320 704 320 704s320-384 320-704c0-176.732-143.27-320-320-320zM512 512c-106.040 0-192-85.96-192-192s85.96-192 192-192 192 85.96 192 192-85.96 192-192 192z"></path>
                </svg>
                <span className="section-Text">69700</span>
              </div>
              <div className="contact-email1">
                <svg viewBox="0 0 1024 1024" className="contact-icon06">
                  <path d="M854 342v-86l-342 214-342-214v86l342 212zM854 170q34 0 59 26t25 60v512q0 34-25 60t-59 26h-684q-34 0-59-26t-25-60v-512q0-34 25-60t59-26h684z"></path>
                </svg>
                <a
                  href="mailto:cptscoteauxrhodaniens@gmail.com?subject=Contact site web"
                  className="contact-link section-Text"
                >
                  cptscoteauxrhodaniens@gmail.com
                </a>
              </div>
              <div className="contact-phone">
                <svg
                  viewBox="0 0 804.5714285714286 1024"
                  className="contact-icon08"
                >
                  <path d="M804.571 708.571c0 20.571-9.143 60.571-17.714 79.429-12 28-44 46.286-69.714 60.571-33.714 18.286-68 29.143-106.286 29.143-53.143 0-101.143-21.714-149.714-39.429-34.857-12.571-68.571-28-100-47.429-97.143-60-214.286-177.143-274.286-274.286-19.429-31.429-34.857-65.143-47.429-100-17.714-48.571-39.429-96.571-39.429-149.714 0-38.286 10.857-72.571 29.143-106.286 14.286-25.714 32.571-57.714 60.571-69.714 18.857-8.571 58.857-17.714 79.429-17.714 4 0 8 0 12 1.714 12 4 24.571 32 30.286 43.429 18.286 32.571 36 65.714 54.857 97.714 9.143 14.857 26.286 33.143 26.286 50.857 0 34.857-103.429 85.714-103.429 116.571 0 15.429 14.286 35.429 22.286 49.143 57.714 104 129.714 176 233.714 233.714 13.714 8 33.714 22.286 49.143 22.286 30.857 0 81.714-103.429 116.571-103.429 17.714 0 36 17.143 50.857 26.286 32 18.857 65.143 36.571 97.714 54.857 11.429 5.714 39.429 18.286 43.429 30.286 1.714 4 1.714 8 1.714 12z"></path>
                </svg>
                <span className="section-Text">
                  <span>04 05 06 07 08</span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="contact-section-separator"></div>
      <div className="contact-footer-container">
        <div className="contact-footer">
          <div className="contact-social-links">
            <svg
              viewBox="0 0 950.8571428571428 1024"
              className="contact-icon10"
            >
              <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
            </svg>
            <svg
              viewBox="0 0 877.7142857142857 1024"
              className="contact-icon12"
            >
              <path d="M713.143 73.143c90.857 0 164.571 73.714 164.571 164.571v548.571c0 90.857-73.714 164.571-164.571 164.571h-107.429v-340h113.714l17.143-132.571h-130.857v-84.571c0-38.286 10.286-64 65.714-64l69.714-0.571v-118.286c-12-1.714-53.714-5.143-101.714-5.143-101.143 0-170.857 61.714-170.857 174.857v97.714h-114.286v132.571h114.286v340h-304c-90.857 0-164.571-73.714-164.571-164.571v-548.571c0-90.857 73.714-164.571 164.571-164.571h548.571z"></path>
            </svg>
          </div>
          <div className="contact-copyright-container">
            <svg viewBox="0 0 1024 1024" className="contact-icon14">
              <path d="M512 854q140 0 241-101t101-241-101-241-241-101-241 101-101 241 101 241 241 101zM512 86q176 0 301 125t125 301-125 301-301 125-301-125-125-301 125-301 301-125zM506 390q-80 0-80 116v12q0 116 80 116 30 0 50-17t20-43h76q0 50-44 88-42 36-102 36-80 0-122-48t-42-132v-12q0-82 40-128 48-54 124-54 66 0 104 38 42 42 42 98h-76q0-14-6-26-10-20-14-24-20-20-50-20z"></path>
            </svg>
            <span className="anchor">Tous droits réservés, 2022</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
