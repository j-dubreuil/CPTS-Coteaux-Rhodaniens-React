import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import './accueil.css'

const Accueil = (props) => {
  return (
    <div className="accueil-container">
      <Helmet>
        <title>CPTS des Coteaux Rhodaniens</title>
        <meta
          name="description"
          content="CPTS des coteaux rhodaniens copamo givors grigny mornant beauvallon chabaniere msp sante medecin medecins kine psy infirmiere ide "
        />
        <meta property="og:title" content="CPTS des Coteaux Rhodaniens" />
        <meta
          property="og:description"
          content="CPTS des coteaux rhodaniens copamo givors grigny mornant beauvallon chabaniere msp sante medecin medecins kine psy infirmiere ide "
        />
        <meta
          property="og:image"
          content="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/6e2de50e-6b14-40d9-8149-f002baacf575/6370d807-0bad-4175-8ed7-cbb62207fc8d?org_if_sml=1"
        />
      </Helmet>
      <div data-role="Header" className="accueil-navbar-container">
        <div className="accueil-navbar">
          <div className="accueil-left-side">
            <Link to="/" className="accueil-navlink">
              <img
                alt="image"
                src="/playground_assets/logo_cpts_miniweb1-1500h.png"
                className="accueil-image"
              />
            </Link>
            <div data-type="BurgerMenu" className="accueil-burger-menu">
              <svg viewBox="0 0 1024 1024" className="accueil-icon">
                <path d="M128 256h768v86h-768v-86zM128 554v-84h768v84h-768zM128 768v-86h768v86h-768z"></path>
              </svg>
            </div>
            <div className="accueil-links-container">
              <a href="#cpts" className="accueil-link-c-p-t-s anchor">
                La CPTS
              </a>
              <a href="#missions" className="accueil-link-missions anchor">
                Missions de Santé
              </a>
              <a href="#projets" className="accueil-link-projets anchor">
                Projets
              </a>
              <a href="#actus" className="accueil-link-actus anchor">
                Actualités
              </a>
              <a href="#ps" className="accueil-link-p-s anchor">
                Professionnels de Santé
              </a>
            </div>
          </div>
          <div className="accueil-right-side">
            <a href="#contact" className="accueil-link-contact anchor">
              Contact
            </a>
            <button className="accueil-cta-btn button anchor">Accès PS</button>
          </div>
          <div data-type="MobileMenu" className="accueil-mobile-menu">
            <div className="accueil-container1">
              <Link to="/" className="accueil-navlink1">
                <img
                  alt="image"
                  src="/playground_assets/logo_cpts_miniweb1-1500h.png"
                  className="accueil-image1"
                />
              </Link>
              <div data-type="CloseMobileMenu" className="accueil-close-menu">
                <svg viewBox="0 0 1024 1024" className="accueil-icon02">
                  <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                </svg>
              </div>
            </div>
            <div className="accueil-links-container1">
              <Link to="/" className="accueil-link-accueil anchor">
                <span>Accueil</span>
              </Link>
              <Link to="/c-p-t-s" className="accueil-link-c-p-t-s1 anchor">
                <span className="accueil-text01">
                  La
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <span className="accueil-text02">CPTS</span>
              </Link>
              <Link to="/missions" className="accueil-link-missions1 anchor">
                Missions
              </Link>
              <Link to="/projets" className="accueil-link-projets1 anchor">
                <span>Projets</span>
              </Link>
              <Link to="/actus" className="accueil-link-actus1 anchor">
                <span>Actus</span>
              </Link>
              <Link to="/professionnels" className="accueil-link-p-s1 anchor">
                <span>Professionnels</span>
              </Link>
              <a href="#contact" className="accueil-link-contact1 anchor">
                <span>Contact</span>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div id="cpts" className="accueil-c-p-t-s">
        <div className="accueil-content-container">
          <div className="accueil-hero-text">
            <h1 className="accueil-heading section-Heading">
              La CPTS des Côteaux Rhodaniens, votre territoire
            </h1>
            <span className="accueil-text07 section-Text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
              nec odio. Praesent libero. Sed cursus ante dapibus diam.c Sed
              nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis
              ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta.
              Mauris massa. Vestibulum lacinia arcu eget nulla. Class aptent
              taciti sociosqu ad litora torquent per conubia nostra, per
              inceptos himenaeos.
            </span>
            <Link to="/c-p-t-s" className="accueil-cta-btn1 anchor button">
              En savoir +
            </Link>
          </div>
        </div>
      </div>
      <div className="accueil-section-separator"></div>
      <div id="missions" className="accueil-missions">
        <div className="accueil-heading-container">
          <h2 className="accueil-text08 section-Heading">
            <span>
              Nos missions
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
          </h2>
          <Link to="/missions" className="accueil-cta-btn2 anchor button">
            En savoir +
          </Link>
        </div>
        <div className="accueil-cards-container">
          <div className="accueil-features-card">
            <div className="accueil-icon-container">
              <svg viewBox="0 0 1024 1024" className="accueil-icon04">
                <path d="M533.333 234.667c-11.776 0-21.333 9.557-21.333 21.333s9.557 21.333 21.333 21.333c46.208 0 83.797 37.589 83.797 83.797 0 11.776 9.557 21.333 21.333 21.333s21.333-9.557 21.333-21.333c0-69.717-56.747-126.464-126.464-126.464z"></path>
                <path d="M533.333 42.667c-176.469 0-320 143.531-320 320 0 63.403 18.773 124.672 54.357 177.707 0.981 2.005 2.091 3.925 3.413 5.76 77.867 111.189 91.563 146.347 91.563 179.2v128c0 23.552 19.115 42.667 42.667 42.667h85.333c0 11.093 4.693 22.187 12.373 30.293 8.107 7.68 19.2 12.373 30.293 12.373 11.093 0 22.187-4.693 30.293-12.373 7.68-8.107 12.373-19.2 12.373-30.293h85.333c23.552 0 42.667-19.115 42.667-42.667v-128c0-33.365 13.611-68.693 90.965-179.157 38.187-54.4 58.368-117.845 58.368-183.509 0-176.469-143.531-320-320-320zM618.667 810.667h-170.667v-42.667h170.667v42.667zM725.12 497.195c-62.549 89.301-91.435 140.331-101.76 185.472h-47.36v-85.333c0-23.552-19.115-42.667-42.667-42.667s-42.667 19.115-42.667 42.667v85.333h-47.488c-10.24-43.947-38.315-93.867-98.389-180.053-0.939-1.877-2.048-3.712-3.285-5.504-28.032-39.851-42.837-86.357-42.837-134.443 0-129.408 105.259-234.667 234.667-234.667s234.667 105.259 234.667 234.667c0 48.043-14.805 94.549-42.88 134.528z"></path>
              </svg>
            </div>
            <div className="accueil-text-container">
              <span className="accueil-heading01 card-Heading">Mission 1</span>
              <span className="accueil-text10 card-Text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
                nec odio. Praesent libero. Sed cursus ante dapibus diam.c Sed
                nisi. Nulla quis sem at nibh elementum imperdiet.
              </span>
            </div>
          </div>
          <div className="accueil-features-card1">
            <div className="accueil-icon-container1">
              <svg viewBox="0 0 1024 1024" className="accueil-icon07">
                <path d="M533.333 234.667c-11.776 0-21.333 9.557-21.333 21.333s9.557 21.333 21.333 21.333c46.208 0 83.797 37.589 83.797 83.797 0 11.776 9.557 21.333 21.333 21.333s21.333-9.557 21.333-21.333c0-69.717-56.747-126.464-126.464-126.464z"></path>
                <path d="M533.333 42.667c-176.469 0-320 143.531-320 320 0 63.403 18.773 124.672 54.357 177.707 0.981 2.005 2.091 3.925 3.413 5.76 77.867 111.189 91.563 146.347 91.563 179.2v128c0 23.552 19.115 42.667 42.667 42.667h85.333c0 11.093 4.693 22.187 12.373 30.293 8.107 7.68 19.2 12.373 30.293 12.373 11.093 0 22.187-4.693 30.293-12.373 7.68-8.107 12.373-19.2 12.373-30.293h85.333c23.552 0 42.667-19.115 42.667-42.667v-128c0-33.365 13.611-68.693 90.965-179.157 38.187-54.4 58.368-117.845 58.368-183.509 0-176.469-143.531-320-320-320zM618.667 810.667h-170.667v-42.667h170.667v42.667zM725.12 497.195c-62.549 89.301-91.435 140.331-101.76 185.472h-47.36v-85.333c0-23.552-19.115-42.667-42.667-42.667s-42.667 19.115-42.667 42.667v85.333h-47.488c-10.24-43.947-38.315-93.867-98.389-180.053-0.939-1.877-2.048-3.712-3.285-5.504-28.032-39.851-42.837-86.357-42.837-134.443 0-129.408 105.259-234.667 234.667-234.667s234.667 105.259 234.667 234.667c0 48.043-14.805 94.549-42.88 134.528z"></path>
              </svg>
            </div>
            <div className="accueil-text-container1">
              <span className="accueil-heading02 card-Heading">Mission 2</span>
              <span className="accueil-text11 card-Text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
                nec odio. Praesent libero. Sed cursus ante dapibus diam.c Sed
                nisi. Nulla quis sem at nibh elementum imperdiet.
              </span>
            </div>
          </div>
          <div className="accueil-features-card2">
            <div className="accueil-icon-container2">
              <svg viewBox="0 0 1024 1024" className="accueil-icon10">
                <path d="M533.333 234.667c-11.776 0-21.333 9.557-21.333 21.333s9.557 21.333 21.333 21.333c46.208 0 83.797 37.589 83.797 83.797 0 11.776 9.557 21.333 21.333 21.333s21.333-9.557 21.333-21.333c0-69.717-56.747-126.464-126.464-126.464z"></path>
                <path d="M533.333 42.667c-176.469 0-320 143.531-320 320 0 63.403 18.773 124.672 54.357 177.707 0.981 2.005 2.091 3.925 3.413 5.76 77.867 111.189 91.563 146.347 91.563 179.2v128c0 23.552 19.115 42.667 42.667 42.667h85.333c0 11.093 4.693 22.187 12.373 30.293 8.107 7.68 19.2 12.373 30.293 12.373 11.093 0 22.187-4.693 30.293-12.373 7.68-8.107 12.373-19.2 12.373-30.293h85.333c23.552 0 42.667-19.115 42.667-42.667v-128c0-33.365 13.611-68.693 90.965-179.157 38.187-54.4 58.368-117.845 58.368-183.509 0-176.469-143.531-320-320-320zM618.667 810.667h-170.667v-42.667h170.667v42.667zM725.12 497.195c-62.549 89.301-91.435 140.331-101.76 185.472h-47.36v-85.333c0-23.552-19.115-42.667-42.667-42.667s-42.667 19.115-42.667 42.667v85.333h-47.488c-10.24-43.947-38.315-93.867-98.389-180.053-0.939-1.877-2.048-3.712-3.285-5.504-28.032-39.851-42.837-86.357-42.837-134.443 0-129.408 105.259-234.667 234.667-234.667s234.667 105.259 234.667 234.667c0 48.043-14.805 94.549-42.88 134.528z"></path>
              </svg>
            </div>
            <div className="accueil-text-container2">
              <span className="accueil-heading03 card-Heading">Mission 3</span>
              <span className="accueil-text12 card-Text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
                nec odio. Praesent libero. Sed cursus ante dapibus diam.c Sed
                nisi. Nulla quis sem at nibh elementum imperdiet.
              </span>
            </div>
          </div>
          <div className="accueil-features-card3">
            <div className="accueil-icon-container3">
              <svg viewBox="0 0 1024 1024" className="accueil-icon13">
                <path d="M533.333 234.667c-11.776 0-21.333 9.557-21.333 21.333s9.557 21.333 21.333 21.333c46.208 0 83.797 37.589 83.797 83.797 0 11.776 9.557 21.333 21.333 21.333s21.333-9.557 21.333-21.333c0-69.717-56.747-126.464-126.464-126.464z"></path>
                <path d="M533.333 42.667c-176.469 0-320 143.531-320 320 0 63.403 18.773 124.672 54.357 177.707 0.981 2.005 2.091 3.925 3.413 5.76 77.867 111.189 91.563 146.347 91.563 179.2v128c0 23.552 19.115 42.667 42.667 42.667h85.333c0 11.093 4.693 22.187 12.373 30.293 8.107 7.68 19.2 12.373 30.293 12.373 11.093 0 22.187-4.693 30.293-12.373 7.68-8.107 12.373-19.2 12.373-30.293h85.333c23.552 0 42.667-19.115 42.667-42.667v-128c0-33.365 13.611-68.693 90.965-179.157 38.187-54.4 58.368-117.845 58.368-183.509 0-176.469-143.531-320-320-320zM618.667 810.667h-170.667v-42.667h170.667v42.667zM725.12 497.195c-62.549 89.301-91.435 140.331-101.76 185.472h-47.36v-85.333c0-23.552-19.115-42.667-42.667-42.667s-42.667 19.115-42.667 42.667v85.333h-47.488c-10.24-43.947-38.315-93.867-98.389-180.053-0.939-1.877-2.048-3.712-3.285-5.504-28.032-39.851-42.837-86.357-42.837-134.443 0-129.408 105.259-234.667 234.667-234.667s234.667 105.259 234.667 234.667c0 48.043-14.805 94.549-42.88 134.528z"></path>
              </svg>
            </div>
            <div className="accueil-text-container3">
              <span className="accueil-heading04 card-Heading">Mission 4</span>
              <span className="accueil-text13 card-Text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
                nec odio. Praesent libero. Sed cursus ante dapibus diam.c Sed
                nisi. Nulla quis sem at nibh elementum imperdiet.
              </span>
            </div>
          </div>
          <div className="accueil-features-card4">
            <div className="accueil-icon-container4">
              <svg viewBox="0 0 1024 1024" className="accueil-icon16">
                <path d="M533.333 234.667c-11.776 0-21.333 9.557-21.333 21.333s9.557 21.333 21.333 21.333c46.208 0 83.797 37.589 83.797 83.797 0 11.776 9.557 21.333 21.333 21.333s21.333-9.557 21.333-21.333c0-69.717-56.747-126.464-126.464-126.464z"></path>
                <path d="M533.333 42.667c-176.469 0-320 143.531-320 320 0 63.403 18.773 124.672 54.357 177.707 0.981 2.005 2.091 3.925 3.413 5.76 77.867 111.189 91.563 146.347 91.563 179.2v128c0 23.552 19.115 42.667 42.667 42.667h85.333c0 11.093 4.693 22.187 12.373 30.293 8.107 7.68 19.2 12.373 30.293 12.373 11.093 0 22.187-4.693 30.293-12.373 7.68-8.107 12.373-19.2 12.373-30.293h85.333c23.552 0 42.667-19.115 42.667-42.667v-128c0-33.365 13.611-68.693 90.965-179.157 38.187-54.4 58.368-117.845 58.368-183.509 0-176.469-143.531-320-320-320zM618.667 810.667h-170.667v-42.667h170.667v42.667zM725.12 497.195c-62.549 89.301-91.435 140.331-101.76 185.472h-47.36v-85.333c0-23.552-19.115-42.667-42.667-42.667s-42.667 19.115-42.667 42.667v85.333h-47.488c-10.24-43.947-38.315-93.867-98.389-180.053-0.939-1.877-2.048-3.712-3.285-5.504-28.032-39.851-42.837-86.357-42.837-134.443 0-129.408 105.259-234.667 234.667-234.667s234.667 105.259 234.667 234.667c0 48.043-14.805 94.549-42.88 134.528z"></path>
              </svg>
            </div>
            <div className="accueil-text-container4">
              <span className="accueil-heading05 card-Heading">Mission 5</span>
              <span className="accueil-text14 card-Text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
                nec odio. Praesent libero. Sed cursus ante dapibus diam.c Sed
                nisi. Nulla quis sem at nibh elementum imperdiet.
              </span>
            </div>
          </div>
          <div className="accueil-features-card5">
            <div className="accueil-icon-container5">
              <svg viewBox="0 0 1024 1024" className="accueil-icon19">
                <path d="M533.333 234.667c-11.776 0-21.333 9.557-21.333 21.333s9.557 21.333 21.333 21.333c46.208 0 83.797 37.589 83.797 83.797 0 11.776 9.557 21.333 21.333 21.333s21.333-9.557 21.333-21.333c0-69.717-56.747-126.464-126.464-126.464z"></path>
                <path d="M533.333 42.667c-176.469 0-320 143.531-320 320 0 63.403 18.773 124.672 54.357 177.707 0.981 2.005 2.091 3.925 3.413 5.76 77.867 111.189 91.563 146.347 91.563 179.2v128c0 23.552 19.115 42.667 42.667 42.667h85.333c0 11.093 4.693 22.187 12.373 30.293 8.107 7.68 19.2 12.373 30.293 12.373 11.093 0 22.187-4.693 30.293-12.373 7.68-8.107 12.373-19.2 12.373-30.293h85.333c23.552 0 42.667-19.115 42.667-42.667v-128c0-33.365 13.611-68.693 90.965-179.157 38.187-54.4 58.368-117.845 58.368-183.509 0-176.469-143.531-320-320-320zM618.667 810.667h-170.667v-42.667h170.667v42.667zM725.12 497.195c-62.549 89.301-91.435 140.331-101.76 185.472h-47.36v-85.333c0-23.552-19.115-42.667-42.667-42.667s-42.667 19.115-42.667 42.667v85.333h-47.488c-10.24-43.947-38.315-93.867-98.389-180.053-0.939-1.877-2.048-3.712-3.285-5.504-28.032-39.851-42.837-86.357-42.837-134.443 0-129.408 105.259-234.667 234.667-234.667s234.667 105.259 234.667 234.667c0 48.043-14.805 94.549-42.88 134.528z"></path>
              </svg>
            </div>
            <div className="accueil-text-container5">
              <span className="accueil-heading06 card-Heading">Mission 6</span>
              <span className="accueil-text15 card-Text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
                nec odio. Praesent libero. Sed cursus ante dapibus diam.c Sed
                nisi. Nulla quis sem at nibh elementum imperdiet.
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="accueil-section-separator1"></div>
      <div id="projets" className="accueil-projets">
        <div className="accueil-heading-container1">
          <h1 className="accueil-text16 section-Heading">Nos projets</h1>
          <span className="accueil-text17 section-Text">
            Lorme ipsum dolor sit amet, consectetur adipiscing elit. Integer nec
            odio. Praesent libero.
          </span>
          <Link to="/projets" className="accueil-cta-btn3 anchor button">
            En savoir +
          </Link>
        </div>
        <div className="accueil-cards-container1">
          <div className="accueil-service-card">
            <h3 className="accueil-text18 card-Heading">Projet 1</h3>
            <span className="accueil-text19 card-Text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
              nec odio. Praesent libero.
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <span className="anchor">+ d&apos;infos</span>
          </div>
          <div className="accueil-service-card1">
            <h3 className="accueil-text20 card-Heading">Projet 2</h3>
            <span className="accueil-text21 card-Text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
              nec odio. Praesent libero.
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <span className="anchor">+ D&apos;infos</span>
          </div>
          <div className="accueil-service-card2">
            <h3 className="accueil-text22 card-Heading">Projet 3</h3>
            <span className="accueil-text23 card-Text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
              nec odio. Praesent libero.
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <span className="anchor">+ D&apos;infos</span>
          </div>
        </div>
      </div>
      <div className="accueil-section-separator2"></div>
      <div id="ps" className="accueil-pros">
        <div className="accueil-heading-container2">
          <h1 className="accueil-text24 section-Heading">
            <span>Les professionnels de Santé</span>
            <br></br>
            <span>du territoire</span>
          </h1>
          <span className="accueil-text28 section-Text">
            Lorme ipsum dolor sit amet, consectetur adipiscing elit. Integer nec
            odio. Praesent libero.
          </span>
          <Link to="/professionnels" className="accueil-cta-btn4 anchor button">
            En savoir +
          </Link>
        </div>
        <div className="accueil-cards-container2">
          <div className="accueil-team-card">
            <div className="accueil-avatar-container">
              <svg viewBox="0 0 1024 1024" className="accueil-icon22">
                <path d="M576 706.612v-52.78c70.498-39.728 128-138.772 128-237.832 0-159.058 0-288-192-288s-192 128.942-192 288c0 99.060 57.502 198.104 128 237.832v52.78c-217.102 17.748-384 124.42-384 253.388h896c0-128.968-166.898-235.64-384-253.388z"></path>
              </svg>
            </div>
            <span className="accueil-name card-Heading">ABC</span>
            <span className="accueil-position card-Text">Médecin</span>
          </div>
          <div className="accueil-team-card1">
            <div className="accueil-avatar-container1">
              <svg viewBox="0 0 1024 1024" className="accueil-icon24">
                <path d="M576 706.612v-52.78c70.498-39.728 128-138.772 128-237.832 0-159.058 0-288-192-288s-192 128.942-192 288c0 99.060 57.502 198.104 128 237.832v52.78c-217.102 17.748-384 124.42-384 253.388h896c0-128.968-166.898-235.64-384-253.388z"></path>
              </svg>
            </div>
            <span className="accueil-name1 card-Heading">DEF</span>
            <span className="accueil-position1 card-Text">kiné</span>
          </div>
          <div className="accueil-team-card2">
            <div className="accueil-avatar-container2">
              <svg viewBox="0 0 1024 1024" className="accueil-icon26">
                <path d="M576 706.612v-52.78c70.498-39.728 128-138.772 128-237.832 0-159.058 0-288-192-288s-192 128.942-192 288c0 99.060 57.502 198.104 128 237.832v52.78c-217.102 17.748-384 124.42-384 253.388h896c0-128.968-166.898-235.64-384-253.388z"></path>
              </svg>
            </div>
            <span className="accueil-name2 card-Heading">GHI</span>
            <span className="accueil-position2 card-Text">IDE</span>
          </div>
          <div className="accueil-team-card3">
            <div className="accueil-avatar-container3">
              <svg viewBox="0 0 1024 1024" className="accueil-icon28">
                <path d="M576 706.612v-52.78c70.498-39.728 128-138.772 128-237.832 0-159.058 0-288-192-288s-192 128.942-192 288c0 99.060 57.502 198.104 128 237.832v52.78c-217.102 17.748-384 124.42-384 253.388h896c0-128.968-166.898-235.64-384-253.388z"></path>
              </svg>
            </div>
            <span className="accueil-name3 card-Heading">JKL</span>
            <span className="accueil-position3 card-Text">Cardiologue</span>
          </div>
          <div className="accueil-team-card4">
            <div className="accueil-avatar-container4">
              <svg viewBox="0 0 1024 1024" className="accueil-icon30">
                <path d="M576 706.612v-52.78c70.498-39.728 128-138.772 128-237.832 0-159.058 0-288-192-288s-192 128.942-192 288c0 99.060 57.502 198.104 128 237.832v52.78c-217.102 17.748-384 124.42-384 253.388h896c0-128.968-166.898-235.64-384-253.388z"></path>
              </svg>
            </div>
            <span className="accueil-name4 card-Heading">NOM</span>
            <span className="accueil-position4 card-Text">Autre</span>
          </div>
        </div>
      </div>
      <div className="accueil-section-separator3"></div>
      <div id="actus" className="accueil-actus">
        <div className="accueil-heading-container3">
          <h1 className="accueil-text29 section-Heading">Nos actus</h1>
          <span className="accueil-text30 section-Text">
            Lorme ipsum dolor sit amet, consectetur adipiscing elit. Integer nec
            odio. Praesent libero.
          </span>
        </div>
        <div className="accueil-cards-container3">
          <div className="accueil-left-section">
            <div className="accueil-video-container">
              <video className="accueil-video"></video>
              <div className="accueil-play-container">
                <svg viewBox="0 0 1024 1024" className="accueil-icon32">
                  <path d="M512 854q140 0 241-101t101-241-101-241-241-101-241 101-101 241 101 241 241 101zM512 86q176 0 301 125t125 301-125 301-301 125-301-125-125-301 125-301 301-125zM426 704v-384l256 192z"></path>
                </svg>
              </div>
            </div>
            <div className="accueil-content-container1">
              <span className="accueil-heading07 card-Heading">Article 1</span>
              <span className="accueil-text31 card-Text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
                nec odio. Praesent libero. Sed cursus ante dapibus diam.c Sed
                nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis
                ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta.
                Mauris massa. Vestibulum lacinia arcu eget nulla. Class aptent
                taciti sociosqu ad litora torquent per conubia nostra, per
                inceptos himenaeos.
              </span>
              <span className="accueil-text32 card-Text">
                {' '}
                Fusce nec tellus sed augue semper porta. Mauris massa.
                Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu
                ad litora torquent per conubia nostra, per inceptos himenaeos.
              </span>
              <span className="anchor">+ d&apos;infos</span>
            </div>
            <div className="accueil-info-container">
              <span className="card-Text">13/06/2022</span>
              <div className="accueil-stats-container">
                <div className="accueil-messages-container">
                  <svg viewBox="0 0 1024 1024" className="accueil-icon34">
                    <path d="M938.667 490.539v-21.205c0-0.725-0.043-1.621-0.085-2.475-5.803-99.755-47.488-190.336-112.768-258.176-68.352-71.125-162.731-117.419-268.843-123.264-0.64-0.043-1.493-0.085-2.304-0.085h-20.864c-59.947-0.683-122.965 13.227-181.931 43.008-52.181 26.539-97.749 63.531-133.931 108.203-56.405 69.675-89.899 158.037-89.941 253.653-0.597 54.4 10.795 111.36 35.157 165.419l-75.605 226.859c-2.816 8.363-3.072 17.835 0 26.965 7.467 22.357 31.616 34.432 53.973 26.965l226.731-75.563c49.493 22.485 105.984 35.243 165.376 35.115 58.539-0.384 115.84-13.141 168.149-36.949 81.579-37.163 151.040-101.248 193.707-186.667 27.477-53.291 43.307-115.84 43.136-181.803zM853.333 490.795c0.128 52.267-12.459 101.333-33.664 142.464-34.176 68.352-88.832 118.784-153.259 148.139-41.387 18.859-86.869 28.971-133.376 29.312-52.096 0.128-101.163-12.459-142.293-33.664-10.624-5.504-22.528-6.059-33.067-2.56l-162.261 54.101 54.101-162.261c3.755-11.221 2.56-22.912-2.389-32.725-23.552-46.72-34.304-96.213-33.792-142.464 0.043-76.331 26.411-145.877 70.912-200.917 28.629-35.328 64.768-64.725 106.283-85.76 46.592-23.552 96.085-34.304 142.336-33.792h19.456c83.712 4.565 158.037 41.003 212.011 97.109 51.285 53.376 84.139 124.416 89.003 202.837z"></path>
                  </svg>
                  <span className="card-Text">123</span>
                </div>
                <div className="accueil-views-container">
                  <svg viewBox="0 0 1024 1024" className="accueil-icon36">
                    <path d="M512 192c-223.318 0-416.882 130.042-512 320 95.118 189.958 288.682 320 512 320 223.312 0 416.876-130.042 512-320-95.116-189.958-288.688-320-512-320zM764.45 361.704c60.162 38.374 111.142 89.774 149.434 150.296-38.292 60.522-89.274 111.922-149.436 150.296-75.594 48.218-162.89 73.704-252.448 73.704-89.56 0-176.858-25.486-252.452-73.704-60.158-38.372-111.138-89.772-149.432-150.296 38.292-60.524 89.274-111.924 149.434-150.296 3.918-2.5 7.876-4.922 11.86-7.3-9.96 27.328-15.41 56.822-15.41 87.596 0 141.382 114.616 256 256 256 141.382 0 256-114.618 256-256 0-30.774-5.452-60.268-15.408-87.598 3.978 2.378 7.938 4.802 11.858 7.302v0zM512 416c0 53.020-42.98 96-96 96s-96-42.98-96-96 42.98-96 96-96 96 42.982 96 96z"></path>
                  </svg>
                  <span className="card-Text">4567</span>
                </div>
              </div>
            </div>
          </div>
          <div className="accueil-right-section">
            <div className="accueil-card">
              <img
                alt="image"
                src="https://play.teleporthq.io/static/svg/default-img.svg"
                className="accueil-image2"
              />
              <div className="accueil-content-container2">
                <span className="accueil-text35 smallCard-Heading">Actu 2</span>
                <span className="anchor">+ D&apos;infos</span>
              </div>
              <div className="accueil-info-container1">
                <span className="card-Text">01/06/22</span>
                <div className="accueil-stats-container1">
                  <div className="accueil-views-container1">
                    <svg viewBox="0 0 1024 1024" className="accueil-icon38">
                      <path d="M512 192c-223.318 0-416.882 130.042-512 320 95.118 189.958 288.682 320 512 320 223.312 0 416.876-130.042 512-320-95.116-189.958-288.688-320-512-320zM764.45 361.704c60.162 38.374 111.142 89.774 149.434 150.296-38.292 60.522-89.274 111.922-149.436 150.296-75.594 48.218-162.89 73.704-252.448 73.704-89.56 0-176.858-25.486-252.452-73.704-60.158-38.372-111.138-89.772-149.432-150.296 38.292-60.524 89.274-111.924 149.434-150.296 3.918-2.5 7.876-4.922 11.86-7.3-9.96 27.328-15.41 56.822-15.41 87.596 0 141.382 114.616 256 256 256 141.382 0 256-114.618 256-256 0-30.774-5.452-60.268-15.408-87.598 3.978 2.378 7.938 4.802 11.858 7.302v0zM512 416c0 53.020-42.98 96-96 96s-96-42.98-96-96 42.98-96 96-96 96 42.982 96 96z"></path>
                    </svg>
                    <span className="card-Text">4567</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="accueil-card1">
              <img
                alt="image"
                src="https://play.teleporthq.io/static/svg/default-img.svg"
                className="accueil-image3"
              />
              <div className="accueil-content-container3">
                <span className="accueil-text37 smallCard-Heading">Actu 3</span>
                <span className="anchor">+ D&apos;infos</span>
              </div>
              <div className="accueil-info-container2">
                <span className="card-Text">01/06/22</span>
                <div className="accueil-stats-container2">
                  <div className="accueil-views-container2">
                    <svg viewBox="0 0 1024 1024" className="accueil-icon40">
                      <path d="M512 192c-223.318 0-416.882 130.042-512 320 95.118 189.958 288.682 320 512 320 223.312 0 416.876-130.042 512-320-95.116-189.958-288.688-320-512-320zM764.45 361.704c60.162 38.374 111.142 89.774 149.434 150.296-38.292 60.522-89.274 111.922-149.436 150.296-75.594 48.218-162.89 73.704-252.448 73.704-89.56 0-176.858-25.486-252.452-73.704-60.158-38.372-111.138-89.772-149.432-150.296 38.292-60.524 89.274-111.924 149.434-150.296 3.918-2.5 7.876-4.922 11.86-7.3-9.96 27.328-15.41 56.822-15.41 87.596 0 141.382 114.616 256 256 256 141.382 0 256-114.618 256-256 0-30.774-5.452-60.268-15.408-87.598 3.978 2.378 7.938 4.802 11.858 7.302v0zM512 416c0 53.020-42.98 96-96 96s-96-42.98-96-96 42.98-96 96-96 96 42.982 96 96z"></path>
                    </svg>
                    <span className="card-Text">4567</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="accueil-card2">
              <img
                alt="image"
                src="https://play.teleporthq.io/static/svg/default-img.svg"
                className="accueil-image4"
              />
              <div className="accueil-content-container4">
                <span className="accueil-text39 smallCard-Heading">Actu 4</span>
                <span className="anchor">+ D&apos;infos</span>
              </div>
              <div className="accueil-info-container3">
                <span className="card-Text">01/06/22</span>
                <div className="accueil-stats-container3">
                  <div className="accueil-views-container3">
                    <svg viewBox="0 0 1024 1024" className="accueil-icon42">
                      <path d="M512 192c-223.318 0-416.882 130.042-512 320 95.118 189.958 288.682 320 512 320 223.312 0 416.876-130.042 512-320-95.116-189.958-288.688-320-512-320zM764.45 361.704c60.162 38.374 111.142 89.774 149.434 150.296-38.292 60.522-89.274 111.922-149.436 150.296-75.594 48.218-162.89 73.704-252.448 73.704-89.56 0-176.858-25.486-252.452-73.704-60.158-38.372-111.138-89.772-149.432-150.296 38.292-60.524 89.274-111.924 149.434-150.296 3.918-2.5 7.876-4.922 11.86-7.3-9.96 27.328-15.41 56.822-15.41 87.596 0 141.382 114.616 256 256 256 141.382 0 256-114.618 256-256 0-30.774-5.452-60.268-15.408-87.598 3.978 2.378 7.938 4.802 11.858 7.302v0zM512 416c0 53.020-42.98 96-96 96s-96-42.98-96-96 42.98-96 96-96 96 42.982 96 96z"></path>
                    </svg>
                    <span className="card-Text">4567</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="accueil-card3">
              <img
                alt="image"
                src="https://play.teleporthq.io/static/svg/default-img.svg"
                className="accueil-image5"
              />
              <div className="accueil-content-container5">
                <span className="accueil-text41 smallCard-Heading">Actu 5</span>
                <span className="anchor">+ D&apos;infos</span>
              </div>
              <div className="accueil-info-container4">
                <span className="card-Text">01/06/22</span>
                <div className="accueil-stats-container4">
                  <div className="accueil-views-container4">
                    <svg viewBox="0 0 1024 1024" className="accueil-icon44">
                      <path d="M512 192c-223.318 0-416.882 130.042-512 320 95.118 189.958 288.682 320 512 320 223.312 0 416.876-130.042 512-320-95.116-189.958-288.688-320-512-320zM764.45 361.704c60.162 38.374 111.142 89.774 149.434 150.296-38.292 60.522-89.274 111.922-149.436 150.296-75.594 48.218-162.89 73.704-252.448 73.704-89.56 0-176.858-25.486-252.452-73.704-60.158-38.372-111.138-89.772-149.432-150.296 38.292-60.524 89.274-111.924 149.434-150.296 3.918-2.5 7.876-4.922 11.86-7.3-9.96 27.328-15.41 56.822-15.41 87.596 0 141.382 114.616 256 256 256 141.382 0 256-114.618 256-256 0-30.774-5.452-60.268-15.408-87.598 3.978 2.378 7.938 4.802 11.858 7.302v0zM512 416c0 53.020-42.98 96-96 96s-96-42.98-96-96 42.98-96 96-96 96 42.982 96 96z"></path>
                    </svg>
                    <span className="card-Text">4567</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Link to="/actus" className="accueil-cta-btn5 anchor button">
          Et avant...
        </Link>
      </div>
      <div className="accueil-section-separator4"></div>
      <div id="contact" className="accueil-contact">
        <h2 className="accueil-text43 section-Heading">- Nous contacter -</h2>
        <div className="accueil-content-container6">
          <div className="accueil-form-container">
            <span className="accueil-heading08 bigCard-Heading">
              Envoyez-nous un message :
            </span>
            <input
              type="text"
              required="true"
              placeholder="Nom Prénom"
              className="accueil-nom input"
            />
            <input
              type="text"
              required="true"
              placeholder="E-mail"
              className="accueil-email input"
            />
            <textarea
              placeholder="Votre message..."
              className="accueil-message textarea"
            ></textarea>
            <button type="submit" className="accueil-cta-btn6 anchor button">
              ENVOYER
            </button>
          </div>
          <div className="accueil-locations-container">
            <div className="accueil-location-1">
              <span className="accueil-heading09">Givors - Mornant, Rhône</span>
              <div className="accueil-adresse">
                <svg viewBox="0 0 1024 1024" className="accueil-icon46">
                  <path d="M512 0c-176.732 0-320 143.268-320 320 0 320 320 704 320 704s320-384 320-704c0-176.732-143.27-320-320-320zM512 512c-106.040 0-192-85.96-192-192s85.96-192 192-192 192 85.96 192 192-85.96 192-192 192z"></path>
                </svg>
                <span className="section-Text">69700</span>
              </div>
              <div className="accueil-email1">
                <svg viewBox="0 0 1024 1024" className="accueil-icon48">
                  <path d="M854 342v-86l-342 214-342-214v86l342 212zM854 170q34 0 59 26t25 60v512q0 34-25 60t-59 26h-684q-34 0-59-26t-25-60v-512q0-34 25-60t59-26h684z"></path>
                </svg>
                <a
                  href="mailto:cptscoteauxrhodaniens@gmail.com?subject=Contact site web"
                  className="accueil-link08 section-Text"
                >
                  cptscoteauxrhodaniens@gmail.com
                </a>
              </div>
              <div className="accueil-phone">
                <svg
                  viewBox="0 0 804.5714285714286 1024"
                  className="accueil-icon50"
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
      <div className="accueil-section-separator5"></div>
      <div className="accueil-footer-container">
        <div className="accueil-footer">
          <div className="accueil-social-links">
            <svg
              viewBox="0 0 950.8571428571428 1024"
              className="accueil-icon52"
            >
              <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
            </svg>
            <svg
              viewBox="0 0 877.7142857142857 1024"
              className="accueil-icon54"
            >
              <path d="M713.143 73.143c90.857 0 164.571 73.714 164.571 164.571v548.571c0 90.857-73.714 164.571-164.571 164.571h-107.429v-340h113.714l17.143-132.571h-130.857v-84.571c0-38.286 10.286-64 65.714-64l69.714-0.571v-118.286c-12-1.714-53.714-5.143-101.714-5.143-101.143 0-170.857 61.714-170.857 174.857v97.714h-114.286v132.571h114.286v340h-304c-90.857 0-164.571-73.714-164.571-164.571v-548.571c0-90.857 73.714-164.571 164.571-164.571h548.571z"></path>
            </svg>
          </div>
          <div className="accueil-copyright-container">
            <svg viewBox="0 0 1024 1024" className="accueil-icon56">
              <path d="M512 854q140 0 241-101t101-241-101-241-241-101-241 101-101 241 101 241 241 101zM512 86q176 0 301 125t125 301-125 301-301 125-301-125-125-301 125-301 301-125zM506 390q-80 0-80 116v12q0 116 80 116 30 0 50-17t20-43h76q0 50-44 88-42 36-102 36-80 0-122-48t-42-132v-12q0-82 40-128 48-54 124-54 66 0 104 38 42 42 42 98h-76q0-14-6-26-10-20-14-24-20-20-50-20z"></path>
            </svg>
            <span className="anchor">Tous droits réservés, 2022</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Accueil
