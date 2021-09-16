const axios = require('axios')

async function get() {
  try {
    let res = await axios.get('http://127.0.0.1:9999/api/get')
    // console.log(res)
    return res
  } catch(e) {
    console.log(e)
  }
}

module.exports = get