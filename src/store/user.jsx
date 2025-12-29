
import {create} from "zustand";
import {persist} from "zustand/middleware";

const store = (set) => ({
    isLoggedIn : false,
    setUserState: (isLoggedIn) => set(()=>({isLoggedIn}))
});

store = persist(store,{name : "user-store"});

const useStore = create(store);
export default useStore;