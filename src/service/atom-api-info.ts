import Mongo from '../utils/mongo-connect'
export interface AtomServiceInfoObj {
  name           : string,         // 原子服务名称
  APIType?       : string,         // 原子服务类型
  area?          : string,         // 服务所属地区
  method?        : string,         // 服务访问方法
  des?           : string,         // 服务描述
  path?          : string,         // 服务路径
  address        : string,         // 服务地址
  port?          : string,         // 服务端口
  response?      : string,         // 服务响应
  argument?      : string,         // 服务参数
  errorCode?     : string,         // 服务码
  tags?          : string[],       // 服务标签
  registerByJson?: '0' | string,   // 这是个啥?
}

const collectionName = 'atom-service-info'
export class AtomServiceInfo {
  // 获取所有原子服务信息
  public static async getAll(): Promise<AtomServiceInfoObj[]> {
    const collection = await Mongo.db.collection(collectionName)    
    const result = await collection.find({}).toArray()
    return result
  }
  /**
   * 根据原子服务名称查找原子服务信息
   * @param name 
   */
  public static async findByName(name: string): Promise<AtomServiceInfoObj | null> {
    const collection = await Mongo.db.collection(collectionName)    
    const result = await collection.findOne({name: name})
    return result
  }
  /**
   * 插入一条原子服务
   * @param obj 
   */
  public static async insert(obj: AtomServiceInfoObj): Promise<boolean> {
    const collection = await Mongo.db.collection(collectionName)
    const insertResult = await collection.findOneAndUpdate({ name: obj.name }, obj, {upsert: true})
    return insertResult.ok == 1
  }
}