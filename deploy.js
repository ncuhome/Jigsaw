const fs = require('fs')
const path = require('path')
const util = require('util')
const OSS = require('ali-oss')

const data = fs.readFileSync('./ossMsg.json','utf-8');
const ALIOSSKEY = JSON.parse(data)

const promisifyReaddir = util.promisify(fs.readdir)
const promisifyStat = util.promisify(fs.stat)

const client = new OSS({
  region: ALIOSSKEY.Region,
  accessKeyId: ALIOSSKEY.AccessKeyId,
  accessKeySecret: ALIOSSKEY.AccessKeySecret,
  bucket: ALIOSSKEY.Bucket
})

const publicPath = path.resolve(__dirname, './build')

async function run(proPath = '') {

  const dir = await promisifyReaddir(`${publicPath}${proPath}`)

  for (let i = 0; i < dir.length; i++) {
    const stat = await promisifyStat(path.resolve(`${publicPath}${proPath}`, dir[i]))

    if (stat.isFile()) {
      const fileStream = fs.createReadStream(path.resolve(`${publicPath}${proPath}`, dir[i]))
      console.log(`上传文件: ${proPath}/${dir[i]}`)
      const result = await client.putStream(`${proPath}/${dir[i]}`, fileStream)
    } else if (stat.isDirectory()) {
      await run(`${proPath}/${dir[i]}`)
    }
  }
}

run()