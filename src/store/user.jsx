
// import {create} from "zustand";
// import {persist} from "zustand/middleware";

// let store = (set) => ({
//     isLoggedIn : false,
//     setUserState: (isLoggedIn) => set(()=>({isLoggedIn})),
// });

// store = persist(store, {name : "user-store"});

// let useStore = create(store);
// export default useStore;

import { create } from "zustand";
import { persist } from "zustand/middleware";

// Combine create and persist in one go
const useStore = create(
  persist(
    (set) => ({
      isLoggedIn: false,
      // explicitly naming the state argument (even if unused) is better practice
      setUserState: (isLoggedIn) => set(() => ({ isLoggedIn })),
    }),
    { name: "user-store" }
  )
);

export default useStore;