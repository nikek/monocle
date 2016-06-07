<query-viewer>
  <pre>{JSON.stringify(query, null, 2)}</pre>

  <script>
    this.connectCerebral({
      query: ['component']
    })
    console.log(this.query)
  </script>
</query-viewer>
