import axios from "axios"

const API_BASE=process.env.REACT_APP_API_BASE || "http://localhost:5000/api/talents";

export const fetchTalents=(skill="")=>{
   return async(dispatch)=>{
        dispatch({type:"FETCH_TALENT_REQUEST"})
        try{
            const url=skill ?`${API_BASE}?skill=${encodeURIComponent(skill)}`:API_BASE;
            const res=await axios.get(url)
            dispatch({type:"FETCH_TALENT_SUCESS",payload:res.data})
        }
        catch(err)
        {
            dispatch({type:"FETCH_TALENT_FAILURE", payload:err.response?.data?.message || err.message})
        }
    }
}

export const addTalent=(talentData)=>{
   return async (dispatch)=>{
    dispatch({type:"ADD_TALENT_REQUEST"})
    try{
        const res=await axios.post(API_BASE,talentData)
        dispatch({type:"ADD_TALENT_SUCESS",payload:res.data})
    }
    catch(err)
    {
        dispatch({type:"ADD_TALENT_FAILURE",payload:err.response?.data?.message || err.message})
    }
    }
}

