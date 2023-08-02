import { Link } from "react-router-dom"
import Footer from "./Footer"
import Navbar from "./Navbar"

const NotFound = () => {
    return (
        <div className="">
            <Navbar></Navbar>
            <div className="w-full text-center my-[20vh]">
                <h1 className="text-white text-3xl font-bold">404 Not Found</h1>
                <p className="text-white text-3xl">The page that you searching for does not exist</p>
                <p className="text-white text-3xl">您搜索的页面不存在</p>
                <p className="text-white text-3xl mt-2">Go back to <Link to="/" className="underline">home</Link>?</p>
            </div>
            <Footer/>
        </div>
    )
}
 
export default NotFound