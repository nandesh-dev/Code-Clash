import { useEffect, useRef } from "react";
import { Fluid } from "../../fluid"

export function Canvas(){
    const canvasRef = useRef(null)
  
    useEffect(() => {
      if (canvasRef.current !== undefined && canvasRef.current !== null) {
        return new Fluid(canvasRef)
      }
    })
  
    return (
        <section className="h-screen w-screen">
          <canvas className="h-full w-full" ref={canvasRef} />
        </section>
    );
}