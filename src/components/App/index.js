import React, { Component } from 'react'
import { connect } from 'cerebral/react'
import logo from './logo.svg'
import './App.css'
import UserBubble from '../UserBubble'

export default connect({
  currentPage: 'app.currentPage',
  user: 'user'
}, {
  login: 'user.signInClicked',
  logout: 'user.signOutClicked'
}, class App extends Component {

  render() {
    const p = this.props
    function login() {p.login()}
    function logout() {p.logout()}

    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to {p.currentPage}</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        {p.user && <UserBubble />}
        {p.user && <button onClick={logout}>Sign Out</button>}
        {!p.user && <button onClick={login}>Sign In</button>}
      </div>
    )
  }
})
