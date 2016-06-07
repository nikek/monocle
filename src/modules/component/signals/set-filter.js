const setFilter = function({input, state}) {
  state.set('component.config.filter', input.filter)
}

export default [setFilter]
