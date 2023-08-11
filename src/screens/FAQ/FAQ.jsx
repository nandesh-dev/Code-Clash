import { useEffect, useState } from "react";
import { MdSearch as SearchIcon } from "react-icons/md"
import {faq as data} from "../../data"

export function FAQ() {
    const [searchText, setSearchText] = useState("")
    const [extraQuestionText, setExtraQuestionText] = useState("")
    const [extraQuestions, setExtraQuestions] = useState(JSON.parse(document.cookie || "[]"))


    console.log(JSON.parse(document.cookie || "[]"))

    const questionsAndAnswers = rankSearchResults(data, searchText)

    useEffect(()=>{
        document.cookie = JSON.stringify(extraQuestions)
    }, [extraQuestions])


    return <section className="h-full w-full flex justify-center px-2 overflow-y-scroll">
        <section className="h-full w-[60vw]">
            <section className="grid grid-cols-[1fr_auto] mt-10 sm:mt-24  bg-white-600 backdrop-blur-lg h-14 sm:h-20 w-full px-5 sm:px-8">
                <input className="h-full w-full bg-transparent focus:outline-none sm:text-xl"
                    type="text"
                    placeholder="Search for your Question!"
                    value={searchText}
                    onChange={(e) => { setSearchText(e.target.value || "") }}
                />
                <SearchIcon className="self-center" size={28} />
            </section>
            <section className="flex gap-4 flex-col mt-10 sm:mt-10">
                {
                    extraQuestions.map((q, index) => {
                        return <div className="flex flex-col gap-2 sm:gap-4 bg-white-600 backdrop-blur-lg p-5 sm:p-8" id="ext-scroll" key={index}>
                            <span className="font-medium text-lg sm:text-2xl">Q. {q}</span>
                        </div>
                    })
                }
                {
                    questionsAndAnswers.map(({ q, a }, index) => {
                        return <div className="flex flex-col gap-2 sm:gap-4 bg-white-600 backdrop-blur-lg p-5 sm:p-8" key={index}>
                            <span className="font-medium text-lg sm:text-2xl">Q. {q}</span>
                            <div className="bg-gray-400 h-[1px]" />
                            <span className="text-md sm:text-xl">Ans: {a}</span>
                        </div>
                    })
                }
            </section>
        </section>
        <div className="absolute self-end w-full">
            <div className={`w-[19vw] grid ${extraQuestionText ? "grid-rows-[auto_8rem]" : "grid-rows-[auto_4rem]"} items-start mx-2 bg-white-600 backdrop-blur-lg p-4 gap-3`}>
                <p className="text-xl font-medium">Do you have a question? Just ask!</p>
                <textarea 
                    type="text" 
                    className="focus:outline-none bg-transparent h-full flex-wrap" 
                    id="" 
                    placeholder="Type here..."
                    value={extraQuestionText}
                    onChange={(e)=> setExtraQuestionText(e.target.value || "")}
                    />
                {
                    extraQuestionText && <button onClick={()=>{
                        extraQuestions.push(extraQuestionText)
                        setExtraQuestionText("")
                        setExtraQuestions([...extraQuestions])

                        setTimeout(()=>{
                            const targetDiv = document.getElementById('ext-scroll');
                            targetDiv.scrollIntoView({ behavior: 'smooth' });
                        }, 500)
                    }}>Submit</button>
                }
            </div>
        </div>
    </section>
}

function rankSearchResults(data, searchText) {
    const rankedResults = [];

    for (const item of data) {
        let score = 0
        searchText.split(" ").forEach(word => {
            const questionOccurrences = (item.q.match(new RegExp(word, 'gi')) || []).length;
            const answerOccurrences = Math.floor((item.a.match(new RegExp(word, 'gi')) || []).length / 2);
            const totalOccurrences = questionOccurrences + answerOccurrences;

            score+= totalOccurrences;
        });
        rankedResults.push({ ...item, score });
    }

    rankedResults.sort((a, b) => b.score - a.score);

    return rankedResults;
}