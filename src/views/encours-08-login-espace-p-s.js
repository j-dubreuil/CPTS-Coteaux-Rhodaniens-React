import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import Navbar from '../components/navbar'
import Footer from '../components/footer'
import './encours-08-login-espace-p-s.css'

const Encours08LoginEspacePS = (props) => {
  return (
    <div className="encours08login-espace-p-s-container">
      <Helmet>
        <title>
          En cours - 08-Login Espace PS - CPTS des Coteaux Rhodaniens
        </title>
        <meta
          name="description"
          content="CPTS des coteaux rhodaniens copamo givors grigny mornant beauvallon chabaniere msp sante medecin medecins kine psy infirmiere ide "
        />
        <meta
          property="og:title"
          content="En cours - 08-Login Espace PS - CPTS des Coteaux Rhodaniens"
        />
        <meta
          property="og:description"
          content="CPTS des coteaux rhodaniens copamo givors grigny mornant beauvallon chabaniere msp sante medecin medecins kine psy infirmiere ide "
        />
        <meta
          property="og:image"
          content="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/6e2de50e-6b14-40d9-8149-f002baacf575/4dc90358-b1fc-4233-8b21-4c64b6f2ed77?org_if_sml=1"
        />
      </Helmet>
      <Navbar rootClassName="navbar-root-class-name7"></Navbar>
      <div id="projets" className="encours08login-espace-p-s-login-p-s">
        <div className="encours08login-espace-p-s-heading-container">
          <h2 className="encours08login-espace-p-s-text section-Heading">
            Espace Professionnel
          </h2>
        </div>
        <div className="encours08login-espace-p-s-login-container">
          <span className="encours08login-espace-p-s-text1">
            <span>Merci de vous connecter à votre espace :</span>
            <span></span>
          </span>
          <div className="encours08login-espace-p-s-input-container">
            <input
              type="text"
              id="login_area"
              name="login"
              required
              autoFocus
              placeholder="Identifiant"
              className="encours08login-espace-p-s-login input"
            />
            <input
              type="password"
              id="pwd_area"
              name="pwd"
              required
              maxlength="20"
              minlength="8"
              placeholder="Mot de passe"
              className="encours08login-espace-p-s-pwd input"
            />
            <div className="encours08login-espace-p-s-keep-login-container">
              <input
                type="checkbox"
                id="keeplogin"
                name="keeplogin"
                className="encours08login-espace-p-s-checkbox"
              />
              <span>Se souvenir de moi</span>
            </div>
          </div>
          <button className="encours08login-espace-p-s-button button">
            CONNEXION
          </button>
          <Link
            to="/encours-82-reinit-mdp"
            id="oublimdp"
            className="encours08login-espace-p-s-oubli-mdp"
          >
            <span>Réinitialiser mon mot de passe</span>
          </Link>
        </div>
      </div>
      <Footer rootClassName="footer-root-class-name"></Footer>
    </div>
  )
}

export default Encours08LoginEspacePS
