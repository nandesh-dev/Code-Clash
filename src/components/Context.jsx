import { content } from "../content"

export function Context(){
    return <div className="bg-white-800 pb-6 rounded overflow-hidden">
        <div className="bg-[#f28d25]">
            <h2 className="text-3xl font-medium py-4 text-center text-white-900">Content</h2>
        </div>
        {
            content.map((data)=>{
                return <div className="flex gap-2 flex-col py-1 mt-2">
                    <div className="py-0 px-4 rounded">
                        <span className="text-xl">{data.title}</span>
                    </div>
                    {
                        data.content ? <div className="flex flex-col gap-2">
                            {
                                data.content.map(({title}, index)=>{
                                    return <div className="">
                                        <p className="text-md pl-8 pr-2 my-1">{title}</p>
                                        {
                                            index < data.content.length -1 ? <div className="mr-4 ml-8 bg-gray-400 h-[1px]"/>
                                            : null
                                        }                                        
                                    </div>
                                })
                            }
                        </div> : null
                    }
                    <div className="mx-4 bg-gray-400 h-[1px]"></div>
                </div>
            })
        }
    </div>
}