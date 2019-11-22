import React from "react"
import { Route } from "react-router-dom"
import Dashboard from "./Dashboard"
import AboutMe from "./AboutMe"

const Routes = props => {
  return (
    <>
      <Route path="/" component={Dashboard} />
      <Route path="/aboutme" component={AboutMe} />
    </>
  )
}

export default Routes
