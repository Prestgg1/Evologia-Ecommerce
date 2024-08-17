import { createContext} from "react";
const Data = createContext({categories:null})
export const categories = [
  {
    id:1,
    name:"electronics",
    title:"electronics",
    url:'/electronics',
    img:'https://fakestoreapi.com/img/81QpkIctqPL._AC_SX679_.jpg'
  },
  {
    id:2,
    name:"jewelery",
    title:"jewelery",
    url:'/jewelery',
    img:'https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg'
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
]
export const team = [
  {
    id:1,
    name:'Edward Norton',
    skill:'Creative Director',
    img:'https://framerusercontent.com/images/xN3ieiEzExlSvJrumKomjzfwCQA.jpg'
  },
  {
    id:2,
    name:'Sandra Bullok',
    skill:'Sales Manager',
    img:'https://framerusercontent.com/images/x5pE1vqkHD6sS9RKChKD1MRTdkE.webp'
  },
  {
    id:3,
    name:'Samuel Jackson',
    skill:'CEO / Founder',
    img:'https://framerusercontent.com/images/gwRzcXdWp0JfppaKxtRgh3ZNy1o.jpg'
  }
]
export default Data;
