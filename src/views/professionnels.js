import React from 'react'

import { Helmet } from 'react-helmet'

import Navbar from '../components/navbar'
import Contact from '../components/contact'
import Footer from '../components/footer'
import './professionnels.css'

const Professionnels = (props) => {
  return (
    <div className="professionnels-container">
      <Helmet>
        <title>05-Professionnels - CPTS des Coteaux Rhodaniens</title>
        <meta
          name="description"
          content="CPTS des coteaux rhodaniens copamo givors grigny mornant beauvallon chabaniere msp sante medecin medecins kine psy infirmiere ide "
        />
        <meta
          property="og:title"
          content="05-Professionnels - CPTS des Coteaux Rhodaniens"
        />
        <meta
          property="og:description"
          content="CPTS des coteaux rhodaniens copamo givors grigny mornant beauvallon chabaniere msp sante medecin medecins kine psy infirmiere ide "
        />
        <meta
          property="og:image"
          content="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/6e2de50e-6b14-40d9-8149-f002baacf575/45585419-09dc-4d78-b65e-c1e42fc02156?org_if_sml=1"
        />
      </Helmet>
      <Navbar rootClassName="navbar-root-class-name4"></Navbar>
      <div id="pros" className="professionnels-professionnels">
        <div className="professionnels-heading-container">
          <h2 className="professionnels-text section-Heading">
            <span>Les professionnels de Santé</span>
            <br></br>
            <span>du territoire</span>
          </h2>
        </div>
        <div className="professionnels-cards-container">
          <div className="professionnels-features-card">
            <div className="professionnels-icon-container">
              <svg viewBox="0 0 1024 1024" className="professionnels-icon">
                <path d="M533.333 234.667c-11.776 0-21.333 9.557-21.333 21.333s9.557 21.333 21.333 21.333c46.208 0 83.797 37.589 83.797 83.797 0 11.776 9.557 21.333 21.333 21.333s21.333-9.557 21.333-21.333c0-69.717-56.747-126.464-126.464-126.464z"></path>
                <path d="M533.333 42.667c-176.469 0-320 143.531-320 320 0 63.403 18.773 124.672 54.357 177.707 0.981 2.005 2.091 3.925 3.413 5.76 77.867 111.189 91.563 146.347 91.563 179.2v128c0 23.552 19.115 42.667 42.667 42.667h85.333c0 11.093 4.693 22.187 12.373 30.293 8.107 7.68 19.2 12.373 30.293 12.373 11.093 0 22.187-4.693 30.293-12.373 7.68-8.107 12.373-19.2 12.373-30.293h85.333c23.552 0 42.667-19.115 42.667-42.667v-128c0-33.365 13.611-68.693 90.965-179.157 38.187-54.4 58.368-117.845 58.368-183.509 0-176.469-143.531-320-320-320zM618.667 810.667h-170.667v-42.667h170.667v42.667zM725.12 497.195c-62.549 89.301-91.435 140.331-101.76 185.472h-47.36v-85.333c0-23.552-19.115-42.667-42.667-42.667s-42.667 19.115-42.667 42.667v85.333h-47.488c-10.24-43.947-38.315-93.867-98.389-180.053-0.939-1.877-2.048-3.712-3.285-5.504-28.032-39.851-42.837-86.357-42.837-134.443 0-129.408 105.259-234.667 234.667-234.667s234.667 105.259 234.667 234.667c0 48.043-14.805 94.549-42.88 134.528z"></path>
              </svg>
            </div>
            <div className="professionnels-text-container">
              <span className="professionnels-heading card-Heading">
                Feature One
              </span>
              <span className="professionnels-text03 card-Text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
                nec odio. Praesent libero. Sed cursus ante dapibus diam.c Sed
                nisi. Nulla quis sem at nibh elementum imperdiet.
              </span>
            </div>
          </div>
          <div className="professionnels-features-card1">
            <div className="professionnels-icon-container1">
              <svg viewBox="0 0 1024 1024" className="professionnels-icon03">
                <path d="M533.333 234.667c-11.776 0-21.333 9.557-21.333 21.333s9.557 21.333 21.333 21.333c46.208 0 83.797 37.589 83.797 83.797 0 11.776 9.557 21.333 21.333 21.333s21.333-9.557 21.333-21.333c0-69.717-56.747-126.464-126.464-126.464z"></path>
                <path d="M533.333 42.667c-176.469 0-320 143.531-320 320 0 63.403 18.773 124.672 54.357 177.707 0.981 2.005 2.091 3.925 3.413 5.76 77.867 111.189 91.563 146.347 91.563 179.2v128c0 23.552 19.115 42.667 42.667 42.667h85.333c0 11.093 4.693 22.187 12.373 30.293 8.107 7.68 19.2 12.373 30.293 12.373 11.093 0 22.187-4.693 30.293-12.373 7.68-8.107 12.373-19.2 12.373-30.293h85.333c23.552 0 42.667-19.115 42.667-42.667v-128c0-33.365 13.611-68.693 90.965-179.157 38.187-54.4 58.368-117.845 58.368-183.509 0-176.469-143.531-320-320-320zM618.667 810.667h-170.667v-42.667h170.667v42.667zM725.12 497.195c-62.549 89.301-91.435 140.331-101.76 185.472h-47.36v-85.333c0-23.552-19.115-42.667-42.667-42.667s-42.667 19.115-42.667 42.667v85.333h-47.488c-10.24-43.947-38.315-93.867-98.389-180.053-0.939-1.877-2.048-3.712-3.285-5.504-28.032-39.851-42.837-86.357-42.837-134.443 0-129.408 105.259-234.667 234.667-234.667s234.667 105.259 234.667 234.667c0 48.043-14.805 94.549-42.88 134.528z"></path>
              </svg>
            </div>
            <div className="professionnels-text-container1">
              <span className="professionnels-heading1 card-Heading">
                Feature Two
              </span>
              <span className="professionnels-text04 card-Text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
                nec odio. Praesent libero. Sed cursus ante dapibus diam.c Sed
                nisi. Nulla quis sem at nibh elementum imperdiet.
              </span>
            </div>
          </div>
          <div className="professionnels-features-card2">
            <div className="professionnels-icon-container2">
              <svg viewBox="0 0 1024 1024" className="professionnels-icon06">
                <path d="M533.333 234.667c-11.776 0-21.333 9.557-21.333 21.333s9.557 21.333 21.333 21.333c46.208 0 83.797 37.589 83.797 83.797 0 11.776 9.557 21.333 21.333 21.333s21.333-9.557 21.333-21.333c0-69.717-56.747-126.464-126.464-126.464z"></path>
                <path d="M533.333 42.667c-176.469 0-320 143.531-320 320 0 63.403 18.773 124.672 54.357 177.707 0.981 2.005 2.091 3.925 3.413 5.76 77.867 111.189 91.563 146.347 91.563 179.2v128c0 23.552 19.115 42.667 42.667 42.667h85.333c0 11.093 4.693 22.187 12.373 30.293 8.107 7.68 19.2 12.373 30.293 12.373 11.093 0 22.187-4.693 30.293-12.373 7.68-8.107 12.373-19.2 12.373-30.293h85.333c23.552 0 42.667-19.115 42.667-42.667v-128c0-33.365 13.611-68.693 90.965-179.157 38.187-54.4 58.368-117.845 58.368-183.509 0-176.469-143.531-320-320-320zM618.667 810.667h-170.667v-42.667h170.667v42.667zM725.12 497.195c-62.549 89.301-91.435 140.331-101.76 185.472h-47.36v-85.333c0-23.552-19.115-42.667-42.667-42.667s-42.667 19.115-42.667 42.667v85.333h-47.488c-10.24-43.947-38.315-93.867-98.389-180.053-0.939-1.877-2.048-3.712-3.285-5.504-28.032-39.851-42.837-86.357-42.837-134.443 0-129.408 105.259-234.667 234.667-234.667s234.667 105.259 234.667 234.667c0 48.043-14.805 94.549-42.88 134.528z"></path>
              </svg>
            </div>
            <div className="professionnels-text-container2">
              <span className="professionnels-heading2 card-Heading">
                Feature Three
              </span>
              <span className="professionnels-text05 card-Text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
                nec odio. Praesent libero. Sed cursus ante dapibus diam.c Sed
                nisi. Nulla quis sem at nibh elementum imperdiet.
              </span>
            </div>
          </div>
          <div className="professionnels-features-card3">
            <div className="professionnels-icon-container3">
              <svg viewBox="0 0 1024 1024" className="professionnels-icon09">
                <path d="M533.333 234.667c-11.776 0-21.333 9.557-21.333 21.333s9.557 21.333 21.333 21.333c46.208 0 83.797 37.589 83.797 83.797 0 11.776 9.557 21.333 21.333 21.333s21.333-9.557 21.333-21.333c0-69.717-56.747-126.464-126.464-126.464z"></path>
                <path d="M533.333 42.667c-176.469 0-320 143.531-320 320 0 63.403 18.773 124.672 54.357 177.707 0.981 2.005 2.091 3.925 3.413 5.76 77.867 111.189 91.563 146.347 91.563 179.2v128c0 23.552 19.115 42.667 42.667 42.667h85.333c0 11.093 4.693 22.187 12.373 30.293 8.107 7.68 19.2 12.373 30.293 12.373 11.093 0 22.187-4.693 30.293-12.373 7.68-8.107 12.373-19.2 12.373-30.293h85.333c23.552 0 42.667-19.115 42.667-42.667v-128c0-33.365 13.611-68.693 90.965-179.157 38.187-54.4 58.368-117.845 58.368-183.509 0-176.469-143.531-320-320-320zM618.667 810.667h-170.667v-42.667h170.667v42.667zM725.12 497.195c-62.549 89.301-91.435 140.331-101.76 185.472h-47.36v-85.333c0-23.552-19.115-42.667-42.667-42.667s-42.667 19.115-42.667 42.667v85.333h-47.488c-10.24-43.947-38.315-93.867-98.389-180.053-0.939-1.877-2.048-3.712-3.285-5.504-28.032-39.851-42.837-86.357-42.837-134.443 0-129.408 105.259-234.667 234.667-234.667s234.667 105.259 234.667 234.667c0 48.043-14.805 94.549-42.88 134.528z"></path>
              </svg>
            </div>
            <div className="professionnels-text-container3">
              <span className="professionnels-heading3 card-Heading">
                Feature Four
              </span>
              <span className="professionnels-text06 card-Text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
                nec odio. Praesent libero. Sed cursus ante dapibus diam.c Sed
                nisi. Nulla quis sem at nibh elementum imperdiet.
              </span>
            </div>
          </div>
          <div className="professionnels-features-card4">
            <div className="professionnels-icon-container4">
              <svg viewBox="0 0 1024 1024" className="professionnels-icon12">
                <path d="M533.333 234.667c-11.776 0-21.333 9.557-21.333 21.333s9.557 21.333 21.333 21.333c46.208 0 83.797 37.589 83.797 83.797 0 11.776 9.557 21.333 21.333 21.333s21.333-9.557 21.333-21.333c0-69.717-56.747-126.464-126.464-126.464z"></path>
                <path d="M533.333 42.667c-176.469 0-320 143.531-320 320 0 63.403 18.773 124.672 54.357 177.707 0.981 2.005 2.091 3.925 3.413 5.76 77.867 111.189 91.563 146.347 91.563 179.2v128c0 23.552 19.115 42.667 42.667 42.667h85.333c0 11.093 4.693 22.187 12.373 30.293 8.107 7.68 19.2 12.373 30.293 12.373 11.093 0 22.187-4.693 30.293-12.373 7.68-8.107 12.373-19.2 12.373-30.293h85.333c23.552 0 42.667-19.115 42.667-42.667v-128c0-33.365 13.611-68.693 90.965-179.157 38.187-54.4 58.368-117.845 58.368-183.509 0-176.469-143.531-320-320-320zM618.667 810.667h-170.667v-42.667h170.667v42.667zM725.12 497.195c-62.549 89.301-91.435 140.331-101.76 185.472h-47.36v-85.333c0-23.552-19.115-42.667-42.667-42.667s-42.667 19.115-42.667 42.667v85.333h-47.488c-10.24-43.947-38.315-93.867-98.389-180.053-0.939-1.877-2.048-3.712-3.285-5.504-28.032-39.851-42.837-86.357-42.837-134.443 0-129.408 105.259-234.667 234.667-234.667s234.667 105.259 234.667 234.667c0 48.043-14.805 94.549-42.88 134.528z"></path>
              </svg>
            </div>
            <div className="professionnels-text-container4">
              <span className="professionnels-heading4 card-Heading">
                Feature Five
              </span>
              <span className="professionnels-text07 card-Text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
                nec odio. Praesent libero. Sed cursus ante dapibus diam.c Sed
                nisi. Nulla quis sem at nibh elementum imperdiet.
              </span>
            </div>
          </div>
          <div className="professionnels-features-card5">
            <div className="professionnels-icon-container5">
              <svg viewBox="0 0 1024 1024" className="professionnels-icon15">
                <path d="M533.333 234.667c-11.776 0-21.333 9.557-21.333 21.333s9.557 21.333 21.333 21.333c46.208 0 83.797 37.589 83.797 83.797 0 11.776 9.557 21.333 21.333 21.333s21.333-9.557 21.333-21.333c0-69.717-56.747-126.464-126.464-126.464z"></path>
                <path d="M533.333 42.667c-176.469 0-320 143.531-320 320 0 63.403 18.773 124.672 54.357 177.707 0.981 2.005 2.091 3.925 3.413 5.76 77.867 111.189 91.563 146.347 91.563 179.2v128c0 23.552 19.115 42.667 42.667 42.667h85.333c0 11.093 4.693 22.187 12.373 30.293 8.107 7.68 19.2 12.373 30.293 12.373 11.093 0 22.187-4.693 30.293-12.373 7.68-8.107 12.373-19.2 12.373-30.293h85.333c23.552 0 42.667-19.115 42.667-42.667v-128c0-33.365 13.611-68.693 90.965-179.157 38.187-54.4 58.368-117.845 58.368-183.509 0-176.469-143.531-320-320-320zM618.667 810.667h-170.667v-42.667h170.667v42.667zM725.12 497.195c-62.549 89.301-91.435 140.331-101.76 185.472h-47.36v-85.333c0-23.552-19.115-42.667-42.667-42.667s-42.667 19.115-42.667 42.667v85.333h-47.488c-10.24-43.947-38.315-93.867-98.389-180.053-0.939-1.877-2.048-3.712-3.285-5.504-28.032-39.851-42.837-86.357-42.837-134.443 0-129.408 105.259-234.667 234.667-234.667s234.667 105.259 234.667 234.667c0 48.043-14.805 94.549-42.88 134.528z"></path>
              </svg>
            </div>
            <div className="professionnels-text-container5">
              <span className="professionnels-heading5 card-Heading">
                Feature Six
              </span>
              <span className="professionnels-text08 card-Text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
                nec odio. Praesent libero. Sed cursus ante dapibus diam.c Sed
                nisi. Nulla quis sem at nibh elementum imperdiet.
              </span>
            </div>
          </div>
        </div>
        <div id="bureau" className="professionnels-bureau">
          <div className="professionnels-heading-container1">
            <h1 className="professionnels-text09 section-Heading">
              Meet the Team
            </h1>
            <span className="professionnels-text10 section-Text">
              Lorme ipsum dolor sit amet, consectetur adipiscing elit. Integer
              nec odio. Praesent libero.
            </span>
          </div>
          <div className="professionnels-cards-container1">
            <div className="professionnels-team-card">
              <div className="professionnels-avatar-container">
                <svg viewBox="0 0 1024 1024" className="professionnels-icon18">
                  <path d="M576 706.612v-52.78c70.498-39.728 128-138.772 128-237.832 0-159.058 0-288-192-288s-192 128.942-192 288c0 99.060 57.502 198.104 128 237.832v52.78c-217.102 17.748-384 124.42-384 253.388h896c0-128.968-166.898-235.64-384-253.388z"></path>
                </svg>
              </div>
              <span className="professionnels-name card-Heading">John</span>
              <span className="professionnels-position card-Text">
                Position
              </span>
            </div>
            <div className="professionnels-team-card1">
              <div className="professionnels-avatar-container1">
                <svg viewBox="0 0 1024 1024" className="professionnels-icon20">
                  <path d="M576 706.612v-52.78c70.498-39.728 128-138.772 128-237.832 0-159.058 0-288-192-288s-192 128.942-192 288c0 99.060 57.502 198.104 128 237.832v52.78c-217.102 17.748-384 124.42-384 253.388h896c0-128.968-166.898-235.64-384-253.388z"></path>
                </svg>
              </div>
              <span className="professionnels-name1 card-Heading">Megan</span>
              <span className="professionnels-position1 card-Text">
                Position
              </span>
            </div>
            <div className="professionnels-team-card2">
              <div className="professionnels-avatar-container2">
                <svg viewBox="0 0 1024 1024" className="professionnels-icon22">
                  <path d="M576 706.612v-52.78c70.498-39.728 128-138.772 128-237.832 0-159.058 0-288-192-288s-192 128.942-192 288c0 99.060 57.502 198.104 128 237.832v52.78c-217.102 17.748-384 124.42-384 253.388h896c0-128.968-166.898-235.64-384-253.388z"></path>
                </svg>
              </div>
              <span className="professionnels-name2 card-Heading">Alex</span>
              <span className="professionnels-position2 card-Text">
                Position
              </span>
            </div>
            <div className="professionnels-team-card3">
              <div className="professionnels-avatar-container3">
                <svg viewBox="0 0 1024 1024" className="professionnels-icon24">
                  <path d="M576 706.612v-52.78c70.498-39.728 128-138.772 128-237.832 0-159.058 0-288-192-288s-192 128.942-192 288c0 99.060 57.502 198.104 128 237.832v52.78c-217.102 17.748-384 124.42-384 253.388h896c0-128.968-166.898-235.64-384-253.388z"></path>
                </svg>
              </div>
              <span className="professionnels-name3 card-Heading">Sabrina</span>
              <span className="professionnels-position3 card-Text">
                Position
              </span>
            </div>
            <div className="professionnels-team-card4">
              <div className="professionnels-avatar-container4">
                <svg viewBox="0 0 1024 1024" className="professionnels-icon26">
                  <path d="M576 706.612v-52.78c70.498-39.728 128-138.772 128-237.832 0-159.058 0-288-192-288s-192 128.942-192 288c0 99.060 57.502 198.104 128 237.832v52.78c-217.102 17.748-384 124.42-384 253.388h896c0-128.968-166.898-235.64-384-253.388z"></path>
                </svg>
              </div>
              <span className="professionnels-name4 card-Heading">Ben</span>
              <span className="professionnels-position4 card-Text">
                Position
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="professionnels-section-separator"></div>
      <Contact rootClassName="contact-root-class-name7"></Contact>
      <Footer rootClassName="footer-root-class-name7"></Footer>
    </div>
  )
}

export default Professionnels
