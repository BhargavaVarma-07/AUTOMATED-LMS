import { useState } from "react";
function GoalForm({goals,setGoals}){
    const [formdata,setFormdata]=useState({
        title:"",
        level:"",
        deadline:"",
        dailyhours:""
    });
    const handleSubmit=(e)=>{
        e.preventDefault();
        const newGoal={
            id:Date.now(),
            title:formdata.title,
            level:formdata.level,
            progress:0,
            deadline:formdata.deadline,
            daysLeft: Math.ceil((new Date(formdata.deadline)-Date.now())/(1000*60*60*24)),
            dailyhours:formdata.dailyhours,
        }
        setGoals([...goals,newGoal]);
        setFormdata({
             title:"",
             level:"",
            deadline:"",
            dailyhours:""
    })
    };
    return(
        <div className="">
        <form onSubmit={handleSubmit} className="p-5 ">
            <input
                type="text"
                placeholder="Enter Goal"
                value={formdata.title}
                onChange={(e)=>{setFormdata({...formdata,title:e.target.value})}}
                className="border p-2 mr-2"
            />
            <input
                type="text"
                placeholder="Enter Level"
                value={formdata.level}
                onChange={(e)=>{setFormdata({...formdata,level:e.target.value})}}
                className="border p-2 mr-2"
            />
            <input
                type="date"
                placeholder="Enter Deadline"
                value={formdata.deadline}
                onChange={(e)=>{setFormdata({...formdata,deadline:e.target.value})}}
                className="border p-2 mr-2"
        
            />
            <input
                type="text"
                placeholder="Enter Daily hours"
                value={formdata.dailyhours}
                onChange={(e)=>{setFormdata({...formdata,dailyhours:e.target.value})}}
                className="border p-2 mr-2"
        
            />

            <button
                type="submit"
                className="bg-blue-500 text-white px-4 py-2"

            >
                Add Goal
            </button>
        </form>
        </div>
    );
}
export default GoalForm;