import React from "react"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import CheckLogin from "./CheckLogin"
import Login from "./Login"
import Register from "./Register"

const App = props => {
  return (
    <Router>
      <Switch>
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
        <Route path="*" component={CheckLogin} />
      </Switch>
    </Router>
  )
}

export default App
