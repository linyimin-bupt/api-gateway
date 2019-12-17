import * as tracer              from 'tracer'

// 设置日志级别
let logLevel: string = process.env.LOG_LEVEL ? process.env.LOG_LEVEL : 'log'
const logger = tracer.console({level: logLevel})

export { logger }
