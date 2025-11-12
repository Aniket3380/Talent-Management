import { useState } from "react";
import { fetchTalents } from "../Redux/Action";
import { connect } from "react-redux";

function SkillFilter({fetchTalents})
{
    const[skill,setSkill]=useState("")

    const handleSubmit=(e)=>{
     e.preventDefault()
     fetchTalents(skill.trim())

    }
    const handleClear=()=>{
    setSkill("")
    fetchTalents("")
    }
    return(
        <form onSubmit={handleSubmit} className="max-w-md mx-auto flex items-center justify-center gap-3 mt-4 mb-6">
            <input className="flex-1 px-3 py-2 border border-gray-300 rounded-lg  focus:ring-2 focus:ring-indigo-200 outline-none" placeholder="filter by skill" value={skill} onChange={(e)=>setSkill(e.target.value)}/>
            <button className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition" type="submit">Filter</button>
            <button  className="bg-gray-300 text-gray-800 px-4 py-2 rounded-lg hover:bg-gray-400 transition"type="button" onClick={handleClear}>Clear</button>
        </form>
    )
}

const mapDispatchToProps={fetchTalents}
export default connect (null,mapDispatchToProps)(SkillFilter);