import sendQueryRequest from '../actions/send-query-request'
import mergeData from '../actions/merge-data'

export default [sendQueryRequest, {
  success: [mergeData],
  error: [({input}) => {console.log('error', input)}]
}]
