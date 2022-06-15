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
      </div>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
