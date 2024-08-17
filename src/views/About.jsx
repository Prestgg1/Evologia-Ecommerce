import Newsletter from "../components/Newsletter"

const About = () => {
  return (
    <main className="w-full flex flex-col gap-10 justify-center items-center">
      <div className="bg-center rounded-3xl h-[60vh] justify-center flex items-center text-white font-extrabold text-5xl md:text-7xl bg-cover w-full" style={{ backgroundImage: "url('https://framerusercontent.com/images/puQFxihwf0c9TMWcHmUA5CzFpg.png')" }}>
        Our Story
      </div>
      <p className="font-medium text-xl text-center">A smart home is a dwelling equipped with technology that allows for remote control and automation of appliances and systems, such as lighting, heating, air conditioning, and security.</p>
      <div className="flex">
        <div className="card">
          <img src="https://framerusercontent.com/images/7F8k9K6p0c9fXnQwvZP6qO0L2k.png" alt="" />
          {/* <span className="absolute"> <h1>Our Vision</h1><p>Smart homes are the homes of the future, where technology and convenience come together</p>
          </span> */}
          </div>
          
        <div className="card">
        <img src="https://framerusercontent.com/images/7F8k9K6p0c9fXnQwvZP6qO0L2k.png" alt="" />
        <h1>Our Way</h1><p>Imagine waking up in the morning and having you coffee ready before you even step uou of bed.</p></div>
        <div className="card">
        <img src="https://framerusercontent.com/images/7F8k9K6p0c9fXnQwvZP6qO0L2k.png" alt="" />
          <h1>Our Approach</h1><p>Why not star building your smart home today and join the future of living!</p></div>
      </div>
      <Newsletter/>
    </main>
  )
}

export default About
