import axios from 'axios'

async function get(path, token) {
  const baseUrl = ''
  let url = baseUrl.concat(path)
  let ret = await new Promise(resolve => {
    axios({
      method: 'get',
      url,
      headers: {'Authorization': `Bearer ${token}`}
    })
    .then(res => resolve(res.data))
  })
  .then(ret => ret)
  return ret
}

export default get
