import { 
  MongoClient, 
  MongoClientOptions, 
  Db
}                             from 'mongodb'
import { logger }             from './logger'


class Mongo {
  public static db: Db
  public static client: MongoClient
  public static async connect(): Promise<void> {
    if (Mongo.db && Mongo.client) {
      return
    }
    let url: string = 'mongodb://localhost:27017'
    if (process.env.MONGO_HOSTS) {
      url = `mongodb://${process.env.MONGO_HOSTS}`
    } else {
      logger.warn('没有指定mongodb地址, 默认连接本地数据库')
    }
    let options: MongoClientOptions = {
      useUnifiedTopology: true,
    }

    if (process.env.MONGO_POOL_SIZE) {
      let poolSize = parseInt(process.env.MONGO_POOL_SIZE)  
      if (!poolSize) {
        logger.error('MONGO_POOL_SIZE in .env should be a number value.')
      } else {
        options.poolSize = poolSize
      }
    }
    if (process.env.MONGO_USER) {
      options.auth = {
        user    : process.env.MONGO_USER as string,
        password: process.env.MONGO_PASS as string,
      }
    }

    if (process.env.MONGN_AUTH_MECHANISM) {
      options.authMechanism =  process.env.MONGN_AUTH_MECHANISM
    }
    
    try {
      Mongo.client = await MongoClient.connect(url, options)
      Mongo.db = Mongo.client.db(process.env.MONGO_DB_NAME || 'api-gateway-demo')
      logger.info('Connect to mongodb %s', url)
    } catch (err) {
      logger.error('Connect to mongodb error: %j', err)
    }
  }
}

setTimeout(async () => {
  await Mongo.connect()
}, 0)

export default Mongo
