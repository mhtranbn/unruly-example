import unruly from 'unruly'

import koa from 'koa'
import serve from 'koa-static'

let app = koa()

app.use(serve(unruly.location))

app.listen(unruly.port)
