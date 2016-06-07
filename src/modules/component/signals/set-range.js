export function setRange({input, state}) {

  // validate input
  if(!input.range) {
    // Error handling
  }

  // update state
  state.set('component.config.range', input.range);
}

export default [setRange]
