function GoalCard(props){
    return(
        <div className="bg-white shadow-md rounded-xl p-5 mt-4 ">

            <h2 className="text-xl font-bold mb-3">
                {props.title}
            </h2>
            <p className="mb-2">
                Progress:{props.progress}%
            </p>
            <div className="w-full bg-gray-300 rounded-full  h-4 mb-3">
                <div className="bg-green-500 h-4 rounded-full"
                     style={{width: `${props.progress}%` } }>

                </div>

            </div>
            <p>Level : {props.level}</p>
            <p>Deadline : {props.deadline}</p>
            <p>Daily Hours : {props.dailyhours}</p>
            <p>
                Days Left: {props.daysLeft}  
            </p>

        </div>
    )
}
export default GoalCard