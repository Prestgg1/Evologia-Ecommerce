
const Faq = () => {
  return (
    <main>
      <h1 className="text-[68px] font-bold text-center">Frequently Asked  Questions
      </h1>
      <div className="grid grid-rows-3 gap-2 text-wrap grid-cols-4">
        <div className="col-span-2 faqcard ">
          What payment methods do you accept?
          Proin a lorem libero. Integer aliquet consectetur libero ac volutpat. Nulla in dictum purus. Suspendisse suscipit malesuada libero, vel tristique enim elementum vel.
        </div>
        <div className="col-soan-1 faqcard">
          How long does shipping take?
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. In vel metus et elit gravida.
        </div>
        <div className="col-span-1 faqcard">Can I track my order?
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. In vel metus et elit gravida.</div>
      </div>
    </main >
  )
}

export default Faq
