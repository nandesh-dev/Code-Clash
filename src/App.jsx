import { useState } from "react";
import { Canvas, Navbar } from "./components";
import { Home, About, FAQ, Contact } from "./screens"

function App() {
  const [ page, setPage ] = useState("home")
  const [homeScrollIndex, setHomeScrollIndex] = useState()

  const scrollTo = (type, index) =>{
    setHomeScrollIndex(index)
    setTimeout(()=>{
      const targetDiv = document.getElementById('scroll-to');
      targetDiv.scrollIntoView({ behavior: 'smooth' });
    }, 1000)
  }

  return (
    <div className="realtive bg-slate-200 h-screen w-screen">
      <section className="absolute">
        <Canvas/>
      </section>
      <section className="absolute h-screen w-screen p-1 gap-1 grid grid-cols-1 grid-rows-[4rem_1fr] sm:grid-rows-[6rem_1fr]">
        <Navbar setPage={setPage} scrollTo={scrollTo}/>
        {
          {
            home: <Home scrollIndex={homeScrollIndex}/>,
            about: <About/>,
            faq: <FAQ/>,
            contact: <Contact/>
          }[page]
        }
      </section>
    </div>
  );
}

export default App;
