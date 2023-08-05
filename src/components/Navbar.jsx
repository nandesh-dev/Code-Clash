import { useState } from "react"
import logo from "../assets/dps_logo.webp"

import { MdSearch as SearchIcon, MdMenu as MenuIcon } from "react-icons/md"

export function Navbar() {
    const landscape = window.innerWidth > window.innerHeight

    if(landscape){
        return <Desktop/>
    }
    return <Mobile/>
}

function Desktop(){
    const [searchText, setSearchText] = useState("")
    return (
        <section className="flex flex-col gap-2">
            <section className="grid grid-cols-[4rem_1fr] h-16 gap-x-2 bg-green-800 rounded-lg">
                <div className="flex items-center justify-center p-1 m-0.5 bg-white rounded-md">
                    <img src={logo} alt="DPS Logo"/>
                </div>
                <div className="grid grid-cols-[auto_1fr] gap-8 items-center px-4 rounded">
                    <span className="text-2xl text-white">Delhi Public School, Lava, Nagpur</span>
                    <nav className="flex gap-8 mr-6 justify-end">
                        <input className="bg-transparent w-96 text-white text-lg placeholder:text-white placeholder:font-light border-b border-white focus:outline-0" placeholder="Search for Content"
                            onChange={(e)=>setSearchText(e.target.value || "")}
                            value={searchText}
                        />
                        <SearchIcon fill="white" className="self-center" size={26}/>
                        <button><span  className="text-white  text-lg"> Home    </span></button>
                        <button><span className="text-white   text-lg"> About Us</span></button>
                        <button><span   className="text-white text-lg"> FAQ     </span></button>
                    </nav>
                </div>
            </section>
            {
                searchText ? 
                <section className="h-16 bg-white rounded-lg">
                    <span>{/*Search Results*/}</span>
                </section> : null
            }
        </section>
    )
}

function Mobile(){
    const [searchText, setSearchText] = useState("")
    const [menu, setMenu] = useState("open")


    return (
        <section className="flex flex-col gap-1">
            <section className="grid grid-cols-[3rem_1fr] bg-green-800 rounded">
                <div className="flex items-center justify-center p-1 m-0.5 bg-white-900 rounded-sm h-10">
                    <img src={logo} alt="DPS Logo" className="h-8"/>
                </div>
                <div className="flex justify-between items-center rounded pr-4 pl-2">
                    <span class="text-white-900">DPS, Lava, Nagpur</span>
                    <div className="flex  gap-1">
                        <button onClick={()=>{
                            if(menu === "open")  setMenu("close")
                            else  setMenu("open")
                        }}>
                            <MenuIcon fill="white" className="self-center" size={24}/>
                        </button>
                    </div>
                </div>
            </section>
            {
                menu === "open" ? 
                    <section className="flex gap-1 flex-col">
                        <nav className="grid grid-cols-3 gap-1 h-10">
                            <button className="bg-white-800 rounded" onclick="window.location.href='home.html'"><span  class="font-medium text-sm"> Home    </span></button>
                            <button className="bg-white-800 rounded" onclick="window.location.href='about.html'"><span class="font-medium text-sm"> About Us</span></button>
                            <button className="bg-white-800 rounded" onclick="window.location.href='faq.html'"><span   class="font-medium text-sm"> FAQ     </span></button>
                        </nav>
                        <section className="grid grid-cols-[2.5rem_1fr] items-center bg-white rounded h-10">
                            <SearchIcon size={26} className="justify-self-center"/>
                            <input className="bg-transparent px-1 text-sm placeholder:font-light focus:outline-0" placeholder="Search for Content"
                                onChange={(e)=>setSearchText(e.target.value || "")}
                                value={searchText}
                            />
                        </section>
                    </section>
                : null
            }
            {
                searchText ? 
                <section className="h-16 bg-white-800 rounded-lg">
                    <span>{/*Search Results*/}</span>
                </section> : null
            }
        </section>
    )
}