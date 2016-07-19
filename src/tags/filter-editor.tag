<filter-editor>
  <div>
    <input type="text" oninput="{onInput}" value="{filter}">
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

    // VARS
    var endpoint = '/heroic/parser/parse-filter'

    // STREAMS
    // Stream of all non empty strings from input field
    var queryString$ = Rx.Observable.fromEvent(input, 'input')
      .map(e => e.target.value)
      .startWith(input.value)
      .filter(query => !!query)

    // Stream of parsed strings from server
    var parseQuery$ = queryString$
      .debounce(200)
      .flatMapLatest(query => {
        return Rx.Observable.fromPromise(makeRequest('POST', endpoint, query)).catch(error => {return Rx.Observable.create().publishValue(error)})
      })
      .map(data => JSON.stringify(JSON.parse(data), null, 2))

    // SUBSCRIBE
    parseQuery$.subscribe(data => {
          code.innerHTML = data
          hljs.highlightBlock(code)
        }, err => {
          code.innerHTML = err
        })


    // HELPER FOR REQUESTS
    function makeRequest(method, url, data) {
      return new Promise(function(resolve, reject) {
        var req = new XMLHttpRequest()
        req.open(method, url)
        req.onload = function() { req.status == 200 ? resolve(req.response) : reject(req.response) }
        req.onerror = function() { reject(req.response) }
        req.send(data || '')
      })
    }

  </script>
</filter-editor>
