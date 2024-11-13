import { Quotes } from "../components/Quotes"
import { Auth } from "../components/Auth"

export const Singup = ()=>{
    return<>
     <div className="grid md:grid-cols-2">
        <Auth type="signup"/>
        <div className="hidden md:block">
        <Quotes  />
        </div>
    </div>
    </>
}