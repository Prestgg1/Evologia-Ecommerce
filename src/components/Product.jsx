import { IoCardOutline } from "react-icons/io5";

const Product = (props) => {
  const { title, price,category, thumbnail } = props.product
  return (
    <div className="bg-[#f8f8f8] relative h-full justify-between items-start rounded-3xl gap-4 p-4 md:w-full w-auto flex flex-col">
      <div className="lg:h-[350px] h-[250px] w-full bg-white justify-center items-center rounded-3xl overflow-hidden flex "><img src={thumbnail} className="duration-300 hover:scale-[1.1s] scale-80 object-cover" alt="" /></div>
      <abbr title={title} className="border-none font-bold text-xl line-clamp-1">{title}</abbr>
      <div className="bar absolute top-[10%] text-[#1f1f1f] text-lg bg-[#f8f8f8] py-3 px-4 capitalize rounded-3xl font-bold left-0">{category}</div>
     <div className="flex justify-between w-full items-center"> <span className="text-[32px] font-extrabold"> $ {price}</span>  <IoCardOutline className="text-3xl rounded-xl p-3 h-12 w-12 bg-black text-white" /></div>
     
    </div>
  )
}

export default Product
