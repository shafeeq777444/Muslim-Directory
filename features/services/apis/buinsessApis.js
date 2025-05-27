import axiosInstance from "@/features/axiosInstance"
import ENDPOINTS from "../ENDPOINTS"

export const addBuisness=async(data)=>{
   const response=await axiosInstance.post(ENDPOINTS.BUSINESS.ADD,data)
   return response.data

}
export const getBusinessDetails=async({businessCategory,page})=>{
      const response=await axiosInstance.get(ENDPOINTS.BUSINESS.GET({businessCategory,page}))
      console.log(response.data,"check")
      return response.data

}