
import { useEffect, useState } from "react"
import Comment from "./Comment"

const Testimonials = ({rewiews}) => {
/*   console.log(rewiews) */
const [comments, setComments] = useState([])
useEffect(() => {
  if(rewiews.length>5) {
    setComments(rewiews.slice(0,5))
  }
  else{
    setComments(rewiews)
  }
},[])
  
  return (
    <section className="w-full my-5 space-y-5">
      <h1 className="text-5xl font-extrabold">testimonials</h1>
      <div className="comments w-full md:w-auto gap-5 flex flex-col md:flex-row">
        {comments.map((comment, i) => (
          <Comment key={i} {...comment} />
        ))}
        </div>
        <div className="flex justify-center ">
        {rewiews<!5? <button className="underline font-semibold text-2xl" onClick={() => setComments(rewiews)} >Load more</button>:''}
       
        </div>
     
    </section>
  )
}

export default Testimonials
