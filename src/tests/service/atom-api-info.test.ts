import { AtomServiceInfo, AtomServiceInfoObj } from '../../service/atom-api-info'

describe('AtomServiceInfo', () => {
  const obj: AtomServiceInfoObj = {
    name: 'test',
    address: '127.0.0.1',
    port: '1080',
  }
  test('insert: true', async () => {
    expect(await AtomServiceInfo.insert(obj)).toBe(true)
  })
  
  test('insert: false', async () => {
    expect(await AtomServiceInfo.insert(obj)).toBe(false)
  })
})