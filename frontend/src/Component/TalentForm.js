import { useState } from "react"
import { addTalent } from "../Redux/Action"
import {connect} from "react-redux"

function TalentForm({addTalent})
{
    const[formData,setFormData]=useState({ name:"",email:"",skills:"",experience:""})

    const handleChange=(e)=>{
       setFormData({...formData,[e.target.name]:e.target.value})
    }

      const isValidEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

    const handleSubmit=(e)=>{
      e.preventDefault()
      if(!formData.name.trim() || !formData.email.trim())
      {
        alert("name and email required")
        return
      }

      if (!isValidEmail(formData.email.trim())) {
  alert("Please enter a valid email address.");
  return;
}
      const payload={
        name:formData.name.trim(),
        email:formData.email.trim(),
        skills:formData.skills.split(",").map(s=>s.trim()).filter(Boolean),
        experience:Number(formData.experience) || 0
      }
      addTalent(payload);
      alert("sucessfully added Talent")
      setFormData({name:"",email:"",skills:"",experience:""})
      
    }

  
    return(

      <div className="w-full max-w-5xl bg-white rounded-2xl shadow-md p-8 mt-3">
      <h2 className="text-2xl font-bold text-center text-gray-800 mb-2">
        ✨ Add New Talent
      </h2>
        
            <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                
                <div>
          <label className="block text-gray-700 text-sm font-medium mb-1">
            Name *
          </label>
          <input
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-300 outline-none"
            name="name"
            placeholder="Jane Doe"
            value={formData.name}
            onChange={handleChange}
          />
        </div>
                  <div>
          <label className="block text-gray-700 text-sm font-medium mb-1">
            Email *
          </label>
          <input
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-300 outline-none"
            name="email"
            placeholder="jane@example.com"
            value={formData.email}
            onChange={handleChange}
          />
        </div>

                     <div>
          <label className="block text-gray-700 text-sm font-medium mb-1">
            Skills (comma separated)
          </label>
          <input
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-300 outline-none"
            name="skills"
            placeholder="React, Node.js, MongoDB"
            value={formData.skills}
            onChange={handleChange}
          />
        </div>
                     <div>
          <label className="block text-gray-700 text-sm font-medium mb-1">
            Experience (years)
          </label>
          <input
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-300 outline-none"
            name="experience"
            placeholder="2"
            value={formData.experience}
            onChange={handleChange}
          />
        </div>
          <div className="md:col-span-2 flex justify-center mt-4">
          <button
            type="submit"
            className="bg-gradient-to-r from-indigo-600 to-blue-500 text-white font-semibold px-6 py-2 rounded-lg shadow hover:from-indigo-700 hover:to-blue-600 transition"
          >
            Add Talent
          </button>
        </div>
        </form>
            </div>
        
    )


}

const mapDispatchToProps={addTalent}
export default connect(null,mapDispatchToProps)(TalentForm);