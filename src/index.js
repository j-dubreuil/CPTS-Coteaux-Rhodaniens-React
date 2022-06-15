import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import './style.css'
import Missions from './views/missions'
import CPTS from './views/c-p-t-s'
import Projets from './views/projets'
import Professionnels from './views/professionnels'
import Accueil from './views/accueil'
import Actus from './views/actus'
import Contact from './views/contact'
import Encours06EspacePatient from './views/encours-06-espace-patient'
import Encours61Numrosutiles from './views/encours-61-numrosutiles'
import Encours62DemandeMedecin from './views/encours-62-demande-medecin'
import Encours08LoginEspacePS from './views/encours-08-login-espace-p-s'
import Encours82ReinitMdp from './views/encours-82-reinit-mdp'
import Encours81EspacePS from './views/encours-81-espace-p-s'

const App = () => {
  return (
    <Router>
      <div>
        <Route exact component={Missions} path="/missions" />
        <Route exact component={CPTS} path="/c-p-t-s" />
        <Route exact component={Projets} path="/projets" />
        <Route exact component={Professionnels} path="/professionnels" />
        <Route exact component={Accueil} path="/" />
        <Route exact component={Actus} path="/actus" />
        <Route exact component={Contact} path="/contact" />
        <Route
          exact
          component={Encours06EspacePatient}
          path="/encours-06-espace-patient"
        />
        <Route
          exact
          component={Encours61Numrosutiles}
          path="/encours-61-numrosutiles"
        />
        <Route
          exact
          component={Encours62DemandeMedecin}
          path="/encours-62-demande-medecin"
        />
        <Route
          exact
          component={Encours08LoginEspacePS}
          path="/encours-08-login-espace-p-s"
        />
        <Route
          exact
          component={Encours82ReinitMdp}
          path="/encours-82-reinit-mdp"
        />
        <Route
          exact
          component={Encours81EspacePS}
          path="/encours-81-espace-p-s"
        />
      </div>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
