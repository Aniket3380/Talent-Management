import SkillFilter from "./Component/SkillFilter";
import TalentForm from "./Component/TalentForm";
import TalentList from "./Component/TalentList";


function App() {
  return (
   <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-start p-4">
   <TalentForm/>
   <SkillFilter/>
 <TalentList/>
   </div>
  );
}

export default App;
