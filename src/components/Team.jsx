import { Facebook, Twitter, Linkedin, Github, ChevronLeft, ChevronRight } from 'lucide-react'
import imageq from "../assets/01.jpeg"
const teamMembers = [
    {
        name: "Mazahir",
        role: "Blockchain Developer",
        image: imageq,
        socialLinks: {
            facebook: "https://facebook.com/johndoe",
            twitter: "https://twitter.com/johndoe",
            linkedin: "https://linkedin.com/in/johndoe",
            github: "https://github.com/johndoe"
        }
    },
    {
        name: "Mohd Latif",
        role: "Developer",
        image: imageq,
        socialLinks: {
            facebook: "https://facebook.com/janesmith",
            twitter: "https://twitter.com/janesmith",
            linkedin: "https://linkedin.com/in/janesmith",
            github: "https://github.com/janesmith"
        }
    },
    {
        name: "Zain-ul-Abidib",
        role: "Designer",
        image: imageq,
        socialLinks: {
            facebook: "https://facebook.com/bobjohnson",
            twitter: "https://twitter.com/bobjohnson",
            linkedin: "https://linkedin.com/in/bobjohnson",
            github: "https://github.com/bobjohnson"
        }
    }
]

const TeamMemberCard = ({ name, role, image, socialLinks }) => (
    <div className="bg-gray-600 rounded-lg shadow-md p-6 w-full max-w-[300px] mx-auto">
        <div className="flex flex-col items-center">
            <img src={image} alt={name} className="w-24 h-24 rounded-full mb-4 object-cover" />
            <h3 className="text-lg font-semibold">{name}</h3>
            <p className="text-sm text-gray-400 mb-4">{role}</p>
            <div className="flex space-x-4">
                <a href={socialLinks.facebook} className="text-gray-400 hover:text-blue-600"><Facebook size={20} /></a>
                <a href={socialLinks.twitter} className="text-gray-400 hover:text-blue-400"><Twitter size={20} /></a>
                <a href={socialLinks.linkedin} className="text-gray-400 hover:text-blue-700"><Linkedin size={20} /></a>
                <a href={socialLinks.github} className="text-gray-400 hover:text-gray-900"><Github size={20} /></a>
            </div>
        </div>
    </div>
)

export default function TeamPage() {
    return (
        <div className="min-h-auto flex flex-col py-4 bg-gray-800">
              <h1 className="text-4xl font-bold text-center my-4 text-gray-400">Our Team</h1>
            <main className="flex justify-center gap-8 container mx-auto px-4 py-4">              
                {teamMembers.map((member, index) => (
                    <div key={index}  className="">
                        <TeamMemberCard{...member} />
                    </div>
                ))}
            </main>
        
        </div>
    )
}