import {NavLink} from 'react-router-dom';
function Sidebar(){
    return(
        <div className="bg-gray-800 text-white w-64 min-h-screen p-5">
            <h1 className="text-2xl font-bold mb-6">
                Menu
            </h1>
            <ul className="space-y-4">
                <li><NavLink to="/">Dashboard</NavLink></li>
                <li><NavLink to="/create-goal">Create Goal</NavLink></li>
                <li><NavLink to="/progress">Progress</NavLink></li>
            
            </ul>

        </div>
    )
}
export default Sidebar