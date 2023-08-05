import { content } from "../content"

export function Content(){
    return <section className="flex gap-8 flex-col">
        {
            content.map((data)=>{
                return <div className="flex gap-2 flex-col">
                    <div className="py-4 px-6 bg-yellow-500 rounded">
                        <h2 className="font-medium text-2xl">{data.title}</h2>
                    </div>
                    <div className="flex flex-col gap-2">
                        {
                            data.content.map((data)=>{
                                return <div className=" bg-white-800 rounded">
                                    <div className="pt-6 px-6">
                                        <h3 className="font-medium text-lg">{data.title}</h3>
                                    </div>
                                    <div className="flex flex-col gap-4 p-8 pt-2">
                                        {
                                            data.content.map((data)=>{
                                                return <p>{data}</p>
                                            })
                                        }
                                    </div>
                                </div>
                            })
                        }
                    </div>
                </div>
            })
        }
    </section>
}