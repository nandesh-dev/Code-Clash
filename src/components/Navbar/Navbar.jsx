import { useState } from "react"
import { MdSearch as SearchIcon, MdMenu as MenuIcon } from "react-icons/md"

import { dps_logo } from "../../assets/images"
import * as data from "../../data"

export function Navbar({ setPage, scrollTo }) {
    if (window.innerHeight < window.innerWidth) {
        return Desktop({ setPage, scrollTo })
    }

    return Mobile({ setPage, scrollTo })
}

function Mobile({ setPage }) {
    const [mode, setMode] = useState("closed")

    return <section>
        <section className="h-[4rem] flex flex-row justify-between bg-white-600 backdrop-blur-lg">
            <div className="h-full flex items-center px-2 gap-2">
                <img className="h-12 rounded-[50%]" src={dps_logo} alt="Delhi Public School Logo" />
                <span className="">Delhi Public School Lava</span>
            </div>
            <button onClick={() => {
                if (mode === "open") return setMode("close")
                setMode("open")
            }} className="mx-6"><MenuIcon size={26} /></button>
        </section>
        {
            mode === "open" ? <div className="">
                <div className="grid grid-cols-3 gap-1 mt-1">
                    <button className="bg-white-600 backdrop-blur-lg py-2 z-50" onClick={() => { setPage("home"); setMode("close") }}> <span className="">Home</span></button>
                    <button className="bg-white-600 backdrop-blur-lg py-2 z-50" onClick={() => { setPage("about"); setMode("close") }}><span className="">About Us</span></button>
                    <button className="bg-white-600 backdrop-blur-lg py-2 z-50" onClick={() => { setPage("contact"); setMode("close") }}>  <span className="">Contact</span></button>
                    <button className="bg-white-600 backdrop-blur-lg py-2 z-50" onClick={() => { setPage("faq"); setMode("close") }}>  <span className="">FAQ</span></button>
                </div>
                <div></div>
            </div> : null
        }
    </section>
}

function Desktop({ setPage, scrollTo }) {
    const [mode, setMode] = useState("nav")
    const [searchText, setSearchText] = useState("")

    const faqResults = rankFAQResults(searchText).splice(0,2)
    const homepageResults = rankHomePageResults(searchText).splice(0,4)

    return <section>
        <section className="h-full flex flex-row justify-between bg-white-600 backdrop-blur-lg">
            <div className="h-full flex items-center px-4 gap-4">
                <img className="h-16 shadow-none" src={dps_logo} alt="Delhi Public School Logo" />
                <span className="text-2xl">Delhi Public School Lava</span>
            </div>
            <div>
                {
                    mode === "nav" ? <div className="h-full flex items-center gap-6 px-10">
                        <button onClick={() => setPage("home")}> <span className="text-xl">Home</span></button>
                        <button onClick={() => setPage("about")}><span className="text-xl">About Us</span></button>
                        <button onClick={() => setPage("contact")}>  <span className="text-xl">Contact</span></button>
                        <button onClick={() => setPage("faq")}>  <span className="text-xl">FAQ</span></button>
                        <button onClick={() => setMode("search")}><SearchIcon size={26} /></button>
                    </div> : <div className="h-full grid grid-cols-[20rem_auto] items-center gap-10 px-10">
                        <div className="grid grid-cols-[auto_1fr] grid-rows-[1fr_auto] gap-y-1 gap-x-2">
                            <SearchIcon size={26} />
                            <input
                                type="text"
                                className="text-lg focus:outline-none bg-transparent"
                                placeholder="Search for Content"
                                value={searchText}
                                onChange={(e) => setSearchText(e.target.value || "")}
                            />
                            <div className="h-[1px] bg-black col-start-1 col-end-3" />
                        </div>
                        <button onClick={() => setMode("nav")}>
                            <MenuIcon size={28} />
                        </button>

                    </div>
                }
            </div>
        </section>
        {
            searchText ? <div className="flex flex-col bg-white-600 backdrop-blur-lg">
                {
                    homepageResults.map(({index: {t, h, d}})=>{
                        return <button 
                                className="p-4"
                                onClick={()=>{
                                    scrollTo("home", {t, h, d})
                                }}    
                            >
                            <span className="text-lg">Home: {data.content[t].data[h].data[d].text.slice(0,60)}...</span>
                        </button>
                    })
                }
                {
                    faqResults.map((value)=>{
                        return <button className="p-4"
                            onClick={()=>{
                                scrollTo("faq", value.index)
                            }}
                        >
                            <span className="text-lg">FAQ: {data.faq[value.index].q.slice(0,60)}...</span>
                        </button>
                    })
                }
            </div> : null
        }
    </section>
}

function rankFAQResults(searchText) {
    const rankedResults = [];

    for (const item of data.faq) {
        let score = 0
        searchText.split(" ").forEach(word => {
            const questionOccurrences = (item.q.match(new RegExp(word, 'gi')) || []).length;
            const answerOccurrences = Math.floor((item.a.match(new RegExp(word, 'gi')) || []).length / 2);
            const totalOccurrences = questionOccurrences + answerOccurrences;

            score += totalOccurrences;
        });

        if (score > 0) rankedResults.push({ index: data.faq.indexOf(item), score });
    }

    rankedResults.sort((a, b) => b.score - a.score);

    return rankedResults;
}

function rankHomePageResults(searchText) {
    const rankedResults = [];

    for (const t in data.content) {
        for (const h in data.content[t].data) {
            for (const d in data.content[t].data[h].data) {
                const dataString = data.content[t].data[h].data[d].text
                let score = 0
                searchText.split(" ").forEach(word => {
                    const occurrences = (dataString.match(new RegExp(word, 'gi')) || []).length;
                    score += occurrences;
                });

                if (score > 0) rankedResults.push({ index: {
                    t,
                    h,
                    d
                }, score });
            }
        }
    }

    rankedResults.sort((a, b) => b.score - a.score);

    return rankedResults;
}