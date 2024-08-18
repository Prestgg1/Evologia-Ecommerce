const Newsletter = () => {
  return (
    <form className="bg-black flex-col gap-4 lg:flex-row w-full  justify-between items-center flex text-white rounded-3xl p-9"><h1 className="text-4xl lg:text-6xl w-full md:w-auto text-center font-extrabold">newsletter</h1> <input placeholder="Enter Your Email Adress E-Mail" className="w-full rounded-xl md:rounded-3xl bg-[#4B4B4B] outline-none h-full basis-1/2 px-4 py-6  placeholder:text-white placeholder:pl-4" type="text" /> <button className="bg-white h-full text-black rounded-xl font-extrabold text-2xl py-4 md:rounded-3xl w-full lg:w-60">Subscribe</button></form>
  )
}

export default Newsletter
