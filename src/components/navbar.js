import React from 'react'
import { Link } from 'react-router-dom'

import PropTypes from 'prop-types'

import './navbar.css'

const Navbar = (props) => {
  return (
    <div
      data-role="Header"
      className={`navbar-navbar-container ${props.rootClassName} `}
    >
      <div className="navbar-navbar">
        <div className="navbar-left-side">
          <Link to="/" className="navbar-navlink">
            <img
              alt={props.image_alt}
              src={props.image_src}
              className="navbar-image"
            />
          </Link>
          <div data-type="BurgerMenu" className="navbar-burger-menu">
            <Link to="/contact" className="">
              <svg viewBox="0 0 1024 1024" className="navbar-icon">
                <path
                  d="M128 256h768v86h-768v-86zM128 554v-84h768v84h-768zM128 768v-86h768v86h-768z"
                  className=""
                ></path>
              </svg>
            </Link>
          </div>
          <div className="navbar-links-container anchor">
            <Link to="/c-p-t-s" className="navbar-link-c-p-t-s anchor">
              La CPTS
            </Link>
            <Link to="/missions" className="navbar-link-missions anchor">
              Missions de Santé
            </Link>
            <Link to="/projets" className="navbar-link-projets anchor">
              Projets
            </Link>
            <Link to="/actus" className="navbar-link-actus anchor">
              Actualités
            </Link>
            <Link to="/professionnels" className="navbar-link-pros anchor">
              Professionnels
            </Link>
            <Link to="/numrosutiles" className="navbar-link-patient anchor">
              Espace Patient
            </Link>
          </div>
        </div>
        <div className="navbar-right-side">
          <Link to="/contact" className="navbar-link-contact anchor">
            Contact
          </Link>
          <Link
            to="/encours-08-login-espace-p-s"
            className="navbar-link-login-p-s anchor"
          >
            Espace Pro
          </Link>
        </div>
        <div data-type="MobileMenu" className="navbar-mobile-menu">
          <div className="navbar-container">
            <Link to="/" className="navbar-navlink2">
              <img
                alt={props.Image_alt}
                src={props.Image_src}
                className="navbar-image1"
              />
            </Link>
            <div data-type="CloseMobileMenu" className="navbar-close-menu">
              <svg viewBox="0 0 1024 1024" className="navbar-icon2">
                <path
                  d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"
                  className=""
                ></path>
              </svg>
            </div>
          </div>
          <div className="navbar-links-container1">
            <Link to="/" className="navbar-link-accueil anchor">
              <span className="">Accueil</span>
            </Link>
            <Link to="/c-p-t-s" className="navbar-link-c-p-t-s1 anchor">
              <span className="navbar-text1">
                La
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <span className="navbar-text2">CPTS</span>
            </Link>
            <Link to="/missions" className="navbar-link-missions1 anchor">
              Missions
            </Link>
            <Link to="/projets" className="navbar-link-projets1 anchor">
              <span className="">Projets</span>
            </Link>
            <Link to="/actus" className="navbar-link-actus1 anchor">
              <span className="">Actus</span>
            </Link>
            <Link to="/professionnels" className="navbar-link-p-s anchor">
              <span className="">Professionnels</span>
            </Link>
            <Link
              to="/encours-06-espace-patient"
              className="navbar-link-patient1 anchor"
            >
              <span className="">Espace Patient</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

Navbar.defaultProps = {
  image_alt: 'image',
  image_src: '/playground_assets/logo_cpts_miniweb1-1500h.png',
  Image_alt: 'image',
  Image_src: '/playground_assets/logo_cpts_miniweb1-1500h.png',
  rootClassName: '',
}

Navbar.propTypes = {
  image_alt: PropTypes.string,
  image_src: PropTypes.string,
  Image_alt: PropTypes.string,
  Image_src: PropTypes.string,
  rootClassName: PropTypes.string,
}

export default Navbar
