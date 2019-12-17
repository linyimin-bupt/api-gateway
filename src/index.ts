import { CONFIG_PATH }          from './utils/config'
import { logger }               from './utils/logger'
import { AtomServiceInfo }      from './service/atom-api-info'

logger.log('从文件%s中加载配置信息', CONFIG_PATH)

setTimeout(async () => {
  const result = await AtomServiceInfo.insert({
    name: 'test1',
    address: 'localhost',
  })
  logger.log('insert result is %j', result)
  console.log(await AtomServiceInfo.findByName('test1'))
}, 1000);