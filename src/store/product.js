import { create } from 'zustand'

const useStore = create((set) => ({
  products: [],
  removeAllBears: () => set({ products: 0 }),
  addToCard: (newBears) => set({products:newBears}),
}))
export default useStore;
