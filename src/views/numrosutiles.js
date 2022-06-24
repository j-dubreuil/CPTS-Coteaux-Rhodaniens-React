import React from 'react'

import { Helmet } from 'react-helmet'

import Navbar from '../components/navbar'
import Footer from '../components/footer'
import './numrosutiles.css'

const Numrosutiles = (props) => {
  return (
    <div className="numrosutiles-container">
      <Helmet>
        <title>61-Numéros utiles - CPTS des Coteaux Rhodaniens</title>
        <meta
          name="description"
          content="CPTS des coteaux rhodaniens copamo givors grigny mornant beauvallon chabaniere msp sante medecin medecins kine psy infirmiere ide "
        />
        <meta
          property="og:title"
          content="61-Numéros utiles - CPTS des Coteaux Rhodaniens"
        />
        <meta
          property="og:description"
          content="CPTS des coteaux rhodaniens copamo givors grigny mornant beauvallon chabaniere msp sante medecin medecins kine psy infirmiere ide "
        />
        <meta
          property="og:image"
          content="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/6e2de50e-6b14-40d9-8149-f002baacf575/8845662c-f617-4998-b545-f4d9a0758f6a?org_if_sml=1"
        />
      </Helmet>
      <Navbar rootClassName="navbar-root-class-name8"></Navbar>
      <div id="numutiles" className="numrosutiles-num-utiles">
        <h2 className="numrosutiles-text section-Heading">Numéros utiles</h2>
        <div className="numrosutiles-buttons">
          <a href="#urgences" className="numrosutiles-cta-btn anchor button">
            <span>
              <span>Urgences</span>
              <span></span>
            </span>
          </a>
          <button className="numrosutiles-cta-btn1 anchor button">
            <a href="#soutien" className="numrosutiles-link">
              Soutien, écoute
            </a>
          </button>
        </div>
        <div id="urgences" className="numrosutiles-urgences-container">
          <div className="numrosutiles-heading">
            <svg viewBox="0 0 1024 1024" className="numrosutiles-icon">
              <path d="M533.333 234.667c-11.776 0-21.333 9.557-21.333 21.333s9.557 21.333 21.333 21.333c46.208 0 83.797 37.589 83.797 83.797 0 11.776 9.557 21.333 21.333 21.333s21.333-9.557 21.333-21.333c0-69.717-56.747-126.464-126.464-126.464z"></path>
              <path d="M533.333 42.667c-176.469 0-320 143.531-320 320 0 63.403 18.773 124.672 54.357 177.707 0.981 2.005 2.091 3.925 3.413 5.76 77.867 111.189 91.563 146.347 91.563 179.2v128c0 23.552 19.115 42.667 42.667 42.667h85.333c0 11.093 4.693 22.187 12.373 30.293 8.107 7.68 19.2 12.373 30.293 12.373 11.093 0 22.187-4.693 30.293-12.373 7.68-8.107 12.373-19.2 12.373-30.293h85.333c23.552 0 42.667-19.115 42.667-42.667v-128c0-33.365 13.611-68.693 90.965-179.157 38.187-54.4 58.368-117.845 58.368-183.509 0-176.469-143.531-320-320-320zM618.667 810.667h-170.667v-42.667h170.667v42.667zM725.12 497.195c-62.549 89.301-91.435 140.331-101.76 185.472h-47.36v-85.333c0-23.552-19.115-42.667-42.667-42.667s-42.667 19.115-42.667 42.667v85.333h-47.488c-10.24-43.947-38.315-93.867-98.389-180.053-0.939-1.877-2.048-3.712-3.285-5.504-28.032-39.851-42.837-86.357-42.837-134.443 0-129.408 105.259-234.667 234.667-234.667s234.667 105.259 234.667 234.667c0 48.043-14.805 94.549-42.88 134.528z"></path>
            </svg>
            <span className="numrosutiles-heading1 card-Heading">
              <span>Numéros d&apos;urgence</span>
            </span>
          </div>
          <div className="numrosutiles-text-container">
            <span className="numrosutiles-text05 card-Text">
              <span>Police : 17</span>
              <br></br>
              <span></span>
              <br></br>
              <span>Pompiers : 18</span>
              <br></br>
              <span></span>
              <br></br>
              <span>SAMU : 15</span>
              <br></br>
              <span></span>
              <br></br>
              <span>Appel urgence européen : 112</span>
              <br></br>
              <span></span>
              <br></br>
              <span>Urgences personnes malentendante : 114</span>
              <br></br>
              <span></span>
              <br></br>
              <span>SOS Médecins : 04 78 83 51 51</span>
              <br></br>
              <span></span>
              <br></br>
              <span>Centre Anti-poison de Lyon : 04 72 11 69 11</span>
              <br></br>
              <span></span>
              <br></br>
              <span>SAMU social pour Sans Abri : 115</span>
              <br></br>
              <span></span>
              <br></br>
              <span>Enfance maltraitée : 119</span>
              <br></br>
              <span></span>
              <br></br>
              <span>Enfants disparus : 116 000</span>
              <br></br>
              <span>www.116000enfantsdisparus.fr</span>
              <br></br>
              <span></span>
              <br></br>
              <span>Femmes battues : 3919</span>
              <br></br>
              <span></span>
              <br></br>
              <span>Santé mentale : 0805 05 05 69</span>
            </span>
          </div>
        </div>
        <div id="soutien" className="numrosutiles-soutien-container">
          <div className="numrosutiles-heading2">
            <svg viewBox="0 0 1024 1024" className="numrosutiles-icon03">
              <path d="M533.333 234.667c-11.776 0-21.333 9.557-21.333 21.333s9.557 21.333 21.333 21.333c46.208 0 83.797 37.589 83.797 83.797 0 11.776 9.557 21.333 21.333 21.333s21.333-9.557 21.333-21.333c0-69.717-56.747-126.464-126.464-126.464z"></path>
              <path d="M533.333 42.667c-176.469 0-320 143.531-320 320 0 63.403 18.773 124.672 54.357 177.707 0.981 2.005 2.091 3.925 3.413 5.76 77.867 111.189 91.563 146.347 91.563 179.2v128c0 23.552 19.115 42.667 42.667 42.667h85.333c0 11.093 4.693 22.187 12.373 30.293 8.107 7.68 19.2 12.373 30.293 12.373 11.093 0 22.187-4.693 30.293-12.373 7.68-8.107 12.373-19.2 12.373-30.293h85.333c23.552 0 42.667-19.115 42.667-42.667v-128c0-33.365 13.611-68.693 90.965-179.157 38.187-54.4 58.368-117.845 58.368-183.509 0-176.469-143.531-320-320-320zM618.667 810.667h-170.667v-42.667h170.667v42.667zM725.12 497.195c-62.549 89.301-91.435 140.331-101.76 185.472h-47.36v-85.333c0-23.552-19.115-42.667-42.667-42.667s-42.667 19.115-42.667 42.667v85.333h-47.488c-10.24-43.947-38.315-93.867-98.389-180.053-0.939-1.877-2.048-3.712-3.285-5.504-28.032-39.851-42.837-86.357-42.837-134.443 0-129.408 105.259-234.667 234.667-234.667s234.667 105.259 234.667 234.667c0 48.043-14.805 94.549-42.88 134.528z"></path>
            </svg>
            <span className="numrosutiles-heading3 card-Heading">
              <span>Numéros de soutien et d&apos;écoute</span>
            </span>
          </div>
          <div className="numrosutiles-text-container1">
            <span className="numrosutiles-text31 card-Text">
              <span>Alcooliques Anonymes</span>
              <br></br>
              <span>L’alcool, en parler pour s’en libérer</span>
              <br></br>
              <span>09 69 39 40 20 – www.alcooliques-anonymes.fr</span>
              <br></br>
              <span></span>
              <br></br>
              <span>Allo Parents Bébé</span>
              <br></br>
              <span>Aide et soutien à la relation parents-bébé</span>
              <br></br>
              <span>0800 00 3456 – www.enfance-et-partage.org</span>
              <br></br>
              <span></span>
              <br></br>
              <span>Stop maltraitance</span>
              <br></br>
              <span>
                Recueil d’informations préoccupantes sur des mineurs maltraités
                ou en danger.
              </span>
              <br></br>
              <span>0800 05 1234 – www.enfance-et-partage.org</span>
              <br></br>
              <span></span>
              <br></br>
              <span>Dons d’organes et dons de moelle osseuse</span>
              <br></br>
              <span>Pour recevoir un document d’information</span>
              <br></br>
              <span>0800 20 22 24 – www.agence-biomedecine.fr</span>
              <br></br>
              <span></span>
              <br></br>
              <span>Don du sang</span>
              <br></br>
              <span>Etablissement français du sang</span>
              <br></br>
              <span>0800 109 900 – www.dondusang.net</span>
              <br></br>
              <span></span>
              <br></br>
              <span>Fil santé Jeunes</span>
              <br></br>
              <span>
                Des psychologues, médecins et juristes répondent aux jeunes de
                façon anonyme
              </span>
              <br></br>
              <span>0800 235 236 – www.filsantejeunes.com</span>
              <br></br>
              <span></span>
              <br></br>
              <span>Maladies rares Info Service</span>
              <br></br>
              <span>01 56 53 81 36 – www.maladiesraresinfo.org</span>
              <br></br>
              <span></span>
              <br></br>
              <span>Solitud’écoute</span>
              <br></br>
              <span>A l’écoute de la solitude des plus de 50 ans</span>
              <br></br>
              <span>0800 47 47 88 – www.petitsfreresdespauvres.fr</span>
              <br></br>
              <span></span>
              <br></br>
              <span>SOS Amitié</span>
              <br></br>
              <span>
                Soutien moral et psychologique aux personnes en souffrance
              </span>
              <br></br>
              <span>09 72 39 40 50 – www.sos-amitie.org</span>
              <br></br>
              <span></span>
              <br></br>
              <span>Viols Femmes Informations</span>
              <br></br>
              <span>0800 05 95 95 – www.cfcv.asso.fr</span>
              <br></br>
              <span></span>
              <br></br>
              <span>Aide aux Victimes</span>
              <br></br>
              <span>
                Dédié aux personnes victimes d’une atteinte à leurs biens ou à
                leur personne.
              </span>
              <br></br>
              <span>116 006 – www.inavem.org</span>
              <br></br>
              <span></span>
              <br></br>
              <span>
                Drogues info service
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <br></br>
              <span>0800 23 13 13 – www.drogues-info-service.fr</span>
              <br></br>
              <span></span>
              <br></br>
              <span>Sida info service</span>
              <br></br>
              <span>0800 840 800 – www.sida-info-service.org</span>
              <br></br>
              <span></span>
              <br></br>
              <span>Maltraitance des personnes âgées ou handicapées</span>
              <br></br>
              <span>
                Écoute, soutien et aide à ces personnes, leurs proches ou
                témoins.
              </span>
              <br></br>
              <span>3977</span>
            </span>
          </div>
        </div>
      </div>
      <div className="numrosutiles-section-separator"></div>
      <div id="contact" className="numrosutiles-contact">
        <h2 className="numrosutiles-text83 section-Heading">
          - Nous contacter -
        </h2>
        <div className="numrosutiles-content-container">
          <div className="numrosutiles-form-container">
            <span className="numrosutiles-heading4 bigCard-Heading">
              Envoyez-nous un message :
            </span>
            <input
              type="text"
              required="true"
              placeholder="Nom Prénom"
              className="numrosutiles-nom input"
            />
            <input
              type="text"
              required="true"
              placeholder="E-mail"
              className="numrosutiles-email input"
            />
            <textarea
              placeholder="Votre message..."
              className="numrosutiles-message textarea"
            ></textarea>
            <button
              type="submit"
              className="numrosutiles-cta-btn2 button anchor"
            >
              ENVOYER
            </button>
          </div>
          <div className="numrosutiles-locations-container">
            <div className="numrosutiles-location-1">
              <span className="numrosutiles-heading5">Rhône</span>
              <div className="numrosutiles-adresse">
                <svg viewBox="0 0 1024 1024" className="numrosutiles-icon06">
                  <path d="M512 0c-176.732 0-320 143.268-320 320 0 320 320 704 320 704s320-384 320-704c0-176.732-143.27-320-320-320zM512 512c-106.040 0-192-85.96-192-192s85.96-192 192-192 192 85.96 192 192-85.96 192-192 192z"></path>
                </svg>
                <span className="section-Text">69700</span>
              </div>
              <div className="numrosutiles-email1">
                <svg viewBox="0 0 1024 1024" className="numrosutiles-icon08">
                  <path d="M854 342v-86l-342 214-342-214v86l342 212zM854 170q34 0 59 26t25 60v512q0 34-25 60t-59 26h-684q-34 0-59-26t-25-60v-512q0-34 25-60t59-26h684z"></path>
                </svg>
                <a
                  href="mailto:cptscoteauxrhodaniens@gmail.com?subject=Contact site web"
                  className="numrosutiles-link1 section-Text"
                >
                  cptscoteauxrhodaniens@gmail.com
                </a>
              </div>
              <div className="numrosutiles-phone">
                <svg
                  viewBox="0 0 804.5714285714286 1024"
                  className="numrosutiles-icon10"
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
      <Footer rootClassName="footer-root-class-name4"></Footer>
    </div>
  )
}

export default Numrosutiles
