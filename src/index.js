import React from 'react'
import { render } from 'react-dom'
import { Controller } from 'cerebral'
import { Container } from 'cerebral/react'
import Devtools from 'cerebral/devtools'
import firebase from 'firebase'

import AppModule from './modules/AppModule'
import UserModule from './modules/UserModule'
import setupAuthListener from './setupAuthListener'
import FIRConfig from './firebase_config'

import App from './components/App'
import './index.css'


// Initialize Firebase
firebase.initializeApp(FIRConfig)

const controller = Controller({
  devtools: process.env.NODE_ENV === 'production' ? null : Devtools({
    // Time travel
    storeMutations: true,
    // Warnings on mutating outside "state" API
    preventExternalMutations: true,
    // Warnings when passing in non-serializable data to signals and state tree
    enforceSerializable: true,
    // Warnings when strict render path usage is wrong
    verifyStrictRender: true,
    // Throw error when overwriting existing input property
    preventInputPropReplacement: false,
    // Shows a warning when you have components with number of state dependencies
    // or signals above the set number
    bigComponentsWarning: {state: 5, signals: 5},
    // Connect to Electron debugger (external debugger). It will fall back to
    // chrome extension if unable to connect
    remoteDebugger: 'localhost:8585',
    // Will reset debugger to currently focused application
    multipleApps: true
  }),
  providers: [c => (c.firebase = firebase) && c],
  modules: {
    app: AppModule,
    user: UserModule
  }
})

setupAuthListener(firebase, controller.getSignal('user.setUser'))

render((
  <Container controller={ controller }>
    <App/>
  </Container>
  ), document.querySelector('#root')
)
