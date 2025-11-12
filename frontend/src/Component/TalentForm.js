import { useState } from "react"
import { addTalent } from "../Redux/Action"
import {connect} from "react-redux"

function TalentForm({addTalent})
{
    const[formData,setFormData]=useState({ name:"",email:"",skills:"",experience:""})

    const handleChange=(e)=>{
       setFormData({...formData,[e.target.name]:e.target.value})
    }

    const handleSubmit=(e)=>{
      e.preventDefault()
      if(!formData.name.trim() || !formData.email.trim())
      {
        alert("name and email required")
        return
      }
      const payload={
        name:formData.name.trim(),
        email:formData.email.trim(),
        skills:formData.skills.split(",").map(s=>s.trim()).filter(Boolean),
        experience:Number(formData.experience) || 0
      }
      addTalent(payload);
      setFormData({name:"",email:"",skills:"",experience:""})

    }
    return(
        
            <form onSubmit={handleSubmit} className="max-w-md mx-auto bg-white shadow-lg rounded-2xl p-6 my-6 space-y-4 border border-gray-200">
                 <h3 className="text-2xl font-semibold text-center text-gray-800 mb-4">Add Talent</h3>
                 <input  className=" w-full px-3 py-2 border border-grey-300 rounded-lg focus:ring-2 focus:ring-blue outline-none" name="name" placeholder="Name" value={formData.name} onChange={handleChange} required />
                   <input className=" w-full px-3 py-2 border border-grey-300 rounded-lg focus:ring-2 focus:ring-blue outline-none" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
                    <input className=" w-full px-3 py-2 border border-grey-300 rounded-lg focus:ring-2 focus:ring-blue outline-none" name="skills" placeholder="skills" value={formData.skills} onChange={handleChange} required />
                    <input className=" w-full px-3 py-2 border border-grey-300 rounded-lg focus:ring-2 focus:ring-blue outline-none" name="experience" placeholder="experience" value={formData.experience} onChange={handleChange} required />
                     <button className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition" type="submit">Add</button>
            </form>
        
    )


}

const mapDispatchToProps={addTalent}
export default connect(null,mapDispatchToProps)(TalentForm);