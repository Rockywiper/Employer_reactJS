const initializeState={
    joblist:[],
}

const EmployerReducer = (state=initializeState, action) =>{
    console.log(action.type);

    switch(action.type){
        case "GETALL" :
            console.log(action.data)
            return { joblist:action.data }

        default:
            console.log("at default "+state.joblist)
            return state;
    }
}

export default EmployerReducer