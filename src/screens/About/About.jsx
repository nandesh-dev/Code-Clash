import { dps_building, nandesh_pfp, naseer_pfp, pranjal_pfp, principal_photo, vision } from "../../assets/images"

export function About() {
    return <section className="h-full w-full flex flex-col items-center px-2 overflow-y-scroll gap-8">
        <section className="w-full max-w-8xl backdrop-blur-lg bg-white-600 px-8 sm:px-32 pb-24 mt-10 sm:mt-48 ">
            <h2 className="text-center text-3xl sm:text-5xl my-12 sm:my-16">Our School</h2>
            <div className="grid grid-cols-[3fr_2fr] gap-8 items-center">
                <p className="text-justify text-lg">DPS Lava, Nagpur is one of the most trusted names in quality education, which is recognized throughout the academic world for its progressive approach and commitment to excellence. Delhi Public School Lava, Nagpur is the third initiative of the promoters with the first two being DPS Varanasi and DPS Nashik. DPS Lava, Nagpur commenced the academic classes from June 2017 and today has classes from Nursery to Grade XII. The school aims to develop mental, intellectual and aesthetic faculties of the child through a host of curricular and co-curricular activities. It offers a friendly, stress-free and value based learning experience. The curriculum at Delhi Public School lays particular emphasis on the development of the creative potential of each student. It is based on the principle that education must develop not only cognitive skills - both ‘foundational skills’ of literacy and numeracy and ‘higher-order’ cognitive skills such as problem-solving – but also social and emotional skills - the ‘soft skills’ that include cultural awareness and empathy, perseverance and grit, teamwork, leadership, communication, among others. Our teachers promote cross-cultural understanding and differentiate instruction to meet students’ varying needs, abilities, and learning styles. Delhi Public School ensures social, emotional, and physical development transforming each child into a confident, inquisitive, self-motivated learner; a global citizen capable of rational thought and action, possessing compassion and empathy, courage and resilience, scientific temper, and creative imagination, with sound ethical moorings and values.
                </p>
                <img src={dps_building} alt=""/>
            </div>
            <div className="grid grid-cols-[3fr_2fr] gap-8 items-center">
                <div>
                    <h3 className="text-xl sm:text-2xl font-medium mt-6">Our Mission</h3>
                    <p className=" text-lg">To inspire our children to be passionate lifelong learners</p>
                    <p className=" text-lg">To innovate and contribute in meaningful ways to society</p>
                    <h3 className="text-xl sm:text-2xl font-medium mt-6">Our Vision</h3>
                    <p className="text-justify text-lg">A Dipsite is someone who has these attributes.
                        DPS Lava Nagpur, a community where teachers strive, every learner thrives and parents radiate with pride.</p>
                    <h3 className="text-xl sm:text-2xl font-medium mt-6">Our Motto</h3>
                    <p className="text-justify text-lg">Our motto is the reflection of the ideals that are our guiding lights. The motto constantly reminds all Dipsites that the well being of others is paramount and one should strive to serve selflessly and graciously. To inspire our children to be passionate lifelong learners To innovate and contribute in meaningful ways to society.</p>
                </div>
                <img src={vision} alt="" className="w-full" />
            </div>
            <div className="grid grid-cols-[3fr_2fr] gap-8 items-center">
                <div>
                    <h3 className="text-xl sm:text-2xl font-medium mt-6 mb-2">A Message from Principal</h3>
                    <p className="text-justify text-lg">We at DPS Lava, believe that the science behind teaching-learning is simple. Keep the learner in the centre of everything you do. This is the theory underlying every measured effort we make and this helps us deliver a world-class curriculum that is shaped around the learners. The fundamental concept of imparting education is that every learner is unique. We welcome in our school, students with diverse cognitive, physical, and behavioral capabilities and customize our pedagogy based on their ability to learn. We achieve this with a teaching-learning methodology that addresses the individuality of each learner. This is implemented by combining a variety of innovative programmes each of which helps nurture and attain specific learning outcomes. It leads to enhanced creativity, curiosity, determination, and teamwork in each student. Most importantly it helps create a generation of lifelong, eager, and active learners, who are exposed to a stimulating learning environment, engaging in a wide range of developmentally appropriate activities. Thus, the way we talk to our children becomes their inner voice. We provide varied opportunities for social, cultural, physical, and cognitive development of students through sound infrastructure and modern facilities. The furniture is eco friendly, safety and hygiene is a priority and everything is backed by a sound contingency plan. The Parent-School-Student trio forms the fundamental component in the growth and progress of our school. With this belief, we have built resilient bridges that nurture this partnership. Our mission is to bloom and spread the fragrance of education all around. We nurture our students in a non-threatening environment. We are a school that cares.</p>
                    <p className="text-lg sm:text-xl font-medium mt-4">Mrs. Anupama Sagdeo</p>
                    <p className="text-lg sm:text-xl font-medium">Principal</p>
                </div>
            <img src={principal_photo} alt="" />
            </div>
        </section>
        <section className="flex flex-col items-center h-fit w-full max-w-8xl mt-6 sm:mt-12 pb-8 backdrop-blur-lg bg-white-600">
            <h2 className="text-center text-3xl sm:text-5xl my-12 sm:my-16">Our Team</h2>
            <div className="grid grid-rows-[1fr_1fr_1fr] sm:grid-rows-1 sm:grid-cols-[1fr_1fr_1fr] max-w-6xl sm:h-[30rem] px-10 gap-4 sm:gap-8">
                <div className="grid grid-rows-[1fr_auto_auto] h-full w-full"><img src={nandesh_pfp} className="bg-slate-200 w-full h-[24rem]  mb-4" alt="" /><span className="text-center text-2xl font-medium">S Nandesh</span><span className="text-center">(Site Developer)</span></div>
                <div className="grid grid-rows-[1fr_auto_auto] h-full w-full"><img src={pranjal_pfp} className="bg-slate-200 w-full h-[24rem] mb-4" alt="" /><span className="text-center text-2xl font-medium">Pranjal Kumar</span><span className="text-center">(Editor)</span></div>
                <div className="grid grid-rows-[1fr_auto_auto] h-full w-full"><img src={naseer_pfp} className="bg-slate-200  w-full  h-[24rem] mb-4" alt="" /><span className="text-center text-2xl font-medium">Naseer Ali</span><span className="text-center">(Instructor)</span></div>
            </div>
        </section>
    </section>
}

//TODO Contact Details
//TODO Interactive FAQ