import axios from "axios";
import { create } from "zustand";
import { axiosInstance } from "../lib/axios";
import Signup from "../pages/Signup";
import toast from "react-hot-toast";


export const useAuthStore = create((set) => ({
    authUser: null,
    isSignup: false,
    isloggingIN: false,
    isupdatingProfile: false,

    isCheckingAuth: true,

    checkAuth: async () => {
        try {
            const res = axiosInstance.get("/auth/check");
            set({ authUser: res.data });

        } catch (error) {
            console.log('error in checkAuth '.error);
            set({ authUser: null })
        }
        finally {
            set({ isCheckingAuth: false })
        }
    },

    Signup: async (data) => {
        set({ isSignup: true });
        try {
            const res = await axiosInstance.post("/auth/signup", data);
            set({ authUser: res.data })
            toast.success("Account Created succesfully")
            // set({ isSignup: false });
            // return true;

        } catch (error) {
            toast.error(error.response.data.message)
            
            

        } finally {
            set({ isSignup: false });
        }
    },

        login: async (data) => {
            set({ isloggingIN: true });
            try {
              const res = await axiosInstance.post("/auth/login", data);
              set({ authUser: res.data });
              toast.success("Logged in successfully");
        
              get().connectSocket();
            } catch (error) {
              toast.error(error.response.data.message);
            } finally {
              set({ isloggingIN: false });
            }
          },

    logout: async ()=>
    {
        try {
            await  axiosInstance.post("/auth/logout");
            set({authUser: null});
            toast.success("Logged out succesfully")
            
        } catch (error) {
            toast.error("Something went Wrong in useAuthstore");

            
        }
    },

    updateProfile: async (data)=>
    {

    }




}))