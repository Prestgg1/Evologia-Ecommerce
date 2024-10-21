import React from 'react'
import Person from "./Person"
const Team = () => {
  const Persons = [
    {
      id:1,
      img:'https://framerusercontent.com/images/xN3ieiEzExlSvJrumKomjzfwCQA.jpg',
      name:"Edward Norton",
      skill:"Creative Director",
      linkedin:"#",
      instagram:'#',
      twitter:"#",
    },
    {
      id:2,
      img:'https://framerusercontent.com/images/x5pE1vqkHD6sS9RKChKD1MRTdkE.webp',
      name:"Sandra Bullok",
      skill:"Sales Manager",
      linkedin:"#",
      instagram:'#',
      twitter:"#",
    },
    {
      id:3,
      img:'https://framerusercontent.com/images/gwRzcXdWp0JfppaKxtRgh3ZNy1o.jpg',
      name:"Samuel Jackson",
      skill:"CEO / Founder",
      linkedin:"#",
      instagram:'#',
      twitter:"#",
    }
  ]
  return (
    <>
    <p className='self-start mt-10 font-extrabold text-xl'>Meet The Team
    </p>
    <section className='w-full gap-10 flex justify-center items-stretch'>
      <Person {...Persons[0]} />
      <Person {...Persons[1]} />
      <Person {...Persons[2]} />
    </section>
    </>
    
  )
}

export default Team
