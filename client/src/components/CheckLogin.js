import React from "react"
import { useAuth } from "../hooks"
import Routes from "./Routes"
import { Redirect } from "react-router-dom"

const CheckLogin = props => {
  const { isAuthenticated } = useAuth()
  return isAuthenticated ? <Routes /> : <Redirect to="/login" />
}

export default CheckLogin
