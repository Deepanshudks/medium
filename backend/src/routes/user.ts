import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";
import { Hono } from "hono";
import { sign } from "hono/jwt";
import { Bindings } from "..";
import { signinInput, signupInput } from "@deepanshdks/medium-common";
export const userRouter = new Hono<{Bindings:Bindings}>()

userRouter.post('/signup',async (c)=>{ 
    const prisma = new PrismaClient({
      datasourceUrl : c.env.DATABASE_URL
    }).$extends(withAccelerate())
    const body = await c.req.json()
    const { success} =  signupInput.safeParse(body)
    if(!success){
      c.status(411)
      return c.json({error : "Invalid inputs"})
    }
        try{
      const user = await prisma.user.create({
        data:{
          name : body.name,
          username: body.username,
          password : body.password
        }
      })
    
      const token = await sign({id : user.id},c.env.JWT_SECRET)
      return c.json({token : token})
    }catch(err){
      c.status(411)
      return c.json({error: err})
    }
  })
  
  userRouter.post('/signin',async (c)=>{
    const prisma = new PrismaClient({
      datasourceUrl : c.env.DATABASE_URL
    }).$extends(withAccelerate())
    const body = await c.req.json()
    const {success} = signinInput.safeParse(body)
    if(!success){
      c.status(411);
      return c.json({
        error: "Invalid input"
      })
    }
    try{
    const user = await prisma.user.findFirst({
      where:{
        username : body.username,
        password : body.password
    }})
    if(!user){
      c.status(403)  // unauthorized
      return c.json({message : "User not found"})
    }
    const token = await sign({id : user.id}, c.env.JWT_SECRET)
    return c.json({token:token})
  }catch(e){
    c.status(403)
    return c.json({error : e})
  }
  })