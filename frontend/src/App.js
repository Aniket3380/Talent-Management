import SkillFilter from "./Component/SkillFilter";
import TalentForm from "./Component/TalentForm";
import TalentList from "./Component/TalentList";


function App() {
  

  return (
    <div className="min-h-screen flex flex-col items-center justify-start p-6 
      bg-gradient-to-br from-blue-100 via-indigo-100 to-purple-200">
      
      {/* Main Header */}
      <div className="text-center mt-8 mb-6">
        <h1 className="text-5xl font-extrabold text-indigo-800 drop-shadow-lg">
          Talent Management
        </h1>
        <p className="text-lg text-gray-700 mt-2 font-medium tracking-wide">
          Manage and filter your talent pool efficiently
        </p>
      </div>

      {/* Content Cards */}
      <div className="w-full max-w-4xl flex flex-col items-center gap-6">
        <TalentForm />
        <SkillFilter />
        <TalentList />
      </div>

      {/* Footer (optional aesthetic touch) */}
      <footer className="mt-10 text-gray-600 text-sm">
        © {new Date().getFullYear()} Talent Management Dashboard
      </footer>
    </div>
  );
}



export default App;
