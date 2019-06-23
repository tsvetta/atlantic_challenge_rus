const path = require('path')
const FtpDeploy = require('ftp-deploy')
const ftpDeploy = new FtpDeploy()
const credentials = require('./ftp-credentials')

const config = {
  user: credentials.user,
  password: credentials.password,
  host: '31.31.198.38',
  localRoot: path.join(__dirname, 'src/'),
  remoteRoot: '/',
  include: ['*', '**/*'],
}

ftpDeploy
  .deploy(config)
  .then(res => console.log('finished:', res))
  .catch(err => console.log(err))
