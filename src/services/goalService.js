export const createGoal=(goalData)=>{
    console.log("Creating Goal:",goalData);
    return{
        id:Date.now(),
        ...goalData,
        progress:0
    };
};