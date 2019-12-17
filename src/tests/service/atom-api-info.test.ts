import { AtomServiceInfo, AtomServiceInfoObj } from '../../service/atom-api-info'


function sleep(mill: number): Promise<void> {
  return new Promise<void>(resolve => setTimeout(resolve, mill))
}

describe('AtomServiceInfo', () => {
  const obj: AtomServiceInfoObj = {
    name: 'test' + '_' + new Date().getTime(),
    address: '127.0.0.1',
    port: '1080',
  }
  test('insert: true', async () => {
    // 等待数据库连接
    await sleep(100)
    expect(await AtomServiceInfo.insert(obj)).toBe(true)
  })
  
  test('insert: false', async () => {
    // 等待数据库连接
    await sleep(100)
    expect(await AtomServiceInfo.insert(obj)).toBe(false)
  })
  
  test('findByName: exist', async () => {
    const result = await AtomServiceInfo.findByName('test')
    expect(result && result.name).toEqual('test')
  })
  
  test('findByName: not exist', async () => {
    const result = await AtomServiceInfo.findByName('not exist')
    expect(result).toEqual(null)
  })
  
  test('getAll', async () => {
    const number = await AtomServiceInfo.count()
    const result = await AtomServiceInfo.getAll()
    expect(result && result.length).toBe(number)
  })
  
})
