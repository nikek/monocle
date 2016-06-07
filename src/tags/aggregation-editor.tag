<aggregation-editor>
  <div>
    <input type="text" oninput="{onInput}" value="{aggregation}">
    {aggregation}
  </div>

  <script>
    this.connectCerebral({
      aggregation: ['component', 'config', 'aggregation']
    },{
      setAggregation: ['component', 'setAggregation']
    })

    this.onInput = function(e) {
      this.setAggregation({aggregation: e.target.value})
    }

  </script>
</aggregation-editor>
