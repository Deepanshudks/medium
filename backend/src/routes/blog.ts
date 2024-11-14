import { Hono } from "hono";
import { Bindings } from "..";
import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";
import { verify } from "hono/jwt";
import { createBlogInput,updateBlogInput } from '@deepanshdks/medium-common'

export const blogRouter = new Hono<{Bindings:Bindings, Variables:{
    userId : string,
}}>()

blogRouter.use("/*",async (c,next)=>{
    const authHeader = c.req.header("authorization") || ""
    try{
        const user = await verify(authHeader,c.env.JWT_SECRET)
        if(user){
            // @ts-ignore
            c.set("userId",user.id);
           await next()
        }else{
            c.status(403)
            return c.json({
                message : "You are not logged in"
            })
        }
    }catch(e){
        c.status(411)
        return c.json({error:e})
    }
})

blogRouter.post("/post", async (c)=>{
    const body = await c.req.json()
    console.log(0)
    const authorId = c.get("userId")
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL
    }).$extends(withAccelerate())
    const {success} = createBlogInput.safeParse(body);
    console.log("success")
    if(!success){
        c.json(411);
        return c.json({
            message : "Invalid inputs"
        })
    }
    try{
        console.log(1)
        const blog = await prisma.blog.create({
            data :{
                title : body.title,
                content : body.content,
                authorId  : Number(authorId)
            }
        })
        console.log(2)
        return c.json({id : blog.id})
    }catch(e){
        c.status(403)
        return c.json({error:e})
    }
})

blogRouter.put("/",async (c)=>{
    const body = await c.req.json()
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL
    }).$extends(withAccelerate())
    const {success} = updateBlogInput.safeParse(body);
    if(!success){
        c.status(411)
        return c.json({
            message : "Invalid inputs"
        })
    }
    try{
        const blog = await prisma.blog.update({
            where:{
                id : body.id
            },
            data :{
                title : body.title,
                content : body.content,
            }
        })
        return c.json({id : blog.id})
    }catch(e){
        c.status(403);
        return c.json({
            error : e
        })
    }
})

blogRouter.get("/bulk",async (c)=>{
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL
    }).$extends(withAccelerate())
        const blogs = await prisma.blog.findMany({select:{
            content: true,
            title: true,
            id: true,
            published_At:true,
            author:{
                select:{
                    username:true
                }
            }
        }})
        return c.json({blogs})
})

blogRouter.get("/:id",async (c)=>{
    const id = c.req.param("id")
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL
    }).$extends(withAccelerate())
    try{
        const blog = await prisma.blog.findFirst({
            where:{
                id : Number(id)
            },
            select:{
                content: true,
                title: true,
                id: true,
                published_At: true,
                author:{
                    select:{
                        username:true
                    }
                }
            }
        })
        return c.json({blog : blog})
    }catch(e){
        c.status(411)
        return c.json({error: e})
    }
})
