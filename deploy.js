const path = require('path')
const FtpDeploy = require('ftp-deploy')
const ftpDeploy = new FtpDeploy()
const creditionals = require('./ftp-creditionals')

const config = {
  user: creditionals.user,
  password: creditionals.password,
  host: '31.31.198.38',
  localRoot: path.join(__dirname, 'src/'),
  remoteRoot: '/',
  include: ['*', '**/*'],
}

ftpDeploy
  .deploy(config)
  .then(res => console.log('finished:', res))
  .catch(err => console.log(err))
