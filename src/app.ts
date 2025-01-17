import createApp from '@/lib/create-app'
import index from '@/routes/index.route'
import tasks from '@/routes/tasks/tasks.index'
import configureOpenAPI from './lib/configure-open-api'

const app = createApp()

const routes = [
  index,
  tasks,
]

configureOpenAPI(app)
routes.forEach(route => app.route('/', route))

export type AppType = typeof routes[number]
export default app
