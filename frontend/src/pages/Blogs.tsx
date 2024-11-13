import BlogCard from "../components/BlogCard"
import Appbar from "../components/Appbar"
import { useBlogs } from "../hooks"
import Skeleton from "../components/Skeleton"

const Blogs = () => {
  const {loading,blogs} = useBlogs()
  if(loading){
    return<>
      <Appbar/>
      <Skeleton/>
    </>
  }else{
  return <>
    <Appbar />
    <div className="flex justify-center w-screen flex-col items-center ">
    {blogs.map(blog=>{
      return  <BlogCard key={blog.id} id={blog.id} content={blog.content} authorName={blog.author.username} title={blog.title} publishedDate="Nov 12,2024" />
    })}
    
    </div>
  </> }
}

export default Blogs