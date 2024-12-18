import BlogCard from "../components/BlogCard"
import Appbar from "../components/Appbar"
import { useBlogs } from "../hooks"
import Skeleton from "../components/Skeleton"

const Blogs = () => {
  const { loading, blogs } = useBlogs()
  if (loading) {
    return <>
      <Appbar />
      <Skeleton />
    </>
  } else {
    return <>
      <Appbar />
      {
        blogs.length < 1 ? (
          <div>
            <p className="text-center w-full bg-zinc-100" ><span className="text-slate-800 font-semibold">Oops! </span><span className="text-zinc-800">No Blogs to show</span></p>
          </div>) : (
          <div className="flex justify-center w-screen flex-col items-center ">
            {blogs.map(blog => {
              return <BlogCard key={blog.id} id={blog.id} content={blog.content} authorName={blog.author.username} title={blog.title} publishedDate={blog.published_At} />
            })}

          </div>
        )
      }

    </>
  }
}

export default Blogs