import { Link } from "react-router-dom"

const HomeNav = () => {
  return (
    <div className="flex h-fit items-center px-12 justify-between border-b border-black py-2">
        <Link to={"/"} className="text-3xl cursor-pointer font-serif  font-bold">
        <div >Medium</div>
        </Link>
        <div className="flex items-center">
            <Link to={"signin"} >
            <div className="text-slate-800 m-2 cursor-pointer text-base hover:text-slate-600">Sign in</div>
            </Link>
            <Link to={"/signup"}>
            <div className="bg-black m-2 cursor-pointer hover:bg-zinc-800 rounded-full text-white font-bold p-2">Get started</div>
            </Link>
        </div>
    </div>
  )
}

export default HomeNav