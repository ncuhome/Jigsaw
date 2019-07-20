import axios from 'axios'

async function post(path, postData, token) {
  const baseUrl = 'http://localhost:8081'
  let url = baseUrl.concat(path)
  const data = JSON.stringify(postData)
  let ret = await new Promise(resolve => {
    axios({
      method: 'post',
      url,
      data,
      headers: {'Content-Type': 'application/json','Authorization': `Bearer ${token}`}
    })
    .then(res => resolve(res.data))
  })
  .then(ret => ret)
  return ret
}

export default post
