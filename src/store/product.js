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
      name:"menswear",
      title:"men's clothing",
      url:'/menswear',
      img:'https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg'
    },
    {
      id:4,
      name:'womenswear',
      title:"women's clothing",
      url:'/womenswear',
      img:'https://fakestoreapi.com/img/51Y5NI-I5jL._AC_UX679_.jpg'
    }
  ],
  removeAllBears: () => set({ products: 0 }),
  addToCard: (newBears) => set({products:newBears}),
}))
export default useStore;
