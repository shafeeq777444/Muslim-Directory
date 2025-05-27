import { useMutation, useQuery } from "@tanstack/react-query"
import { addSkilledPeople, getProfessionalsDetails } from "../services/apis/skilledPeopleApis"

export const useAddSkilledPeople=()=>{
   return useMutation({
    mutationFn:addSkilledPeople
   })
}

export const useGetSkilledPeople=({professionalCategory,page})=>{
   return useQuery({
    queryKey:['proffesionalsDetails',professionalCategory,page],
       queryFn:()=>getProfessionalsDetails({professionalCategory,page}),
   })
}