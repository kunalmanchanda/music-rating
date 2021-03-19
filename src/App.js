import React from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import './App.css'

import ContextProvider from './Components/Context'
import Navbar from './Components/Layout/Navbar'
import Index from './Components/Layout/Index'

const App = () => {
  return (
    <Router>
      <>
      <ContextProvider>
        <Navbar/>
        <div className="container">
          <Switch>
            <Route exact patch="/" component = {Index}></Route>
          </Switch>
        </div>
      </ContextProvider>
      </>
    </Router>
  )
}

export default App
