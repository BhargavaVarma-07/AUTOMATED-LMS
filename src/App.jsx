import {BrowserRouter,Routes,Route } from "react-router-dom";
import Sidebar from './components/Sidebar';
import Dashboard from './pages/Dashboard';
import Navbar from './components/Navbar';
import GoalForm from './components/GoalForm';
import Login from "./pages/Login";
import {useState} from "react";
import Progress from "./pages/Progress";
import CreateGoal from "./pages/CreateGoal";
function App() {
  const [isLoggedIn,setIsLoggedIn]=useState(false);
  const [goals,setGoals]=useState([ {id:1,title:"learn react",progress:40,level:"beginner",deadline:"2026-06-06",dailyhours:2,daysLeft:30}]);
  return (
    // <div className="bg-gray-100 min-h-screen" >
    //     <Navbar title="AI Learning Dashboard" subtitle=""/>
       
    //      < div className="flex">
    //         <Sidebar/>
            
    //         {/* <GoalForm/> */}
            
    //         <Dashboard goals={goal}>
    //           <GoalForm goals={goal} setGoals={setGoals}/>
    //         </Dashboard>
            
    //     </div>
    // </div>
    <BrowserRouter>
      <Navbar title="Learning Dashboard"/>
      <div className="flex">
        <Sidebar/>
        <Routes>
          <Route
            path="/"
            element={
              isLoggedIn ? <Dashboard goals={goals}/>:<Login setIsLoggedIn={setIsLoggedIn}/>}
          />
          <Route
            path="/login"
            element={<Login setIsLoggedIn={setIsLoggedIn}/>}
          />
          <Route
            path="/create-goal"
            element={
              <CreateGoal
                goals={goals}
                setGoals={setGoals}
              />
            }
          />
          <Route
            path="/progress"
            element={<Progress/>}
          />
        </Routes>

      </div>
    </BrowserRouter>
  )
}

export default App
