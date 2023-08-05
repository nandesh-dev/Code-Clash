import { useEffect, useRef } from "react";
import { Navbar, Content, Context } from "./components";
import { Fluid } from "./fluid";

function App() {
  const canvasRef = useRef(null)

  useEffect(() => {
    if (canvasRef.current !== undefined && canvasRef.current !== null) {
      return new Fluid(canvasRef)
    }
  })

  return (
    <div className="bg-slate-200 h-screen w-screen">
      <section className="absolute h-screen w-screen">
        <canvas className="h-full w-full" ref={canvasRef} />
      </section>
      <section className="grid grid-rows-[auto_1fr] absolute p-1 sm:p-2 w-full h-screen gap-2">
        <Navbar />
        <ContentContainer />
      </section>
    </div>
  );
}

function ContentContainer() {
  const contentDivRef = useRef()
  const contentContainerRef = useRef()
  const informationDivRef = useRef()

  const handleScroll = () => {
    const informationY = informationDivRef.current.getBoundingClientRect().y
    const containerY = contentContainerRef.current.getBoundingClientRect().y
    
    if (informationY < containerY)  {
      contentDivRef.current.style.top = containerY - informationY + "px"
    } else {
      contentDivRef.current.style.top = 0
    }    
  }

  return (
    <section className="overflow-hidden overflow-y-scroll"
      onScroll={handleScroll}
      ref={contentContainerRef}
    >
      <section className="h-[200vh]">
        <section className="h-10 sm:h-16" />
        <div className="grid items-center justify-center h-[50vh]">
          <h1 className="text-center text-2xl sm:text-6xl font-semibold">Fast Fashion and Textile Waste</h1>
        </div>
        <div className="grid sm:grid-cols-[18rem_1fr] gap-2">
          <div className="relative" ref={contentDivRef}>
            <Context />
          </div>
          <div className="" ref={informationDivRef}>
            <Content/>
          </div>
        </div>
      </section>
    </section>
  )
}

export default App;
