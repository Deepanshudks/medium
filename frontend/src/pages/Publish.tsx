import axios from "axios"
import Appbar from "../components/Appbar"
import { BACKEND_URL } from "../config"
import { ChangeEvent, useState } from "react"
import { useNavigate } from "react-router-dom"

const Publish = () => {
    const [title,setTitle] = useState("")
    const [content,setContent] = useState("")
    const [BtnTxt,setBtnTxt] = useState("Publish Post")
    const navigate = useNavigate()
    return (<>
        <Appbar />
        <div className="flex justify-center items-center  flex-col">
            <div className="max-w-screen-lg w-full my-4">
                <input onChange={(e)=>{
                    setTitle(e.target.value)
                }} className="block p-2.5 w-full text-sm text-gray-900 rounded-lg border border-gray-100 focus:outline-none " placeholder="Title"></input>
            </div>
            <TextEditor onChange={(e)=>{
                setContent(e.target.value)
            }} />
            <button onClick={()=>{
                setBtnTxt("...")
            axios.post(`${BACKEND_URL}/api/v1/blog/post`,{title,content},{headers :{
                Authorization: localStorage.getItem("token")
            }}).then(response=>{
                navigate(`/blog/${response.data.id}`)
            })
            setBtnTxt("Publish Post")
           }} type="submit" className="inline-flex flex-start items-center py-2.5 px-4 text-xs font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900 hover:bg-blue-800">
               {BtnTxt}
           </button>
        </div>
    </>
    )
}

export default Publish

function TextEditor({onChange}:{onChange : (e:ChangeEvent<HTMLTextAreaElement>)=>void}) {
    return <>

        <form className="w-full max-w-screen-lg">
            <div className="w-full  mb-4 border border-gray-200 rounded-lg bg-gray-50 ">
                <div className="px-4 py-2  bg-white rounded-t-lg ">
                    <textarea onChange={onChange} id="comment" rows={8} className="w-full px-0 text-sm text-gray-900 bg-white border-0  focus:outline-none" placeholder="Write a comment..." required ></textarea>
                </div>
           </div>
        </form>


    </>
}