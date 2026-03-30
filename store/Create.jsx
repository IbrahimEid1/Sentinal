import { create } from "zustand";

const Counter = create((set)=>{
    return {
        count : 0 , 
        inCreament  :()=> set(()=>({cout : state.count + 1}))
    }
})