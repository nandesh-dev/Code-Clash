import { content as data } from "../../../data"

import { MdArrowRight} from "react-icons/md"

export function Context(){
    return <section className="bg-white-600 backdrop-blur-lg p-8">
        <h2 className="text-3xl mb-4 text-center" >Content</h2>
        <div className="bg-gray-400 h-[1px] mb-2"/>
        {
        data.map((data, index)=>{
            return <div className="mt-4" key={index}>
                <span className="text-xl font-medium">{data.title}</span>
                <div className="flex flex-col gap-1 mt-2">
                    {
                    data.data.map((data, index)=>{
                        if(!data.heading)   return null
                        return <div className="flex flex-row gap-1" key={index}>
                            <MdArrowRight className="mt-1" size={20}/>
                            <span className="text-lg">{data.heading}</span>  
                        </div>
                    })    
                    }
                </div>
                <div className="bg-gray-400 h-[1px] mt-4"></div>
            </div>
        })    
        }
    </section>
}