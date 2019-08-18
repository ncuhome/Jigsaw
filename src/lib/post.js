import axios from 'axios'

async function post(path, postData, token) {
  const baseUrl = ''
  let url = baseUrl.concat(path)
  const data = JSON.stringify(postData)
  let ret = await new Promise(resolve => {
    axios({
      method: 'post',
      url,
      data,
      headers: {'Content-Type': 'application/json'}
    })
    .then(res => resolve(res.data))
  })
  .then(ret => ret)
  return ret
}

export default post
