import { useRef } from "react"

import { Context, Content } from "./components"

export function Home({ scrollIndex }) {
    const containerRef = useRef()
    const scrollDivRef = useRef()
    const contextDivRef = useRef()

    const handleScroll = () => {
        if(window.innerHeight >= window.innerWidth) return
        const containerY = containerRef.current.getBoundingClientRect().y
        const scrollDivY = scrollDivRef.current.getBoundingClientRect().y
        
        
        if (scrollDivY < containerY) {
            contextDivRef.current.style.marginTop =  (containerY - scrollDivY ) + "px"
            return
        }
        contextDivRef.current.style.marginTop = 0
    }

    return <section className="grid grid-rows-[24rem_1fr] sm:grid-rows-[36rem_1fr] sm:grid-cols-[18rem_1fr] gap-2 overflow-y-scroll"
        ref={containerRef}
        onScroll={handleScroll}
    >
        <div className="flex flex-col gap-4 items-center justify-center sm:col-start-1 sm:col-end-3">
            <span className="text-4xl font-medium sm:text-6xl text-center">Fast Fashion</span>
            <span className="text-4xl font-medium sm:text-6xl text-center">and Textile Waste</span>
        </div>
        {
            window.innerHeight < window.innerWidth ? <div 
                    className={`h-fit w-[18rem]`}
                    ref={contextDivRef}
                    >
                <Context/>
            </div> : null
        }
        <div ref={scrollDivRef}>
            <Content scrollIndex={scrollIndex}/>
        </div>
    </section>
}