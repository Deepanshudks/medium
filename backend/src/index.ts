import { Hono } from 'hono'
import { userRouter } from './routes/user'
import { blogRouter } from './routes/blog'
import { cors } from 'hono/cors'


export type Bindings = {
  JWT_SECRET : string,
  DATABASE_URL : string
}

const app = new Hono<{Bindings:Bindings}>()
app.use("/*",cors())
app.route("/api/v1/user",userRouter)
app.route("/api/v1/blog",blogRouter)

app.get("/",(c)=>{
  return c.text("Hello to medium's backend")
})

export default app
