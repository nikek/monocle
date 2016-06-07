<filter-editor>
  <div>
    <input type="text" oninput="{onInput}" value="{filter}">
    {filter}
  </div>

  <script>
    this.connectCerebral({
      filter: ['component', 'config', 'filter']
    },{
      setFilter: ['component', 'setFilter']
    })

    this.onInput = function(e) {
      this.setFilter({filter: e.target.value})
    }
  </script>
</filter-editor>
