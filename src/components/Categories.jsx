import { useContext } from 'react';
import Data from '../Data';
import { NavLink } from 'react-router-dom';

const Categories = () => {
  const { categories } = useContext(Data)
  return (
    <section className="categories grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 justify-center items-center my-10 w-5/6">
      {categories.map(category => (
        <NavLink to={`/store${category.url}`} key={category.id} className="justify-center hover:-translate-y-4 duration-300 items-center rounded-3xl w-full flex gap-3 flex-col bg-[#F8F8F8] category p-3">
          <img className='rounded-3xl h-40 p-3 bg-white w-full object-center object-contain' src={`${category.img}`} alt="" />
          <b className='capitalize text-xl'>{category.title}</b>
        </NavLink>
      ))}
    </section>
  )
}

export default Categories
