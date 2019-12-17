/**
 * 根据环境变量加载配置文件
 */

import * as dotenv  from 'dotenv'
import path         from 'path'

let CONFIG_PATH: string
switch (process.env.NODE_ENV) {
  case 'test':
    CONFIG_PATH = path.resolve(`${__dirname}/../../.env.test`)
    break
  case 'production':
    CONFIG_PATH = path.resolve(`${__dirname}/../../.env.pro`)
    break
  default:
    CONFIG_PATH = path.resolve(`${__dirname}/../../.env.dev`)
    break
}

dotenv.config({path: CONFIG_PATH})

export { CONFIG_PATH }