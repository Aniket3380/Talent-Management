import { connect } from "react-redux";
import { fetchTalents } from "../Redux/Action";
import { useEffect } from "react";

function TalentList({talents,loading,error,fetchTalents})
{

    useEffect(()=>{
        fetchTalents()
    },[fetchTalents])


    const valideFilter=talents.filter((item)=>item && item.name && item.email)
    return(
        <div className="w-full max-w-5xl bg-white rounded-2xl shadow-md p-8 my-8 border border-gray-200">
      <h3 className="text-2xl font-semibold text-gray-800 mb-4 text-center">
        Talent List
      </h3>

      {loading && <div className="text-blue-600 text-center">Loading...</div>}
      {error && <div className="text-red-600 text-center">{error}</div>}
      {!loading && valideFilter.length === 0 && (
        <div className="text-gray-500 text-center">No data found</div>
      )}

      <ul className="divide-y divide-gray-200">
        {valideFilter.map((item) => (
          <li className="py-3" key={item._id}>
            <div className="font-semibold text-gray-800">
              {item.name} - {item.email}
            </div>
            <div className="text-sm text-gray-600">
              Experience: {item.experience} yrs
            </div>
            <div className="text-sm text-gray-600">
              {item.skills?.length ? item.skills.join(", ") : "-"}
            </div>
          </li>
        ))}
      </ul>
    </div>
    )
}
const mapStateToProps=(state)=>({
  talents:state.talents,
  loading:state.loading,
  error:state.error
})

const mapDispatchToProps={fetchTalents}
export default connect(mapStateToProps,mapDispatchToProps)(TalentList);