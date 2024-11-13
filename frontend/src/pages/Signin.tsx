import { Auth } from "../components/Auth"
import { Quotes } from "../components/Quotes"

export const Singin = ()=>{
    return<>
     <div className="grid md:grid-cols-2">
        <Auth type="signin"/>
        <div className="hidden md:block">
        <Quotes/>
        </div>
    </div>
    </>
}