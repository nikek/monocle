import './inputs/range-picker.tag'
import rangeOptions from '../data/range-options.js'

<range-editor>
  <range-picker options="{rangeOptions}" current="{range}" on-pick="{onRangePick}"></range-picker>

  <script>
    this.rangeOptions = rangeOptions

    this.connectCerebral({
      range: ['component', 'config', 'range']
    },{
      setRange: ['component', 'setRange']
    })

    this.onRangePick = (range) => {
      this.setRange({range});
    }.bind(this)
  </script>
  <style scoped>
    :scope { display: block; }
  </style>
</range-editor>
