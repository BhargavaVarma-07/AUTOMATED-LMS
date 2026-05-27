function GoalCard(props){
    return(
        <div className="bg-gray-200 shadow-md rounded-xl p-5 mb-5 w-80 mt-3 hover:scale-105 transition">
            <h1 className="text-2xl font-bold">
                {props.title}
            </h1>
            <p className="mt-3">
                Progress:{props.progress}%
            </p>
            <p>
                Days Left:{props.daysLeft}  
            </p>

        </div>
    )
}
export default GoalCard