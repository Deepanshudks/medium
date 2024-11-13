import { Link, useNavigate, useParams } from "react-router-dom"
import { Avatar } from "./BlogCard"
import { useBlog } from "../hooks"

const Appbar = () => {
  const navigate = useNavigate()
  return (
    <div className="flex  py-2 m-4 border-b justify-between px-10">
      <Link to={"/"} className="font-bold text-lg cursor-pointer">
        <div className="font-serif text-2xl " >
          Medium</div>
      </Link>
        <div className="flex items-center">
          <Link to={"/publish"}>
            <button className="bg-green-600 cursor-pointer hover:bg-green-700 text-normal mx-2 px-4 py-1 text-white rounded-full" >New</button>
          </Link>
            <button onClick={()=>{
              localStorage.removeItem("token");
              navigate("/")
            }} className="bg-slate-50 mx-2 px-4 py-2 rounded">Logout</button>
          <div className=" py-1 rounded-full"><Avatar size={"big"} name={"Deepanshu"}/></div>
          </div>
           
    </div>
  )
}

export default Appbar