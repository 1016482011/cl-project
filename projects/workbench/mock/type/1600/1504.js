const Mock = require('mockjs')
let Random = Mock.Random
let backData = Mock.mock({
  'award': [{
    'name': Random.cword(3),
    'id': Random.id()
  }, {
    'name': Random.cword(3),
    'id': Random.id()
  }, {
    'name': Random.cword(3),
    'id': Random.id()
  }, {
    'name': Random.cword(3),
    'id': Random.id()
  }],
  'count': '16'
})
let backDatas = {
  code: 0,
  data: backData,
  msg: 'ok'
}
module.exports = reponse
function reponse (param) {
  return backDatas
}
