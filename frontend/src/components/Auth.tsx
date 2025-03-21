import { ChangeEvent, useState } from "react"
import Spinner from "./Spinner"
import { Link, useNavigate } from "react-router-dom"
import { SignupInput } from "@deepanshdks/medium-common"
import axios from "axios"
import { BACKEND_URL } from "../config"

export let user:string;
export const Auth = ({type}:{type: "signup" | "signin"})=>{
    const [signupInputs,setsignupInputs] = useState<SignupInput>({
        username : "",
        name :"",
        password : ""
    })
    const [isClicked,setIsClicked] = useState(false)
    const navigate = useNavigate()

    async function GuestLogin(){
        setsignupInputs({
            username : "guest",
            name : "Guest",
            password : "000000"
        })
        try{
            setIsClicked(true)
            const response =  await axios.post(`${BACKEND_URL}/api/v1/user/signin`,{
                username : "guest",
                name : "Guest",
                password : "000000"
            })
            const jwt = response.data.token;
            localStorage.setItem("token",jwt)
            setIsClicked(false)
            navigate("/blogs")
        }catch(e){
            alert("Error in singup")
            setIsClicked(false)
        }   
    }

    async function sendRequest(){
        try{
            setIsClicked(true)
            const response =  await axios.post(`${BACKEND_URL}/api/v1/user/${type === "signup"?"signup":"signin"}`,signupInputs)
            const jwt = response.data.token;
            localStorage.setItem("token",jwt)
            setIsClicked(false)
            navigate("/blogs")
        }catch(e){
            alert("Error in singup")
            setIsClicked(false)
        }
        }

    return <div className="flex flex-cols h-screen justify-center items-center">
    <div className="md:max-w-md">
    <h1 className="font-extrabold flex text-center text-4xl">Create an account</h1>
    <div className="sm:flex my-2 w-full text-center justify-center">
    <p className="font-medium text-lg text-zinc-400">{type === "signup"? "Already have an account?":"Don't have an account?"}<Link className="underline pl-1" to={type ==="signup"?"/signin":"/signup"}>{type==="signin"?"Signup":"Login"}</Link> </p>
    </div>
    
    <div className="flex flex-col">
        
        <LabelledInput value={signupInputs.username} type="text" labelText="Username" placeholder="Enter your username" onChange={(e)=>{
            setsignupInputs(c=>({
            ...c,
            username : e.target.value
            }))
            user = e.target.value
        }} />
       {type === "signup"? <LabelledInput value={signupInputs.name}  labelText="Name" placeholder="Enter your name" onChange={(e)=>{
            setsignupInputs(c=>({
            ...c,
            name : e.target.value
            }))
        }} />:null}
        <LabelledInput value={signupInputs.password}  type="password" labelText="Password" placeholder="Enter your password" onChange={(e)=>{
            setsignupInputs(c=>({
            ...c,
            password : e.target.value
            }))
        }} />
            <p onClick={GuestLogin} className="text-blue-600 px-5 text-sm hover:text-blue-400 cursor-pointer text-right">Guest Login</p>
         {
        !isClicked?( <button onClick={sendRequest
        } className="bg-black text-white p-2 border rounded-lg my-3 hover:bg-zinc-700">{type === "signup"? "Sign up" : "Sign in"}</button>):(
            <button onClick={sendRequest
            } className="bg-black justify-center flex text-white p-2 border rounded my-3 hover:bg-zinc-700">{<Spinner/>}</button>
        )
        }
    </div>
    </div>
    </div>
}

interface LabelledInputTypes{
    labelText: string,
    placeholder: string,
    value?: string,
    type? : string,
    onChange : (e:ChangeEvent<HTMLInputElement>) => void
}
function LabelledInput({value,labelText,placeholder,type,onChange}: LabelledInputTypes){
    return<>
     <label className="font-bold m-1" >{labelText}</label>
    <input value={value} onChange={onChange} className="border-2 m-1 px-2 py-1 rounded border-zinc border-bold" placeholder={placeholder} type={type || "text"} />
    </>
}