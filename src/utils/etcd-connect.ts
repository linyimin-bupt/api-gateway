import { Etcd3 }                from 'etcd3'
import { logger }               from './logger'

let client: Etcd3

// 设置ETCD连接信息
let hosts: string | string[] = ''
if (process.env.ETCD_HOSTS) {
  hosts = process.env.ETCD_HOSTS.split(',')
}

logger.info('Connect to etcd: %j', hosts)

if (process.env.ETCD_USER) {
  let auth = {
    username: process.env.ETCD_USER as string,
    password: process.env.ETCD_PASS as string,
  }
  client = new Etcd3({
    hosts: hosts,
    auth: auth,
  })
} else {
  client = new Etcd3({
    hosts: hosts
  }) 
}

export { client }