import axios from "axios";
import { useEffect, useState } from "react"
import { BACKEND_URL } from "../config";

export interface BlogProp {
    "content" : string,
    "title" : string,
    "id" : number,
    "published_At" : Date,
    "author" : {
        "username" : string
    }
}
export const useBlogs = ()=>{
    const [loading,setLoading] = useState(true);
    const [blogs,setBlogs] = useState<BlogProp[]>([])

    useEffect(()=>{
        axios.get(`${BACKEND_URL}/api/v1/blog/bulk`,{headers:{
            Authorization: localStorage.getItem("token")
        }})
        .then(response =>{
            setBlogs(response.data.blogs)
            setLoading(false)
        })
    },[])

    return {
        loading,blogs
    }
}

export const useBlog = ({id}:{id : string})=>{
    const [loading,setLoading] = useState(true);
    const [blog,setBlog] = useState<BlogProp>()

    useEffect(()=>{
        axios.get(`${BACKEND_URL}/api/v1/blog/${id}`,{headers:{
            Authorization: localStorage.getItem("token")
        }})
        .then(response =>{
            setBlog(response.data.blog)
            setLoading(false)
        })
    },[id])

    return {
        loading,blog
    }
}