import chef from "../assets/chef.jpg"
import Footer from "./Footer"
import Navbar from "./Navbar"

const AboutUs = () => {
    return (
        <div className="">
            <Navbar></Navbar>
            <div className="ml-[7vw] mr-[7vw] mt-[6vw]">
                <div className="flex">
                    <img src={chef} alt="" className="w-[35vw] rounded-md" />
                    <div className="ml-8 my-auto">
                        <div className="w-[31vw]">
                            <h2 className="text-white font-bold text-5xl">From the hand of the maestro</h2>
                        </div>
                        <p className="mt-7 text-white">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex repellendus quae aperiam earum minima eligendi saepe atque odio, quas suscipit, eos repudiandae quos laboriosam ipsam quaerat aliquid, sit inventore alias reiciendis illo voluptates tempore eveniet!</p>
                    </div>
                </div>
            </div>
            <div className="ml-[7vw] mr-[7vw] mt-[6vw] mb-[10vh]">
                <div className="flex">
                    <div className="my-auto">
                        <div className="">
                            <h2 className="text-white font-bold text-5xl">Approved by the President</h2>
                        </div>
                        <div className="w-[50vw]">
                            <p className="mt-7 text-white">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex repellendus quae aperiam earum minima eligendi saepe atque odio, quas suscipit, eos repudiandae quos laboriosam ipsam quaerat aliquid, sit inventore alias reiciendis illo voluptates tempore eveniet!</p>
                        </div>
                    </div>
                    <img src={chef} alt="" className="w-[35vw] rounded-md" />
                </div>
            </div>
            <Footer/>
        </div>
    )
}
 
export default AboutUs