# 日志格式
# level: default is 'log', 'trace', 'debug', 'info', 'warn', 'error', 'fatal'
LOG_LEVEL=

# ECTD配置

# 集群配置host1,host2,host3,...,hostN
ETCD_HOSTS=127.0.0.1:2380,localhost:2380
ETCD_USER=
ETCD_PASS=


# Mongo配置host1,host2,...,hostN
MONGO_HOSTS=127.0.0.1:27017
MONGO_USER=
MONGO_PASS=
# Mechanism for authentication: DEFAULT, GSSAPI, PLAIN, MONGODB-X509, 'MONGODB-CR', SCRAM-SHA-1 or SCRAM-SHA-256
MONGO_AUTH_MECHANISM=
# The maximum size of the individual server pool. The default value is 5
MONGO_POOL_SIZE=5
MONGO_DB_NAME='simple-api-gateway'