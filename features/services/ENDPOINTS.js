const ENDPOINTS={
    BUSINESS:{
        ADD:"/business/add",
         GET:({businessCategory,page})=>`/business/get?businessCategory=${businessCategory}&page=${page}`
    },
    SKILLEDPERSON:{
        ADD:"/skilledperson/add",
         GET:({professionalCategory,page})=>`/skilledperson/get?professionalCategory=${professionalCategory}&page=${page}`
       
    }

}
export default ENDPOINTS