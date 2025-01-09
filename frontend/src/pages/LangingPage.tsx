import { Link } from "react-router-dom"
import HomeNav from "../components/HomeNav"

const LangingPage = () => {
  return (
    <div className="bg-orange-50">
        <HomeNav/>
        <div className="grid pt-8 md:grid-cols-2 gap-2 grid-flow-row-dense	">
            <div className="flex flex-col  justify-center h-screen">
                <div className="text-5xl lg:text-8xl md:text-7xl text-slate-800 font-serif mb-2 m-10">
                Human
                stories & ideas
                </div>
                <div className="text-black text-lg m-10 mb-2">
                A place to read, write, and deepen your understanding
                </div>
                <Link to={"/signup"}>
                <div className="bg-green-600 hover:bg-green-800 text-xl rounded-full text-white font-medium w-fit px-5 m-12 py-2">
                    Start reading
                </div>
                </Link>
            </div>
            <div className="hidden justify-self-end md:block h[60%] w-[60%]">
                <img src="https://miro.medium.com/v2/format:webp/4*SdjkdS98aKH76I8eD0_qjw.png" alt="Image" />
            </div>
        </div>
    </div>
  )
}

export default LangingPage