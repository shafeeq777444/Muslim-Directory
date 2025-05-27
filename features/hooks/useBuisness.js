import { useMutation, useQuery } from "@tanstack/react-query";
import { addBuisness, getBusinessDetails } from "../services/apis/buinsessApis";

export const useAddBuisnessDetail=()=>{
    return useMutation({
        mutationFn:addBuisness
    })
}

export const useGetBusinessDetails=({businessCategory,page})=>{
    return useQuery({
        queryKey:['businessDetails',businessCategory,page],
        queryFn:()=>getBusinessDetails({businessCategory,page}),
          
    })
}