import React from 'react'

import { Helmet } from 'react-helmet'

import Navbar from '../components/navbar'
import Footer from '../components/footer'
import './encours-82-reinit-mdp.css'

const Encours82ReinitMdp = (props) => {
  return (
    <div className="encours82reinit-mdp-container">
      <Helmet>
        <title>En cours - 82-Reinit Mdp - CPTS des Coteaux Rhodaniens</title>
        <meta
          name="description"
          content="CPTS des coteaux rhodaniens copamo givors grigny mornant beauvallon chabaniere msp sante medecin medecins kine psy infirmiere ide "
        />
        <meta
          property="og:title"
          content="En cours - 82-Reinit Mdp - CPTS des Coteaux Rhodaniens"
        />
        <meta
          property="og:description"
          content="CPTS des coteaux rhodaniens copamo givors grigny mornant beauvallon chabaniere msp sante medecin medecins kine psy infirmiere ide "
        />
        <meta
          property="og:image"
          content="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/6e2de50e-6b14-40d9-8149-f002baacf575/369551e5-dffc-425f-8309-d89efe376bf9?org_if_sml=1"
        />
      </Helmet>
      <Navbar rootClassName="navbar-root-class-name11"></Navbar>
      <div id="projets" className="encours82reinit-mdp-reinit-mdp">
        <div className="encours82reinit-mdp-heading-container">
          <h2 className="encours82reinit-mdp-text section-Heading">
            Réinitialisation
          </h2>
        </div>
        <div className="encours82reinit-mdp-login-container">
          <span className="encours82reinit-mdp-text1">
            <span>
              Saisissez votre identifiant pour réinitialiser votre accès :
            </span>
          </span>
          <input
            type="text"
            id="login_area"
            name="login"
            required
            autoFocus
            placeholder="Identifiant"
            className="encours82reinit-mdp-login input"
          />
          <button className="encours82reinit-mdp-button button">
            CONNEXION
          </button>
        </div>
      </div>
      <Footer rootClassName="footer-root-class-name1"></Footer>
    </div>
  )
}

export default Encours82ReinitMdp
