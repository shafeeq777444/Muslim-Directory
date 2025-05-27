import axiosInstance from "@/features/axiosInstance";
import ENDPOINTS from "../ENDPOINTS";

export const addSkilledPeople = async (data) => {
    const response = await axiosInstance.post(ENDPOINTS.SKILLEDPERSON.ADD, data, {
        headers: {
            "Content-Type": "multipart/form-data",
        },
    });
    return response.data;
};
export const getProfessionalsDetails=async({professionalCategory,page})=>{
      const response=await axiosInstance.get(ENDPOINTS.SKILLEDPERSON.GET({professionalCategory,page}))
      return response.data

}