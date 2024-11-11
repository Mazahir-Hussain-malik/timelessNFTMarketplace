import React from 'react'

import { FaLinkedin, FaGithub, FaFacebook } from "react-icons/fa";



import Image1 from "./../assets/images/team/latif.png";
import Image2 from "./../assets/images/team/zain.png";
import Image3 from "./../assets/images/team/mazahir.png";

const Team = () => {
    const teamMembers = [
        {
            id: 1,
            name: "Mazahir",
            role: "Blockchain Developer",
            image: Image3,
            socialLinks: {
                facebook: "https://facebook.com/johndoe",
                linkedin: "https://www.linkedin.com/in/mazahihussain/",
                github: "https://github.com/Mazahir-Hussain-malik"
            }
        },
        {
            id: 2,
            name: "Mohd Latif",
            role: "Developer",
            image: Image1,
            socialLinks: {
                facebook: "https://facebook.com/janesmith",
                linkedin: "https://www.linkedin.com/in/mohadlatif-kharmangi129/",
                github: "https://github.com/MuhammadLateef"
            }
        },
        {
            id: 3,
            name: "Zain-ul-Abidib",
            role: "Designer",
            image: Image2,
            socialLinks: {
                facebook: "https://www.facebook.com/people/Zainul-Abidin/100034929259686/?mibextid=LQQJ4d",
                linkedin: "https://www.linkedin.com/in/zain-ul-abidin-46ab57222/",
                github: "https://github.com/AbidinZain1"
            }
        }
    ]
    return (
        <div className=' '>
            <section className="py-12" >
                <div className="max-w-7xl mx-auto px-8 py-4 space-y-16">
                    <h2 className="font-heading font-bold text-white text-4xl text-center">
                        Meet the team
                    </h2>
                    <div className="grid md:grid-cols-3 gap-6 ">
                        {teamMembers.map((team, id) => (
                            <div className="space-y-2 flex flex-col items-center  bg-gray-900 border border-[#e32970] py-4 rounded-lg px-4 " key={id}>
                                <div className="space-y-4">
                                    <img src={team.image} className="mx-auto h-40 w-40 rounded-full xl:w-56 xl:h-56 object-fill" />
                                    <h3 className="font-medium text-white text-2xl text-center">
                                        {team.name}
                                    </h3>
                                </div>
                                <h3 className='text-gray-400'>{team.role}</h3>
                                <div className="flex space-x-4 text-2xl justify-center items-center ">
                                    <a href={team.socialLinks.linkedin} target="_blank" className="text-gray-400 hover:text-gray-500">
                                        <FaLinkedin />
                                    </a>

                                    <a href={team.socialLinks.github} target="_blank" className="text-gray-400 hover:text-gray-500 text-center">
                                        < FaGithub />
                                    </a>
                                    <a href={team.socialLinks.facebook} target="_blank" className="text-gray-400 hover:text-gray-500 text-center">
                                        < FaFacebook />
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Team;