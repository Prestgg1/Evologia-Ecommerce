import Newsletter from "../components/Newsletter"
import { IoIosMail } from "react-icons/io";
import { FaPhoneSquareAlt } from "react-icons/fa";

const Contact = () => {
  return (
    <main className="w-full">
      <form action="" className="bg-[#F8F8F8] my-10 gap-5  rounded-3xl p-10 flex flex-col md:flex-row justify-center md:items-start items-center" >
        <div className="texts flex justify-center items-center md:justify-normal md:items-start md:text-start text-center flex-col gap-7  basis-1/2">
          <h1 className="md:text-6xl text-6xl w-full md:w-2/3 font-extrabold">Get in touch with our team today</h1>
          <p className="w-full md:w-2/3">Need  Any Help? Send us a message using the form below and we'll get back to you promptly!</p>
          <div className="email flex gap-4 justify-center items-center">
            <IoIosMail className="text-3xl bg-black text-white rounded-md p-2 h-16 w-16" />
            <div className="flex flex-col"><b>Send Us an Email:</b>
              <span>info@logiaweb.net</span></div>
          </div>
          <div className="email flex gap-4 justify-center items-center">
            <FaPhoneSquareAlt            className="text-3xl bg-black text-white rounded-md p-2 h-16 w-16" />
            <div className="flex flex-col"><b>Call Us:</b>
              <span>+1 (242) 235 - 153</span></div>
          </div>
        </div>
        <div className="inputs w-full  md:flex-1 flex flex-col gap-2">
          <input type="text" className="p-4 rounded-md outline-none placeholder:text-black" placeholder="Your Name"></input>
          <input type="email" className="p-4 rounded-md outline-none placeholder:text-black" placeholder="Your Email" name="" id="" />
          <textarea className="p-4 placeholder:text-black rounded-md outline-none" placeholder="Enter Your Message Here!" id="" cols="10" rows='7'></textarea>
          <button className="bg-black p-4  hover:opacity-45 duration-300 rounded-md outline-none text-white font-bold">Send Message</button>
        </div>
        
      </form>
      <Newsletter />
    </main>
  )
}

export default Contact
