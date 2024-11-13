import { useParams } from "react-router-dom"
import { useBlog } from "../hooks"
import FullBlog from "../components/FullBlog"
import Spinner from "../components/Spinner"
import Appbar from "../components/Appbar"

export const Blog = ()=>{
    const {id} = useParams()
    const {loading,blog} = useBlog({
        id: id || ""
    })
    if(loading){
        return <>
        <Appbar/>
        <div className="flex flex-col justify-center w-full h-screen m-auto items-center">
        <Spinner/>
        </div>
        </> 
    }else{
        return <>
        {/* @ts-ignore */}
        <FullBlog blog={blog}/>
        </>
    }
}