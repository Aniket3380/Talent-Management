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
         <div className="w-full max-w-5xl bg-white rounded-2xl shadow-md p-6 mt-6">
      {/* Heading */}
      <h2 className="text-lg font-semibold text-gray-800 mb-3 flex items-center gap-2">
        🔍 Filter by Skill
      </h2>

      {/* Filter form */}
      <form
        onSubmit={handleSubmit}
        className="flex flex-col md:flex-row items-center gap-3"
      >
        <input
          type="text"
          placeholder="e.g. React, Node.js, Python"
          value={skill}
          onChange={(e) => setSkill(e.target.value)}
          className="flex-1 w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-300 outline-none"
        />

        <div className="flex gap-2 w-full md:w-auto justify-end">
          <button
            type="submit"
            className="bg-gradient-to-r from-indigo-600 to-blue-500 text-white px-5 py-2 rounded-lg font-medium shadow hover:from-indigo-700 hover:to-blue-600 transition w-full md:w-auto"
          >
            Apply
          </button>
          <button
            type="button"
            onClick={handleClear}
            className="bg-gray-200 text-gray-800 px-5 py-2 rounded-lg font-medium hover:bg-gray-300 transition w-full md:w-auto"
          >
            Clear
          </button>
        </div>
      </form>
    </div>
    )
}

const mapDispatchToProps={fetchTalents}
export default connect (null,mapDispatchToProps)(SkillFilter);