import setFilter from './signals/set-filter'
import setRange from './signals/set-range'
import setAggregation from './signals/set-aggregation'
import clickQuery from './signals/click-query'

export default (options = {}) => {
  return (module, controller) => {

    module.addState({
      title: 'Yoz',
      config: {
        filter: [
          'and',
          ['=','what','teleported-goats'],
        ],
        range: {
          type: 'relative',
          value: 24,
          unit: 'HOURS'
        },
        aggregation: {
          type: 'average'
        }
      },
      data: {}
    })

    module.addSignals({
      setFilter,
      setRange,
      setAggregation,
      clickQuery: [clickQuery]
    })

  }
}
