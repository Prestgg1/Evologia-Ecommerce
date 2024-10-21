
import { FaLinkedin } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

const Person = ({name,img,skill,linkedin,instagram,twitter}) => {

  return (
    <div className="bg-[#F8F8F8] rounded-3xl gap-2 flex flex-col h-full flex-1 py-4 px-4">
    <img src={img} className="rounded-3xl lg:h-60 md:h-40 h-20" alt="" />
      <h1 className="font-[900] text-xl">{name}</h1>
      <div className="flex justify-between w-full items-center">
        <p>{skill}</p>
        {/* social icons */}
        <div className="flex gap-2 text-2xl">

          <a href={linkedin}>
          <FaLinkedin />
          </a>
          <a href={instagram}>
          <FaInstagramSquare />
          </a>
          <a href={twitter}>
          <FaTwitter />
          </a> 
        </div>
      </div>
      
    </div>
  )
}

export default Person
