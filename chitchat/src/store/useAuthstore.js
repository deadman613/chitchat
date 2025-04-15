import axios from "axios";
import {create} from "zustand";
import { axiosInstance } from "../lib/axios";


export const useAuthStore = create((set)=>({
    authUser:null,
    isSignup:false,
    islogginup:false,
    isupdatingProfile:false,

    isCheckingAuth:true,

    checkAuth : async ()=>
        {
            try {
                const res = axiosInstance.get("/auth/check")
            } catch (error) {
                console.log('error in checkAuth '.error);
                set({authUser:null})
            }
            finally{
                set({isCheckingAuth:false})
            }
        } 

        

     
}))