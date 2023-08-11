import { content as data } from "../../../data"

export function Content({scrollIndex}){
    return (
        <section className="flex flex-col gap-2">{
            data.map((data, index)=>{
                return <Card title={data.title} data={data.data} key={index} scrollIndex={(scrollIndex !== undefined && index === parseInt(scrollIndex.t)) ? scrollIndex : undefined}/>
            })            
        }</section>
    )
}

function Card({title, data, scrollIndex}){
    return <div className="flex flex-col gap-2 bg-white-600 backdrop-blur-lg p-4 sm:p-8">
        <h2 className="text-2xl font-medium sm:font-normal sm:text-4xl sm:mb-2">{title}</h2>
        {data.map((data, index)=>{
            return <div key={index}>
                <Chip heading={data.heading} data={data.data}  scrollIndex={(scrollIndex !== undefined && index === parseInt(scrollIndex.h)) ? scrollIndex : undefined}/>
            </div>
        })}
    </div>
}

function Chip({heading, data, scrollIndex}){
    return <div className="mb-4" id={scrollIndex !== undefined ? "scroll-to" : null}>
        <h3 className="sm:text-2xl font-medium mb-1">{heading}</h3>
        <div className="flex flex-col gap-4">
        {
            data.map(({text, image}, index) => {
                return <Block text={text} image={image} key={index}/>
            })
        }
        </div>
    </div>
}

function Block({text, image}){
    const textBlocks = text.split("\n")
    return <div className={`grid flex-col sm:grid-cols-[5fr_3fr] gap-20 pr-2`}>
        <div className="flex flex-col gap-2">
            {
                textBlocks.map((textBlock, index)=>{
                    return <p className="sm:text-xl mt-2 ml-4 text-justify" key={index}>{textBlock}</p>
                })
            }
        </div>
        {
            image !== undefined ? <img src={image} alt="" className="w-full "/> : null
        }        
    </div>
}