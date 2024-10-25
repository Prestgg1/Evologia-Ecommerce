import { create } from 'zustand'

const useStore = create((set) => ({
  products: [],
  categories: [
    {
      id:1,
      name:"beauty",
      title:"beauty",
      url:'/beauty',
      img:'https://cdn.dummyjson.com/products/images/beauty/Essence%20Mascara%20Lash%20Princess/thumbnail.png'
    },
    {
      id:2,
      name:"laptops",
      title:"laptops",
      url:'/laptops',
      img:'https://cdn.dummyjson.com/products/images/laptops/Apple%20MacBook%20Pro%2014%20Inch%20Space%20Grey/thumbnail.png'
    },
    {
      id:3,
      name:"motorcycle",
      title:"motorcycle",
      url:'/motorcycle',
      img:'https://cdn.dummyjson.com/products/images/motorcycle/MotoGP%20CI.H1/thumbnail.png'
    },
    {
      id:4,
      name:'mobile accessories',
      title:"mobile accessories",
      url:'/mobile-accessories',
      img:'https://cdn.dummyjson.com/products/images/mobile-accessories/Apple%20Airpods/thumbnail.png'
    }
  ],
  removeAllBears: () => set({ products: 0 }),
  addToCard: (newBears) => set({products:newBears}),
}))
export default useStore;
