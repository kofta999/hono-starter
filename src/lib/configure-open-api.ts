import type { AppOpenAPI } from './types'
import { apiReference } from '@scalar/hono-api-reference'
import packageJSON from '../../package.json'

export default function configureOpenAPI(app: AppOpenAPI) {
  app.doc('/doc', {
    openapi: '3.0.0',
    info: {
      version: packageJSON.version,
      title: 'API Name',
    },
  })

  app.get('/reference', apiReference({
    defaultHttpClient: {
      targetKey: 'shell',
      clientKey: 'curl',
    },
    spec: {
      url: '/doc',
    },
  }))
}
