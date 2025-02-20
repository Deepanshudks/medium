import { Link, useNavigate } from "react-router-dom"
import { Avatar } from "./BlogCard"

const Appbar = () => {
  const navigate = useNavigate()
  return (
    <div className="flex items-center py-2 m-4 border-b justify-between px-4 md:px-10">
      <Link to={"/blogs"} className="font-bold text-lg cursor-pointer">
        <div className="font-seri text-xl md:text-2xl " >
          Medium</div>
      </Link>
        <div className="flex items-center">
          <Link to={"/publish"}>
            <button className="bg-green-600 cursor-pointer hover:bg-green-700 md:text-normal text-sm mx-2 md:mx-2 p-4 py-2 font-semibold md:px-4 md:py-2 py-1 text-white rounded-full" >New +</button>
          </Link>
            <button onClick={()=>{
              localStorage.removeItem("token");
              navigate("/")
            }} className="bg-slate-50 mx-1 px-1 md:text-normal text-sm md:mx-2 md:px-4 py-2 font-semibold hover:bg-zinc-100 hover:text-zinc-900 rounded">Logout</button>
          <div className=" py-1  px-1rounded-full"><Avatar size={"big"} name={"Deepanshu"}/></div>
          </div>
           
    </div>
  )
}

export default Appbar