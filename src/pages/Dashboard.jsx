import GCard from '../components/GoalCard'
//import goals from '../data/mockGoal'
function Dashboard({goals/*children*/}){
    console.log("dashboard rendered");
    return(
        <div className="p-10 flex-1">
            <h1 className="text-3xl font-bold">
                Dashboard
            </h1>
            {/* {children} */}
            
            <div className="flex gap-6 flex-wrap">
                {goals.map((x)=>(
                    <GCard
                        key={x.id}
                        title={x.title}
                        progress={x.progress}
                        
                        level={x.level}
                        dailyhours={x.dailyhours}
                        deadline={x.deadline}
                        daysLeft={x.daysLeft}
                    />

                )) }
            </div>

        </div>
    )
}
export default Dashboard