import { Key, useEffect, useState } from "react"
import Footer from "./Footer"
import Navbar from "./Navbar"
import { getAllMenus } from "../api/Api"
import { AxiosResponse } from "axios"

const MenuList = () => {
    const [menus, setMenus] = useState<AxiosResponse | null | void>()

    useEffect(() => {
        getAllMenus().then((result) => {
            setMenus(result)
        })
    }, [])


    const ShowMenus = () => {
        return menus?.data.map((data: any, i: Key) => {
            return (
                <div className="container w-[25vw] text-center border border-white rounded-lg py-5 px-2 hover:border-yellow-600 hover:mt-4 duration-200 text-white mx-[2vw] mt-[5vh] key={i}">
                    <div className="m-6 w-[20vw]">
                        <img src={data.image} alt="food images" className="w-[20vw] h-[30vh] bg-contain object-cover rounded-md" />
                    </div>
                    <h3 className="font-bold text-2xl">{data.name}</h3>
                    <div className="w-[20vw] mb-4 mx-auto mt-4 text-left">
                        <p className="mt-3">{data.description}</p>
                        <p>Price : {data.price}$</p>
                        <p>Sale : {data.sale}</p>
                    </div>
                </div>

            )
        })
    }


    return (
        <div className="">
            <Navbar></Navbar>
            <h1 className="text-white text-center text-4xl font-bold mt-[10vh] mb-[6vh]">All Delightful Menus From Our Kitchen</h1>
            <div className="grid grid-cols-3 ml-[5vw] mr-[5vw] mb-[7vh]" >
                < ShowMenus />
            </div>
            <Footer />
        </div>
    )
}

export default MenuList