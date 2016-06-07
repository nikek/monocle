const setAggregation = function({input, state}) {
  state.set('component.config.aggregation', input.aggregation)
}

export default [setAggregation]
