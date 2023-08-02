import hero from "../assets/hero2.png"
import Footer from "./Footer"
import { useState, useEffect } from "react"
import { getAllMenus } from "../api/Api"
import { AxiosResponse } from "axios"
import { Link } from 'react-router-dom'

import Navbar from "./Navbar"

const Home = () => {
    const [menus, setMenus] = useState<AxiosResponse | null | void>()

    useEffect(() => {
        getAllMenus().then((result) => {
            setMenus(result)
        })
    }, [])

    return (
        <div className="home">
            <Navbar></Navbar>
            <div className="flex justify-between">
                <div className="w-full ml-[6vw]">
                    <div className="w-[45vw] mt-[20vh]">
                        <h1 className="text-white font-bold text-6xl">A Home For Delightful and Tasty Cuisine</h1>
                    </div>
                    <p className="text-white mt-[5vh] text-xl">Welcome To Seafood 44 Official Website!</p>
                    <a href="#cuisine">
                        <button className="text-white border border-white px-5 py-2 rounded-md mt-[2vh] hover:text-[#161616] hover:bg-white duration-500">Book Order</button>
                    </a>
                </div>
                <div className="mr-[8vw]">
                    <img src={hero} alt="" className="w-[56vw]" />
                </div>
            </div>
            <div className="ml-[7vw] mr-[7vw] mb-[10vh]" id="cuisine">
                <h1 className="text-center text-white font-bold text-4xl">Our Cuisine</h1>
                <Link to="/all">
                    <p className="text-center text-yellow-600 hover:underline duration-200 cursor-pointer">See More</p>
                </Link>
                <div className="flex justify-between mt-8 text-white">
                    <div className="container w-[25vw] text-center border border-white rounded-lg py-5 px-2 hover:border-yellow-600 hover:-mt-4 duration-200">
                        <div className="m-6 w-[20vw]">
                            <img src={menus?.data[0].image} alt="" className="w-[20vw] h-[30vh] bg-contain object-cover rounded-md" />
                        </div>
                        <h3 className="font-bold text-2xl">{menus?.data[0].name}</h3>
                        <p className="mt-3">{menus?.data[0].description}</p>
                    </div>
                    <div className="container w-[25vw] text-center border border-white rounded-lg py-5 px-2 hover:border-yellow-600 hover:-mt-4 duration-200">
                    <div className="m-6 w-[20vw]">
                            <img src={menus?.data[1].image} alt="" className="w-[20vw] h-[30vh] bg-contain object-cover rounded-md" />
                        </div>
                        <h3 className="font-bold text-2xl">{menus?.data[1].name}</h3>
                        <p className="mt-3">{menus?.data[1].description}</p>
                    </div>
                    <div className="container w-[25vw] text-center border border-white rounded-lg py-5 px-2 hover:border-yellow-600 hover:-mt-4 duration-200">
                    <div className="m-6 w-[20vw]">
                            <img src={menus?.data[2].image} alt="" className="w-[20vw] h-[30vh] bg-contain object-cover rounded-md" />
                        </div>
                        <h3 className="font-bold text-2xl">{menus?.data[2].name}</h3>
                        <p className="mt-3">{menus?.data[2].description}</p>
                    </div>
                </div>
            </div>
            
            <Footer/>
        </div>
    )
}

export default Home