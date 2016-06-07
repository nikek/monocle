// This is a hook to make webpack package the css for us
import './style.less'

import Controller from 'cerebral'
import Model from 'cerebral-model-baobab'
import mixinFactory from 'cerebral-view-riot'
import riot from 'riot'
import './tags/app.tag'

// Modules
import devtools from 'cerebral-module-devtools'
import http from 'cerebral-module-http'
// import router from 'cerebral-module-router'
import component from './modules/component'


const stateRoot = {
  version: '0.1',
}

const controller = Controller(Model(stateRoot))

controller.addModules({
  devtools: devtools(),
  http: http(),
  component: component()
})

riot.mixin(mixinFactory(controller))
riot.mount('app')
