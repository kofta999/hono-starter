import type { AppType } from './app'
import { hc } from 'hono/client'

// this is a trick to calculate the type when compiling
const _client = hc<AppType>('')
export type Client = typeof _client

export function hcWithType(...args: Parameters<typeof hc>): Client {
  return hc<AppType>(...args)
}
