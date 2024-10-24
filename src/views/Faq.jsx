

import Newsletter from "../components/Newsletter"
import Question from "../components/Question"
import { Helmet, HelmetProvider } from 'react-helmet-async';
const Faq = () => {
  return (
    <HelmetProvider>
      <Helmet>
        <title>Faq Page</title>
        <meta name="description" content="Faq Page" />
        <meta name="keywords" content="Faq Page" />
      </Helmet>
   <main className="flex flex-col gap-10 container">
      <h1 className="lg:text-[68px] text-4xl md:text-5xl mb-10  font-bold text-center">Frequently Asked  Questions
      </h1>
      <div className="grid grid-rows-3 gap-2 h-1/3 text-wrap grid-cols-4">
        <div className="col-span-4 md:col-span-2 lg:col-span-2  faqcard ">
        <h4 className="font-extrabold text-xl">How long does shipping take?</h4>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. In vel metus et elit gravida.
        </div>
        <div className="col-span-4 md:col-span-2 xl:col-span-1 faqcard">
          <h4 className="font-extrabold">Can I track my order?</h4>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. In vel metus et elit gravida.
        </div>
        <div className="col-span-4 xl:col-span-1 faqcard">
        <h4 className="font-extrabold text-xl">What payment methods do you accept?</h4>
        <p className="line-clamp-3">Proin a lorem libero. Integer aliquet consectetur libero ac volutpat. Nulla in dictum purus. Suspendisse suscipit malesuada libero, vel tristique enim elementum vel.</p>  
</div>
<div className="col-span-4 md:col-span-2 xl:col-span-1  faqcard">
      <h4 className="font-extrabold text-xl ">What is your return policy?</h4>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. In vel metus et elit gravida.</div>
      <div className="col-span-4 md:col-span-2 xl:col-span-1 faqcard">
      <h4 className="font-extrabold text-xl">How can I contact customer support?</h4>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. In vel metus et elit gravida.</div>
      <div className="col-span-4 xl:col-span-2 faqcard">
      <h4 className="font-extrabold text-xl">Are there any discounts or promotions available?</h4>
      Proin a lorem libero. Integer aliquet consectetur libero ac volutpat. Nulla in dictum purus. Suspendisse suscipit malesuada libero, vel tristique enim elementum vel.</div>
      <div className="col-span-4 xl:col-span-2  faqcard">
      <h4 className="font-extrabold text-xl">Are my personal and payment details secure?</h4>
      Proin a lorem libero. Integer aliquet consectetur libero ac volutpat. Nulla in dictum purus. Suspendisse suscipit malesuada libero, vel tristique enim elementum vel. 
      </div>
      <div className="col-span-4 md:col-span-2 xl:col-span-1 faqcard">
      <h4 className="font-extrabold text-xl">Do you offer international shipping?</h4>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. In vel metus et elit gravida.
      </div>
      <div className="col-span-4 md:col-span-2 xl:col-span-1 faqcard">
      <h4 className="font-extrabold text-xl">How can I change or cancel my order?</h4>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. In vel metus et elit gravida.
      </div>




      </div>
      
      <Question/>

      <Newsletter/>
    </main >
    </HelmetProvider>
 
  )
}

export default Faq
