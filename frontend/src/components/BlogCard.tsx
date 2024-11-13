import {useNavigate } from "react-router-dom"

interface BlogCardProps{
    authorName : string,
    title : string,
    content : string,
    publishedDate :string,
    id: number
}
const BlogCard = ({
    authorName, title,content,publishedDate,id
}:BlogCardProps) => {
  const navigate = useNavigate()

  return (
    <div onClick={()=>{
      navigate(`/blog/${id}`)
    }} className="border w-[80%] border-slate-200 p-4 m-2">
    <div className="flex items-center w-full">
    <Avatar size="small" name={authorName}/>
    <div className="font-sm text-sm  text-zinc-700 mx-2">{authorName}</div>
    <Circle/>
    <div className="font-sm text-sm pl-2 text-slate-400">{publishedDate}</div>
    
    </div>
    <div className="font-extrabold text-2xl cursor-pointer">{title}</div>
    <div className="font-thin text-gray-500">{(content.length > 200)?(content.slice(0,200) + "..."):(content)}</div>
    <div className="text-slate-500 font-thin text-xs bg-slate-200 p-1 w-fit rounded px-2">{Math.ceil(content.length /100)+" minutes read"}</div>
    </div>
  )
}

export default BlogCard

function Circle(){
    return <div className="w-1 h-1 bg-gray-300 rounded-full">
    </div>
}

export function Avatar({name, size = "small" }:{name : string,size? : string }){
return <div className={`relative inline-flex items-center justify-center w-${size === "big"?8:5} h-${size==="big"?8:5} px-2  overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600`}>
    <span className="font-medium text-basse text-gray-600 dark:text-gray-300">{name[0]}</span>
</div>

}