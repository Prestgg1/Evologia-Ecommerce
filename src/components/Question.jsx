
import { Link } from "react-router-dom"
const Question = () => {
  return (
    <div className="question gap-8 bg-[#F8F8F8] w-full flex flex-col justify-center items-center  p-10 rounded-3xl">
      <h2 className="text-4xl font-extrabold w-2/3 text-center">Have a question?
        We are here to help</h2>
      <div className="w-full  flex justify-center items-center">
        <div className="images w-40 h-10 flex justify-center items-center ">
          <img className="w-10 rounded-full" src="https://framerusercontent.com/images/9UTUal9P9WYkS4aMeIEh5wClmg.png" alt="" loading="lazy" />
          <img className="w-10  rounded-full" src="https://framerusercontent.com/images/J7wzxsJ8k8VLsW1WUHCsbwePcAU.png" alt="" loading="lazy"></img>
          <img className="w-10  rounded-full" src="https://framerusercontent.com/images/uby02E3dzW7wMncYINxwfQAaI.jpg" alt="" loading="lazy"></img>
          <div className="w-10 pin"><span></span> <img className="w-10  rounded-full" src="https://framerusercontent.com/images/YlW3nGdTL4wQlrznwcV071eEos.png" alt="" loading="lazy"></img></div>

        </div>

      </div>
      <p className="w-1/3 text-center">Our customer support is available monday to friday: 8am-8:30pm.</p>
      <Link to="/contact" className="bg-black flex justify-center items-center hover:opacity-45 duration-300 text-white rounded-3xl font-extrabold text-2xl py-4 md:py-6 w-60" onClick={() => navigate('/contact')}>Contact us</Link>
    </div>
  )
}

export default Question
