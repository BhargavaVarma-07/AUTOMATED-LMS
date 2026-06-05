import GoalForm from "../components/GoalForm";
function CreateGoal({goals,setGoals}){
    return(
        <div className="p-5">
            <h1 className="text-2xl font-bold mb-4 ml-5">
                Create New Goal
            </h1>
            <GoalForm
                goals={goals}
                setGoals={setGoals}
            />

        </div>
        
    );
}
export default CreateGoal