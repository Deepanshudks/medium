import { Singup } from "./pages/Signup"
import { Singin } from "./pages/Signin"
import { Blog } from "./pages/Blog"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Blogs from "./pages/Blogs"
import Publish from "./pages/Publish"
import LangingPage from "./pages/LangingPage"

function App() {

  return (
    <>
    <BrowserRouter> 
    <Routes>
      <Route path="/"  element={<LangingPage/>} />
      <Route path="/signup" element={<Singup/>} />
      <Route path="/signin" element={<Singin/>} />
      <Route path="/blog/:id" element={<Blog/>} />
      <Route path="/blogs" element={<Blogs/>} />
      <Route path="/publish" element={<Publish/>} />
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
