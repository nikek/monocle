export default function sendQueryRequest({state, input, output, services}) {
  const query = Object.assign({}, state.get('component.config'))

  services.http.post('/heroic/metrics', query)
    .then(output.success)
    .catch(output.error)
}
